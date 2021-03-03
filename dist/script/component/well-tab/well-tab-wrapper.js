var wellTabWrapper = {
	name: "well-tab-wrapper",
	template: '\
		<div class="well-com-tab__wrapper">\
			<slot></slot>\
		</div>\
	'
};

Vue.component( "well-tab-wrapper", wellTabWrapper );