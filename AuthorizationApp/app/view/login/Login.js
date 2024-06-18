Ext.define('AuthorizationApp.view.login.Login', {
	extend: 'Ext.window.Window',
	xtype: 'login',
	controller: 'login',
	bodyPadding: 10,
	title: 'Login Window',
	closable: false,
	autoShow: true,
	items: {
		xtype: 'form',
		reference: 'form',
		items: [{
			value: 'qwe@qwe.qwe',
			xtype: 'textfield',
			name: 'email',
			fieldLabel: 'Е-mail',
			vtype: 'email',
			id: 'email',
			allowBlank: false
		}, {
			value: 'QWEqwe228',
			xtype: 'textfield',
			name: 'password',
			inputType: 'password',
			fieldLabel: 'Password',
			vtype: 'password',
			id: 'password',
			allowBlank: false
		}, {
			layout: {
				type: 'hbox',
				pack: 'start',
				align: 'stretch'
			},
			items: [
				{
					xtype: 'button',
					text: 'Login',
					formBind: true,
					margin: '0 10 0 0',
					listeners: {
						click: 'onLoginClick'
					}
				},
				{
					xtype: 'button',
					text: 'Register',
					formBind: true,
					margin: '0 10 0 0',
					listeners: {
						click: 'onRegisterClick'
					}
				},
				{
					xtype: 'button',
					text: 'Log in without registration',
					listeners: {
						click: 'onInClick'
					}
				}
			]
		}]
	}
});