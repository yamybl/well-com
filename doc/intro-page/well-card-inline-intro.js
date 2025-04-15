var wellCardInlineIntro = {
	name: "well-card-inline-intro",
	
	data: function () {
		return store.state.wellCardInlineIntro
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
						<well-card-inline-wrapper>\
							<well-card-inline>\
								<template #title>\
									简\
								</template>\
								<template #des-1>\
									第一篇记事\
								</template>\
								<template #des-2>\
									随缘\
								</template>\
							</well-card-inline>\
							<well-card-inline>\
								<template #title>\
									单\
								</template>\
								<template #des-1>\
									第一篇记事\
								</template>\
								<template #des-2>\
									随缘\
								</template>\
							</well-card-inline>\
							<well-card-inline>\
								<template #title>\
									爱\
								</template>\
								<template #des-1>\
									第一篇记事\
								</template>\
								<template #des-2>\
									随缘\
								</template>\
							</well-card-inline>\
						</well-card-inline-wrapper>\
					</template>\
					<template v-else-if="i === 1">\
						<well-card-inline-wrapper>\
							<well-card-inline\
								mode="avatar"\
								avatar="media/image/avatar.jpg"\
							>\
								<template #des-1-primary>\
									第一篇记事\
								</template>\
								<template #des-1-secondary>\
									随缘\
								</template>\
								<template #des-2>\
									15:50\
								</template>\
							</well-card-inline>\
							<well-card-inline\
								mode="avatar"\
								avatar="media/image/avatar-2.jpg"\
							>\
								<template #des-1-primary>\
									第一篇记事\
								</template>\
								<template #des-1-secondary>\
									随缘\
								</template>\
								<template #des-2>\
									15:51\
								</template>\
							</well-card-inline>\
							<well-card-inline\
								mode="avatar"\
								avatar="media/image/avatar-3.jpg"\
							>\
								<template #des-1-primary>\
									第一篇记事\
								</template>\
								<template #des-1-secondary>\
									随缘\
								</template>\
								<template #des-2>\
									15:52\
								</template>\
							</well-card-inline>\
						</well-card-inline-wrapper>\
					</template>\
					<template v-else-if="i === 2">\
						<well-card-inline-wrapper>\
							<well-card-inline\
								:mini="true"\
							>\
								<div class="well-doc__well-card-inline-intro-avatar-wrapper">\
									<img class="well-doc__well-card-inline-intro-avatar" src="media/image/avatar.jpg" /> 第一篇记事\
								</div>\
							</well-card-inline>\
							<well-card-inline\
								:mini="true"\
							>\
								<div class="well-doc__well-card-inline-intro-avatar-wrapper">\
									<img class="well-doc__well-card-inline-intro-avatar" src="media/image/avatar-2.jpg" /> 第一篇记事\
								</div>\
							</well-card-inline>\
							<well-card-inline\
								:mini="true"\
							>\
								<div class="well-doc__well-card-inline-intro-avatar-wrapper">\
									<img class="well-doc__well-card-inline-intro-avatar" src="media/image/avatar-3.jpg" /> 第一篇记事\
								</div>\
							</well-card-inline>\
						</well-card-inline-wrapper>\
					</template>\
					<template v-else-if="i === 3">\
						<well-card-inline-wrapper>\
							<well-card-inline\
								:mini="true"\
								:active="true"\
							>\
								<div class="well-doc__well-card-inline-intro-avatar-wrapper">\
									<img class="well-doc__well-card-inline-intro-avatar" src="media/image/avatar.jpg" /> 第一篇记事\
								</div>\
							</well-card-inline>\
							<well-card-inline\
								:mini="true"\
							>\
								<div class="well-doc__well-card-inline-intro-avatar-wrapper">\
									<img class="well-doc__well-card-inline-intro-avatar" src="media/image/avatar-2.jpg" /> 第一篇记事\
								</div>\
							</well-card-inline>\
							<well-card-inline\
								:mini="true"\
							>\
								<div class="well-doc__well-card-inline-intro-avatar-wrapper">\
									<img class="well-doc__well-card-inline-intro-avatar" src="media/image/avatar-3.jpg" /> 第一篇记事\
								</div>\
							</well-card-inline>\
						</well-card-inline-wrapper>\
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