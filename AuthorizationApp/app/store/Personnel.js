Ext.define('AuthorizationApp.store.Personnel', {
	extend: 'Ext.data.Store',
	alias: 'store.personnel',
	model: 'AuthorizationApp.model.Personnel',
	storeId: 'storeUser',
	proxy: {
		type: 'memory',
		reader: {
			type: 'json',
			rootProperty: 'items'
		}
	}
});