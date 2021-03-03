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

			let docScrollLeft = yHelper.docScrollDistance( "left" ),
			    docScrollTop = yHelper.docScrollDistance( "top" );

			let vpLeft = yHelper.viewportSidePosition( "left" ),
			    vpRight = yHelper.viewportSidePosition( "right" ),
				vpTop = yHelper.viewportSidePosition( "top" );
				
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