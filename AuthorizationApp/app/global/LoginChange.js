Ext.define('AuthorizationApp.global.LoginChange', {
	extend: 'Ext.window.Window',
	xtype: 'login-change',
	controller: 'login-change',
	bodyPadding: 10,
	title: 'Login Change',
	closable: false,
	autoShow: true,
	items: {
		id: 'formNewEmail',
		xtype: 'form',
		items: [{
			xtype: 'textfield',
			name: 'newEmail',
			fieldLabel: 'New e-mail',
			vtype: 'email',
			id: 'newEmail',
			allowBlank: false
		},
		{
			layout: {
				type: 'hbox',
				pack: 'start',
				align: 'stretch'
			},
			items: [
				{
					xtype: 'button',
					text: 'Ok',
					formBind: true,
					flex: 1,
					margin: '0 0 0 10',
					width: 100,
					height: 50,
					listeners: {
						click: 'onLoginChangeClick'
					}
				},
				{
					xtype: 'button',
					text: 'Cancel',
					flex: 2,
					margin: '0 0 0 60',
					width: 100,
					height: 50,
					listeners: {
						click: 'onLoginCancelClick'
					}
				}
			]
		}]
	}
});