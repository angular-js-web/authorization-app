Ext.define('AuthorizationApp.view.main.users.UsersController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.userscontroller',
	inputResolve: function () {
		if (this.lookupReference('nameId').getValue() !== '' && this.lookupReference('addressId').getValue() !== ''
			&& this.lookupReference('phoneId').getValue() !== '') {
			this.lookupReference('buttonAddId').setDisabled(false);
		} else {
			this.lookupReference('buttonAddId').setDisabled(true);
		}
	},
	addUser: function () {
		const user = {
			name: this.lookupReference('nameId').getValue(),
			address: this.lookupReference('addressId').getValue(),
			phone: this.lookupReference('phoneId').getValue()
		};
		Ext.Ajax.request({
			url: `https://dbauthorization-default-rtdb.firebaseio.com/user.json?auth=
				${localStorage.getItem('idToken')}`,
			method: 'POST',
			params: JSON.stringify(user),
			success: () => {
				Ext.getStore('storeUser').add(user);
				this.lookupReference('nameId').reset();
				this.lookupReference('addressId').reset();
				this.lookupReference('phoneId').reset();
			},
			failure: () => {
				Ext.MessageBox.show({
					title: 'Dear User',
					msg: localStorage.getItem('isUser')
						? 'Your session is over. To add a user, you need to re-login to the system'
						: 'To have access to adding users, you need to log in to the system',
					buttons: Ext.MessageBox.OKCANCEL,
					fn: (buttonId) => {
						if (buttonId === 'ok') {
							this.fireEvent('destroyMain');
							localStorage.removeItem('AuthorizationLoggedIn');
							localStorage.removeItem('idToken');
							localStorage.removeItem('isUser');
						}
					}
				});
			}
		});
	}
});