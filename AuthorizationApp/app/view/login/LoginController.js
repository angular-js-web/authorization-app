Ext.define('AuthorizationApp.view.login.LoginController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.login',
	errorMsg: function (message) {
		this.getView().setLoading(false);
		Ext.MessageBox.show({
			title: 'Registration error',
			msg: message,
			buttons: Ext.Msg.OK
		});
	},
	onInClick: function () {
		this.getView().destroy();
		localStorage.setItem('AuthorizationLoggedIn', true);
		localStorage.removeItem('isUser');
		localStorage.removeItem('idToken');
		localStorage.setItem('email', 'You are not an authorized user!');
		Ext.create({
			xtype: 'app-main'
		});
	},
	onRegisterClick: function () {
		this.getView().setLoading(true);
		const API_KEY = localStorage.getItem('API_KEY');
		const form = this.getView().items.items[0].getValues();
		const email = form.email;
		const password = form.password;
		Ext.Ajax.request({
			url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
			params: {
				returnSecureToken: true,
				email: email,
				password: password
			},
			success: (response) => {
				this.getView().destroy();
				localStorage.setItem('email', email);
				localStorage.setItem('AuthorizationLoggedIn', true);
				localStorage.setItem('idToken', Ext.decode(response.responseText).idToken);
				localStorage.setItem('isUser', true);
				Ext.create({
					xtype: 'app-main'
				});
			},
			failure: (response) => {
				this.errorMsg(JSON.parse(response.responseText).error.message);
			}
		});
	},
	onLoginClick: function () {
		this.getView().setLoading(true);
		const API_KEY = localStorage.getItem('API_KEY');
		const form = this.getView().items.items[0].getValues();
		const email = form.email;
		const password = form.password;
		Ext.Ajax.request({
			url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
			params: {
				returnSecureToken: true,
				email: email,
				password: password
			},
			success: (response) => {
				this.getView().destroy();
				localStorage.setItem('email', email);
				localStorage.setItem('AuthorizationLoggedIn', true);
				localStorage.setItem('idToken', Ext.decode(response.responseText).idToken);
				localStorage.setItem('isUser', true);
				Ext.create({
					xtype: 'app-main'
				});
			},
			failure: (response) => {
				this.errorMsg(JSON.parse(response.responseText).error.message);
			}
		});
	}
});