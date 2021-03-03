( function ( global ) {
	/**
	 * Type
	 */
	
	/**
	 *  @Function isProtoProp( prop, obj ) - 判断指定属性是否存在于指定对象的原型链上
	 *  @param prop {String} 指定的属性
	 *  @param obj {Object} 指定的对象
	 *  @return {Boolean} 如果在原型链上返回 true，不在返回 false
	 */
	function isProtoProp( prop, obj ) {
		return ( prop in obj ) &&
			   ( !obj.hasOwnProperty( prop ) );
	}

	/**
	 *  @Function reallyHasProtoProp( prop, obj ) - 当在实例中存在与原型中同名的属性时，
	 *											    实例属性就会屏蔽同名原型属性，因此
	 *											    需要通过此方法来判断某个属性是否
	 *											    也确实在原型上存在。
	 *  @param prop {String} 指定的属性
	 *  @param obj {Object} 指定的对象
	 *  @return {Boolean} 如果原型上存在指定属性返回 true，否则返回 false。
	 */
	function reallyHasProtoProp( prop, obj ) {
		var hasOwn = false,
			hasProto = false;
		
		var propPrevVal;
		if ( hasOwn = obj.hasOwnProperty( prop ) ) {
			propPrevVal = obj[ prop ];
			delete obj[ prop ];
		}
		
		hasProto = isProtoProp( prop, obj );
		
		if ( hasOwn ) {
			obj[ prop ] = propPrevVal;
		}
		
		return hasProto;
	}
	
	/**
     * @Function blankObject( obj ) - 判断对象是否为形似 {} 的空对象
	 *
	 * @param obj {Object} 指定的待判断对象
	 * @return {Boolean} 如果指定的待判断对象形似 {} 则返回 true，否则返回 false。
     */
	function blankObject( obj ) {
		var counter = 0;
		
		for ( k in obj )
		{
			if ( obj.hasOwnProperty( k ) )
			{
				++counter;
			}
		}
		
		return counter === 0;
	}
	
	/**
	 * @Object RE - 定义与正则表达式相关的操作
	 */
	var RE = {
		allDigits: function ( str ) {
			return /^\d+$/g.test( str );
		}
	};
	
	/**
	 * BOM & DOM
	 */
	 
	function standardCompatMode() {
		return document.compatMode === "CSS1Compat" ? true : false;
	}

	function docScrollDistance( direction ) {
		var html = null,
			body = null;
		
		if ( standardCompatMode() )
		{
			html = document.documentElement;
			switch ( direction )
			{
				case "left":
					return html.scrollLeft;
				case "top":
					return html.scrollTop;
			}
		}
		else
		{
			body = document.body;
			switch ( direction )
			{
				case "left":
					return body.scrollLeft;
				case "top":
					return body.scrollTop;
			}
		}
	}

	function viewportSidePosition( side ) {
		var html = null,
			body = null;
		
		if ( standardCompatMode() )
		{
			html = document.documentElement;		
			switch ( side )
			{
				case "top":
					return html.scrollTop;
				case "right":
					return html.scrollLeft + html.clientWidth;
				case "bottom":
					return html.scrollTop + html.clientHeight;
				case "left":
					return html.scrollLeft;
			}
		}
		else
		{
			body = document.body;
			switch( side )
			{
				case "top":
					return body.scrollTop;
				case "right":
					return body.scrollLeft + body.clientWidth;
				case "bottom":
					return body.scrollTop + body.clientHeight;
				case "left":
					return body.scrollLeft;
			}
		}
	}
	
	/**
	 * @Function insertCssRule( rule ) - 新建样式元素并在其中插入指定的规则
	 * @param rule {String|Array} 指定的规则
	 */
	function insertCssRule( rule ) {
		var style = document.createElement( "style" );
		document.getElementsByTagName( "head" )[ 0 ].appendChild( style );

		var i,
			len;
			
		if ( typeof rule === "string" )
		{
			style.sheet.insertRule( rule, 0 );
		}
		else if ( Array.isArray( rule ) )
		{
			for ( i = 0, len = rule.length; i < len; ++i )
			{
				style.sheet.insertRule( rule[ i ], i );
			}
		}
	}
	
	/**
	 *  @Function addURLParam( url, name, value ) 对要添加到 URL 末尾的查询字符串进行编码，并返回编码后的 URL
	 *
	 *  @param url {String} 指定的 URL
	 *  @param name {String} 查询参数名称
	 *  @param value {String} 查询参数值
	 *  @return {String} 编码后的 URL
	 */
	function addURLParam( url, name, value ) {
		url += ( url.indexOf( "?" ) === -1 ? "?" : "&" );
		url += encodeURIComponent( name ) + "=" + encodeURIComponent( value );
		return url;
	}
	
	/**
	 * 判断用户浏览器是否在移动平台上运行
	 */
	var isMobile = reallyHasProtoProp( "ontouchstart", document );
	
	/**
	 * @Class SimpleAjax - 定义简便的 ajax 操作
	 */
	function SimpleAjax( componentName ) {
		this.componentName = componentName;
		this.id = SimpleAjax.generateId( componentName );
		this.xhr = SimpleAjax.allocateXhr( componentName, this.id );
	}
	
	SimpleAjax.xhrList = {};
	
	SimpleAjax.generateId = function ( componentName ) {
		if ( !SimpleAjax.xhrList[ componentName ] )
		{
			SimpleAjax.xhrList[ componentName ] = { counter: 1 };
		}
		else
		{
			++SimpleAjax.xhrList[ componentName ].counter;
		}
		
		return componentName + "-" + SimpleAjax.xhrList[ componentName ].counter;
	};
	
	SimpleAjax.allocateXhr = function ( componentName, id ) {
		return SimpleAjax.xhrList[ componentName ][ id ] = new XMLHttpRequest();
	};
	
	SimpleAjax.prototype.request = function ( config ) {
		var method = config.method === undefined ? "get" : config.method,
		    url = config.url,
			data = config.data === undefined ? null : config.data,
			success = config.success,
			fail = config.fail,
			complete = config.complete,
			thisInCallback = config.thisInCallback;
			
		if ( thisInCallback )
		{
			if ( success && typeof success === "function" )
			{
				success = success.bind( thisInCallback );
			}
			
			if ( fail && typeof fail === "function" )
			{
				fail = fail.bind( thisInCallback );
			}
			
			if ( complete && typeof complete === "function" )
			{
				complete = complete.bind( thisInCallback );
			}
		}

		this.xhr.onreadystatechange = ( function () {
			if ( this.xhr.readyState === 4 )
			{					
				if ( this.xhr.status >= 200 && this.xhr.status < 300 || this.xhr.status === 304 )
				{
					if ( success && typeof success === "function" )
					{console.log(this.xhr.responseText);
						success( JSON.parse( this.xhr.responseText ) );
					}
				}
				else
				{
					if ( fail && typeof fail === "function" )
					{
						fail( this.xhr.status );
					}
				}
				
				if ( complete && typeof complete === "function" )
				{
					complete();
				}
			}
		} ).bind( this );
		this.xhr.open( method, url, true );
		this.xhr.send( data );
	};
	
	SimpleAjax.prototype.cancel = function () {
		this.xhr.abort();
	};
	
	SimpleAjax.prototype.destroy = function () {
		this.xhr.abort();
		this.xhr = null;
		SimpleAjax.xhrList[ this.componentName ][ this.id ] = null;
		delete SimpleAjax.xhrList[ this.componentName ][ this.id ];
	};
	
	/**
	 * @Objects wellCom[*] - 定义一组将 `混入` 到 `well 组件` 中的资源
	 */
	var wellComData = {
		data: function () {
			return {
				wellComData: {
					isMobile: isMobile
				}
			};
		}
	};

	var wellComDirectives = {
		/* ... */
	};
	
	var wellComComponentsStore = {
		menu: {
			menus: {}
		},
		
		contextMenu: {
			menus: {}
		}
	};

	var wellComComponents = {
		menu: { /* menu [ start ] */
			methods: { /* menu - methods [ start ] */
				wellComMenuToggle: function ( menu, showName ) {
					var uid = this._uid;
					
					if ( showName === undefined )
					{
						showName = "show";
					}
					
					menu[ showName ] = !menu[ showName ];
					
					var key,
					    hasMenu = false,
					    i,
						len,
						m;
						
					if ( wellComComponentsStore.menu.menus[ uid ] === undefined )
					{
						wellComComponentsStore.menu.menus[ uid ] = [];
						wellComComponentsStore.menu.menus[ uid ].push( menu );
					}
					else
					{
						for ( key in wellComComponentsStore.menu.menus )
						{
							if ( key == uid )
							{
								for ( i = 0, len = wellComComponentsStore.menu.menus[ uid ].length; i < len; ++i )
								{
									m = wellComComponentsStore.menu.menus[ uid ][ i ];
									
									if ( m === menu )
									{
										hasMenu = true;
									}
									else
									{
										m[ showName ] = false;
									}
								}
								
								if ( !hasMenu )
								{
									wellComComponentsStore.menu.menus[ uid ].push( menu );
								}
							}
							else
							{
								for ( i = 0, len = wellComComponentsStore.menu.menus[ key ].length; i < len; ++i )
								{
									m = wellComComponentsStore.menu.menus[ key ][ i ];
									
									m[ showName ] = false;
								}
							}
						}
					}
				},
				
				wellComMenuHideAll: function ( showName ) {
					if ( showName === undefined )
					{
						showName = "show";
					}
					
					var key,
					    i,
						len,
						m;
						
					for ( key in wellComComponentsStore.menu.menus )
					{
						for ( i = 0, len = wellComComponentsStore.menu.menus[ key ].length; i < len; ++i )
						{
							m = wellComComponentsStore.menu.menus[ key ][ i ];

							m[ showName ] = false;
						}
					}
				},
				
				wellComMenuItemOperate: function ( menu, fn, showName ) {
					if ( showName === undefined )
					{
						showName = "show";
					}
					
					menu[ showName ] = false;
					
					if ( fn && typeof fn === "function" )
					{
						fn();
					}
				}
			}, /* menu - methods [ end ] */
			
			beforeDestroy: function () {
				var uid = this._uid;
					
				if ( Array.isArray( wellComComponentsStore.menu.menus[ uid ] ) )
				{
					wellComComponentsStore.menu.menus[ uid ].length = 0;
					delete wellComComponentsStore.menu.menus[ uid ];
				}
			}
		}, /* menu [ end ] */
		
		contextMenu: { /* contextMenu [ start ] */
			methods: { /* contextMenu - methods [ start ] */
				wellComContextMenuShow: function ( menu, evt, nameConfig ) {
					var uid = this._uid,
						showName = "show",
						mouseXName = "mouseX",
						mouseYName = "mouseY";
					
					if ( nameConfig !== undefined && typeof nameConfig === "object" )
					{
						if ( nameConfig.showName !== undefined )
						{
							showName = nameConfig.showName;
						}
						
						if ( nameConfig.mouseXName !== undefined )
						{
							mouseXName = nameConfig.mouseXName;
						}
						
						if ( nameConfig.mouseYName !== undefined )
						{
							mouseYName = nameConfig.mouseYName;
						}
					}
					
					menu[ showName ] = true;
					menu[ mouseXName ] = evt.x;
					menu[ mouseYName ] = evt.y;
					
					var key,
					    hasMenu = false,
					    i,
						len,
						m;
						
					if ( wellComComponentsStore.contextMenu.menus[ uid ] === undefined )
					{
						wellComComponentsStore.contextMenu.menus[ uid ] = [];
						wellComComponentsStore.contextMenu.menus[ uid ].push( menu );
					}
					else
					{
						for ( key in wellComComponentsStore.contextMenu.menus )
						{
							if ( key == uid )
							{
								for ( i = 0, len = wellComComponentsStore.contextMenu.menus[ uid ].length; i < len; ++i )
								{
									m = wellComComponentsStore.contextMenu.menus[ uid ][ i ];
									
									if ( m === menu )
									{
										hasMenu = true;
									}
									else
									{
										m[ showName ] = false;
									}
								}
								
								if ( !hasMenu )
								{
									wellComComponentsStore.contextMenu.menus[ uid ].push( menu );
								}
							}
							else
							{
								for ( i = 0, len = wellComComponentsStore.contextMenu.menus[ key ].length; i < len; ++i )
								{
									m = wellComComponentsStore.contextMenu.menus[ key ][ i ];
									
									m[ showName ] = false;
								}
							}
						}
					}
				},
				
				wellComContextMenuHideAll: function ( showName ) {
					if ( showName === undefined )
					{
						showName = "show";
					}
					
					var key,
					    i,
						len,
						m;
						
					for ( key in wellComComponentsStore.contextMenu.menus )
					{
						for ( i = 0, len = wellComComponentsStore.contextMenu.menus[ key ].length; i < len; ++i )
						{
							m = wellComComponentsStore.contextMenu.menus[ key ][ i ];

							m[ showName ] = false;
						}
					}
				},
				
				wellComContextMenuItemOperate: function ( menu, fn, showName ) {
					if ( showName === undefined )
					{
						showName = "show";
					}
					
					menu[ showName ] = false;
					
					if ( fn && typeof fn === "function" )
					{
						fn();
					}
				}
			},  /* contextMenu - methods [ end ] */
			
			beforeDestroy: function () {
				var uid = this._uid;
					
				if ( Array.isArray( wellComComponentsStore.contextMenu.menus[ uid ] ) )
				{
					wellComComponentsStore.contextMenu.menus[ uid ].length = 0;
					delete wellComComponentsStore.contextMenu.menus[ uid ];
				}
			}
		}, /* contextMenu [ end ] */
		
		tab: { /* tab [ start ] */
			methods: {
				wellComTabToggle: function ( tabs, idx, activeName ) {
					if ( activeName === undefined )
					{
						activeName = "active";
					}
					
					for ( var i = 0, len = tabs.length; i < len; ++i )
					{
						if ( i === idx )
						{
							tabs[ i ][ activeName ] = !tabs[ i ][ activeName ];
						}
						else
						{
							tabs[ i ][ activeName ] = false;
						}
					}
				}
			}
		}, /* tab [ end ] */
		
		tip: { /* tip [ start ] */
			methods: {
				/**
				 * tip 组件实现逻辑：
				 *
				 * [ 1 ] 当鼠标移入 `关联元素` 时，显示 tip 组件。
				 *
				 * [ 2 ] 当 tip 组件处于显示状态时，鼠标移入 tip 组件，则让 tip 组件隐藏。
				 *       此后，鼠标在 `关联元素` 的区域内移动时，tip 组件都不再显示。实现
				 *       此步逻辑，需要用到 `hideForced` 变量( 实为一个对象属性 )来指示
				 *       tip 组件被强制隐藏了。
				 *
				 * [ 3 ] 当鼠标从 `关联元素` 中移出时，则让 tip 组件隐藏。
				 *
				 * [ 4 ] 以上 3 步逻辑都是比较显而易见的，但有以下几处细节容易被忽视，下面
				 *       将逐一说明这些细节。( 主要是要把几个元素之间的鼠标移入/移出事件的
				 *       关联性以及发生的先后顺序考虑好。)
				 *
				 * [ 5 ] 只有当鼠标移出 `关联元素` 时，`hideForced` 变量才被置为 false。当
				 *       鼠标移入 tip 导致 tip 隐藏后，鼠标光标落在 `关联元素` 之内时，则
				 *       不应该将 `hideForced` 变量置为 false。详见 `hide` 工具函数中的逻
				 *       辑。( `wellComTipTargetMouseleave` 工具函数用于 `关联元素`
				 *       mouseleave 事件处理函数中 )
				 *
				 * [ 6 ] 在鼠标以非常快的速度移动的情况下，当鼠标移出 `关联元素` 后也很有
				 *       可能会移入即将消失的 tip，那么此时不应该将 `hideForced` 变量置为
				 *       true。详见 `forceHide` 工具函数中的逻辑。( `wellComTipSelfMouseenter`
				 *       工具函数用于 tip 组件的 mouseenter 事件处理函数中 )
				 *
				 * [ 7 ] 在鼠标以非常快的速度移动的情况下，鼠标从 `关联元素` 移入 tip 后，
				 *       tip 隐藏，此时的鼠标光标也很有可能是落在 `关联元素` 之外的，如果出
				 *       现了这种情况，那么就不应该将 `hideForced` 变量置为 true 了。详见
				 *       `notForceHide` 工具函数中的逻辑。( `wellComTipSelfMouseleave` 工具
				 *       函数用于 tip组件的 mouseleave 事件处理函数中 )
				 */
				
				wellComTipTargetMouseenter: function ( tip, evt, nameConfig ) {
					var showName = "show",
						mouseXName = "mouseX",
						mouseYName = "mouseY",
						hideForcedName = "hideForced";
					
					if ( nameConfig !== undefined && typeof nameConfig === "object" )
					{
						if ( nameConfig.showName !== undefined )
						{
							showName = nameConfig.showName;
						}
						
						if ( nameConfig.mouseXName !== undefined )
						{
							mouseXName = nameConfig.mouseXName;
						}
						
						if ( nameConfig.mouseYName !== undefined )
						{
							mouseYName = nameConfig.mouseYName;
						}
						
						if ( nameConfig.hideForcedName !== undefined )
						{
							hideForcedName = nameConfig.hideForcedName;
						}
					}
					
					if ( !tip[ hideForcedName ] )
					{
						tip[ showName ] = true;
						tip[ mouseXName ] = evt.x;
						tip[ mouseYName ] = evt.y;
					}
				},
				
				wellComTipTargetMouseleave: function ( tip, evt, relatedElementId, nameConfig ) {
					var showName = "show",
						hideForcedName = "hideForced";
					
					if ( nameConfig !== undefined && typeof nameConfig === "object" )
					{
						if ( nameConfig.showName !== undefined )
						{
							showName = nameConfig.showName;
						}
						
						if ( nameConfig.hideForcedName !== undefined )
						{
							hideForcedName = nameConfig.hideForcedName;
						}
					}
					
					var relatedTarget = evt.relatedTarget,
						relatedEl = document.getElementById( relatedElementId );
					
					tip[ showName ] = false;
					
					if ( relatedTarget !== relatedEl )
					{
						tip[ hideForcedName ] = false;
					}
				},
				
				wellComTipSelfMouseenter: function ( tip, evt, relatedElementId, nameConfig ) {
					var hideForcedName = "hideForced";
					
					if ( nameConfig !== undefined && typeof nameConfig === "object" )
					{
						if ( nameConfig.hideForcedName !== undefined )
						{
							hideForcedName = nameConfig.hideForcedName;
						}
					}
					
					var relatedTarget = evt.relatedTarget,
						relatedEl = document.getElementById( relatedElementId );
				
					if ( relatedTarget === relatedEl )
					{
						tip[ hideForcedName ] = true;
					}
				},
				
				wellComTipSelfMouseleave: function ( tip, evt, relatedElementId, nameConfig ) {
					var hideForcedName = "hideForced";
					
					if ( nameConfig !== undefined && typeof nameConfig === "object" )
					{
						if ( nameConfig.hideForcedName !== undefined )
						{
							hideForcedName = nameConfig.hideForcedName;
						}
					}
					
					var relatedTarget = evt.relatedTarget,
						relatedEl = document.getElementById( relatedElementId );
				
					if ( relatedTarget !== relatedEl )
					{
						tip[ hideForcedName ] = false;
					}
				}
			}
		}, /* tip [ end ] */
		
		paginationProgress: { /* paginationProgress [ start ] */
			methods: {
				wellComPaginationProgressRun: function ( config ) {
					var vm = config.vm,
						props = config.props,
						operate = config.operate.bind( vm ),
						cancel = config.cancel.bind( vm ),
						isBtnActive = config.isBtnActive.bind( vm );
						
					if ( isBtnActive() )
					{
						return;
					}
					
					if ( !props.complete && props.userInterfaceUpdated )
					{
						props.abort = true;
						props.userInterfaceUpdated = false;
						cancel();
						
						vm.$nextTick( function () {
							props.show = false;
							vm.$nextTick( function () {
								props.abort = false;
								props.show = true;
								props.userInterfaceUpdated = true;
								
								operate();
							} );
						} );
					}
					else if ( props.complete )
					{
						props.complete = false;
						props.show = true;
						props.userInterfaceUpdated = true;
						
						operate();
					}
				},
				
				wellComPaginationProgressDone: function ( props ) {
					props.complete = true;
					props.show = false;
				},
				
				wellComPaginationTriggerBtnIsActive: function ( activePage, btnNum ) {
					return activePage == btnNum;
				},
				
				wellComPaginationTriggerBtnToggleRequesting: function ( vm, btnNum ) {
					vm.activePage = -1;
					
					var key,
						i;
					
					btnNum = +btnNum;
					
					if ( vm.pages <= 9 )
					{
						vm.progressBtnGroup[ "1" ] = {};
						
						for ( i = 1; i <= vm.pages; ++i )
						{
							vm.progressBtnGroup[ "1" ][ i ] = {};
							vm.progressBtnGroup[ "1" ][ i ].requesting = false;
							vm.progressBtnGroup[ "1" ][ i ].active = false;
						}
						
						for ( key in vm.progressBtnGroup[ "1" ] )
						{
							if ( btnNum == key )
							{
								vm.progressBtnGroup[ "1" ][ key ].requesting = true;
								vm.requestingPage = btnNum;
							}
							else
							{
								vm.progressBtnGroup[ "1" ][ key ].requesting = false;
							}
						}
					}
					else
					{
						vm.progressBtnGroup[ "1" ] = {};
						vm.progressBtnGroup[ "2" ] = {};
						vm.progressBtnGroup[ "3" ] = {};
						
						if ( btnNum <= 5 )
						{
							for ( i = 1; i <= 6; ++i )
							{
								vm.progressBtnGroup[ "1" ][ i ] = {};
								if ( btnNum == i )
								{
									vm.progressBtnGroup[ "1" ][ i ].requesting = true;
									vm.progressBtnGroup[ "1" ][ i ].active = false;
									vm.requestingPage = btnNum;
								}
								else
								{
									vm.progressBtnGroup[ "1" ][ i ].requesting = false;
									vm.progressBtnGroup[ "1" ][ i ].active = false;
								}
							}
							
							vm.progressBtnGroup[ "3" ][ vm.pages ] = {};
							vm.progressBtnGroup[ "3" ][ vm.pages ].requesting = false;
							vm.progressBtnGroup[ "3" ][ vm.pages ].active = false;
						}
						else if ( btnNum > 5 && btnNum < ( vm.pages - 4 ) )
						{
							vm.progressBtnGroup[ "1" ][ "1" ] = {};
							vm.progressBtnGroup[ "1" ][ "1" ].requesting = false;
							vm.progressBtnGroup[ "1" ][ "1" ].active = false;
							
							for ( i = btnNum - 2; i <= btnNum + 2; ++i )
							{
								vm.progressBtnGroup[ "2" ][ i ] = {};
								if ( btnNum == i )
								{
									vm.progressBtnGroup[ "2" ][ i ].requesting = true;
									vm.progressBtnGroup[ "2" ][ i ].active = false;
									vm.requestingPage = btnNum;
								}
								else
								{
									vm.progressBtnGroup[ "2" ][ i ].requesting = false;
									vm.progressBtnGroup[ "2" ][ i ].active = false;
								}
							}
							
							vm.progressBtnGroup[ "3" ][ vm.pages ] = {};
							vm.progressBtnGroup[ "3" ][ vm.pages ].requesting = false;
							vm.progressBtnGroup[ "3" ][ vm.pages ].active = false;
						}
						else if ( btnNum >= ( vm.pages - 4 ) )
						{
							vm.progressBtnGroup[ "1" ][ "1" ] = {};
							vm.progressBtnGroup[ "1" ][ "1" ].requesting = false;
							vm.progressBtnGroup[ "1" ][ "1" ].active = false;
							
							for ( i = vm.pages - 5; i <= vm.pages; ++i )
							{
								vm.progressBtnGroup[ "3" ][ i ] = {};
								if ( btnNum == i )
								{
									vm.progressBtnGroup[ "3" ][ i ].requesting = true;
									vm.progressBtnGroup[ "3" ][ i ].active = false;
									vm.requestingPage = btnNum;
								}
								else
								{
									vm.progressBtnGroup[ "3" ][ i ].requesting = false;
									vm.progressBtnGroup[ "3" ][ i ].active = false;
								}
							}
						}
					}
				},
				
				wellComPaginationTriggerBtnToggleActive: function ( vm, btnNum ) {
					var key,
						i;
						
					btnNum = +btnNum;
					
					if ( vm.pages <= 9 )
					{
						vm.progressBtnGroup[ "1" ] = {};
						
						for ( i = 1; i <= vm.pages; ++i )
						{
							vm.progressBtnGroup[ "1" ][ i ] = {};
							vm.progressBtnGroup[ "1" ][ i ].requesting = false;
							vm.progressBtnGroup[ "1" ][ i ].active = false;
						}
						
						for ( key in vm.progressBtnGroup[ "1" ] )
						{
							if ( btnNum == key )
							{
								vm.progressBtnGroup[ "1" ][ key ].active = true;
								vm.activePage = btnNum;
							}
						}
					}
					else
					{
						vm.progressBtnGroup[ "1" ] = {};
						vm.progressBtnGroup[ "2" ] = {};
						vm.progressBtnGroup[ "3" ] = {};
						
						if ( btnNum <= 5 )
						{
							for ( i = 1; i <= 6; ++i )
							{
								vm.progressBtnGroup[ "1" ][ i ] = {};
								if ( btnNum == i )
								{
									vm.progressBtnGroup[ "1" ][ i ].requesting = false;
									vm.progressBtnGroup[ "1" ][ i ].active = true;
									vm.activePage = btnNum;
								}
								else
								{
									vm.progressBtnGroup[ "1" ][ i ].requesting = false;
									vm.progressBtnGroup[ "1" ][ i ].active = false;
								}
							}
							
							vm.progressBtnGroup[ "3" ][ vm.pages ] = {};
							vm.progressBtnGroup[ "3" ][ vm.pages ].requesting = false;
							vm.progressBtnGroup[ "3" ][ vm.pages ].active = false;
						}
						else if ( btnNum > 5 && btnNum < ( vm.pages - 4 ) )
						{
							vm.progressBtnGroup[ "1" ][ "1" ] = {};
							vm.progressBtnGroup[ "1" ][ "1" ].requesting = false;
							vm.progressBtnGroup[ "1" ][ "1" ].active = false;
							
							for ( i = btnNum - 2; i <= btnNum + 2; ++i )
							{
								vm.progressBtnGroup[ "2" ][ i ] = {};
								if ( btnNum == i )
								{
									vm.progressBtnGroup[ "2" ][ i ].requesting = false;
									vm.progressBtnGroup[ "2" ][ i ].active = true;
									vm.activePage = btnNum;
								}
								else
								{
									vm.progressBtnGroup[ "2" ][ i ].requesting = false;
									vm.progressBtnGroup[ "2" ][ i ].active = false;
								}
							}
							
							vm.progressBtnGroup[ "3" ][ vm.pages ] = {};
							vm.progressBtnGroup[ "3" ][ vm.pages ].requesting = false;
							vm.progressBtnGroup[ "3" ][ vm.pages ].active = false;
						}
						else if ( btnNum >= ( vm.pages - 4 ) )
						{
							vm.progressBtnGroup[ "1" ][ "1" ] = {};
							vm.progressBtnGroup[ "1" ][ "1" ].requesting = false;
							vm.progressBtnGroup[ "1" ][ "1" ].active = false;
							
							for ( i = vm.pages - 5; i <= vm.pages; ++i )
							{
								vm.progressBtnGroup[ "3" ][ i ] = {};
								if ( btnNum == i )
								{
									vm.progressBtnGroup[ "3" ][ i ].requesting = false;
									vm.progressBtnGroup[ "3" ][ i ].active = true;
									vm.activePage = btnNum;
								}
								else
								{
									vm.progressBtnGroup[ "3" ][ i ].requesting = false;
									vm.progressBtnGroup[ "3" ][ i ].active = false;
								}
							}
						}
					}
				}
			}
		}, /* paginationProgress [ end ] */
		
		checkbox: {
			methods: {
				wellComCheckboxChange: function ( checkboxesBound, checkedValue ) {
					var i = 0,
						len = checkboxesBound.length;
					
					if ( len === 0 )
					{
						checkboxesBound.push( checkedValue );
					}
					else
					{
						for ( ; i < len; ++i )
						{
							if ( checkedValue === checkboxesBound[ i ] )
							{
								checkboxesBound.splice( i, 1 );
								return;
							}
						}
						
						checkboxesBound.push( checkedValue );
					}
				}
			}
		},
		
		file: {
			methods: {
				wellComFileTypeValidator: function ( acceptTypes, fileType ) {
					return acceptTypes.some( function ( t, i, arr ) {
						/**
						 * 如果用户传递的数组中的字符串值是带 "/" 的完整 MIME 类型( 如："image/jpg" )
						 */
						if ( t.indexOf( "/" ) > -1 )
						{
							return t.toLowerCase() === fileType;
						}
						/**
						 * 否则( 如："jpg" )
						 */
						else
						{
							fileType = fileType.substring( fileType.indexOf( "/" ) + 1, fileType.length );
							
							return t.toLowerCase() === fileType;
						}
					} );
				},
				
				wellComFileSizeValidator: function ( maxSize, fileSize ) {
					/**
					 * maxSize 的单位是 MB，先将其转换为 B
					 */
					maxSize = maxSize * 1024 * 1024;
					
					return fileSize <= maxSize;
				}
			}
		},
		
		counter: {
			directives: {
				wellComCounter: {
					inserted: function ( el ) {
						var pos = document.defaultView.getComputedStyle( el, null ).position;
						
						if ( pos === "" ||
							 pos === "static" ||
							 pos === "inherit" ||
							 pos === "initial" ||
							 pos === "unset" )
						{
							el.style.position = "relative";
						}
					}
				}
			}
		}
	};
	
	var wellComGlobal = {
		radio: {
			idCounter: 0
		},
		
		checkbox: {
			idCounter: 0
		},
		
		file: {
			idCounter: 0
		},
		
		txt: {
			idCounter: 0
		}
	};
	
	/**
	 * @Function wellComMixin - 将以上定义的资源 `混入` 到 `well 组件` 的工具函数
	 */
	function wellComMixin( config ) {
		var data = config.data,
			directives = config.directives,
			coms = config.components,
			mixins = [],
			key,
			i,
			len;
			
		if ( data )
		{
			mixins.push( wellComData );
		}
		
		if ( directives )
		{
			mixins.push( wellComDirectives );
		}
		
		if ( coms === true )
		{
			for ( key in wellComComponents )
			{
				mixins.push( wellComComponents[ key ] );
			}
		}
		else if ( Array.isArray( coms ) )
		{
			for ( i = 0, len = coms.length; i < len; ++i )
			{
				mixins.push( wellComComponents[ coms[ i ] ] );
			}
		}
		
		return mixins;
	}
	
	/**
	 * @Object wellComHelper - 用于导出所有工具函数的对象
	 */ 
	var wellComHelper = {
		RE: RE,
		blankObject: blankObject,
		docScrollDistance: docScrollDistance,
		viewportSidePosition: viewportSidePosition,
		insertCssRule: insertCssRule,
		addURLParam: addURLParam,
		SimpleAjax: SimpleAjax,
		wellComGlobal: wellComGlobal,
		wellComMixin: wellComMixin
	};

	/**
	 * 导出 wellComHelper 对象
	 */
	global.wellComHelper = wellComHelper;
	
	
	
	/**********************************************************************************
	 ***************************** 以下为 `组件定义` 部分 *****************************
	 **********************************************************************************/
 
	/**
	 * a
	 */
	 
	var wellA = {
		name: "well-a",
		
		props: {
			size: {
				type: String,
				default: "default"
			},
			href: {
				type: String,
				default: ""
			},
			target: {
				type: String,
				default: "_blank"
			}
		},
		
		computed: {
			aCls: function () {
				return {
					"well-com-a": true,
					"well-com-a--large": this.size === "large",
					"well-com-a--extra-large": this.size === "extra-large",
				};
			}
		},
		
		template: '\
			<a :class="aCls"\
			   :href="href"\
			   :target="target">\
				<slot></slot>\
			</a>\
		'
	};

	Vue.component( "well-a", wellA );
	
	/**
	 * app
	 */
	
	var wellApp = {
		name: "wel-app",
		
		mixins: wellComHelper.wellComMixin( {
			data: true
		} ),
		
		props: {
			theme: {
				type: String,
				default: "light"
			}
		},
		
		computed: {
			appCls: function () {
				return {
					"well-com-app": true,
					"well-com-app--dark": this.theme === "dark",
					"well-com-app--soft": this.theme === "soft",
					"well-com-app--strong": this.theme === "strong",
					"well-ori-tap-highlight--none": this.wellComData.isMobile
				};
			}
		},
		
		template: '\
			<div :class="appCls">\
				<slot></slot>\
			</div>\
		'
	};

	Vue.component( "well-app", wellApp );
	
	/**
	 * box
	 */

	var wellBox = {
		name: "well-box",
		
		template: '\
			<div class="well-com-box">\
				<slot></slot>\
			</div>\
		'
	};

	Vue.component( "well-box", wellBox );

	/**
	 * btn
	 */
		
	var wellBtn = {
		name: "well-btn",
		
		props: {
			size: {
				type: String,
				default: "default"
			},
			round: {
				type: Boolean,
				default: false
			},
			state: {
				type: String,
				default: "default"
			}
		},
		
		computed: {
			btnCls: function () {
				return {
					"well-com-btn": true,
					"well-com-btn--large": this.size === "large",
					"well-com-btn--extra-large": this.size === "extra-large",
					"well-com-btn--round": this.round,
					"well-com-btn--caution": this.state === "caution",
				};
			}
		},
		
		template: '\
			<div :class="btnCls"\
				 @click="$emit( \'click\' );">\
				<slot></slot>\
			</div>\
		'
	};

	Vue.component( "well-btn", wellBtn );
	
	/**
	 * card
	 */
	 
	var wellCard = {
		name: "well-card",
		
		props: {
			avatar: {
				type: String,
				default: ""
			}
		},
		
		template: '\
			<div class="well-com-card">\
				<div class="well-base-wrapper well-ori-margin--0">\
					<div class="well-base-wrapper well-ori-margin--0 well-ori-padding--normal well-com-card__title">\
						<slot name="title">标题</slot>\
					</div>\
					<div class="well-ori-display__flex-row--sb well-ori-padding--normal well-com-card__des-wrapper">\
						<div class="well-com-card__des">\
							<slot name="des1">描述1</slot>\
						</div>\
						<div class="well-com-card__des">\
							<slot name="des2"></slot>\
						</div>\
					</div>\
				</div>\
				<div class="well-base-wrapper well-ori-margin--0 well-ori-padding--normal">\
					<slot name="body">内容</slot>\
				</div>\
				<div class="well-ori-display__flex-row--e-c well-ori-padding--normal well-com-card__footer">\
					<img v-if="avatar"\
						 class="well-com-card__footer-avatar"\
						 :src="avatar" />\
					<slot name="footer-txt">页脚</slot>\
				</div>\
			</div>\
		'
	};

	Vue.component( "well-card", wellCard );
	
	/* */
	
	var wellCardInlineWrapper = {
		name: "well-card-inline-wrapper",
		
		template: '\
			<div class="well-com-card-inline-wrapper">\
				<slot></slot>\
			</div>\
		'
	};

	Vue.component( "well-card-inline-wrapper", wellCardInlineWrapper );

	var wellCardInline = {
		name: "well-card-inline",
		
		props: {
			mode: {
				type: String,
				default: "default"
			},
			avatar: {
				type: String,
				default: ""
			}
		},
		
		computed: {
			cardInlineCls: function () {
				switch ( this.mode )
				{
					case "default":
						return {
							"well-com-box": true,
							"well-ori-display__flex-row--sb": true,
							"well-ori-margin--0": true,
							"well-ori-padding--small": true,
							"well-com-card-inline": true
						};
						
					case "avatar":
						return {
							"well-com-box": true,
							"well-ori-display__flex-row--sb": true,
							"well-ori-margin--0": true,
							"well-ori-padding--normal": true,
							"well-com-card-inline": true
						};
				}
			},
			
			cardInlineTitleCls: function () {
				switch ( this.mode )
				{
					case "default":
						return {
							"well-ori-width--15": true,
							"well-com-card-inline__title": true
						};
						
					case "avatar":
						return {
							"well-ori-display__flex-row--s": true,
							"well-ori-width--15": true,
							"well-com-card-inline__title": true
						};
				}
			},
			
			cardInlineDes1Cls: function () {
				switch ( this.mode )
				{
					case "default":
						return {
							"well-ori-width--60": true
						};
						
					case "avatar":
						return {
							"well-ori-box-sizing--border": true,
							"well-ori-display__flex-align-self--s": true,
							"well-ori-width--60": true,
							"well-ori-padding--extra-small": true
						};
				}
			},
			
			cardInlineDes2Cls: function () {
				switch ( this.mode )
				{
					case "default":
						return {
							"well-ori-width--15": true,
							"well-com-card-inline__des-2": true
						};
						
					case "avatar":
						return {
							"well-ori-display__flex-align-self--s": true,
							"well-ori-width--15": true,
							"well-ori-text-align--r": true,
							"well-com-card-inline__des-2": true
						};
				}
			}
		},
		
		template: '\
			<div :class="cardInlineCls">\
				<div :class="cardInlineTitleCls">\
					<template v-if="mode === \'default\'">\
						<slot name="title">标题</slot>\
					</template>\
					<template v-else>\
						<img class="well-com-card-inline__title-avatar"\
							 :src="avatar" />\
					</template>\
				</div>\
				<div :class="cardInlineDes1Cls">\
					<template v-if="mode === \'default\'">\
						<slot name="des-1">描述1</slot>\
					</template>\
					<template v-else>\
						<div class="well-com-card-inline__des-1-primary">\
							<slot name="des-1-primary">首要</slot>\
						</div>\
						<div class="well-com-card-inline__des-1-secondary">\
							<slot name="des-1-secondary">次要</slot>\
						</div>\
					</template>\
				</div>\
				<div :class="cardInlineDes2Cls">\
					<slot name="des2">描述2</slot>\
				</div>\
			</div>\
		'
	};

	Vue.component( "well-card-inline", wellCardInline );
	
	/**
	 * carousel
	 */

	var wellCarousel = {
		name: "well-carousel",
		
		props: {
			items: {
				type: Array,
				default: null,
				required: true
			},
			auto: {
				type: Boolean,
				default: true
			},
			delay: {
				type: Number,
				default: 3000
			},
			height: {
				type: [ String, Number ],
				default: "default"
			},
			activeColor: {
				type: String,
				default: "default"
			}
		},
		
		data: function () {
			return {
				itemsCount: this.items.length,
				activeItemIndex: 1,
				outOfRange: false,
				timerId: -1,
				transitionEnd: true,
				prevBtnHovered: false,
				nextBtnHovered: false,
				indicatorWrapperHovered: false,
				indicators: null
			};
		},
		
		computed: {
			carouselStyle: function () {
				return {
					"height": this.height === "default" ? "" : this.height + "px"
				};
			},
			
			carouselWrapperCls: function () {
				return {
					"well-com-carousel__wrapper": true,
					"well-com-carousel__wrapper--transition": !this.outOfRange
				};
			},
			
			carouselWrapperStyle: function () {
				return {
					"left": -100 * this.activeItemIndex + "%",
					"width": ( 2 + this.itemsCount ) * 100 + "%"
				};
			},
			
			carouselItemPrevToggleIconCls: function () {
				return {
					"well-com-carousel__item-toggle-icon": true,
					"fa": true,
					"fas": true,
					"fa-angle-left": true,
					"well-com-carousel__item-prev-toggle-icon--hover": this.prevBtnHovered
				};
			},
			
			carouselItemNextToggleIconCls: function () {
				return {
					"well-com-carousel__item-toggle-icon": true,
					"fa": true,
					"fas": true,
					"fa-angle-right": true,
					"well-com-carousel__item-next-toggle-icon--hover": this.nextBtnHovered
				};
			},
			
			carouselIndicatorWrapperCls: function () {
				return {
					"well-com-carousel__indicator-wrapper": true,
					"well-com-carousel__indicator-wrapper--hover": this.indicatorWrapperHovered
				};
			},
			
			carouselItemStyle: function () {
				return {
					"width": 100 / ( this.itemsCount + 2 ) + "%"
				};
			},
		},
		
		created: function () {
			/**
			 * 初始化 itemsCount
			 */
			var temp = [],
				i = 0;
				
			for ( ; i < this.itemsCount; ++i )
			{
				if ( i === 0 )
				{
					temp.push( { hovered: false, active: true } );
				}
				else
				{
					temp.push( { hovered: false, active: false } );
				}
			}
			
			this.indicators = temp;
			
			/**
			 * 根据 activeColor 的值决定是否需要新建样式表并添加相应规则
			 */
			if ( this.activeColor !== "default" )
			{
				wellComHelper.insertCssRule( [
					".well-com-carousel__indicator-item--active {\
						border-color: " + this.activeColor + " !important;\
						background-color: " + this.activeColor + " !important;\
					}",
					".well-com-carousel__item-prev-toggle-icon--hover {\
						color: " + this.activeColor + " !important;\
					}",
					".well-com-carousel__item-next-toggle-icon--hover {\
						color: " + this.activeColor + " !important;\
					}"
				] );
			}
		},
		
		mounted: function () {
			this.autoPlay();
		},
		
		beforeDestroy: function () {
			this.pause();
		},
		
		methods: {
			prev: function () {
				if ( !this.transitionEnd )
				{
					return;
				}
				
				this.transitionEnd = false;
				
				if ( this.outOfRange )
				{
					this.outOfRange = false;
				}
				
				--this.activeItemIndex;
			},
			
			next: function () {
				if ( !this.transitionEnd )
				{
					return;
				}
				
				this.transitionEnd = false;
				
				if ( this.outOfRange )
				{
					this.outOfRange = false;
				}
				
				++this.activeItemIndex;
			},
			
			go: function ( toIndex ) {
				if ( toIndex === this.activeItemIndex )
				{
					return;
				}
			
				if ( !this.transitionEnd )
				{
					return;
				}
				
				this.transitionEnd = false;
				
				if ( this.outOfRange )
				{
					this.outOfRange = false;
				}
				
				this.activeItemIndex = toIndex;
			},
			
			autoPlay: function () {
				if ( this.auto )
				{
					this.timerId = setTimeout( ( function () {
						this.next();
						this.autoPlay();
					} ).bind( this ), this.delay );
				}
			},
			
			pause: function () {
				if ( this.auto )
				{
					clearTimeout( this.timerId );
				}
			},
			
			carouselWrapperTransitionEndHandler: function () {
				if ( this.activeItemIndex === this.itemsCount + 1 )
				{
					this.outOfRange = true;
					this.$nextTick( function () {
						this.activeItemIndex = 1;
						this.transitionEnd = true;
						
						this.indicators.forEach( function ( item, index, arr ) {
							if ( index === 0 )
							{
								this.indicators[ index ].active = true;
							}
							else
							{
								this.indicators[ index ].active = false;
							}
						}, this );
					} );
				}
				else if ( this.activeItemIndex === 0 )
				{
					this.outOfRange = true;
					this.$nextTick( function () {
						this.activeItemIndex = this.itemsCount;
						this.transitionEnd = true;
						
						this.indicators.forEach( function ( item, index, arr ) {
							if ( index === this.itemsCount - 1 )
							{
								this.indicators[ index ].active = true;
							}
							else
							{
								this.indicators[ index ].active = false;
							}
						}, this );
					} );
				}
				else
				{
					this.transitionEnd = true;
					
					this.indicators.forEach( function ( item, index, arr ) {
						if ( index === this.activeItemIndex - 1 )
						{
							this.indicators[ index ].active = true;
						}
						else
						{
							this.indicators[ index ].active = false;
						}
					}, this );
				}
			},
			
			prevBtnMouseEnterHandler: function () {
				this.prevBtnHovered = true;
			},
			
			prevBtnMouseLeaveHandler: function () {
				this.prevBtnHovered = false;
			},
			
			nextBtnMouseEnterHandler: function () {
				this.nextBtnHovered = true;
			},
			
			nextBtnMouseLeaveHandler: function () {
				this.nextBtnHovered = false;
			},
			
			indicatorWrapperMouseEnterHandler: function () {
				this.indicatorWrapperHovered = true;
			},
			
			indicatorWrapperMouseLeaveHandler: function () {
				this.indicatorWrapperHovered = false;
			},
			
			indicatorItemMouseEnterHandler: function ( index ) {
				for ( var i = 0; i < this.itemsCount; ++i )
				{
					if ( index === i )
					{
						this.indicators[ i ].hovered = true;
					}
					else
					{
						this.indicators[ i ].hovered = false;
					}
				}
			},
			
			indicatorItemMouseLeaveHandler: function ( index ) {
				this.indicators[ index ].hovered = false;
			}
		},
		
		template: '\
			<div class="well-com-carousel"\
				 :style="carouselStyle"\
				 @mouseenter="pause"\
				 @mouseleave="autoPlay">\
				<div class="well-com-carousel__item-prev-toggle"\
					 @click="prev"\
					 @mouseenter="prevBtnMouseEnterHandler"\
					 @mouseleave="prevBtnMouseLeaveHandler">\
					<i :class="carouselItemPrevToggleIconCls"></i>\
				</div>\
				<div class="well-com-carousel__item-next-toggle"\
					 @click="next"\
					 @mouseenter="nextBtnMouseEnterHandler"\
					 @mouseleave="nextBtnMouseLeaveHandler">\
					<i :class="carouselItemNextToggleIconCls"></i>\
				</div>\
				<div :class="carouselIndicatorWrapperCls"\
					 @mouseenter="indicatorWrapperMouseEnterHandler"\
					 @mouseleave="indicatorWrapperMouseLeaveHandler">\
					<div :class="[\
							\'well-com-carousel__indicator-item\',\
							indicators[ index ].hovered && !indicators[ index ].active ? \'well-com-carousel__indicator-item--hover\' : \'\',\
							indicators[ index ].active ? \'well-com-carousel__indicator-item--active\' : \'\'\
						 ]"\
						 v-for="( item, index ) in itemsCount"\
						 :key="item"\
						 @click="go( item );"\
						 @mouseenter="indicatorItemMouseEnterHandler( index );"\
						 @mouseleave="indicatorItemMouseLeaveHandler( index );"></div>\
				</div>\
				<div :class="carouselWrapperCls"\
					 :style="carouselWrapperStyle"\
					 @transitionend="carouselWrapperTransitionEndHandler">\
					<div class="well-com-carousel__item"\
						 :style="carouselItemStyle">\
						<slot name="last-item" :lastItem="items[ items.length - 1 ]"></slot>\
					</div>\
					<div class="well-com-carousel__item"\
						 :style="carouselItemStyle"\
						 v-for="( item, index ) in items">\
						<slot name="item" :item="item"></slot>\
					</div>\
					<div class="well-com-carousel__item"\
						 :style="carouselItemStyle">\
						<slot name="first-item" :firstItem="items[ 0 ]"></slot>\
					</div>\
				</div>\
			</div>\
		'
	};

	Vue.component( "well-carousel", wellCarousel );
	
	/* */
	
	var wellCarouselMobile = {
		name: "well-carousel-mobile",
		
		props: {
			items: {
				type: Array,
				default: null,
				required: true
			},
			auto: {
				type: Boolean,
				default: true
			},
			delay: {
				type: Number,
				default: 3000
			},
			height: {
				type: [ String, Number ],
				default: "default"
			},
			activeColor: {
				type: String,
				default: "default"
			}
		},
		
		data: function () {
			return {
				itemsCount: this.items.length,
				activeItemIndex: 1,
				outOfRange: false,
				timerId: -1,
				transitionEnd: true,
				prevBtnHovered: false,
				nextBtnHovered: false,
				indicators: null
			};
		},
		
		computed: {
			carouselStyle: function () {
				return {
					"height": this.height === "default" ? "" : this.height + "px"
				};
			},
			
			carouselWrapperCls: function () {
				return {
					"well-com-carousel__wrapper-mobile": true,
					"well-com-carousel__wrapper-mobile--transition": !this.outOfRange
				};
			},
			
			carouselWrapperStyle: function () {
				return {
					"left": -100 * this.activeItemIndex + "%",
					"width": ( 2 + this.itemsCount ) * 100 + "%"
				};
			},
			
			carouselItemPrevToggleIconCls: function () {
				return {
					"well-com-carousel__item-toggle-icon-mobile": true,
					"fa": true,
					"fas": true,
					"fa-angle-left": true,
					"well-com-carousel__item-toggle-icon-mobile--hover": this.prevBtnHovered
				};
			},
			
			carouselItemNextToggleIconCls: function () {
				return {
					"well-com-carousel__item-toggle-icon-mobile": true,
					"fa": true,
					"fas": true,
					"fa-angle-right": true,
					"well-com-carousel__item-toggle-icon-mobile--hover": this.nextBtnHovered
				};
			},
			
			carouselItemStyle: function () {
				return {
					"width": 100 / ( this.itemsCount + 2 ) + "%"
				};
			},
		},
		
		created: function () {
			/**
			 * 初始化 itemsCount
			 */
			let temp = [],
				i = 0;
				
			for ( ; i < this.itemsCount; ++i )
			{
				if ( i === 0 )
				{
					temp.push( { hovered: false, active: true } );
				}
				else
				{
					temp.push( { hovered: false, active: false } );
				}
			}
			
			this.indicators = temp;
			
			/**
			 * 根据 activeColor 的值决定是否需要新建样式表并添加相应规则
			 */
			if ( this.activeColor !== "default" )
			{
				wellComHelper.insertCssRule( [
					".well-com-carousel__indicator-item--active {\
						border-color: " + this.activeColor + " !important;\
						background-color: " + this.activeColor + " !important;\
					}",
					".well-com-carousel__item-toggle-icon-mobile--hover {\
						color: " + this.activeColor + " !important;\
					}"
				] );
			}
		},
		
		mounted: function () {
			this.autoPlay();
		},
		
		beforeDestroy: function () {
			this.pause();
		},
		
		methods: {
			prev: function () {
				if ( !this.transitionEnd )
				{
					return;
				}
				
				this.transitionEnd = false;
				
				if ( this.outOfRange )
				{
					this.outOfRange = false;
				}
				
				--this.activeItemIndex;
			},
			
			next: function () {
				if ( !this.transitionEnd )
				{
					return;
				}
				
				this.transitionEnd = false;
				
				if ( this.outOfRange )
				{
					this.outOfRange = false;
				}
				
				++this.activeItemIndex;
			},
			
			go: function ( toIndex ) {
				if ( toIndex === this.activeItemIndex )
				{
					return;
				}
			
				if ( !this.transitionEnd )
				{
					return;
				}
				
				this.transitionEnd = false;
				
				if ( this.outOfRange )
				{
					this.outOfRange = false;
				}
				
				this.activeItemIndex = toIndex;
			},
			
			autoPlay: function () {
				if ( this.auto )
				{
					this.timerId = setTimeout( ( function () {
						this.next();
						this.autoPlay();
					} ).bind( this ), this.delay );
				}
			},
			
			pause: function () {
				if ( this.auto )
				{
					clearTimeout( this.timerId );
				}
			},
			
			carouselWrapperTransitionEndHandler: function () {
				if ( this.activeItemIndex === this.itemsCount + 1 )
				{
					this.outOfRange = true;
					this.$nextTick( function () {
						this.activeItemIndex = 1;
						this.transitionEnd = true;
						
						this.indicators.forEach( function ( item, index, arr ) {
							if ( index === 0 )
							{
								this.indicators[ index ].active = true;
							}
							else
							{
								this.indicators[ index ].active = false;
							}
						}, this );
					} );
				}
				else if ( this.activeItemIndex === 0 )
				{
					this.outOfRange = true;
					this.$nextTick( function () {
						this.activeItemIndex = this.itemsCount;
						this.transitionEnd = true;
						
						this.indicators.forEach( function ( item, index, arr ) {
							if ( index === this.itemsCount - 1 )
							{
								this.indicators[ index ].active = true;
							}
							else
							{
								this.indicators[ index ].active = false;
							}
						}, this );
					} );
				}
				else
				{
					this.transitionEnd = true;
					
					this.indicators.forEach( function ( item, index, arr ) {
						if ( index === this.activeItemIndex - 1 )
						{
							this.indicators[ index ].active = true;
						}
						else
						{
							this.indicators[ index ].active = false;
						}
					}, this );
				}
			},
			
			prevBtnMouseEnterHandler: function () {
				this.prevBtnHovered = true;
			},
			
			prevBtnMouseLeaveHandler: function () {
				this.prevBtnHovered = false;
			},
			
			nextBtnMouseEnterHandler: function () {
				this.nextBtnHovered = true;
			},
			
			nextBtnMouseLeaveHandler: function () {
				this.nextBtnHovered = false;
			},
			
			indicatorItemMouseEnterHandler: function ( index ) {
				for ( let i = 0; i < this.itemsCount; ++i )
				{
					if ( index === i )
					{
						this.indicators[ i ].hovered = true;
					}
					else
					{
						this.indicators[ i ].hovered = false;
					}
				}
			},
			
			indicatorItemMouseLeaveHandler: function ( index ) {
				this.indicators[ index ].hovered = false;
			}
		},
		
		template: '\
			<div class="well-com-carousel"\
				 :style="carouselStyle"\
				 @touchstart="pause"\
				 @touchend="autoPlay">\
				<div class="well-com-carousel__item-prev-toggle well-ori-tap-highlight--none"\
					 @click="prev"\
					 @touchstart="prevBtnMouseEnterHandler"\
					 @touchend="prevBtnMouseLeaveHandler"\
					 @contextmenu.prevent>\
					<i :class="carouselItemPrevToggleIconCls"></i>\
				</div>\
				<div class="well-com-carousel__item-next-toggle well-ori-tap-highlight--none"\
					 @click="next"\
					 @touchstart="nextBtnMouseEnterHandler"\
					 @touchend="nextBtnMouseLeaveHandler"\
					 @contextmenu.prevent>\
					<i :class="carouselItemNextToggleIconCls"></i>\
				</div>\
				<div class="well-com-carousel__indicator-wrapper">\
					<div :class="[\
							\'well-com-carousel__indicator-item\',\
							\'well-ori-tap-highlight--none\',\
							indicators[ index ].hovered && !indicators[ index ].active ? \'well-com-carousel__indicator-item--hover\' : \'\',\
							indicators[ index ].active ? \'well-com-carousel__indicator-item--active\' : \'\'\
						 ]"\
						 v-for="( item, index ) in itemsCount"\
						 :key="item"\
						 @click="go( item );"\
						 @touchstart="indicatorItemMouseEnterHandler( index );"\
						 @touchend="indicatorItemMouseLeaveHandler( index );"\
						 @contextmenu.prevent></div>\
				</div>\
				<div :class="carouselWrapperCls"\
					 :style="carouselWrapperStyle"\
					 @transitionend="carouselWrapperTransitionEndHandler">\
					<div class="well-com-carousel__item"\
						 :style="carouselItemStyle">\
						<slot name="last-item" :lastItem="items[ items.length - 1 ]"></slot>\
					</div>\
					<div class="well-com-carousel__item"\
						 :style="carouselItemStyle"\
						 v-for="( item, index ) in items">\
						<slot name="item" :item="item"></slot>\
					</div>\
					<div class="well-com-carousel__item"\
						 :style="carouselItemStyle">\
						<slot name="first-item" :firstItem="items[ 0 ]"></slot>\
					</div>\
				</div>\
			</div>\
		'
	};

	Vue.component( "well-carousel-mobile", wellCarouselMobile );
	
	/* */
	
	var wellCarouselTouch = {
		name: "well-carousel-touch",
		
		props: {
			items: {
				type: Array,
				default: null,
				required: true
			},
			auto: {
				type: Boolean,
				default: true
			},
			delay: {
				type: Number,
				default: 3000
			},
			height: {
				type: [ String, Number ],
				default: "default"
			},
			position: {
				type: String,
				default: "right"
			},
			activeColor: {
				type: String,
				default: "default"
			}
		},
		
		data: function () {
			return {
				itemsCount: this.items.length,
				activeItemIndex: 1,
				outOfRange: false,
				timerId: -1,
				transitionEnd: true,
				indicatorWrapperHovered: false,
				indicators: null,
				carouselWidth: 0,
				touchEnd: true,
				transitionDisabledUpdated: false,
				transitionEnabledUpdated: true,
				touchStartX: -1,
				touchMoveX: -1,
				touchMoveDis: 0,
				touchTime: 0
			};
		},
		
		computed: {
			carouselStyle: function () {
				return {
					"height": this.height === "default" ? "" : this.height + "px"
				};
			},
			
			carouselIndicatorWrapperCls: function () {
				return {
					"well-com-carousel__indicator-wrapper-touch": true,
					"well-com-carousel__indicator-wrapper-touch--left": this.position === "left",
					"well-com-carousel__indicator-wrapper-touch--center": this.position === "center",
					"well-com-carousel__indicator-wrapper-touch--right": this.position === "right"
				};
			},
			
			carouselWrapperCls: function () {
				return {
					"well-com-carousel__wrapper-mobile": true,
					"well-com-carousel__wrapper-mobile--transition": !this.outOfRange && this.touchEnd
				};
			},
			
			carouselWrapperStyle: function () {
				return {
					"left": "calc( " + -100 * this.activeItemIndex + "% + " + this.touchMoveDis + "px )",
					"width": ( 2 + this.itemsCount ) * 100 + "%"
				};
			},
			
			carouselItemStyle: function () {
				return {
					"width": 100 / ( this.itemsCount + 2 ) + "%"
				};
			}
		},
		
		created: function () {
			/**
			 * 初始化 itemsCount
			 */
			let temp = [],
				i = 0;
				
			for ( ; i < this.itemsCount; ++i )
			{
				if ( i === 0 )
				{
					temp.push( { active: true } );
				}
				else
				{
					temp.push( { active: false } );
				}
			}
			
			this.indicators = temp;
			
			/**
			 * 根据 activeColor 的值决定是否需要新建样式表并添加相应规则
			 */
			if ( this.activeColor !== "default" )
			{
				wellComHelper.insertCssRule( [
					".well-com-carousel__indicator-item--active {\
						border-color: " + this.activeColor + " !important;\
						background-color: " + this.activeColor + " !important;\
					}"
				] );
			}
		},
		
		mounted: function () {
			this.carouselWidth = this.$el.offsetWidth;
			this.autoPlay();
		},
		
		beforeDestroy: function () {
			this.pause();
		},
		
		methods: {
			next: function () {
				if ( !this.transitionEnd )
				{
					return;
				}
				
				this.transitionEnd = false;
				
				if ( this.outOfRange )
				{
					this.outOfRange = false;
				}
				
				++this.activeItemIndex;
			},
			
			autoPlay: function () {
				if ( this.auto )
				{
					this.timerId = setTimeout( ( function () {
						this.next();
						this.autoPlay();
					} ).bind( this ), this.delay );
				}
			},
			
			pause: function () {
				if ( this.auto )
				{
					clearTimeout( this.timerId );
				}
			},
			
			carouselWrapperTouchStartHandler: function ( evt ) {
				this.pause();
				
				if ( !this.transitionEnabledUpdated )
				{
					return;
				}
				
				if ( !this.transitionEnd )
				{
					return;
				}
			
				this.touchEnd = false;
				this.transitionDisabledUpdated = false;
				this.touchStartX = evt.touches[ 0 ].pageX;
				this.touchTime = new Date().getTime();
				
				this.$nextTick( function () {
					this.transitionDisabledUpdated = true;
				} );
			},
			
			carouselWrapperTouchMoveHandler: function ( evt ) {
				if ( !this.transitionDisabledUpdated )
				{
					return;
				}
				
				if ( Math.abs( this.touchMoveDis ) >= this.carouselWidth )
				{
					return;
				}
				
				this.touchMoveX = evt.touches[ 0 ].pageX;
				this.touchMoveDis = this.touchMoveX - this.touchStartX;
			},
			
			carouselWrapperTouchEndHandler: function ( evt ) {
				this.autoPlay();
			
				this.touchEnd = true;
				this.transitionEnabledUpdated = false;
				this.touchStartX = -1;
				this.touchMoveX = -1;
				this.touchTime = new Date().getTime() - this.touchTime;
				
				this.$nextTick( function () {
					this.transitionEnabledUpdated = true;
					
					if ( !this.transitionEnd )
					{
						this.touchMoveDis = 0;
						this.touchTime = 0;
						return;
					}
					
					if ( this.touchMoveDis !== 0 )
					{
						this.transitionEnd = false;
					}
					
					if ( this.outOfRange )
					{
						this.outOfRange = false;
					}
					
					if ( this.touchMoveDis < 0 && this.touchTime <= 100 )
					{
						++this.activeItemIndex;
					}
					else if ( this.touchMoveDis > 0 && this.touchTime <= 100 )
					{
						--this.activeItemIndex;
					}
					else if ( this.touchMoveDis <= -this.carouselWidth * 0.4 )
					{
						++this.activeItemIndex;
					}
					else if ( this.touchMoveDis >= this.carouselWidth * 0.4 )
					{
						--this.activeItemIndex;
					}
					
					this.touchMoveDis = 0;
					this.touchTime = 0;
				} );
			},
			
			carouselWrapperTransitionEndHandler: function () {
				if ( this.activeItemIndex === this.itemsCount + 1 )
				{
					this.outOfRange = true;
					this.$nextTick( function () {
						this.activeItemIndex = 1;
						this.transitionEnd = true;
						
						this.indicators.forEach( function ( item, index, arr ) {
							if ( index === 0 )
							{
								this.indicators[ index ].active = true;
							}
							else
							{
								this.indicators[ index ].active = false;
							}
						}, this );
					} );
				}
				else if ( this.activeItemIndex === 0 )
				{
					this.outOfRange = true;
					this.$nextTick( function () {
						this.activeItemIndex = this.itemsCount;
						this.transitionEnd = true;
						
						this.indicators.forEach( function ( item, index, arr ) {
							if ( index === this.itemsCount - 1 )
							{
								this.indicators[ index ].active = true;
							}
							else
							{
								this.indicators[ index ].active = false;
							}
						}, this );
					} );
				}
				else
				{
					this.transitionEnd = true;
					
					this.indicators.forEach( function ( item, index, arr ) {
						if ( index === this.activeItemIndex - 1 )
						{
							this.indicators[ index ].active = true;
						}
						else
						{
							this.indicators[ index ].active = false;
						}
					}, this );
				}
			}
		},
		
		template: '\
			<div class="well-com-carousel"\
				 :style="carouselStyle">\
				<div :class="carouselIndicatorWrapperCls">\
					<div :class="[\
							\'well-com-carousel__indicator-item\',\
							\'well-com-carousel__indicator-item-mobile\',\
							\'well-com-carousel__indicator-item-mobile--touch\',\
							\'well-ori-tap-highlight--none\',\
							indicators[ index ].active ? \'well-com-carousel__indicator-item--active\' : \'\'\
						 ]"\
						 v-for="( item, index ) in itemsCount"\
						 :key="item"\
						 @contextmenu.prevent></div>\
				</div>\
				<div :class="carouselWrapperCls"\
					 :style="carouselWrapperStyle"\
					 @touchstart="carouselWrapperTouchStartHandler( $event );"\
					 @touchmove="carouselWrapperTouchMoveHandler( $event );"\
					 @touchend="carouselWrapperTouchEndHandler( $event );"\
					 @transitionend="carouselWrapperTransitionEndHandler">\
					<div class="well-com-carousel__item"\
						 :style="carouselItemStyle">\
						<slot name="last-item" :lastItem="items[ items.length - 1 ]"></slot>\
					</div>\
					<div class="well-com-carousel__item"\
						 :style="carouselItemStyle"\
						 v-for="( item, index ) in items">\
						<slot name="item" :item="item"></slot>\
					</div>\
					<div class="well-com-carousel__item"\
						 :style="carouselItemStyle">\
						<slot name="first-item" :firstItem="items[ 0 ]"></slot>\
					</div>\
				</div>\
			</div>\
		'
	};

	Vue.component( "well-carousel-touch", wellCarouselTouch );
	
	/**
	 * counter
	 */

	var wellCounter = {
		name: "well-counter",
		
		props: {
			value: {
				type: [ Number, String ],
				default: ""
			},
			maxCount: {
				type: Number,
				default: 9999,
				validator: function ( val ) {
					if ( val <= 0 )
					{
						console.warn( "[ counter 组件渲染出错提醒 ] : 最大计数( maxCount = " + val + " )不应该小于或者等于 0。" );
					}
					return val > 0;
				}
			}
		},
		
		computed: {
			counterCls: function () {
				return {
					"well-com-counter": true,
					"well-com-counter--dot": this.value === ""
				};
			},
			
			valueOutput: function () {
				if ( typeof this.value === "string" )
				{
					return this.value;
				}
				else if ( typeof this.value === "number" )
				{
					if ( this.value > this.maxCount )
					{
						return this.maxCount;
					}
					else if ( -this.value > this.maxCount )
					{
						return -this.maxCount;
					}
					else
					{
						return this.value;
					}
				}
			}
		},
		
		template: '\
			<div :class="counterCls">\
				{{ valueOutput }}<span v-if="typeof this.value === \'number\' && ( this.value > this.maxCount || -this.value > this.maxCount )"\
									   class="well-com-counter__plus">+</span>\
			</div>\
		'
	};

	Vue.component( "well-counter", wellCounter );
	
	/**
	 * form
	 */
	
	var wellTxt = {
		name: "well-txt",
		
		mixins: wellComHelper.wellComMixin( {
			data: true
		} ),
		
		props: {
			type: {
				type: String,
				default: "text"
			},
			
			hint: {
				type: String,
				default: ""
			},
			
			errorHandler: {
				type: Function,
				default: function () {
					return "";
				}
			},
			
			passwordVisible: {
				type: Boolean,
				default: false
			}
		},
		
		data: function () {
			return {
				wellComTxtId: "",
				errMsg: "",
				typeSelf: this.type
			};
		},
		
		computed: {
			wellComTxtLabelCls: function () {
				return {
					"well-com-txt__label": true,
					"well-com-txt__label--mobile": this.wellComData.isMobile
				};
			},
			
			wellComTxtInputCls: function () {
				return {
					"well-com-txt__input": true,
					"well-com-txt__input--mobile": this.wellComData.isMobile,
					"well-com-txt__input--error": this.errMsg
				};
			},
			
			wellComTxtInputWrapperCls: function () {
				return {
					"well-com-txt__input-wrapper": true,
					"well-com-txt__input-wrapper--mobile": this.wellComData.isMobile
				};
			},
			
			wellComTxtInputPasswordToggleIconCls: function () {
				return {
					"well-com-txt__input-password-toggle-icon": true,
					"fa": true,
					"fas": true,
					"fa-eye": this.typeSelf === "password",
					"fa-eye-slash": this.typeSelf === "text"
				};
			},
			
			wellComTxtErrorCls: function () {
				return {
					"well-com-txt__error": true,
					"well-com-txt__error--mobile": this.wellComData.isMobile
				};
			}
		},
		
		created: function () {
			this.wellComTxtId = "well-com-txt-" + ++wellComHelper.wellComGlobal.txt.idCounter;
		},
		
		methods: {
			inputHandler: function ( val ) {
				this.errMsg = this.errorHandler( val );
				
				if ( !this.errMsg )
				{
					this.$emit( "valid-input", val );
				}
			},
			
			togglePassword: function () {
				if ( this.typeSelf === "password" )
				{
					this.typeSelf = "text";
				}
				else if ( this.typeSelf === "text" )
				{
					this.typeSelf = "password";
				}
			}
		},
		
		template: '\
			<div class="well-com-txt">\
				<label\
					:class="wellComTxtLabelCls"\
					:for="wellComTxtId"\
				>\
					<slot name="label-txt">标签</slot>\
				</label>\
				<input\
					v-if="!passwordVisible"\
					:type="type"\
					:class="wellComTxtInputCls"\
					:id="wellComTxtId"\
					:placeholder="hint"\
					@input="inputHandler( $event.target.value );"\
				/>\
				<div\
					v-else\
					:class="wellComTxtInputWrapperCls"\
				>\
					<input\
						:type="typeSelf"\
						:class="wellComTxtInputCls"\
						:id="wellComTxtId"\
						:placeholder="hint"\
						@input="inputHandler( $event.target.value );"\
					/>\
					<div\
						class="well-com-txt__input-password-toggle"\
						@click="togglePassword"><i :class="wellComTxtInputPasswordToggleIconCls"></i></div>\
				</div>\
				<div\
					v-show="errMsg"\
					:class="wellComTxtErrorCls"\
				>{{ errMsg }}</div>\
			</div>\
		'
	};

	Vue.component( "well-txt", wellTxt );
	
	/* */

	var wellRadio = {
		name: "well-radio",
		
		props: {
			name: {
				type: String,
				default: ""
			},
			value: {
				type: String,
				default: ""
			},
			thin: {
				type: Boolean,
				default: false
			}
		},
		
		data: function () {
			return {
				radioId: ""
			};
		},
		
		computed: {
			radioLabelCls: function () {
				return {
					"well-com-radio__label": true,
					"well-com-radio__label--thin": this.thin
				};
			}
		},
		
		created: function () {
			this.radioId = "radio-" + ++wellComHelper.wellComGlobal.radio.idCounter;
		},
		
		template: '\
			<div class="well-com-radio">\
				<input\
					class="well-com-radio__input"\
					:id="radioId"\
					type="radio"\
					:name="name"\
					:value="value"\
					@change="$emit( \'change\', $event.target.value );"\
				/>\
				<label\
					:class="radioLabelCls"\
					:for="radioId">\
					<slot>{{ radioId }} label</slot>\
				</label>\
			</div>\
		'
	};

	Vue.component( "well-radio", wellRadio );
	
	/* */
	
	var wellCheckbox = {
		name: "well-checkbox",
		
		props: {
			name: {
				type: String,
				default: ""
			},
			value: {
				type: String,
				default: ""
			},
			bindValue: {
				type: Array,
				default: null
			},
			thin: {
				type: Boolean,
				default: false
			}
		},
		
		data: function () {
			return {
				checkboxId: ""
			};
		},
		
		computed: {
			checkboxLabelCls: function () {
				return {
					"well-com-checkbox__label": true,
					"well-com-checkbox__label--thin": this.thin
				};
			}
		},
		
		created: function () {
			this.checkboxId = "checkbox-" + ++wellComHelper.wellComGlobal.checkbox.idCounter;
		},
		
		template: '\
			<div class="well-com-checkbox">\
				<input\
					class="well-com-checkbox__input"\
					:id="checkboxId"\
					type="checkbox"\
					:name="name"\
					:value="value"\
					@change="$emit( \'change\', bindValue, $event.target.value );"\
				/>\
				<label\
					:class="checkboxLabelCls"\
					:for="checkboxId">\
					<slot>{{ checkboxId }} label</slot>\
				</label>\
			</div>\
		'
	};

	Vue.component( "well-checkbox", wellCheckbox );
	
	/* */

	var wellFile = {
		name: "well-file",
		
		mixins: wellComHelper.wellComMixin( {
			components: [ "file" ]
		} ),
		
		props: {
			name: {
				type: String,
				default: "file"
			},
			multiple: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			upload: {
				type: Boolean,
				default: false
			},
			url: {
				type: String,
				default: ""
			},
			thin: {
				type: Boolean,
				default: false
			},
			acceptTypes: {
				type: Array,
				default: null
			},
			maxSize: {
				type: Number,
				default: Infinity
			}
		},
		
		data: function () {
			return {
				fileId: "",
				fileSelected: false,
				fileCount: 0,
				fileTypeNeedToValidate: false,
				fileSizeNeedToValidate: false,
				fileTypeInvalid: false,
				fileSizeInvalid: false,
				fileData: null,
				ajax: null,
				uploadStart: false,
				uploading: false,
				uploadSuccess: false,
				uploadFail: false,
				timerId: -1
			};
		},
		
		computed: {
			fileLabelCls: function () {
				return {
					"well-com-file__label": true,
					"well-com-file__label--thin": this.thin,
					"well-com-file__label--selected": this.fileSelected,
					"well-com-file__label--disabled": this.disabled,
					"well-com-file__label--uploading": this.uploading
				};
			},
			
			iconCls: function () {
				return {
					"well-com-file__label-icon": true,
					"fa": true,
					"fas": true,
					"fa-file": !this.multiple && !this.uploadSuccess && !this.uploadFail,
					"fa-copy": this.multiple && !this.uploadSuccess && !this.uploadFail,
					"fa-check-circle": this.uploadSuccess,
					"fa-times-circle": this.fileTypeInvalid || this.fileSizeInvalid || this.uploadFail
				};
			}
		},
		
		created: function () {
			this.fileId = "file-" + ++wellComHelper.wellComGlobal.file.idCounter;
			
			if ( this.upload )
			{
				this.ajax = new wellComHelper.SimpleAjax( "file" );
			}
			
			this.fileTypeNeedToValidate = this.acceptTypes && Array.isArray( this.acceptTypes );
			this.fileSizeNeedToValidate = typeof this.maxSize === "number" && this.maxSize > 0;
		},
		
		beforeDestroy: function () {
			clearTimeout( this.timerId );
			this.ajax.destroy();
		},
		
		methods: {
			changeHandler: function ( evt ) {
				var files = evt.target.files,
					i,
					len = files.length;
				
				this.fileTypeInvalid = false;
				this.fileSizeInvalid = false;
				
				if ( len === 0 )
				{
					this.fileSelected = false;
				}
				else
				{
					this.fileSelected = true;
					this.fileCount = len;
					
					for ( i = 0; i < len; ++i )
					{
						if ( this.fileTypeNeedToValidate && !this.wellComFileTypeValidator( this.acceptTypes, files[ i ].type ) )
						{
							this.fileTypeInvalid = true;
							return;
						}
						
						if ( this.fileSizeNeedToValidate && !this.wellComFileSizeValidator( this.maxSize, files[ i ].size ) )
						{
							this.fileSizeInvalid = true;
							return;
						}
					}
					
					this.fileData = new FormData();
					
					for ( i = 0; i < len; ++i )
					{
						this.fileData.append( this.name + "-" + i, files[ i ] );
					}
					
					if ( this.upload )
					{
						this.doUpload();
					}
					else
					{
						this.$emit( "select", this.fileData );
					}
				}
			},
			
			doUpload: function () {
				this.uploadStart = true;
				this.uploading = true;
				this.uploadSuccess = false;
				this.uploadFail = false;
				
				this.ajax.request( {
					method: "post",
					url: this.url,
					data: this.fileData,
					success: function ( data ) {
						this.uploading = false;
						this.uploadSuccess = true;
						this.fileData = null;
						
						this.$emit( "upload-success", data );
						
						this.timerId = setTimeout( ( function () {
							this.fileSelected = false;
							this.uploadStart = false;
							this.uploadSuccess = false;
						} ).bind( this ), 3000 );
					},
					fail: function ( errCode ) {
						this.uploading = false;
						this.uploadFail = true;
						
						this.$emit( "upload-fail", errCode );
					},
					thisInCallback: this
				} );
			},
			
			cancelUpload: function () {
				this.fileSelected = false;
				this.uploadStart = false;
				this.uploadFail = false;
				this.fileData = null;
			}
		},
		
		template: '\
			<div class="well-com-file">\
				<input\
					class="well-com-file__input"\
					:id="fileId"\
					type="file"\
					:multiple="multiple"\
					:disabled="disabled || uploadStart"\
					@change="changeHandler( $event );"\
				/>\
				<label\
					:class="fileLabelCls"\
					:for="fileId">\
					<i :class="iconCls"></i>\
					<span class="well-com-file__label-txt">\
						<template v-if="!multiple && !fileSelected && !uploadStart">\
							<slot name="select-txt">选择文件</slot>\
						</template>\
						<template v-else-if="multiple && !fileSelected && !uploadStart">\
							<slot name="select-txt">选择多个文件</slot>\
						</template>\
						<template v-if="!uploadStart && fileSelected && fileTypeInvalid">\
							<slot name="selected-err-type-txt">所选文件的类型不符合要求</slot>\
							<span class="well-com-file__label-reselect">重新选择</span>\
						</template>\
						<template v-else-if="!uploadStart && fileSelected && fileSizeInvalid">\
							<slot name="selected-err-size-txt">所选文件的大小不符合要求</slot>\
							<span class="well-com-file__label-reselect">重新选择</span>\
						</template>\
						<template v-else-if="!uploadStart && !multiple && fileSelected">\
							<slot name="selected-txt">文件已经选择</slot>\
						</template>\
						<template v-else-if="!uploadStart && multiple && fileSelected">\
							<slot name="selected-txt">已经选择了 {{ fileCount }} 个文件</slot>\
						</template>\
						<template v-if="uploading">\
							<slot name="uploading-txt">文件正在上传...</slot>\
						</template>\
						<template v-if="uploadSuccess">\
							<slot name="upload-success-txt">文件上传成功</slot>\
						</template>\
						<template v-if="uploadFail">\
							<slot name="upload-fail-txt">文件上传失败</slot>\
						</template>\
					</span>\
					<template v-if="uploadFail">\
						<span\
							class="well-com-file__label-retry"\
							@click="doUpload">重新上传</span>\
						<span\
							class="well-com-file__label-cancel"\
							@click.prevent="cancelUpload">取消上传</span>\
					</template>\
				</label>\
			</div>\
		'
	};

	Vue.component( "well-file", wellFile );
	
	/**
	 * infinite-scroll
	 */
	 
	var wellInfiniteScroll = {
		name: "well-infinite-scroll",
		
		props: {
			hideScrollbar: {
				type: Boolean,
				default: false
			},
			size: {
				type: String,
				default: ""
			},
			distance: {
				type: Number,
				default: 0
			},
			requesting: {
				type: Boolean,
				default: false,
				required: true
			},
			noMoreItems: {
				type: Boolean,
				default: false,
				required: true
			}
		},
		
		data: function () {
			return {
				containerHeight: 0,
				wrapper: null,
				containerLastScrollTop: 0
			};
		},
		
		computed: {
			infiniteScrollCls: function () {
				return {
					"well-com-infinite-scroll": true,
					"well-ori-hide-scrollbar": this.hideScrollbar,
					"well-com-infinite-scroll--extra-small": this.size === "extra-small",
					"well-com-infinite-scroll--small": this.size === "small"
				};
			}
		},
		
		mounted: function () {
			this.containerHeight = this.$el.offsetHeight;
			this.wrapper = this.$el.firstElementChild;
		},
		
		methods: {
			scrollHandler: function () {
				if ( this.noMoreItems )
				{
					return;
				}
				
				if ( this.requesting )
				{
					return;
				}
				
				let containerScrollTop = this.$el.scrollTop,
					wrapperHeight = this.wrapper.offsetHeight;
				
				if ( containerScrollTop < this.containerLastScrollTop )
				{
					this.containerLastScrollTop = containerScrollTop;
					return;
				}
				else
				{
					this.containerLastScrollTop = containerScrollTop;
				}
					
				if ( this.containerHeight + containerScrollTop >= wrapperHeight - this.distance )
				{
					this.$emit( "request" );
				}
			}
		},
		
		template: '\
			<div :class="infiniteScrollCls"\
				 @scroll="scrollHandler">\
				<div class="well-com-infinite-scroll__wrapper">\
					<slot name="items"></slot>\
				</div>\
				<slot name="loading">\
					<well-loading v-if="requesting" />\
				</slot>\
				<div v-if="noMoreItems"\
					 class="well-com-infinite-scroll__no-more-items-tip">\
					<slot name="no-more-items-tip">已滚动到最底部</slot>\
				</div>\
			</div>\
		'
	};

	Vue.component( "well-infinite-scroll", wellInfiniteScroll );
	
	/* */
	
	var wellInfiniteScrollDemo = {
		name: "well-infinite-scroll-demo",
		
		props: {
			hideScrollbar: {
				type: Boolean,
				default: false
			},
			size: {
				type: String,
				default: ""
			},
			distance: {
				type: Number,
				default: 0
			},
			operate: {
				type: Function,
				default: function () {
					console.log( "infinite-scroll demo operation" );
				}
			},
			delay: {
				type: Number,
				default: 1000
			}
		},
		
		data: function () {
			return {
				itemCount: 100,
				requesting: false,
				noMoreItems: false,
				containerHeight: 0,
				wrapper: null,
				wrapperHeight: 0,
				containerLastScrollTop: 0
			};
		},
		
		computed: {
			infiniteScrollCls: function () {
				return {
					"well-com-infinite-scroll": true,
					"well-ori-hide-scrollbar": this.hideScrollbar,
					"well-com-infinite-scroll--extra-small": this.size === "extra-small",
					"well-com-infinite-scroll--small": this.size === "small"
				};
			}
		},
		
		mounted: function () {
			this.containerHeight = this.$el.offsetHeight;
			this.wrapper = this.$el.firstElementChild;
			this.wrapperHeight = this.wrapper.offsetHeight;
		},
		
		methods: {
			test: function () {
				this.requesting = true;
				
				setTimeout( ( function () {
					this.operate();
					
					if ( this.itemCount >= 200 )
					{
						this.requesting = false;
						this.noMoreItems = true;
						return;
					}
					
					this.itemCount += 20;
					this.$nextTick( function () {
						this.requesting = false;
						
						this.wrapperHeight = this.wrapper.offsetHeight;
					} );
				} ).bind( this ), this.delay );
			},
			
			scrollHandler: function () {
				if ( this.noMoreItems )
				{
					return;
				}
				
				if ( this.requesting )
				{
					return;
				}
				
				let containerScrollTop = this.$el.scrollTop;
				
				if ( containerScrollTop < this.containerLastScrollTop )
				{
					this.containerLastScrollTop = containerScrollTop;
					return;
				}
				else
				{
					this.containerLastScrollTop = containerScrollTop;
				}
					
				if ( this.containerHeight + containerScrollTop >= this.wrapperHeight - this.distance )
				{
					this.test();
				}
			}
		},
		
		template: '\
			<div :class="infiniteScrollCls"\
				 @scroll="scrollHandler">\
				<div class="well-com-infinite-scroll__wrapper">\
					<div v-for="i in itemCount">{{ i }}</div>\
				</div>\
				<well-loading v-if="requesting" />\
				<div v-if="noMoreItems"\
					 class="well-com-infinite-scroll__no-more-items-tip">\
					<slot name="no-more-items-tip">已滚动到最底部</slot>\
				</div>\
			</div>\
		'
	};

	Vue.component( "well-infinite-scroll-demo", wellInfiniteScrollDemo );
	
	/**
	 * loading
	 */
	 
	var wellLoading = {
		name: "well-loading",
		
		props: {
			size: {
				type: String,
				default: ""
			},
			speed: {
				type: String,
				default: "normal"
			}
		},
		
		data: function () {
			return {
				items: [
					{ light: true },
					{ light: false },
					{ light: false },
					{ light: false }
				],
				lightItemIdx: 0,
				timerId: 0
			};
		},
		
		computed: {
			loadingCls: function () {
				return {
					"well-com-loading": true,
					"well-com-loading--large": this.size === "large"
				};
			},
			delay: function () {
				switch ( this.speed )
				{
					case "normal":
						return 200;
						
					case "slow":
						return 300;
						
					case "fast":
						return 100;
				}
			}
		},
		
		mounted: function () {
			this.run();
		},
		
		beforeDestroy: function () {
			clearTimeout( this.timerId );
		},
		
		methods: {
			run: function () {
				this.timerId = setTimeout( ( function () {
					this.items[ this.lightItemIdx ].light = false;
					
					if ( this.lightItemIdx === 0 )
					{
						this.lightItemIdx = 1;
					}
					else if ( this.lightItemIdx === 1 )
					{
						this.lightItemIdx = 3;
					}
					else if ( this.lightItemIdx === 3 )
					{
						this.lightItemIdx = 2;
					}
					else if ( this.lightItemIdx === 2 )
					{
						this.lightItemIdx = 0;
					}
					
					this.items[ this.lightItemIdx ].light = true;
					
					this.run();
				} ).bind( this ), this.delay );
			}
		},
		
		template: '\
			<div :class="loadingCls">\
				<span v-for="i in items"\
					  :class="[ \'well-com-loading__item\', i.light ? \'well-com-loading__item--light\' : \'\' ]"></span>\
			</div>\
		'
	};

	Vue.component( "well-loading", wellLoading );
	
	/**
	 * menu
	 */
	 
	var wellContextMenu = {
		name: "well-context-menu",
		
		data: function () {
			return {
				offsetWidth: 0,
				offsetHeight: 0
			};
		},
		
		props: {
			size: {
				type: String,
				default: "default"
			},
			mouseX: {
				type: Number,
				default: 0,
				required: true
			},
			mouseY: {
				type: Number,
				default: 0,
				required: true
			},
			show: {
				type: Boolean,
				default: false,
				required: true
			}
		},
		
		computed: {
			contextMenuCls: function () {
				return {
					"well-com-box": true,
					"well-ori-margin--0": true,
					"well-ori-padding-left--0": true,
					"well-ori-padding-right--0": true,
					"well-ori-padding-top--extra-small": true,
					"well-ori-padding-bottom--extra-small": true,
					"well-ori-user-select--none": true,
					"well-com-context-menu": true,
					"well-com-context-menu--large": this.size === "large",
					"well-com-context-menu--extra-large": this.size === "extra-large",
				};
			},
			contextMenuStyle: function () {
				var left = 0,
					top = 0;

				var docScrollLeft = wellComHelper.docScrollDistance( "left" ),
					docScrollTop = wellComHelper.docScrollDistance( "top" );

				var vpRight = wellComHelper.viewportSidePosition( "right" ),
					vpBottom = wellComHelper.viewportSidePosition( "bottom" );
					
				if ( this.mouseX + docScrollLeft > vpRight - this.offsetWidth )
				{
					left = vpRight - this.offsetWidth;
				}
				else
				{
					left = this.mouseX + docScrollLeft;
				}

				if ( this.mouseY + docScrollTop > vpBottom - this.offsetHeight )
				{
					top = this.mouseY + docScrollTop - this.offsetHeight;
				}
				else
				{
					top = this.mouseY + docScrollTop;
				}
				
				return {
					"left": left + "px",
					"top": top + "px"
				};
			}
		},
		
		updated: function () {
			if ( this.offsetWidth === 0 )
			{
				if ( this.$el.offsetWidth && this.$el.offsetWidth > 0 )
				{
					this.offsetWidth = this.$el.offsetWidth;
					this.offsetHeight = this.$el.offsetHeight;
				}
			}		
		},
		
		template: '\
			<transition name="v-fade">\
				<div v-if="show"\
					 :class="contextMenuCls"\
					 :style="contextMenuStyle">\
					<slot></slot>\
				</div>\
			</transition>\
		'
	};

	Vue.component( "well-context-menu", wellContextMenu );

	var wellContextMenuItem = {
		name: "well-context-menu-item",
		
		template: '\
			<div class="well-ori-display__flex-row--s-c well-ori-padding--extra-small well-ori-font__size--small well-com-context-menu__item"\
				 @click.stop="$emit( \'operate\' );">\
				<slot>菜单项</slot>\
			</div>\
		'
	};

	Vue.component( "well-context-menu-item", wellContextMenuItem );
	
	/* */
	
	var wellMenu = {
		name: "well-menu",
		
		props: {
			fa: {
				type: String,
				default: ""
			},
			avatar: {
				type: String,
				default: ""
			},
			size: {
				type: String,
				default: "default"
			},
			position: {
				type: String,
				default: "down-right"
			},
			show: {
				type: Boolean,
				default: false,
				required: true
			}
		},
		
		computed: {
			toggleBtnIconCls: function () {
				switch ( this.fa )
				{
					case "":
						switch ( this.position )
						{
							case "down-right":
							case "right-down":
							case "down-left":
							case "left-down":
								return {
									"well-base-triangle": true,
									"well-base-triangle--down": true
								};
								
							case "up-right":
							case "right-up":
							case "up-left":
							case "left-up":
								return {
									"well-base-triangle": true,
									"well-base-triangle--up": true
								};
						}
						
					case "new":
						switch ( this.position )
						{
							case "down-right":
							case "right-down":
							case "down-left":
							case "left-down":
								return {
									"fas": true,
									"fa-caret-down": true
								};
								
							case "up-right":
							case "right-up":
							case "up-left":
							case "left-up":
								return {
									"fas": true,
									"fa-caret-up": true
								};
						}
						
					case "old":
						switch ( this.position )
						{
							case "down-right":
							case "right-down":
							case "down-left":
							case "left-down":
								return {
									"fa": true,
									"fa-caret-down": true
								};
								
							case "up-right":
							case "right-up":
							case "up-left":
							case "left-up":
								return {
									"fa": true,
									"fa-caret-up": true
								};
						}
				}
			},
			menuCls: function () {
				return {
					"well-com-box": true,
					"well-ori-padding-left--0": true,
					"well-ori-padding-right--0": true,
					"well-ori-padding-top--extra-small": true,
					"well-ori-padding-bottom--extra-small": true,
					"well-ori-border-radius--small": true,
					"well-com-menu": true,
					"well-com-menu--large": this.size === "large",
					"well-com-menu--extra-large": this.size === "extra-large",
					"well-com-menu--down-right": this.position === "down-right" || this.position === "right-down",
					"well-com-menu--down-left": this.position === "down-left" || this.position === "left-down",
					"well-com-menu--up-right": this.position === "up-right" || this.position === "up-down",
					"well-com-menu--up-left": this.position === "up-left" || this.position === "left-up"
				};
			},
		},
		
		template: '\
			<div class="well-base-wrapper-inline well-ori-user-select--none well-com-menu__wrapper">\
				<div class="well-base-wrapper-inline well-ori-margin--0 well-ori-font__size--small well-com-menu__toggle"\
					 @click.stop="$emit( \'toggle\' );">\
					<template v-if="avatar === \'\'">\
						<slot name="toggle-btn-txt">打开菜单</slot>\
						<i v-if="fa === \'\'"\
						   :class="toggleBtnIconCls"></i>\
						<i v-else-if="fa === \'new\'"\
						   :class="toggleBtnIconCls"></i>\
						<i v-else-if="fa === \'old\'"\
						   :class="toggleBtnIconCls"></i>\
					</template>\
					<template v-else>\
						<img class="well-com-menu__toggle-avatar"\
							 :src="avatar" />\
					</template>\
				</div>\
				<transition name="v-fade">\
					<div v-if="show"\
						 :class="menuCls">\
						<slot name="items"></slot>\
					</div>\
				</transition>\
			</div>\
		'
	};

	Vue.component( "well-menu", wellMenu );

	var wellMenuItem = {
		name: "well-menu-item",
		
		template: '\
			<div class="well-ori-display__flex-row--s-c well-ori-padding--extra-small well-ori-font__size--small well-com-menu__item"\
				 @click.stop="$emit( \'operate\' );">\
				<slot>菜单项</slot>\
			</div>\
		'
	};

	Vue.component( "well-menu-item", wellMenuItem );
	
	/**
	 * modal
	 */
	 
	var wellModal = {
		name: "well-modal",
		
		props: {
			size: {
				type: String,
				default: "normal"
			},
			operation: {
				type: Function,
				default: null
			},
			auto: {
				type: Boolean,
				default: false
			},
			open: {
				type: Boolean,
				default: false
			},
			animation: {
				type: Boolean,
				default: false
			}
		},
		
		data: function () {
			return {
				isHide: true,
				isDataOperating: false,
				isDataOperateSuccess: false,
				isDataOperateFail: false,
				isAutoModeCloseBtnShow: false,
				autoModeCloseBtnTimer: null
			};
		},
		
		computed: {
			wrapperCls: function () {
				switch ( this.auto )
				{
					case false:
						return {
							"well-base-wrapper-inline": true,
							"well-ori-margin--0": true
						};
						
					case true:
						return {};
				}
			},
			
			isModalBoxShow: function () {
				switch ( this.auto )
				{
					case false:
						return !this.isHide;
						
					case true:
						return this.open;
				}
			},
			
			modalCls: function () {
				switch ( this.auto )
				{
					case false:
						return {
							"well-com-box": true,
							"well-com-modal": true,
							"well-ori-border-radius--small": true,
							"well-ori-padding--0": true,
							"well-com-modal--small": this.size === "small",
							"well-com-modal--large": this.size === "large",
							"well-com-modal--extra-large": this.size === "extraLarge"
						};
						
					case true:
						return {
							"well-com-box": true,
							"well-ori-display__flex-row--sb-c": true,
							"well-com-modal": true,
							"well-com-modal--small": true
						};
				}
			},
			
			modalBodyCls: function () {
				switch ( this.auto )
				{
					case false:
						return {
							"well-base-wrapper": true,
							"well-ori-padding--small": true,
							"well-com-modal__body": true
						};
						
					case true:
						return {
							"well-com-msg": true,
							"well-com-msg--caution": true,
							"well-com-modal__body": true,
							"well-com-modal__body--msg": true,
							"well-com-modal__body--normal-height": true,
							"well-ori-width--100": true,
							"well-ori-font__size--normal": true
						}
				}
			},
			
			dataOperateResultMsgCls: function () {
				return {
					"well-com-msg": true,
					"well-com-msg--large": true,
					"well-com-msg--success": this.isDataOperateSuccess,
					"well-com-msg--fail": this.isDataOperateFail
				}
			},
			
			dataOperateResultMsgTxt: function () {
				if ( this.isDataOperateSuccess )
				{
					return "数据处理成功";
				}
				else if ( this.isDataOperateFail )
				{
					return "数据处理失败";
				}
				else
				{
					return "数据处理中...";
				}
			}
		},
		
		watch: {
			isHide: function ( newVal, oldVal ) {
				if ( !newVal )
				{
					this.isDataOperating = false;
					this.isDataOperateSuccess = false;
					this.isDataOperateFail = false;
				}
			},
			
			open: function ( newVal, oldVal ) {
				var vm = this;
				
				if ( newVal )
				{
					this.autoModeCloseBtnTimer = setTimeout( function () {
						vm.isAutoModeCloseBtnShow = true;
						clearTimeout( vm.autoModeCloseBtnTimer );
						vm.autoModeCloseBtnTimer = null;
					}, 3000 );
				}
				
				if ( !newVal )
				{
					if ( this.autoModeCloseBtnTimer )
					{
						clearTimeout( this.autoModeCloseBtnTimer );
						this.autoModeCloseBtnTimer = null;
					}
					this.isAutoModeCloseBtnShow = false;
				}
			}
		},
		
		methods: {
			openModal: function () {
				this.isHide = false;
			},
			
			closeModal: function () {
				this.isHide = true;
			},
			
			setDataOperatingOn: function () {
				this.isDataOperating = true;
			},
			
			setDataOperatingOff: function () {
				this.isDataOperating = false;
			},
			
			setDataOperateSuccessOn: function () {
				this.isDataOperateSuccess = true;
			},
			
			setDataOperateSuccessOff: function () {
				this.isDataOperateSuccess = false;
			},
			
			setDataOperateFailOn: function () {
				this.isDataOperateFail = true;
			},
			
			setDataOperateFailOff: function () {
				this.isDataOperateFail = false;
			},
			
			confirm: function () {
				this.setDataOperatingOn();
				
				var vm = this;
				
				this.operation().then( function ( data ) { console.log( data );
					vm.setDataOperateSuccessOn();
					
					setTimeout( function () {					
						vm.closeModal();
					}, 3000 );
				} ).catch( function ( errMsg ) { console.log( errMsg );
					vm.setDataOperateFailOn();
					
					setTimeout( function () {
						vm.closeModal();
					}, 3000 );
				} );
			}
		},
		
		template: '\
			<div :class="wrapperCls">\
				<div v-if="!auto"\
					 class="well-com-btn"\
					 @click="openModal();">\
					<slot name="open-btn-txt">打开模态框</slot>\
				</div>\
				<transition :name="animation ? \'v-fade\' : \'\'">\
					<div v-show="isModalBoxShow"\
						 class="well-com-modal__box">\
						<transition name="v-fade">\
							<div v-if="auto && isAutoModeCloseBtnShow"\
								 class="well-com-btn well-com-btn--round well-ori-margin--large well-com-modal__force-close-btn"\
								 @click="$emit( \'force-close-modal\' )">&times;</div>\
						</transition>\
						<div v-if="!isDataOperating"\
							 :class="modalCls">\
							<div v-if="!auto"\
								 class="well-com-wrapper well-ori-display__flex-row--e-c well-ori-padding--small well-com-modal__header">\
								<div class="well-com-btn well-com-btn--round well-ori-margin--0" @click="closeModal();">&times;</div>\
							</div>\
							<div :class="modalBodyCls">\
								<slot name="body">消息</slot>\
							</div>\
							<div v-if="!auto"\
								 class="well-ori-display__flex-row--sa-c well-ori-margin--0 well-ori-padding--small well-com-modal__footer">\
								<div class="well-com-btn well-com-btn--large well-com-btn--caution" @click="confirm();">\
									<slot name="footer-confirm-btn-txt">确定</slot>\
								</div>\
								<div class="well-com-btn well-com-btn--large" @click="closeModal();">\
									<slot name="footer-close-btn-txt">取消</slot>\
								</div>\
							</div>\
						</div>\
						<div v-else\
							 class="well-com-box well-ori-border-radius--small well-ori-text-align--c">\
							<div v-if="!auto"\
								 :class="dataOperateResultMsgCls">\
								<template v-if="isDataOperateSuccess">\
									<slot name="operate-success-msg">数据处理成功</slot>\
								</template>\
								<template v-else-if="isDataOperateFail">\
									<slot name="operate-fail-msg">数据处理失败</slot>\
								</template>\
								<template v-else>\
									<slot name="operating-msg">数据处理中...</slot>\
								</template>\
							</div>\
						</div>\
					</div>\
				</transition>\
			</div>\
		'
	};

	Vue.component( "well-modal", wellModal );
	
	/**
	 * msg
	 */
	 
	var wellMsg = {
		name: "well-msg",
		
		props: {
			size: {
				type: String,
				default: "default"
			},
			state: {
				type: String,
				default: "default"
			}
		},
		
		computed: {
			msgCls: function () {
				return {
					"well-com-msg": true,
					"well-com-msg--large": this.size === "large",
					"well-com-msg--extra-large": this.size === "extra-large",
					"well-com-msg--success": this.state === "success",
					"well-com-msg--fail": this.state === "fail",
					"well-com-msg--caution": this.state === "caution"
				};
			}
		},
		
		template: '\
			<div :class="msgCls">\
				<slot></slot>\
			</div>\
		'
	};

	Vue.component( "well-msg", wellMsg );
	
	/**
	 * pagination
	 */
	 
	var wellPagination = {
		name: "well-pagination",
		
		mixins: wellComHelper.wellComMixin( {
			components: [ "paginationProgress" ]
		} ),
		
		props: {
			total: {
				type: Number,
				default: 0,
				required: true,
				validator: function ( val ) {
					if ( val < 0 )
					{
						console.warn( "[ pagination 组件渲染出错提醒 ] : 总条目数( total = " + val + " )不应该小于 0。" );
					}
					return val >= 0;
				}
			},
			count: {
				type: Number,
				default: 1,
				required: true,
				validator: function ( val ) {
					if ( val <= 0 )
					{
						console.warn( "[ pagination 组件渲染出错提醒 ] : 每页条目数( count = " + val + " )不应该为 0 或者小于 0。" );
					}
					return val > 0;
				}
			},
			initRequestPage: {
				type: Number,
				default: 1,
				validator: function ( val ) {
					if ( val <= 0 )
					{
						console.warn( "[ pagination 组件渲染出错提醒 ] : 初始请求页数( initRequestPage = " + val + " )不应该为 0 或者小于 0。" );
					}
					return val > 0;
				}
			},
			url: {
				type: String,
				default: ""
			},
			urlParamPage: {
				type: String,
				default: "page"
			},
			align: {
				type: String,
				default: "left"
			}
		},
		
		data: function () {
			return {
				ajax: null,
				pages: 0,
				requestingPage: this.initRequestPage,
				activePage: -1,
				progress: {
					show: false,
					abort: false,
					complete: false,
					userInterfaceUpdated: true
				},
				progressBtnGroup: {
					"1": {},
					"2": {},
					"3": {}
				}
			};
		},
		
		computed: {
			isProgressBtnGroup1Blank: function () {
				return wellComHelper.blankObject( this.progressBtnGroup[ "1" ] );
			},
			
			isProgressBtnGroup2Blank: function () {
				return wellComHelper.blankObject( this.progressBtnGroup[ "2" ] );
			},
			
			isProgressBtnGroup3Blank: function () {
				return wellComHelper.blankObject( this.progressBtnGroup[ "3" ] );
			},
			
			paginationCls: function () {
				return {
					"well-com-pagination": true,
					"well-ori-text-align--c": this.align === "center",
					"well-ori-text-align--r": this.align === "right"
				};
			},
			
			prevBtnCls: function () {
				return {
					"well-com-pagination__progress-trigger-btn": true,
					"well-com-pagination__prev-btn--disabled": this.pages === 0 || this.requestingPage === 1,
					"well-ori-cursor--default": this.pages === 0 || this.requestingPage === 1,
					"well-com-pagination__prev-btn": true
				};
			},
			
			nextBtnCls: function () {
				return {
					"well-com-pagination__progress-trigger-btn": true,
					"well-com-pagination__next-btn--disabled": this.pages === 0 || this.requestingPage === this.pages,
					"well-ori-cursor--default": this.pages === 0 || this.requestingPage === this.pages,
					"well-com-pagination__next-btn": true
				};
			}
		},
		
		created: function () {
			this.ajax = new wellComHelper.SimpleAjax( "pagination" );
			
			this.pages = Math.ceil( this.total / this.count );
			
			if ( this.pages === 0 )
			{
				return;
			}
			
			if ( this.total / this.count < 1 )
			{
				console.warn( "[ pagination 组件渲染出错提醒 ] : 每页条目数( count = " + this.count + " )不应该大于总条目数( total = " + this.total + " )。" );
			}
			
			if ( this.initRequestPage > this.pages )
			{
				console.warn( "[ pagination 组件渲染出错提醒 ] : 初始请求页数( initRequestPage = " + this.initRequestPage + " )不应该大于分页数( " + this.pages + " )。" );
			}
			
			this.request( "init", this.requestingPage );
		},
		
		beforeDestroy: function () {
			this.ajax.destroy();
		},
		
		methods: {
			request: function ( groupNum, btnNum ) {
				if ( groupNum === "prev" && this.requestingPage === 1 )
				{
					return;
				}
				
				if ( groupNum === "next" && this.requestingPage === this.pages )
				{
					return;
				}
				
				if ( this.activePage != btnNum )
				{
					this.wellComPaginationTriggerBtnToggleRequesting( this, btnNum );
				}

				let requestUrl = wellComHelper.addURLParam( this.url, this.urlParamPage, this.requestingPage );
				this.wellComPaginationProgressRun( {
					vm: this,
					props: this.progress,
					operate: function () {
						this.ajax.request( {
							url: requestUrl,
							success: function () {
								this.wellComPaginationProgressDone( this.progress );
								this.wellComPaginationTriggerBtnToggleActive( this, btnNum );
								
								this.$emit( "request-success", JSON.parse( this.ajax.xhr.responseText ) );
							},
							fail: function () {
								this.$emit( "request-fail", "请求 [ " + requestUrl + " ] 失败: " + this.ajax.xhr.status );
							},
							thisInCallback: this
						} );
					},
					cancel: function () {
						this.ajax.cancel();
					},
					isBtnActive: function () {
						if ( groupNum === "init" || groupNum === "prev" || groupNum === "next" )
						{
							return false;
						}
						else
						{
							return this.wellComPaginationTriggerBtnIsActive( this.activePage, btnNum );
						}
					}
				} );
			}
		},
		
		template: '\
			<div :class="paginationCls">\
				<template v-if="pages === 0">\
					<span :class="prevBtnCls">\
						<i class="well-com-pagination__icon well-com-pagination__prev-btn-icon fas fa-angle-left"></i>\
						<span class="well-com-pagination__prev-btn-txt"><slot name="prev-btn-txt"></slot></span>\
					</span>\
					<span class="well-com-pagination__progress-trigger-btn well-com-pagination__zero-btn well-ori-cursor--default">0</span>\
					<span :class="nextBtnCls">\
						<span class="well-com-pagination__next-btn-txt"><slot name="next-btn-txt"></slot></span>\
						<i class="well-com-pagination__icon well-com-pagination__next-btn-icon fas fa-angle-right"></i>\
					</span>\
				</template>\
				<template v-else>\
					<well-pagination-progress\
						:show="progress.show"\
						:abort="progress.abort"\
					/>\
					<span :class="prevBtnCls"\
						  @click="request( \'prev\', requestingPage - 1 );">\
						<i class="well-com-pagination__icon well-com-pagination__prev-btn-icon fas fa-angle-left"></i>\
						<span class="well-com-pagination__prev-btn-txt"><slot name="prev-btn-txt"></slot></span>\
					</span>\
					<template v-if="!isProgressBtnGroup1Blank">\
						<well-pagination-progress-trigger-btn\
							v-for="( v, k, i ) in progressBtnGroup[ \'1\' ]"\
							:key="k"\
							:requesting="v.requesting"\
							:active="v.active"\
							@click.native="request( \'1\', k );">{{ k }}</well-pagination-progress-trigger-btn>\
					</template>\
					<span v-if="pages > 9 && ( ( requestingPage > 5 && requestingPage < ( pages - 4 ) ) || requestingPage >= ( pages - 4 ) )">\
						<i class="well-com-pagination__icon well-com-pagination__icon-ellipsis fas fa-ellipsis-h"></i>\
					</span>\
					<template v-if="!isProgressBtnGroup2Blank">\
						<well-pagination-progress-trigger-btn\
							v-for="( v, k, i ) in progressBtnGroup[ \'2\' ]"\
							:key="k"\
							:requesting="v.requesting"\
							:active="v.active"\
							@click.native="request( \'2\', k );">{{ k }}</well-pagination-progress-trigger-btn>\
					</template>\
					<span v-if="pages > 9 && ( requestingPage <= 5 || ( requestingPage > 5 && requestingPage < ( pages - 4 ) ) )">\
						<i class="well-com-pagination__icon well-com-pagination__icon-ellipsis fas fa-ellipsis-h"></i>\
					</span>\
					<template v-if="!isProgressBtnGroup3Blank">\
						<well-pagination-progress-trigger-btn\
							v-for="( v, k, i ) in progressBtnGroup[ \'3\' ]"\
							:key="k"\
							:requesting="v.requesting"\
							:active="v.active"\
							@click.native="request( \'3\', k );">{{ k }}</well-pagination-progress-trigger-btn>\
					</template>\
					<span :class="nextBtnCls"\
						  @click="request( \'next\', requestingPage + 1 );">\
						<span class="well-com-pagination__next-btn-txt"><slot name="next-btn-txt"></slot></span>\
						<i class="well-com-pagination__icon well-com-pagination__next-btn-icon fas fa-angle-right"></i>\
					</span>\
				</template>\
			</div>\
		'
	};

	Vue.component( "well-pagination", wellPagination );
	
	var wellPaginationProgress = {
		name: "well-pagination-progress",
		
		props: {
			show: {
				type: Boolean,
				default: false,
				required: true
			},
			abort: {
				type: Boolean,
				default: false,
				required: true
			}
		},
		
		computed: {
			transitionName: function () {
				return this.abort ? "" : "v-pagination-progress";
			}
		},
		
		template: '\
			<transition :name="transitionName">\
				<div v-if="show"\
					 class="well-com-pagination__progress"></div>\
			</transition>\
		'
	};

	Vue.component( "well-pagination-progress", wellPaginationProgress );

	var wellPaginationProgressTriggerBtn = {
		name: "well-pagination-progress-trigger-btn",
		
		props: {
			requesting: {
				type: Boolean,
				default: false,
				required: true
			},
			active: {
				type: Boolean,
				default: false,
				required: true
			}
		},
		
		computed: {
			paginationProgressTriggerBtnCls: function () {
				return {
					"well-com-pagination__progress-trigger-btn": true,
					"well-com-pagination__progress-trigger-btn--requesting": this.requesting,
					"well-com-pagination__progress-trigger-btn--active": this.active,
					"well-ori-cursor--default": this.active
				};
			}
		},
		
		template: '\
			<div :class="paginationProgressTriggerBtnCls">\
				<slot>进度条触发按钮</slot>\
			</div>\
		'
	};

	Vue.component( "well-pagination-progress-trigger-btn", wellPaginationProgressTriggerBtn );
	
	/* */
	
	var wellPaginationDemo = {
		name: "well-pagination-demo",
		
		mixins: wellComHelper.wellComMixin( {
			components: [ "paginationProgress" ]
		} ),
		
		props: {
			total: {
				type: Number,
				default: 0,
				required: true,
				validator: function ( val ) {
					if ( val < 0 )
					{
						console.warn( "[ pagination 组件渲染出错提醒 ] : 总条目数( total = " + val + " )不应该小于 0。" );
					}
					return val >= 0;
				}
			},
			count: {
				type: Number,
				default: 1,
				required: true,
				validator: function ( val ) {
					if ( val <= 0 )
					{
						console.warn( "[ pagination 组件渲染出错提醒 ] : 每页条目数( count = " + val + " )不应该为 0 或者小于 0。" );
					}
					return val > 0;
				}
			},
			initRequestPage: {
				type: Number,
				default: 1,
				validator: function ( val ) {
					if ( val <= 0 )
					{
						console.warn( "[ pagination 组件渲染出错提醒 ] : 初始请求页数( initRequestPage = " + val + " )不应该为 0 或者小于 0。" );
					}
					return val > 0;
				}
			},
			demoOperate: {
				type: Function,
				default: function () {
					console.log( "pagination demo operation" );
				}
			},
			delay: {
				type: Number,
				default: 1000
			},
			align: {
				type: String,
				default: "left"
			}
		},
		
		data: function () {
			return {
				pages: 0,
				requestingPage: this.initRequestPage,
				activePage: -1,
				progress: {
					show: false,
					abort: false,
					complete: false,
					userInterfaceUpdated: true
				},
				progressBtnGroup: {
					"1": {},
					"2": {},
					"3": {}
				}
			};
		},
		
		computed: {		
			isProgressBtnGroup1Blank: function () {
				return wellComHelper.blankObject( this.progressBtnGroup[ "1" ] );
			},
			
			isProgressBtnGroup2Blank: function () {
				return wellComHelper.blankObject( this.progressBtnGroup[ "2" ] );
			},
			
			isProgressBtnGroup3Blank: function () {
				return wellComHelper.blankObject( this.progressBtnGroup[ "3" ] );
			},
			
			paginationCls: function () {
				return {
					"well-com-pagination": true,
					"well-ori-text-align--c": this.align === "center",
					"well-ori-text-align--r": this.align === "right"
				};
			},
			
			prevBtnCls: function () {
				return {
					"well-com-pagination__progress-trigger-btn": true,
					"well-com-pagination__prev-btn--disabled": this.pages === 0 || this.requestingPage === 1,
					"well-ori-cursor--default": this.pages === 0 || this.requestingPage === 1,
					"well-com-pagination__prev-btn": true
				};
			},
			
			nextBtnCls: function () {
				return {
					"well-com-pagination__progress-trigger-btn": true,
					"well-com-pagination__next-btn--disabled": this.pages === 0 || this.requestingPage === this.pages,
					"well-ori-cursor--default": this.pages === 0 || this.requestingPage === this.pages,
					"well-com-pagination__next-btn": true
				};
			}
		},
		
		created: function () {		
			this.pages = Math.ceil( this.total / this.count );
			
			if ( this.pages === 0 )
			{
				return;
			}
			
			if ( this.total / this.count < 1 )
			{
				console.warn( "[ pagination 组件渲染出错提醒 ] : 每页条目数( count = " + this.count + " )不应该大于总条目数( total = " + this.total + " )。" );
			}
			
			if ( this.initRequestPage > this.pages )
			{
				console.warn( "[ pagination 组件渲染出错提醒 ] : 初始请求页数( initRequestPage = " + this.initRequestPage + " )不应该大于分页数( " + this.pages + " )。" );
			}
			
			this.test( "init", this.requestingPage );
		},
		
		methods: {
			test: function ( groupNum, btnNum ) {
				if ( groupNum === "prev" && this.requestingPage === 1 )
				{
					return;
				}
				
				if ( groupNum === "next" && this.requestingPage === this.pages )
				{
					return;
				}
				
				if ( this.activePage != btnNum )
				{
					this.wellComPaginationTriggerBtnToggleRequesting( this, btnNum );
				}
				
				this.wellComPaginationProgressRun( {
					vm: this,
					props: this.progress,
					operate: function () {
						this.progress.timerId = setTimeout( ( function () {
							this.wellComPaginationProgressDone( this.progress );
							
							clearTimeout( this.progress.timerId );
							this.progress.timerId = -1;
							
							this.wellComPaginationTriggerBtnToggleActive( this, btnNum );
							
							this.demoOperate();
							
							this.$emit( "request-success", "pagination-demo-request-success" );
						} ).bind( this ), this.delay );
					},
					cancel: function () {
						clearTimeout( this.progress.timerId );
						this.progress.timerId = -1;
					},
					isBtnActive: function () {
						if ( groupNum === "init" || groupNum === "prev" || groupNum === "next" )
						{
							return false;
						}
						else
						{
							return this.wellComPaginationTriggerBtnIsActive( this.activePage, btnNum );
						}
					}
				} );
			}
		},
		
		template: '\
			<div :class="paginationCls">\
				<template v-if="pages === 0">\
					<span :class="prevBtnCls">\
						<i class="well-com-pagination__icon well-com-pagination__prev-btn-icon fas fa-angle-left"></i>\
						<span class="well-com-pagination__prev-btn-txt"><slot name="prev-btn-txt"></slot></span>\
					</span>\
					<span class="well-com-pagination__progress-trigger-btn well-com-pagination__zero-btn well-ori-cursor--default">0</span>\
					<span :class="nextBtnCls">\
						<span class="well-com-pagination__next-btn-txt"><slot name="next-btn-txt"></slot></span>\
						<i class="well-com-pagination__icon well-com-pagination__next-btn-icon fas fa-angle-right"></i>\
					</span>\
				</template>\
				<template v-else>\
					<well-pagination-progress\
						:show="progress.show"\
						:abort="progress.abort"\
					/>\
					<span :class="prevBtnCls"\
						  @click="test( \'prev\', requestingPage - 1 );">\
						<i class="well-com-pagination__icon well-com-pagination__prev-btn-icon fas fa-angle-left"></i>\
						<span class="well-com-pagination__prev-btn-txt"><slot name="prev-btn-txt"></slot></span>\
					</span>\
					<template v-if="!isProgressBtnGroup1Blank">\
						<well-pagination-progress-trigger-btn\
							v-for="( v, k, i ) in progressBtnGroup[ \'1\' ]"\
							:key="k"\
							:requesting="v.requesting"\
							:active="v.active"\
							@click.native="test( \'1\', k );">{{ k }}</well-pagination-progress-trigger-btn>\
					</template>\
					<span v-if="pages > 9 && ( ( requestingPage > 5 && requestingPage < ( pages - 4 ) ) || requestingPage >= ( pages - 4 ) )">\
						<i class="well-com-pagination__icon well-com-pagination__icon-ellipsis fas fa-ellipsis-h"></i>\
					</span>\
					<template v-if="!isProgressBtnGroup2Blank">\
						<well-pagination-progress-trigger-btn\
							v-for="( v, k, i ) in progressBtnGroup[ \'2\' ]"\
							:key="k"\
							:requesting="v.requesting"\
							:active="v.active"\
							@click.native="test( \'2\', k );">{{ k }}</well-pagination-progress-trigger-btn>\
					</template>\
					<span v-if="pages > 9 && ( requestingPage <= 5 || ( requestingPage > 5 && requestingPage < ( pages - 4 ) ) )">\
						<i class="well-com-pagination__icon well-com-pagination__icon-ellipsis fas fa-ellipsis-h"></i>\
					</span>\
					<template v-if="!isProgressBtnGroup3Blank">\
						<well-pagination-progress-trigger-btn\
							v-for="( v, k, i ) in progressBtnGroup[ \'3\' ]"\
							:key="k"\
							:requesting="v.requesting"\
							:active="v.active"\
							@click.native="test( \'3\', k );">{{ k }}</well-pagination-progress-trigger-btn>\
					</template>\
					<span :class="nextBtnCls"\
						  @click="test( \'next\', requestingPage + 1 );">\
						<span class="well-com-pagination__next-btn-txt"><slot name="next-btn-txt"></slot></span>\
						<i class="well-com-pagination__icon well-com-pagination__next-btn-icon fas fa-angle-right"></i>\
					</span>\
				</template>\
			</div>\
		'
	};

	Vue.component( "well-pagination-demo", wellPaginationDemo );
	
	/**
	 * sidebar
	 */
	 
	var wellSidebar = {
		name: "well-sidebar",
		
		data: function () {
			return {
				open: false,
				touchStartX: -1,
				touchMoveX: -1,
				touchMoveDis: 0
			};
		},
		
		computed: {
			sidebarCls: function () {
				return {
					"well-com-sidebar": true,
					"well-com-sidebar--open": this.open
				};
			}
		},
		
		mounted: function () {
			document.body.addEventListener( "touchstart", this.touchStartHandler, false );
			
			document.body.addEventListener( "touchmove", this.touchMoveHandler, false );
			
			document.body.addEventListener( "touchend", this.touchEndHandler, false );
			
			document.body.addEventListener( "click", this.clickHandler, false );
		},
		
		beforeDestroy: function () {
			document.body.removeEventListener( "touchstart", this.touchStartHandler, false );
			
			document.body.removeEventListener( "touchmove", this.touchMoveHandler, false );
			
			document.body.removeEventListener( "touchend", this.touchEndHandler, false );
			
			document.body.removeEventListener( "click", this.clickHandler, false );
		},
		
		methods: {
			touchStartHandler: function ( evt ) {
				this.touchStartX = evt.touches[ 0 ].pageX;
			},
			
			touchMoveHandler: function ( evt ) {
				this.touchMoveX = evt.touches[ 0 ].pageX;
				
				this.touchMoveDis = this.touchMoveX - this.touchStartX;
			},
			
			touchEndHandler: function ( evt ) {
				if ( this.touchStartX > 200 )
				{
					return;
				}
				
				if ( this.touchMoveDis >= 10 )
				{
					this.open = true;
				}
				else if ( -this.touchMoveDis >= 10 )
				{
					this.open = false;
				}
			},
			
			clickHandler: function ( evt ) {
				if ( evt.target === this.$el )
				{
					return;
				}
				
				if ( this.open )
				{
					this.open = false;
				}
			}
		},
		
		template: '\
			<div :class="sidebarCls">\
				<slot></slot>\
			</div>\
		'
	};

	Vue.component( "well-sidebar", wellSidebar );
	
	/**
	 * tab
	 */
	 
	var wellTabWrapper = {
		name: "well-tab-wrapper",
		
		template: '\
			<div class="well-com-tab__wrapper">\
				<slot></slot>\
			</div>\
		'
	};

	Vue.component( "well-tab-wrapper", wellTabWrapper );

	var wellTabToggleWrapper = {
		name: "well-tab-toggle-wrapper",
		
		template: '\
			<div class="well-ori-display__flex-row--s-c well-com-tab__toggle-wrapper">\
				<slot></slot>\
			</div>\
		'
	};

	Vue.component( "well-tab-toggle-wrapper", wellTabToggleWrapper );

	var wellTabToggle = {
		name: "well-tab-toggle",
		
		props: {
			active: {
				type: Boolean,
				default: false,
				required: true
			}
		},
		
		computed: {
			tabBtnCls: function () {
				return {
					"well-com-tab__toggle": true,
					"well-com-tab__toggle--active": this.active
				};
			}
		},
		
		template: '\
			<div :class="tabBtnCls"\
				 @click="$emit( \'toggle\' );">\
				<slot>标签页切换按钮</slot>\
			</div>\
		'
	};

	Vue.component( "well-tab-toggle", wellTabToggle );

	var wellTabItem = {
		name: "well-tab-item",
		
		props: {
			active: {
				type: Boolean,
				default: false,
				required: true
			}
		},
		
		template: '\
			<div v-if="active"\
				 class="well-ori-padding--small well-com-tab__item">\
				<slot>标签页</slot>\
			</div>\
		'
	};

	Vue.component( "well-tab-item", wellTabItem );
	
	/**
	 * tip
	 */
	 
	var wellTip = {
		name: "well-tip",
		
		data: function () {
			return {
				offsetWidth: 0,
				offsetHeight: 0
			};
		},
		
		props: {
			show: {
				type: Boolean,
				default: false
			},
			mouseX: {
				type: Number,
				default: 0
			},
			mouseY: {
				type: Number,
				default: 0
			}
		},
		
		computed: {
			tipStyle: function () {
				let left = 0,
					top = 0,
					offset = 20;

				let docScrollLeft = wellComHelper.docScrollDistance( "left" ),
					docScrollTop = wellComHelper.docScrollDistance( "top" );

				let vpLeft = wellComHelper.viewportSidePosition( "left" ),
					vpRight = wellComHelper.viewportSidePosition( "right" ),
					vpTop = wellComHelper.viewportSidePosition( "top" );
					
				if ( this.mouseX + docScrollLeft - vpLeft < this.offsetWidth / 2 )
				{
					left = vpLeft;
				}
				else if ( vpRight - ( this.mouseX + docScrollLeft ) < this.offsetWidth / 2 )
				{
					left = vpRight - this.offsetWidth;	
				}
				else
				{
					left = this.mouseX + docScrollLeft - this.offsetWidth / 2;
				}
				
				if ( this.mouseY + docScrollTop - vpTop < this.offsetHeight + offset )
				{
					top = this.mouseY + docScrollTop + offset;
				}
				else
				{
					top = this.mouseY + docScrollTop - ( this.offsetHeight + offset );
				}
				
				return {
					"left": left + "px",
					"top": top + "px"
				};
			}
		},
		
		updated: function () {
			if ( this.offsetWidth === 0 )
			{
				if ( this.$el.offsetWidth && this.$el.offsetWidth > 0 )
				{
					this.offsetWidth = this.$el.offsetWidth;
					this.offsetHeight = this.$el.offsetHeight;
				}
			}		
		},
		
		template: '\
			<transition name="v-fade">\
				<div v-show="show"\
					 class="well-com-tip"\
					 :style="tipStyle">\
					<slot></slot>\
				</div>\
			</transition>\
		'
	};

	Vue.component( "well-tip", wellTip );
} )( this );