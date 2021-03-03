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

			var docScrollLeft = yHelper.docScrollDistance( "left" ),
			    docScrollTop = yHelper.docScrollDistance( "top" );

			var vpRight = yHelper.viewportSidePosition( "right" ),
				vpBottom = yHelper.viewportSidePosition( "bottom" );
				
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