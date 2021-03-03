var wellPaginationProgress = {
	name: "well-pagination-progress",
	props: {
		show: {
			type: Boolean,
			default: false,
			required: true
		},
		abort: {
			type: Boolean,
			default: false,
			required: true
		}
	},
	computed: {
		transitionName: function () {
			return this.abort ? "" : "v-pagination-progress";
		}
	},
	template: '\
		<transition :name="transitionName">\
			<div v-if="show"\
			     class="well-com-pagination__progress"></div>\
		</transition>\
	'
};

Vue.component( "well-pagination-progress", wellPaginationProgress );