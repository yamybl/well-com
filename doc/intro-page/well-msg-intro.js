var wellMsgIntro = {
	name: "well-msg-intro",
	
	data: function () {
		return store.state.wellMsgIntro
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
						<well-msg\
							size="large"\
							state="success"\
						>\
							发布文章成功\
						</well-msg>\
					</template>\
				</template>\
			</template-sample>\
			<template-property\
				:property="property"\
			/>\
			<template-event />\
			<template-slot />\
			<template-nav\
				:nav="nav"\
			/>\
		</well-box>\
	'
};