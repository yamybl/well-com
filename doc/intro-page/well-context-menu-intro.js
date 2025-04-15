var wellContextMenuIntro = {
	name: "well-context-menu-intro",
	
	mixins: wellComHelper.wellComMixin( {
		components: [ "contextMenu" ]
	} ),
	
	data: function () {
		return store.state.wellContextMenuIntro
	},
	
	methods: {
		operateHandler: function () {
			console.log( "操作进行中..." );
		}
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
						<div\
							@contextmenu.prevent="wellComContextMenuShow( menu1, $event, { showName: \'display\', mouseXName: \'x\', mouseYName: \'y\' } );"\
						>点击鼠标右键打开上下文菜单</div>\
						<well-context-menu\
							:show="menu1.display"\
							:mouse-x="menu1.x"\
							:mouse-y="menu1.y"\
						>\
							<well-context-menu-item\
								@operate="wellComContextMenuItemOperate( menu1, operateHandler, \'display\' );"\
							></well-context-menu-item>\
						<well-context-menu>\
					</template>\
					<template v-else-if="i === 1">\
						<div\
							@contextmenu.prevent="wellComContextMenuShow( menu2, $event );"\
						>点击鼠标右键打开上下文菜单</div>\
						<well-context-menu\
							size="large"\
							:show="menu2.show"\
							:mouse-x="menu2.mouseX"\
							:mouse-y="menu2.mouseY"\
						>\
							<well-context-menu-item\
								@operate="wellComContextMenuItemOperate( menu2, operateHandler );"\
							></well-context-menu-item>\
						<well-context-menu>\
					</template>\
				</template>\
			</template-sample>\
			<template-property\
				:property="property"\
			/>\
			<template-event\
				:event="event"\
			/>\
			<template-slot\
				:slotCustom="slotCustom"\
			/>\
			<template-nav\
				:nav="nav"\
			/>\
		</well-box>\
	'
};