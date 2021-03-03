var wellPaginationProgressTriggerBtn = {
	name: "well-pagination-progress-trigger-btn",
	props: {
		requesting: {
			type: Boolean,
			default: false,
			required: true
		},
		active: {
			type: Boolean,
			default: false,
			required: true
		}
	},
	computed: {
		paginationProgressTriggerBtnCls: function () {
			return {
				"well-com-pagination__progress-trigger-btn": true,
				"well-com-pagination__progress-trigger-btn--requesting": this.requesting,
				"well-com-pagination__progress-trigger-btn--active": this.active,
				"well-ori-cursor--default": this.active
			};
		}
	},
	template: '\
		<div :class="paginationProgressTriggerBtnCls">\
			<slot>进度条触发按钮</slot>\
		</div>\
	'
};

Vue.component( "well-pagination-progress-trigger-btn", wellPaginationProgressTriggerBtn );