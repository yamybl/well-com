var wellBox = {
	name: "well-box",
	template: '\
		<div class="well-com-box">\
			<slot></slot>\
		</div>\
	'
};

Vue.component( "well-box", wellBox );