var templateHeader = {
	name: "template-header",
	
	props: {
		title: {
			type: String,
			default: ""
		},
		summary: {
			type: Array,
			default: ""
		}
	},
	
	template: '\
		<div class="well-doc__template-wrapper">\
			<h2>{{ title }}</h2>\
			<well-msg\
				v-if="summary.length === 1"\
				size="large"\
				:state="summary[ 0 ].important ? \'caution\' : \'default\'"\
			>\
				{{ summary[ 0 ].content }}\
			</well-msg>\
			<well-msg\
				v-else\
				size="large"\
			>\
				<ul\
					class="well-doc__msg-list"\
				>\
					<li\
						v-for="item in summary"\
						:class="[ \'well-doc__msg-list-item\', item.important ? \'well-doc__msg-list-item--important\' : \'\' ]"\
					>\
						{{ item.content }}\
					</li>\
				</ul>\
			</well-msg>\
		</div>\
	'
};

Vue.component( "template-header", templateHeader );