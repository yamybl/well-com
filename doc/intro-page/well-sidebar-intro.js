var wellSidebarIntro = {
	name: "well-sidebar-intro",
	
	data: function () {
		return store.state.wellSidebarIntro
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
							state="caution"\
						>\
							请切换到移动端模拟来尝试此效果\
						</well-msg>\
					</template>\
				</template>\
			</template-sample>\
			<template-property />\
			<template-event />\
			<template-slot />\
			<template-nav\
				:nav="nav"\
			/>\
		</well-box>\
	'
};