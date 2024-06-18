Ext.define('AuthorizationApp.view.main.Main', {
	extend: 'Ext.tab.Panel',
	xtype: 'app-main',
	controller: 'main',
	viewModel: 'main',
	plugins: 'viewport',
	ui: 'navigation',
	tabBarHeaderPosition: 1,
	titleRotation: 0,
	tabRotation: 0,
	header: {
		layout: {
			align: 'stretchmax'
		},
		title: {
			bind: {
				text: '{name}'
			},
			flex: 0
		},
		iconCls: 'fa-th-list',
		items: [
			{
				xtype: 'button',
				id: 'button-Login',
				text: 'Login',
				margin: '30 30 30 30',
				style: 'background:rgb(95,126,159)',
				handler: 'onClickLogin'
			},
			{
				xtype: 'button',
				id: 'button-Logout',
				text: 'Logout',
				margin: '0 30 30 30',
				style: 'background:rgb(95,126,159)',
				handler: 'onClickLogout'
			}
		]
	},
	tabBar: {
		flex: 1,
		layout: {
			align: 'stretch',
			overflowHandler: 'none'
		}
	},
	responsiveConfig: {
		tall: {
			headerPosition: 'top'
		},
		wide: {
			headerPosition: 'left'
		}
	},
	defaults: {
		bodyPadding: 20,
		tabConfig: {
			plugins: 'responsive',
			responsiveConfig: {
				wide: {
					iconAlign: 'left',
					textAlign: 'left'
				},
				tall: {
					iconAlign: 'top',
					textAlign: 'center',
					width: 120
				}
			}
		}
	},
	items: [
		{
			title: 'Home',
			iconCls: 'fa-home',
			items: [
				{
					xtype: 'useremail'
				}
			]
		},
		{
			title: 'Users',
			iconCls: 'fa-user',
			items: [
				{
					xtype: 'usersTable'
				}
			]
		},
		{
			title: 'Groups',
			iconCls: 'fa-users',
			bind: {
				html: '{loremIpsum}'
			}
		},
		{
			title: 'Settings',
			iconCls: 'fa-cog',
			bind: {
				html: '{loremIpsum}'
			}
		}
	]
});