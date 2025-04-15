var wellTabIntro = {
	name: "well-tab-intro",
	
	mixins: wellComHelper.wellComMixin( {
		components: [ "tab" ]
	} ),
	
	data: function () {
		return store.state.wellTabIntro
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
						<well-tab>\
							<well-tab-toggle-wrapper>\
								<well-tab-toggle\
									v-for="( tab, index ) in tabs"\
									:key="index"\
									:active="tab.active"\
									@toggle="wellComTabToggle( tabs, index );"\
								>\
									标签页 {{ index + 1 }} 切换按钮\
								</well-tab-toggle>\
							</well-tab-toggle-wrapper>\
							<well-tab-item\
								v-for="( tab, index ) in tabs"\
								:key="index"\
								:active="tab.active"\
							>\
								标签页 {{ index + 1 }}\
							</well-tab-item>\
						</well-tab>\
					</template>\
				</template>\
			</template-sample>\
			<template-property\
				:property="property"\
			/>\
			<template-event\
				:event="event"\
			/>\
			<template-slot />\
			<template-nav\
				:nav="nav"\
			/>\
		</well-box>\
	'
};