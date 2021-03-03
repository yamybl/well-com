var wellBtn = {
	name: "well-btn",
	props: {
		size: {
			type: String,
			default: "default"
		},
		round: {
			type: Boolean,
			default: false
		},
		state: {
			type: String,
			default: "default"
		}
	},
	computed: {
		btnCls: function () {
			return {
				"well-com-btn": true,
				"well-com-btn--large": this.size === "large",
				"well-com-btn--extra-large": this.size === "extra-large",
				"well-com-btn--round": this.round,
				"well-com-btn--caution": this.state === "caution",
			};
		}
	},
	template: '\
		<div :class="btnCls"\
		     @click="$emit( \'click\' );">\
			<slot></slot>\
		</div>\
	'
};

Vue.component( "well-btn", wellBtn );