Ext.define('AuthorizationApp.view.main.MainController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.main',
	listen: {
		controller: {
			'userscontroller': {
				destroyMain: 'destroyMain'
			},
			'login-change': {
				destroyMain: 'destroyMain'
			}
		}
	},
	init: function () {
		if (localStorage.getItem('isUser')) {
			this.fireEvent('disBut', false);
		} else {
			this.fireEvent('disBut', true);
		}
		Ext.Ajax.request({
			url: 'https://dbauthorization-default-rtdb.firebaseio.com/user.json',
			method: 'GET',
			success: function (response) {
				Ext.getStore('storeUser').add(Object.values(JSON.parse(response.responseText)));
			}
		});
	},
	destroyMain: function () {
		this.getView().destroy();
		Ext.create({
			xtype: 'login'
		});
	},
	onClickLogin: function () {
		if (localStorage.getItem('isUser')) {
			Ext.MessageBox.show({
				title: 'Dear User',
				msg: 'You are already registered!',
				buttons: Ext.Msg.OK
			});
		} else {
			this.getView().destroy();
			localStorage.removeItem('AuthorizationLoggedIn');
			localStorage.removeItem('idToken');
			localStorage.removeItem('isUser');
			Ext.create({
				xtype: 'login'
			});
		}
	},
	onClickLogout: function () {
		if (localStorage.getItem('isUser') === 'true') {
			this.getView().destroy();
			localStorage.removeItem('AuthorizationLoggedIn');
			localStorage.removeItem('idToken');
			localStorage.removeItem('isUser');
			localStorage.removeItem('email');
			Ext.create({
				xtype: 'login'
			});
		} else {
			Ext.MessageBox.show({
				title: 'Dear User',
				msg: 'You are not registered',
				buttons: Ext.Msg.OK
			});
		}
	}
});