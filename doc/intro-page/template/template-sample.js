var templateSample = {
	name: "template-sample",
	
	props: {
		title: {
			type: String,
			default: ""
		},
		summary: {
			type: Object,
			default: null
		},
		codeForPrint: {
			type: Array,
			default: null
		}
	},
	
	template: '\
		<div class="well-doc__template-wrapper">\
			<h3>{{ title }}</h3>\
			<template\
				v-if="!summary.content"\
			>\
				<well-msg\
					size="large"\
				>\
					{{ summary.title }}\
				</well-msg>\
			</template>\
			<well-card-inline-wrapper\
				v-else\
			>\
				<well-card-inline\
					:mini="true"\
				>\
					<well-msg\
						size="large"\
					>\
						{{ summary.title }}\
					</well-msg>\
				</well-card-inline>\
				<well-card-inline\
					:mini="true"\
				>\
					<well-msg\
						size="large"\
						state="success"\
					>\
						<template\
							v-if="summary.content.length === 1"\
						>\
							{{ summary.content[ 0 ] }}\
						</template>\
						<ul\
							v-else\
							class="well-doc__msg-list"\
						>\
							<li\
								v-for="item in summary.content"\
								class="well-doc__msg-list-item"\
							>\
								{{ item }}\
							</li>\
						</ul>\
					</well-msg>\
				</well-card-inline>\
			</well-card-inline-wrapper>\
			<h5>示例代码</h5>\
			<pre\
				v-for="item in codeForPrint"\
				:class="[ \'prettyprint\', \'well-doc__code\', item.type && item.type === \'css\' ? \'lang-css\' : \'\' ]"\
				v-html="item.content"\
			></pre>\
			<h5>代码运行效果</h5>\
			<slot name="code-for-execute"></slot>\
		</div>\
	'
};

Vue.component( "template-sample", templateSample );