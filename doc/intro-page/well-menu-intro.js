var wellMenuIntro = {
	name: "well-menu-intro",
	
	mixins: wellComHelper.wellComMixin( {
		components: [ "menu" ]
	} ),
	
	data: function () {
		return store.state.wellMenuIntro
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
						<well-menu\
							position="down-right"\
							:show="menu1.display"\
							@toggle="wellComMenuToggle( menu1, \'display\' );"\
						>\
							<template\
								#items\
							>\
								<well-menu-item\
									@operate="wellComMenuItemOperate( menu1, operateHandler, \'display\' );"\
								>\
									菜单项 1\
								</well-menu-item>\
								<well-menu-item\
									@operate="wellComMenuItemOperate( menu1, operateHandler, \'display\' );"\
								>\
									菜单项 2\
								</well-menu-item>\
								<well-menu-item\
									@operate="wellComMenuItemOperate( menu1, operateHandler, \'display\' );"\
								>\
									菜单项 3\
								</well-menu-item>\
							</template>\
						</well-menu>\
					</template>\
					<template v-else-if="i === 1">\
						<well-menu\
							avatar="media/image/avatar.jpg"\
							size="large"\
							position="down-right"\
							:show="menu2.show"\
							@toggle="wellComMenuToggle( menu2 );"\
						>\
							<template\
								#items\
							>\
								<well-menu-item\
									@operate="wellComMenuItemOperate( menu2, operateHandler );"\
								>\
									菜单项 1\
								</well-menu-item>\
								<well-menu-item\
									@operate="wellComMenuItemOperate( menu2, operateHandler );"\
								>\
									菜单项 2\
								</well-menu-item>\
								<well-menu-item\
									@operate="wellComMenuItemOperate( menu2, operateHandler );"\
								>\
									菜单项 3\
								</well-menu-item>\
							</template>\
						</well-menu>\
					</template>\
					<template v-else-if="i === 2">\
						\
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