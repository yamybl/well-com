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