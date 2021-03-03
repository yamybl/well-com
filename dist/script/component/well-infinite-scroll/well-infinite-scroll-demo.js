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