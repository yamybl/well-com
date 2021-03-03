var wellApp = {
	name: "wel-app",
	mixins: yHelper.wellComMixin( {
		data: true
	} ),
	props: {
		theme: {
			type: String,
			default: "light"
		}
	},
	computed: {
		appCls: function () {
			return {
				"well-com-app": true,
				"well-com-app--dark": this.theme === "dark",
				"well-com-app--soft": this.theme === "soft",
				"well-com-app--strong": this.theme === "strong",
				"well-ori-tap-highlight--none": this.wellComData.isMobile
			};
		}
	},
	template: '\
		<div :class="appCls">\
			<slot></slot>\
		</div>\
	'
};

Vue.component( "well-app", wellApp );