Ext.define('AuthorizationApp.Application', {
	extend: 'Ext.app.Application',
	name: 'AuthorizationApp',
	launch: function () {
		Ext.create({
			xtype: localStorage.getItem('AuthorizationLoggedIn') ? 'app-main' : 'login'
		});
		Ext.create('Ext.data.Store', {
			storeId: 'customerStoreId',
			fields: [
				{ name: 'id', type: 'int' },
				{ name: 'name', type: 'string' },
				{ name: 'phone', type: 'string' },
				{ name: 'address', type: 'string' }
			]
		});
	},
	init: function () {
		Ext.apply(Ext.form.field.VTypes, {
			password: function (val) {
				return /((?=(.*\d))(?=(.*[a-zа-я]))(?=(.*[A-ZА-Я]))).{6,}/.test(val);
			},
			passwordText: `The password must contain at least one digit,
				capital and uppercase letter. Minimum password length: 6`
		});
		localStorage.setItem('API_KEY', 'AIzaSyChksZ3N2CP4iLlEwpJW1llKttZNOYyljA');
	},
	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});