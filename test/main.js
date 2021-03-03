new Vue( {
	el: "#vue-container",
	
	mixins: wellComHelper.wellComMixin( {
		data: true,
		components: true
	} ),
	
	data: {
		api: "service/test.php",
		theme: "light",
		offLine: false,
		menus: [
			{ show: false },
			{ show: false },
			{ show: false }
		],
		contextMenus: [
			{
				show: false,
				mouseX: 0,
				mouseY: 0
			},
			{
				show: false,
				mouseX: 0,
				mouseY: 0
			}
		],
		tabs: [
			{ active: true },
			{ active: false },
			{ active: false }
		],
		tips: {
			a: {
				show: false,
				mouseX: 0,
				mouseY: 0,
				hideForced: false
			},
			b: {
				show: false,
				mouseX: 0,
				mouseY: 0,
				hideForced: false
			}
		},
		infiniteScroll: {
			ajax: null,
			requesting: false,
			noMoreItems: false,
			items: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
		},
		carouselItems: [
			{ name: "carousel-item-1" },
			{ name: "carousel-item-2" },
			{ name: "carousel-item-3" },
			{ name: "carousel-item-4" }
		],
		checkedRadioValue: "",
		checkboxValue: [],
		counterValue: 100,
		file: {
			ajax: null,
			api: "service/com-file-test.php"
		}
	},
	
	computed: {
		networkStateMsg: function () {
			return this.offLine ? "网络连接异常" : "网络连接正常";
		}
	},
	
	created: function () {
		this.infiniteScroll.ajax = new wellComHelper.SimpleAjax( "infinite-scroll" );
		this.file.ajax = new wellComHelper.SimpleAjax( "file" );
	},
	
	mounted: function () {
		if ( !navigator.onLine )
		{
			this.offLine = true;
		}
		
		let vm = this;
		
		window.addEventListener( "online", function () {
			vm.offLine = false;
		}, false );
		
		window.addEventListener( "offline", function () {
			vm.offLine = true;
		}, false );
	},
	
	beforeDestroy: function () {
		this.infiniteScroll.ajax.destroy();
	},
	
	methods: {
		toggleTheme: function ( curTheme ) {
			this.theme = curTheme;
		},
		
		asyncOperation: function () {
			return new Promise( function ( resolve, reject ) {
				setTimeout( function () {
					resolve( "async operation complete!" );
				}, 3000 );
			} );
		},
		
		forceCloseModal: function () {
			this.offLine = false;
		},
		
		appClickHandler: function () {
			this.wellComMenuHideAll();
			
			this.wellComContextMenuHideAll();
		},
		
		wellComMenuItemOperateCallback: function () {
			console.log( "wellComMenuItemOperate callback called" );
		},
		
		wellComContextMenuItemOperateCallback: function () {
			console.log( "wellComContextMenuItemOperate callback called" );
		},
		
		paginationDemoOperate: function () {
			console.log( "hello world!!!" );
		},
		
		paginationRequestSuccess: function ( data ) {
			console.log( data );
		},
		
		paginationRequestFail: function ( errMsg ) {
			console.log( errMsg );
		},
		
		infiniteScrollRequest: function () {
			this.infiniteScroll.requesting = true;
			
			this.infiniteScroll.ajax.request( {
				url: this.api,
				success: function () {
					let i,
						len = this.infiniteScroll.items.length;
					
					if ( len >= 100 )
					{
						this.infiniteScroll.requesting = false;
						this.infiniteScroll.noMoreItems = true;
						return;
					}
					
					for ( i = len + 1; i <= len + 10; ++i )
					{
						this.infiniteScroll.items.push( i );
					}
					
					this.$nextTick( function () {
						this.infiniteScroll.requesting = false;
					} );
				},
				fail: function () {
					console.warn( this.infiniteScroll.ajax.xhr.status );
				},
				thisInCallback: this
			} );
		},
		
		radioChangeHandler: function ( checkedValue ) {
			this.checkedRadioValue = checkedValue;
		},
		
		fileSelectHandler: function ( fileData ) {
			this.file.ajax.request( {
				method: "post",
				url: this.file.api,
				data: fileData,
				success: function () {
					console.log( this.file.ajax.xhr.responseText );
				},
				thisInCallback: this
			} );
		},
		
		wellComTxtErrorHandler: function ( val ) {
			if ( val.length < 6 )
			{
				return "字符数不能少于6个。";
			}
			else
			{
				return "";
			}
		},
		
		wellComTxtValidInputHandler: function ( val ) {
			console.log( val );
		}
	},
	
	template: '\
		<well-app\
		    :theme="theme"\
		    @click.native="appClickHandler();">\
			<well-box\
				id="box-1"\
			    @mouseenter.native="wellComTipTargetMouseenter( tips.b, $event );"\
			    @mouseleave.native="wellComTipTargetMouseleave( tips.b, $event, \'tip-1\' );"\
				v-wellComCounter\
			>\
				<well-btn size="extra-large" @click="toggleTheme( \'light\' );">"light" 主题</well-btn>\
				<well-btn size="large" state="caution" @click="toggleTheme( \'dark\' );">"dark" 主题</well-btn>\
				<well-btn @click="toggleTheme( \'soft\' );">"soft" 主题</well-btn>\
				<well-btn @click="toggleTheme( \'strong\' );">"strong" 主题</well-btn>\
				\
				<well-msg>提示</well-msg>\
				<well-msg state="success">提示</well-msg>\
				<well-msg state="fail">提示</well-msg>\
				<well-msg state="caution">提示</well-msg>\
				\
				<well-a href="https://a.com" target="_blank">斗鱼</well-a>\
				<well-a size="large" href="https://b.com" target="_blank">百度</well-a>\
				<well-a size="extra-large" href="http://www.sohu.com" target="_blank">搜狐</well-a>\
				\
				<well-counter\
					:value="counterValue"\
					:maxCount="99"\
				/>\
			</well-box>\
			<well-tip\
				id="tip-1"\
			    :show="tips.b.show"\
			    :mouseX="tips.b.mouseX"\
				:mouseY="tips.b.mouseY"\
				@mouseenter.native="wellComTipSelfMouseenter( tips.b, $event, \'box-1\' );"\
				@mouseleave.native="wellComTipSelfMouseleave( tips.b, $event, \'box-1\' );"\
			>\
				<div>这是 "box1"</div>\
				<div>这是一个盒子</div>\
				<div>这是 tip 组件示例</div>\
			</well-tip>\
			\
			<well-box>\
				<well-radio\
					name="radio"\
					value="radio-1"\
					:thin="false"\
					@change="radioChangeHandler">\
					radio-1\
				</well-radio>\
				<well-radio\
					name="radio"\
					value="radio-2"\
					:thin="false"\
					@change="radioChangeHandler">\
					radio-2\
				</well-radio>\
				<div>被选择的单选按钮的值是：{{ checkedRadioValue }}</div>\
			</well-box>\
			\
			<well-box>\
				<well-checkbox\
					name="checkbox"\
					value="checkbox-1"\
					:bindValue="checkboxValue"\
					:thin="false"\
					@change="wellComCheckboxChange"\
				>\
					checkbox-1\
				</well-checkbox>\
				<well-checkbox\
					name="checkbox"\
					value="checkbox-2"\
					:bindValue="checkboxValue"\
					:thin="false"\
					@change="wellComCheckboxChange"\
				>\
					checkbox-2\
				</well-checkbox>\
				<div>被选择的复选按钮的值有：{{ checkboxValue }}</div>\
			</well-box>\
			\
			<well-box class="well-com-box">\
				<well-file\
					name="f"\
					:multiple="true"\
					:disabled="false"\
					:upload="true"\
					:url="file.api"\
					:acceptTypes="[ \'jpg\', \'jpeg\' ]"\
					:maxSize="1"\
				/>\
			</well-box>\
			\
			<well-box>\
				<well-txt\
				    hint="请输入不少于6个字符的用户名"\
					:errorHandler="wellComTxtErrorHandler"\
					@valid-input="wellComTxtValidInputHandler"\
				>\
					<template #label-txt>用户名</template>\
				</well-txt>\
				<well-txt\
					hint="请输入不少于10个字符的密码"\
					type="password"\
					:passwordVisible="true"\
					:errorHandler="wellComTxtErrorHandler"\
					@valid-input="wellComTxtValidInputHandler"\
				>\
					<template #label-txt>密码</template>\
				</well-txt>\
				<well-txt />\
			</well-box>\
			\
			<well-modal\
			       :auto="true"\
				   :open="offLine"\
				   @force-close-modal="forceCloseModal();">\
				<template slot="body">\
					<div class="txt-align-c"><i class="fas fa-exclamation-circle"></i> {{ networkStateMsg }}</div>\
				</template>\
			</well-modal>\
			\
			<well-modal :operation="asyncOperation"></well-modal>\
			\
			<well-card avatar="media/avatar.jpg"></well-card>\
			<well-card-inline-wrapper>\
				<well-card-inline mode="avatar" avatar="media/avatar.jpg"></well-card-inline>\
				<well-card-inline mode="avatar" avatar="media/avatar.jpg"></well-card-inline>\
				<well-card-inline></well-card-inline>\
			</well-card-inline-wrapper>\
			\
			<well-menu\
				v-for="( m, i ) in menus"\
				:key="i"\
				fa="new"\
				avatar="media/avatar.jpg"\
				size="large"\
				position="up-right"\
				:show="m.show"\
				@toggle="wellComMenuToggle( m );"\
			>\
				<template slot="toggle-btn-txt">\
					打开菜单\
				</template>\
				<template slot="items">\
					<well-menu-item\
					    @operate="wellComMenuItemOperate( m,  wellComMenuItemOperateCallback );">\
						<i class="icon fas fa-paper-plane"></i> 发送\
					</well-menu-item>\
					<well-menu-item\
					    @operate="wellComMenuItemOperate( m, wellComMenuItemOperateCallback );">\
						<i class="icon fas fa-phone"></i> 通话\
					</well-menu-item>\
					<well-menu-item\
					    @operate="wellComMenuItemOperate( m, wellComMenuItemOperateCallback );">\
						<i class="icon fas fa-plug"></i> 插件\
					</well-menu-item>\
				</template>\
			</well-menu>\
			\
			<template\
				v-for="( m, i ) in contextMenus"\
			>\
				<div class="well-com-btn"\
					 @contextmenu.prevent="wellComContextMenuShow( m, $event );">点击鼠标右键打开上下文菜单</div>\
				<well-context-menu\
					size="extra-large"\
					:show="m.show"\
					:mouseX="m.mouseX"\
					:mouseY="m.mouseY"\
				>\
					<well-context-menu-item @operate="wellComContextMenuItemOperate( m, wellComContextMenuItemOperateCallback );">\
						<i class="icon fas fa-paper-plane"></i> 发送\
					</well-context-menu-item>\
				</well-context-menu>\
			</template>\
			\
			<well-tab-wrapper>\
				<well-tab-toggle-wrapper>\
					<well-tab-toggle\
						v-for="( t, i ) in tabs"\
						:key="i"\
						:active="tabs[ i ].active"\
						@toggle="wellComTabToggle( tabs, i );"\
					>\
						标签页 {{ i + 1 }} 切换按钮\
					</well-tab-toggle>\
				</well-tab-toggle-wrapper>\
				<well-tab-item\
					v-for="( t, i ) in tabs"\
					:key="i"\
					:active="tabs[ i ].active"\
				>\
					标签页 {{ i + 1 }}\
				</well-tab-item>\
			</well-tab-wrapper>\
			\
			<well-box\
				id="box-2"\
			    @mouseenter.native="wellComTipTargetMouseenter( tips.a, $event );"\
			    @mouseleave.native="wellComTipTargetMouseleave( tips.a, $event, \'tip-2\' );"\
			>\
				<well-msg>鼠标移入后弹出提示框</well-msg>\
			</well-box>\
			<well-tip\
				id="tip-2"\
			    :show="tips.a.show"\
			    :mouseX="tips.a.mouseX"\
				:mouseY="tips.a.mouseY"\
				@mouseenter.native="wellComTipSelfMouseenter( tips.a, $event, \'box-2\' );"\
				@mouseleave.native="wellComTipSelfMouseleave( tips.a, $event, \'box-2\' );"\
			>\
				这是 "box2"\
			</well-tip>\
			<well-pagination-demo\
				:total="10"\
				:count="1"\
				:init-request-page="10"\
				:demo-operate="paginationDemoOperate"\
				:delay="1000"\
				align="center"\
				@request-success="paginationRequestSuccess"\
			>\
				<template #prev-btn-txt>上一页</template>\
				<template #next-btn-txt>下一页</template>\
			</well-pagination-demo>\
			<well-pagination\
				:total="10"\
				:count="1"\
				:init-request-page="10"\
				:url="api"\
				url-param-page="p"\
				align="center"\
				@request-success="paginationRequestSuccess"\
				@request-fail="paginationRequestFail"\
			>\
				<template #prev-btn-txt>上一页</template>\
				<template #next-btn-txt>下一页</template>\
			</well-pagination>\
			\
			<well-infinite-scroll-demo\
				size="extra-small"\
				:distance="20"\
			>\
			</well-infinite-scroll-demo>\
			\
			<well-infinite-scroll\
				size="extra-small"\
				:requesting="infiniteScroll.requesting"\
				:no-more-items="infiniteScroll.noMoreItems"\
				@request="infiniteScrollRequest"\
			>\
				<template #items>\
					<div v-for="i in infiniteScroll.items">{{ i }}</div>\
				</template>\
			</well-infinite-scroll>\
			\
			<well-carousel\
				v-if="!wellComData.isMobile"\
				:items="carouselItems"\
				height="default"\
				active-color="#FF8A65"\
			>\
				<template #last-item="lastItemProps">\
					{{ lastItemProps.lastItem.name }}\
				</template>\
				<template #item="itemProps">\
					{{ itemProps.item.name }}\
				</template>\
				<template #first-item="firstItemProps">\
					{{ firstItemProps.firstItem.name }}\
				</template>\
			</well-carousel>\
			<well-carousel-touch\
				v-else\
				:items="carouselItems"\
				:auto="true"\
				:height="300"\
				active-color="#FF8A65"\
			>\
				<template #last-item="lastItemProps">\
					{{ lastItemProps.lastItem.name }}\
				</template>\
				<template #item="itemProps">\
					{{ itemProps.item.name }}\
				</template>\
				<template #first-item="firstItemProps">\
					{{ firstItemProps.firstItem.name }}\
				</template>\
			</well-carousel-touch>\
			\
			<well-sidebar>\
				<well-box>sidebar</well-box>\
			</well-sidebar>\
		</well-app>\
	'
} );