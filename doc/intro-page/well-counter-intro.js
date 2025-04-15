var wellCounterIntro = {
	name: "well-counter-intro",
	
	data: function () {
		return store.state.wellCounterIntro
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
							v-wellComCounter\
						>\
							新消息\
							<well-counter\
								:count="10"\
							/>\
						</well-msg>\
					</template>\
					<template v-else-if="i === 1">\
						<well-msg\
							v-wellComCounter\
						>\
							新消息\
							<well-counter />\
						</well-msg>\
					</template>\
					<template v-else-if="i === 2">\
						<well-msg\
							v-wellComCounter\
						>\
							新消息\
							<well-counter\
								:count="10"\
								:max-count="9"\
							/>\
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