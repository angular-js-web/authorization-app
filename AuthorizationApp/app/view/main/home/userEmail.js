Ext.define('AuthorizationApp.view.main.home.userEmail', {
	extend: 'Ext.panel.Panel',
	controller: 'login-change',
	xtype: 'useremail',
	items: [
		{
			xtype: 'panel',
			reference: 'user-email',
			title: 'Your E-mail address',
			iconCls: 'x-fa fa-html5',
			width: 350,
			bodyPadding: 12
		},
		{
			xtype: 'button',
			text: 'Change E-mail',
			reference: 'button-changeEmail',
			formBind: true,
			flex: 1,
			margin: '0 20 0 10',
			listeners: {
				click: 'onConfirmChangeEmail'
			},
			disable: true
		}
	]
});
