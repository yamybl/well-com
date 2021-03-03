/**
 * @VueComponent menuCustom - [ Vue 组件 ]
 *                            [ 自定义菜单 ]
 *                            [ 此组件与 menu-custom-item 组件是配套组件 ]
 *                            [ 此组件为规避浏览器原生标记 <menu>，所以命名为 menu-custom ]
 *
 *
 **********************************************************************************************************************
 *
 *
 * @prop fa - [ 组件属性 ] [ 定义是否在组件中使用 font-awesome 字体图标，如果使用，那么是使用新版 (v5) 还是旧版。]
 *          { T: String, D: "" } - [ 类型为 `字符串`，默认值为 `""` ]
 *          { O(options): "new" | "old" | "" } - [ 可选值为 `新版` | `旧版` | `不使用 font-awesome` ]
 *
 *          { ###### 请注意！关于此属性，有 1 点需要说明： ###### }
 *
 *          用户可根据需要自行选择是否在组件中使用 font-awesome 字体图标。选择或者不选择的页面渲染效果会有一些差别，
 *          我们在 menu-custom/demo/index.html 示例文件中会有具体说明，用户可运行示例文件查看二者之间的区别。
 *
 *
 *
 * @prop avatar - [ 组件属性 ] [ 定义当用户选择使用 `头像图片` 作为 `菜单的触发按钮`(请看下方说明) 时，`头像图片`
 *                               的地址。 ]
 *              { T: String, D: "" } - [ 类型为 `字符串`，默认值为 `""` ]
 *
 *              { ###### 请注意！关于此属性，有 2 点需要说明： ###### }
 *
 *              [ 1 ] 上面提到了 `菜单的触发按钮` 这一说法，具体是指，需要在点击后弹出菜单的按钮。由于此按钮是触发菜
 *                    单从隐藏转为显示的唯一元素，所以我们将其称为 `触发按钮`。
 *
 *              [ 2 ] 如果不给 `avatar` 属性传递值，或者传递一个空字符串，那么就会使用一个普通的按钮作为 `菜单触发按
 *                    钮`。
 *
 *
 *
 * @prop size - [ 组件属性 ] [ 定义菜单的 `尺寸(大小)` ]
 *            { T: String, D: "default" } - [ 类型为 `字符串`，默认值为 `默认(普通)` ]
 *            { O: "default" | "large" | "extra-large" } - [ 可选值为 `默认(普通)` | `大` | `更大` ]
 *
 *
 *
 * @prop position - [ 组件属性 ] [ 定义菜单出现在 `触发按钮` 的哪个地方。 ]
 *                { T: String, D: "down-right" } - [ 类型为 `字符串`，默认值为 `下右方位` ]
 *                { O: "down-right" | "down-left" | "up-right" | "up-left" } - [ 可选值为 `下右` | `下左` | `上右` |
 *                                                                               `上左` ]
 *
 *                { ###### 请注意！关于此属性，有 2 点需要说明： ###### }
 *
 *                [ 1 ] 我们在构建用户界面时，`菜单的触发按钮` 在页面中出现的位置往往不是固定在某处的，所以为了保证
 *                      菜单可以显示在 `触发按钮` 四周某个最合适的位置，因此我们提供了 `position` 属性。
 *
 *                [ 2 ] 虽然可选值为四个，分别是 "down-right" | "down-left" | "up-right" | "up-left"，但为了方便用户
 *                      的使用，将这四个可选值的顺序颠倒也是可以的。例如：将 "down-right" 写成 "right-down"，"up-right"
 *                      写成 "right-up"。
 *
 *
 *
 * @prop show - [ 组件属性 ] [ 定义菜单的 `显示` 和 `隐藏`。 ]
 *            { T: Boolean, D: false, required: true } - [ 类型为 `布尔值`，默认值为 false，必选 ]
 *            { O: true | false } - [ 可选值为 true | false ]
 *
 *            { ###### 请注意！关于此属性，有 1 点需要说明： ###### }
 *
 *            这是一个必选属性。
 *
 *
 **********************************************************************************************************************
 *
 *
 * @customEvent toggle - [ 组件自定义事件 ] [ 通过此事件来切换菜单的 `显示` 和 `隐藏`。 ]
 *
 *                       { ###### 请注意！关于此自定义事件，有 1 点需要说明： ###### }
 *
 *                       对于用户给此自定义事件绑定的事件处理函数，会接收到一个从此自定义事件中发出的参数，而此参数
 *                       正是我们在之前介绍过的此组件的 `prop` 属性。
 *
 *
 **********************************************************************************************************************
 *
 *
 * @template <menu-custom> - [ 组件模板介绍 ]
 *
 *           <menu-custom>
 *               <template #toggle-btn-txt> - [ html ( 可以包含 html 元素。包含的 html 元素最好只是 <i> 图标元素 ) ]
 *                   菜单触发按钮文字
 *               </template>
 *
 *               <template #items> - [ <menu-custom-item> ( 只应包含 menu-custom-item 组件 ) ]
 *                   <menu-custom-item></menu-custom-item>
 *                   <menu-custom-item></menu-custom-item>
 *                   ...
 *               </template>
 *           </menu-custom>
 */

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