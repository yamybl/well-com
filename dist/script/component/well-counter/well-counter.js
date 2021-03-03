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