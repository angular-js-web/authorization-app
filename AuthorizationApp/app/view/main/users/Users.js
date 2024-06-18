Ext.define('AuthorizationApp.view.main.users.Users', {
	extend: 'Ext.grid.Panel',
	xtype: 'usersTable',
	controller: 'userscontroller',
	id: 'gridUser',
	requires: [
		'AuthorizationApp.store.Personnel'
	],
	title: 'Personnel',
	store: {
		type: 'personnel'
	},
	columns: [
		{ text: 'Name', dataIndex: 'name' },
		{ text: 'Address', dataIndex: 'address', flex: 1 },
		{ text: 'Phone', dataIndex: 'phone', flex: 1 }
	],
	tbar: [
		{
			xtype: 'textfield',
			reference: 'nameId',
			emptyText: 'Name',
			allowBlank: false,
			listeners: {
				change: 'inputResolve'
			}
		},
		{
			xtype: 'textfield',
			reference: 'addressId',
			emptyText: 'Address',
			allowBlank: false,
			listeners: {
				change: 'inputResolve'
			}
		},
		{
			xtype: 'textfield',
			reference: 'phoneId',
			emptyText: 'Phone',
			allowBlank: false,
			listeners: {
				change: 'inputResolve'
			}
		},
		{
			xtype: 'button',
			reference: 'buttonAddId',
			text: 'Add',
			listeners: {
				click: 'addUser'
			},
			disabled: true
		}]
});
