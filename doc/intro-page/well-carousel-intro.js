var wellCarouselIntro = {
	name: "well-carousel-intro",
	
	data: function () {
		return store.state.wellCarouselIntro
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
						<well-carousel\
							:items="items"\
						>\
							<template #first-item="firstItemProps">\
								<div class="well-doc__well-carousel-intro-item-wrapper">\
									{{ firstItemProps.firstItem }}\
								</div>\
							</template>\
							<template #item="itemProps">\
								<div class="well-doc__well-carousel-intro-item-wrapper">\
									{{ itemProps.item }}\
								</div>\
							</template>\
							<template #last-item="lastItemProps">\
								<div class="well-doc__well-carousel-intro-item-wrapper">\
									{{ lastItemProps.lastItem }}\
								</div>\
							</template>\
						</well-carousel>\
					</template>\
					<template v-else-if="i === 1">\
						<well-msg\
							v-if="!wellDocData.isMobile"\
							size="large"\
							state="caution"\
						>\
							请切换到移动端模拟来体验此效果\
						</well-msg>\
						<well-carousel\
							v-else\
							mode="touch"\
							:items="items"\
							:auto="true"\
							:delay="3000"\
							:height="400"\
							active-color="rgba(255, 235, 59, 0.9)"\
						>\
							<template #first-item="firstItemProps">\
								<div class="well-doc__well-carousel-intro-item-wrapper">\
									{{ firstItemProps.firstItem }}\
								</div>\
							</template>\
							<template #item="itemProps">\
								<div class="well-doc__well-carousel-intro-item-wrapper">\
									{{ itemProps.item }}\
								</div>\
							</template>\
							<template #last-item="lastItemProps">\
								<div class="well-doc__well-carousel-intro-item-wrapper">\
									{{ lastItemProps.lastItem }}\
								</div>\
							</template>\
						</well-carousel>\
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