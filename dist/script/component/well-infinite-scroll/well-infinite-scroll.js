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