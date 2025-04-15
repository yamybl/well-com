var router = new VueRouter( {
	mode: "hash",
	
	routes: [
		{
			path: "/",
			name: "root",
			redirect: "/guide"
		},
		{
			path: "/guide",
			name: "guide",
			component: guide
		},
		{
			path: "/install",
			name: "install",
			component: install
		},
		{
			path: "/well-a-intro",
			name: "well-a-intro",
			component: wellAIntro
		},
		{
			path: "/well-app-intro",
			name: "well-app-intro",
			component: wellAppIntro
		},
		{
			path: "/well-box-intro",
			name: "well-box-intro",
			component: wellBoxIntro
		},
		{
			path: "/well-btn-intro",
			name: "well-btn-intro",
			component: wellBtnIntro
		},
		{
			path: "/well-card-intro",
			name: "well-card-intro",
			component: wellCardIntro
		},
		{
			path: "/well-card-inline-intro",
			name: "well-card-inline-intro",
			component: wellCardInlineIntro
		},
		{
			path: "/well-carousel-intro",
			name: "well-carousel-intro",
			component: wellCarouselIntro
		},
		{
			path: "/well-counter-intro",
			name: "well-counter-intro",
			component: wellCounterIntro
		},
		{
			path: "/well-txt-intro",
			name: "well-txt-intro",
			component: wellTxtIntro
		},
		{
			path: "/well-radio-intro",
			name: "well-radio-intro",
			component: wellRadioIntro
		},
		{
			path: "/well-checkbox-intro",
			name: "well-checkbox-intro",
			component: wellCheckboxIntro
		},
		{
			path: "/well-file-intro",
			name: "well-file-intro",
			component: wellFileIntro
		},
		{
			path: "/well-infinite-scroll-intro",
			name: "well-infinite-scroll-intro",
			component: wellInfiniteScrollIntro
		},
		{
			path: "/well-loading-intro",
			name: "well-loading-intro",
			component: wellLoadingIntro
		},
		{
			path: "/well-menu-intro",
			name: "well-menu-intro",
			component: wellMenuIntro
		},
		{
			path: "/well-context-menu-intro",
			name: "well-context-menu-intro",
			component: wellContextMenuIntro
		},
		{
			path: "/well-modal-intro",
			name: "well-modal-intro",
			component: wellModalIntro
		},
		{
			path: "/well-msg-intro",
			name: "well-msg-intro",
			component: wellMsgIntro
		},
		{
			path: "/well-pagination-intro",
			name: "well-pagination-intro",
			component: wellPaginationIntro
		},
		{
			path: "/well-sidebar-intro",
			name: "well-sidebar-intro",
			component: wellSidebarIntro
		},
		{
			path: "/well-tab-intro",
			name: "well-tab-intro",
			component: wellTabIntro
		},
		{
			path: "/well-tip-intro",
			name: "well-tip-intro",
			component: wellTipIntro
		}
	],
	
	scrollBehavior: function ( to, from, savedPosition ) {
		return {
			x: 0,
			y: 0
		};
	}
} );

router.beforeEach( function ( to, from, next ) {
	/**
	 * 将 sidebar 中匹配当前路由的 item 的 'active' 设置为 true 值。
	 */	
	for ( var i = 0, len = store.state.sidebar.items.length; i < len; ++i )
	{
		if ( store.state.sidebar.items[ i ].path === to.path )
		{
			store.state.sidebar.items[ i ].active = true;
		}
		else
		{
			store.state.sidebar.items[ i ].active = false;
		}
	}
	
	next();
} );