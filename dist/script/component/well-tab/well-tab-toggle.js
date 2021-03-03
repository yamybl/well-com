var wellTabToggle = {
	name: "well-tab-toggle",
	props: {
		active: {
			type: Boolean,
			default: false,
			required: true
		}
	},
	computed: {
		tabBtnCls: function () {
			return {
				"well-com-tab__toggle": true,
				"well-com-tab__toggle--active": this.active
			};
		}
	},
	template: '\
		<div :class="tabBtnCls"\
			 @click="$emit( \'toggle\' );">\
			<slot>标签页切换按钮</slot>\
		</div>\
	'
};

Vue.component( "well-tab-toggle", wellTabToggle );