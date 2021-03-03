var wellA = {
	name: "well-a",
	props: {
		size: {
			type: String,
			default: "default"
		},
		href: {
			type: String,
			default: ""
		},
		target: {
			type: String,
			default: "_blank"
		}
	},
	computed: {
		aCls: function () {
			return {
				"well-com-a": true,
				"well-com-a--large": this.size === "large",
				"well-com-a--extra-large": this.size === "extra-large",
			};
		}
	},
	template: '\
		<a :class="aCls"\
		   :href="href"\
		   :target="target">\
			<slot></slot>\
		</a>\
	'
};

Vue.component( "well-a", wellA );