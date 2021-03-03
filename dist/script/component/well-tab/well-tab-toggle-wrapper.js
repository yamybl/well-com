var wellTabToggleWrapper = {
	name: "well-tab-toggle-wrapper",
	template: '\
		<div class="well-ori-display__flex-row--s-c well-com-tab__toggle-wrapper">\
			<slot></slot>\
		</div>\
	'
};

Vue.component( "well-tab-toggle-wrapper", wellTabToggleWrapper );