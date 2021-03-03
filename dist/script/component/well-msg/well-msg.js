var wellMsg = {
	name: "well-msg",
	props: {
		size: {
			type: String,
			default: "default"
		},
		state: {
			type: String,
			default: "default"
		}
	},
	computed: {
		msgCls: function () {
			return {
				"well-com-msg": true,
				"well-com-msg--large": this.size === "large",
				"well-com-msg--extra-large": this.size === "extra-large",
				"well-com-msg--success": this.state === "success",
				"well-com-msg--fail": this.state === "fail",
				"well-com-msg--caution": this.state === "caution"
			};
		}
	},
	template: '\
		<div :class="msgCls">\
			<slot></slot>\
		</div>\
	'
};

Vue.component( "well-msg", wellMsg );