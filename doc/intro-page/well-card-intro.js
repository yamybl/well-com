var wellCardIntro = {
	name: "well-card-intro",
	
	data: function () {
		return store.state.wellCardIntro
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
						<well-card>\
							<template #title>\
								第一篇记事\
							</template>\
							<template #des-1>\
								很高兴来到这里......\
							</template>\
							<template #des-2>\
								一切随缘\
							</template>\
							<template #body>\
								第一次来到这里，请大家多多指教！\
							</template>\
							<template #footer-txt>\
								新手0\
							</template>\
						</well-card>\
					</template>\
					<template v-else-if="i === 1">\
						<well-card\
							avatar="media/image/avatar.jpg"\
						>\
							<template #title>\
								第一篇记事\
							</template>\
							<template #des-1>\
								很高兴来到这里......\
							</template>\
							<template #des-2>\
								一切随缘\
							</template>\
							<template #body>\
								第一次来到这里，请大家多多指教！\
							</template>\
							<template #footer-txt>\
								新手0\
							</template>\
						</well-card>\
					</template>\
				</template>\
			</template-sample>\
			<template-property\
				:property="property"\
			/>\
			<template-event />\
			<template-slot\
				:slotCustom="slotCustom"\
			/>\
			<template-nav\
				:nav="nav"\
			/>\
		</well-box>\
	'
};