Ext.define('PansAndCompany.view.Main', {
				extend: 'Ext.TabPanel',
				xtype: 'main',
				config: {
								//tabBarPosition : 'bottom',
								items : [{
												title : 'Home',
												iconCls : 'home',
												xtype : 'formpanel',
												html : ['This is a very simple example of Facebook style slide navigation. ',
												'The component is mostly developed with CSS3 animations and a small bit of javascript code. ',
												'Use it freely in your Sencha Touch application'].join(''),
												styleHtmlContent : true,
												items : [{
																xtype : 'titlebar',
																title : 'PansAndCompany',
																docked : 'top',
																items :[{
                                        xtype : 'button',
																				align : 'left',
																				name : 'nav_btn',
																				iconCls : 'list',
																				ui : 'plain'
																}]
												}]
								}]
				}
});
