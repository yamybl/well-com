var wellMenu = {
	name: "well-menu",
	props: {
		fa: {
			type: String,
			default: ""
		},
		avatar: {
			type: String,
			default: ""
		},
		size: {
			type: String,
			default: "default"
		},
		position: {
			type: String,
			default: "down-right"
		},
		show: {
			type: Boolean,
			default: false,
			required: true
		}
	},
	computed: {
		toggleBtnIconCls: function () {
			switch ( this.fa )
			{
				case "":
					switch ( this.position )
					{
						case "down-right":
						case "right-down":
						case "down-left":
						case "left-down":
							return {
								"well-base-triangle": true,
								"well-base-triangle--down": true
							};
							
						case "up-right":
						case "right-up":
						case "up-left":
						case "left-up":
							return {
								"well-base-triangle": true,
								"well-base-triangle--up": true
							};
					}
					
				case "new":
					switch ( this.position )
					{
						case "down-right":
						case "right-down":
						case "down-left":
						case "left-down":
							return {
								"fas": true,
								"fa-caret-down": true
							};
							
						case "up-right":
						case "right-up":
						case "up-left":
						case "left-up":
							return {
								"fas": true,
								"fa-caret-up": true
							};
					}
					
				case "old":
					switch ( this.position )
					{
						case "down-right":
						case "right-down":
						case "down-left":
						case "left-down":
							return {
								"fa": true,
								"fa-caret-down": true
							};
							
						case "up-right":
						case "right-up":
						case "up-left":
						case "left-up":
							return {
								"fa": true,
								"fa-caret-up": true
							};
					}
			}
		},
		menuCls: function () {
			return {
				"well-com-box": true,
				"well-ori-padding-left--0": true,
				"well-ori-padding-right--0": true,
				"well-ori-padding-top--extra-small": true,
				"well-ori-padding-bottom--extra-small": true,
				"well-ori-border-radius--small": true,
				"well-com-menu": true,
				"well-com-menu--large": this.size === "large",
				"well-com-menu--extra-large": this.size === "extra-large",
				"well-com-menu--down-right": this.position === "down-right" || this.position === "right-down",
				"well-com-menu--down-left": this.position === "down-left" || this.position === "left-down",
				"well-com-menu--up-right": this.position === "up-right" || this.position === "up-down",
				"well-com-menu--up-left": this.position === "up-left" || this.position === "left-up"
			};
		},
	},
	template: '\
		<div class="well-base-wrapper-inline well-ori-user-select--none well-com-menu__wrapper">\
			<div class="well-base-wrapper-inline well-ori-margin--0 well-ori-font__size--small well-com-menu__toggle"\
			     @click.stop="$emit( \'toggle\' );">\
				<template v-if="avatar === \'\'">\
					<slot name="toggle-btn-txt">打开菜单</slot>\
					<i v-if="fa === \'\'"\
					   :class="toggleBtnIconCls"></i>\
					<i v-else-if="fa === \'new\'"\
					   :class="toggleBtnIconCls"></i>\
					<i v-else-if="fa === \'old\'"\
					   :class="toggleBtnIconCls"></i>\
				</template>\
				<template v-else>\
					<img class="well-com-menu__toggle-avatar"\
					     :src="avatar" />\
				</template>\
			</div>\
			<transition name="v-fade">\
				<div v-if="show"\
					 :class="menuCls">\
					<slot name="items"></slot>\
				</div>\
			</transition>\
		</div>\
	'
};

Vue.component( "well-menu", wellMenu );
