var wellTabItem = {
	name: "well-tab-item",
	props: {
		active: {
			type: Boolean,
			default: false,
			required: true
		}
	},
	template: '\
		<div v-if="active"\
		     class="well-ori-padding--small well-com-tab__item">\
			<slot>标签页</slot>\
		</div>\
	'
};

Vue.component( "well-tab-item", wellTabItem );