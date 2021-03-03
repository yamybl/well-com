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
			yHelper.insertCssRule( [
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