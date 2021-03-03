var wellContextMenuItem = {
	name: "well-context-menu-item",
	template: '\
		<div class="well-ori-display__flex-row--s-c well-ori-padding--extra-small well-ori-font__size--small well-com-context-menu__item"\
		     @click.stop="$emit( \'operate\' );">\
			<slot>菜单项</slot>\
		</div>\
	'
};

Vue.component( "well-context-menu-item", wellContextMenuItem );