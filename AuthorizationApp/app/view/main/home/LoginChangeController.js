Ext.define('AuthorizationApp.view.main.home.LoginChangeController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.login-change',
	init: function () {
		this.lookupReference('user-email').setData(localStorage.getItem('email'));
	},
	onConfirmChangeEmail: function () {
		if (localStorage.getItem('isUser')) {
			Ext.Msg.show({
				title: 'Dear User',
				message: 'Do you want to change your e-mail?',
				prompt: {
					xtype: 'textareafield'
				},
				buttons: Ext.MessageBox.OKCANCEL,
				fn: (buttonId, value) => {
					if (buttonId === 'ok') {
						// Запрос на изменение e-mail
						this.onLoginChangeClick(value);
					}
				}
			});
		} else {
			Ext.Msg.show({
				title: 'Error',
				message: 'You are not an authorized user!',
				buttons: Ext.MessageBox.OK
			});
		}
	},
	onLoginChangeClick: function (email) {
		const API_KEY = localStorage.getItem('API_KEY');
		const idToken = localStorage.getItem('idToken');
		Ext.Ajax.request({
			url: `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
			params: {
				idToken: idToken,
				email: email,
				returnSecureToken: true
			},
			success: () => {
				localStorage.setItem('email', email);
				this.lookupReference('user-email').setData(localStorage.getItem('email'));
			},
			failure: (response) => {
				const msg = JSON.parse(response.responseText).error.message;
				Ext.MessageBox.show({
					title: 'Error',
					msg: msg,
					buttons: Ext.Msg.OKCANCEL,
					fn: (buttonId) => {
						if (buttonId === 'ok') {
							if (msg === 'CREDENTIAL_TOO_OLD_LOGIN_AGAIN') {
								this.fireEvent('destroyMain');
								localStorage.removeItem('AuthorizationLoggedIn');
								localStorage.removeItem('idToken');
								localStorage.removeItem('isUser');
							}
						}
					}
				});
			}
		});
	}
});