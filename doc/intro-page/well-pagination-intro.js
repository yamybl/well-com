var wellPaginationIntro = {
	name: "well-pagination-intro",
	
	data: function () {
		return store.state.wellPaginationIntro
	},
	
	methods: {
		requestSuccessHandler: function ( data ) {
			console.log( data );
		},
		
		requestFailHandler: function ( errMsg ) {
			console.log( errMsg );
		}
	},
	
	template:  '\
		<well-box>\
			<template-header\
				:title="header.title"\
				:summary="header.summary"\
			/>\
			<template-sample\
				v-for="( s, i ) in sample"\
				:title="s.title"\
				:summary="s.summary"\
				:codeForPrint="s.codeForPrint"\
			>\
				<template #code-for-execute>\
					<template v-if="i === 0">\
						<well-pagination\
							:total="10"\
							:count="1"\
							:init-request-page="10"\
							:url="api"\
							url-param-page="p"\
							align="center"\
							@request-success="requestSuccessHandler"\
							@request-fail="requestFailHandler"\
						>\
							<template #prev-btn-txt>上一页</template>\
							<template #next-btn-txt>下一页</template>\
						</well-pagination>\
					</template>\
				</template>\
			</template-sample>\
			<template-property\
				:property="property"\
			/>\
			<template-event\
				:event="event"\
			/>\
			<template-slot\
				:slotCustom="slotCustom"\
			/>\
			<template-nav\
				:nav="nav"\
			/>\
		</well-box>\
	'
};