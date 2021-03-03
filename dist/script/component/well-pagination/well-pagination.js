var wellPagination = {
	name: "well-pagination",
	mixins: yHelper.wellComMixin( {
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
			return yHelper.blankObject( this.progressBtnGroup[ "1" ] );
		},
		
		isProgressBtnGroup2Blank: function () {
			return yHelper.blankObject( this.progressBtnGroup[ "2" ] );
		},
		
		isProgressBtnGroup3Blank: function () {
			return yHelper.blankObject( this.progressBtnGroup[ "3" ] );
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
		this.ajax = new yHelper.SimpleAjax( "pagination" );
		
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

			let requestUrl = yHelper.addURLParam( this.url, this.urlParamPage, this.requestingPage );
			this.wellComPaginationProgressRun( {
				vm: this,
				props: this.progress,
				operate: function () {
					this.ajax.request( {
						url: requestUrl,
						success: function () {
							this.wellComPaginationProgressDone( this.progress );
							this.wellComPaginationTriggerBtnToggleActive( this, btnNum );
							
							this.$emit( "requestSuccess", JSON.parse( this.ajax.xhr.responseText ) );
						},
						fail: function () {
							this.$emit( "requestFail", "请求 [ " + requestUrl + " ] 失败: " + this.ajax.xhr.status );
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