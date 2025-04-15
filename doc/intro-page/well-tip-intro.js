var wellTipIntro = {
	name: "well-tip-intro",
	
	mixins: wellComHelper.wellComMixin( {
		components: [ "tip" ]
	} ),
	
	data: function () {
		return store.state.wellTipIntro
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
						<well-box\
							id="target"\
							@mouseenter.native="wellComTipTargetMouseenter( tip, $event );"\
							@mouseleave.native="wellComTipTargetMouseleave( tip, $event, \'tip\' );"\
						>\
							目标元素\
						</well-box>\
						<well-tip\
							id="tip"\
							:show="tip.show"\
							:mouse-x="tip.mouseX"\
							:mouse-y="tip.mouseY"\
							@mouseenter.native="wellComTipSelfMouseenter( tip, $event, \'target\' );"\
							@mouseleave.native="wellComTipSelfMouseleave( tip, $event, \'target\' );"\
						>\
							提示\
						</well-tip>\
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