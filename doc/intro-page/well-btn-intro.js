var wellBtnIntro = {
	name: "well-btn-intro",
	
	data: function () {
		return store.state.wellBtnIntro
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
					<template\
						v-if="i === 0"\
					>\
						<well-btn>\
							default 尺寸的按钮\
						</well-btn>\
						<well-btn\
							size="large"\
						>\
							large 尺寸的按钮\
						</well-btn>\
						<well-btn\
							size="extra-large"\
						>\
							extra-large 尺寸的按钮\
						</well-btn>\
					</template>\
					<template\
						v-else-if="i === 1"\
					>\
						<well-btn\
							:round="true"\
						>\
							&times;\
						</well-btn>\
					</template>\
					<template\
						v-else-if="i === 2"\
					>\
						<well-btn>\
							default 状态的按钮\
						</well-btn>\
						<well-btn\
							state="disabled"\
						>\
							disabled 状态的按钮\
						</well-btn>\
						<well-btn\
							state="caution"\
						>\
							caution 状态的按钮\
						</well-btn>\
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