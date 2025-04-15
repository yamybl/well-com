var wellLoadingIntro = {
	name: "well-loading-intro",
	
	data: function () {
		return store.state.wellLoadingIntro
	},
	
	template: '\
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
						<well-loading />\
						<br />\
						<well-loading\
							size="large"\
						/>\
					</template>\
					<template v-else-if="i === 1">\
						<well-loading />\
						<br />\
						<well-loading\
							speed="slow"\
						/>\
						<br />\
						<well-loading\
							speed="fast"\
						/>\
					</template>\
				</template>\
			</template-sample>\
			<template-property\
				:property="property"\
			/>\
			<template-event />\
			<template-slot\
				:no-slot="true"\
			/>\
			<template-nav\
				:nav="nav"\
			/>\
		</well-box>\
	'
};