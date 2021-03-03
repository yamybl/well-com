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
			yHelper.insertCssRule( [
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