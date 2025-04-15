var templateNav = {
	name: "template-nav",
	
	props: {
		nav: {
			type: Object,
			default: null
		}
	},
	
	template: '\
		<div class="well-doc__template-wrapper">\
			<h4>导航</h4>\
			<div class="well-doc__nav">\
				<well-btn\
					v-if="nav.prevRoute"\
					size="large"\
					@click="$router.push( nav.prevRoute.path );"\
				><i class="fa fas fa-angle-left"></i> {{ nav.prevRoute.name }}</well-btn>\
				<well-btn\
					v-if="nav.nextRoute"\
					size="large"\
					@click="$router.push( nav.nextRoute.path );"\
				>{{ nav.nextRoute.name }} <i class="fa fas fa-angle-right"></i> </well-btn>\
			</div>\
		</div>\
	'
};

Vue.component( "template-nav", templateNav );