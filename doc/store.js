var store = {
	state: {
		sidebar: {
			items: [
				{
					name: "简介",
					path: "/guide",
					active: false
				},
				{
					name: "安装",
					path: "/install",
					active: false
				},
				{
					name: "<well-a>",
					path: "/well-a-intro",
					active: false
				},
				{
					name: "<well-app>",
					path: "/well-app-intro",
					active: false
				},
				{
					name: "<well-box>",
					path: "/well-box-intro",
					active: false
				},
				{
					name: "<well-btn>",
					path: "/well-btn-intro",
					active: false
				},
				{
					name: "<well-card>",
					path: "/well-card-intro",
					active: false
				},
				{
					name: "<well-card-inline>",
					path: "/well-card-inline-intro",
					active: false
				},
				{
					name: "<well-carousel>",
					path: "/well-carousel-intro",
					active: false
				},
				{
					name: "<well-counter>",
					path: "/well-counter-intro",
					active: false
				},
				{
					name: "<well-txt>",
					path: "/well-txt-intro",
					active: false
				},
				{
					name: "<well-radio>",
					path: "/well-radio-intro",
					active: false
				},
				{
					name: "<well-checkbox>",
					path: "/well-checkbox-intro",
					active: false
				},
				{
					name: "<well-file>",
					path: "/well-file-intro",
					active: false
				},
				{
					name: "<well-infinite-scroll>",
					path: "/well-infinite-scroll-intro",
					active: false
				},
				{
					name: "<well-loading>",
					path: "/well-loading-intro",
					active: false
				},
				{
					name: "<well-menu>",
					path: "/well-menu-intro",
					active: false
				},
				{
					name: "<well-context-menu>",
					path: "/well-context-menu-intro",
					active: false
				},
				{
					name: "<well-modal>",
					path: "/well-modal-intro",
					active: false
				},
				{
					name: "<well-msg>",
					path: "/well-msg-intro",
					active: false
				},
				{
					name: "<well-pagination>",
					path: "/well-pagination-intro",
					active: false
				},
				{
					name: "<well-sidebar>",
					path: "/well-sidebar-intro",
					active: false
				},
				{
					name: "<well-tab>",
					path: "/well-tab-intro",
					active: false
				},
				{
					name: "<well-tip>",
					path: "/well-tip-intro",
					active: false
				}
			]
		},
		
		wellBtnIntro: {
			header: {
				title: "<well-btn> 组件",
				summary: [
					{
						content: "顾名思义，这是一个为用户进行某种操作而准备的按钮形式的组件"
					}
				]
			},
			sample: [
				{
					title: "示例一",
					summary: {
						title: "不同大小的一组按钮",
						content: [ "通过给 size 属性设置不同的字符串值，来得到不同大小的按钮" ]
					},
					codeForPrint: [
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-btn&gt;<br class='nocode' />" +
									 "    default 尺寸的按钮<br class='nocode' />" +
									 "&lt;/well-btn&gt;<br class='nocode' />" +
									 
									 "<br class='nocode' />" +
									 
							         "&lt;well-btn<br class='nocode' />" +
									 "    size=\"large\"<br class='nocode' />" +
							         "&gt;<br class='nocode' />" +
									 "    large 尺寸的按钮<br class='nocode' />" +
									 "&lt;/well-btn&gt;<br class='nocode' />" +
									 
									 "<br class='nocode' />" +
									 
									 "&lt;well-btn<br class='nocode' />" +
									 "    size=\"extra-large\"<br class='nocode' />" +
							         "&gt;<br class='nocode' />" +
									 "    extra-large 尺寸的按钮<br class='nocode' />" +
									 "&lt;/well-btn&gt;"
						}
					]
				},
				{
					title: "示例二",
					summary: {
						title: "圆形按钮",
						content: [
							"通过将 round 属性设置为布尔值 true，来得到圆形按钮。",
							"在构建用户界面时，有时可能需要圆形按钮来表达某种特定的含义，如位于某个容器左上角或右上角的关闭按钮。用户可根据需要选择使用。"
						]
					},
					codeForPrint: [
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-btn<br class='nocode' />" +
									 "    :round=\"true\"<br class='nocode' />" +
							         "&gt;<br class='nocode' />" +
									 "    &amp;times;<br class='nocode' />" +
									 "&lt;/well-btn&gt;"
						}
					]
				},
				{
					title: "示例三",
					summary: {
						title: "不同状态的一组按钮",
						content: [
							"通过给 state 属性设置不同的字符串值，来得到不同状态的按钮。",
							"我们需要为按钮设置不同的状态来从视觉上提醒用户不同的操作级别。例如：当遇到“删除”等相对“危险”的操作时，我们可以使用 caution 状态来提醒用户。",
							"我们提供了三种按钮状态供用户选择，分别是：“普通（default，默认值）”、“禁用（disabled）”和“注意（caution）”。这样一来，组件库用户也更为容易选择自己需要的按钮状态。我们认为相比于提供更多的按钮状态，一个按钮在被点击之后，给出相应的提示来提醒用户当前的操作是“成功”、“失败”还是“需要注意”等等某种状态则是更为必要的做法。为此我们提供了 <well-msg> 组件，此组件可以用来在按钮被点击后提示各种状态。"
						]
					},
					codeForPrint: [
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
									 "&lt;well-btn&gt;<br class='nocode' />" +
									 "    default 状态的按钮<br class='nocode' />" +
									 "&lt;/well-btn&gt;<br class='nocode' />" +
									 
									 "<br class='nocode' />" +
									 
							         "&lt;well-btn<br class='nocode' />" +
									 "    state=\"disabled\"<br class='nocode' />" +
							         "&gt;<br class='nocode' />" +
									 "    disabled 状态的按钮<br class='nocode' />" +
									 "&lt;/well-btn&gt;<br class='nocode' />" +
									 
									 "<br class='nocode' />" +
									 
							         "&lt;well-btn<br class='nocode' />" +
									 "    state=\"caution\"<br class='nocode' />" +
							         "&gt;<br class='nocode' />" +
									 "    caution 状态的按钮<br class='nocode' />" +
									 "&lt;/well-btn&gt;"
						}
					]
				}
			],
			property: [
				{
					name: "size",
					type: "String",
					value: "\"normal\"(默认值) |<br />\"large\" |<br />\"extra-large\"",
					option: "可选",
					intro: "设置按钮的尺寸（字体）大小。"
				},
				{
					name: "round",
					type: "Boolean",
					value: "false(默认值) |<br />true",
					option: "可选",
					intro: "设置是否将按钮设置为圆形。需要注意的是如果按钮被设置为圆形，那么往往也就意味着按钮中只能有一个文字，或者是一个图标。（可参见“示例二”）"
				},
				{
					name: "state",
					type: "String",
					value: "\"normal\"(默认值) |<br />\"disabled\" |<br />\"caution\"",
					option: "可选",
					intro: "设置按钮的状态。"
				}
			],
			nav: {
				prevRoute: {
					name: "<well-box> 组件",
					path: "/well-box-intro"
				},
				nextRoute: {
					name: "<well-card> 组件",
					path: "/well-card-intro"
				}
			}
		}, /* wellBtnIntro [ end ] */
		
		wellCardIntro: {
			header: {
				title: "<well-card> 组件",
				summary: [
					{
						content: "这是一个将相互关联的一组内容聚合在一起的容器组件，我们为其取名为“卡片”"
					}
				]
			},
			sample: [
				{
					title: "示例一",
					summary: {
						title: "把昵称为“新手0”的用户的一组相关内容通过“卡片”组件聚合起来"
					},
					codeForPrint: [
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-card&gt;<br class='nocode' />" +
									 "    &lt;template #title&gt;<br class='nocode' />" +
									 "        第一篇记事<br class='nocode' />" +
									 "    &lt;/template&gt;<br class='nocode' />" +
									 "    &lt;template #des-1&gt;<br class='nocode' />" +
									 "        很高兴来到这里......<br class='nocode' />" +
									 "    &lt;/template&gt;<br class='nocode' />" +
									 "    &lt;template #des-2&gt;<br class='nocode' />" +
									 "        一切随缘<br class='nocode' />" +
									 "    &lt;/template&gt;<br class='nocode' />" +
									 "    &lt;template #body&gt;<br class='nocode' />" +
									 "        第一次来到这里，请大家多多指教！<br class='nocode' />" +
									 "    &lt;/template&gt;<br class='nocode' />" +
									 "    &lt;template #footer-txt&gt;<br class='nocode' />" +
									 "        新手0<br class='nocode' />" +
									 "    &lt;/template&gt;<br class='nocode' />" +
									 "&lt;/well-card&gt;"
						}
					]
				},
				{
					title: "示例二",
					summary: {
						title: "设置了头像的卡片",
						content: [
							"通过将 avatar 属性设置为头像图片地址字符串，来在卡片的页脚位置添加一个头像。"
						]
					},
					codeForPrint: [
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-card<br class='nocode' />" +
									 "    avatar=\"media/image/avatar.jpg\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    &lt;template #title&gt;<br class='nocode' />" +
									 "        第一篇记事<br class='nocode' />" +
									 "    &lt;/template&gt;<br class='nocode' />" +
									 "    &lt;template #des-1&gt;<br class='nocode' />" +
									 "        很高兴来到这里......<br class='nocode' />" +
									 "    &lt;/template&gt;<br class='nocode' />" +
									 "    &lt;template #des-2&gt;<br class='nocode' />" +
									 "        一切随缘<br class='nocode' />" +
									 "    &lt;/template&gt;<br class='nocode' />" +
									 "    &lt;template #body&gt;<br class='nocode' />" +
									 "        第一次来到这里，请大家多多指教！<br class='nocode' />" +
									 "    &lt;/template&gt;<br class='nocode' />" +
									 "    &lt;template #footer-txt&gt;<br class='nocode' />" +
									 "        新手0<br class='nocode' />" +
									 "    &lt;/template&gt;<br class='nocode' />" +
									 "&lt;/well-card&gt;"
						}
					]
				}
			],
			property: [
				{
					name: "avatar",
					type: "String",
					value: "\"\"(空字符串，默认值) |<br />[ 头像图片地址字符串 ]",
					option: "可选",
					intro: "在卡片的页脚位置设置头像。"
				}
			],
			slotCustom: [
				{
					name: "title",
					intro: "设置卡片中的主题或标题部分。（使用方式可参见“示例”）"
				},
				{
					name: "des-1",
					intro: "设置主要描述性文字。"
				},
				{
					name: "des-2",
					intro: "设置次要描述性文字。"
				},
				{
					name: "body",
					intro: "设置卡片中的主要内容。"
				},
				{
					name: "footer-txt",
					intro: "设置卡片页脚处的文字。"
				}
			],
			nav: {
				prevRoute: {
					name: "<well-btn> 组件",
					path: "/well-btn-intro"
				},
				nextRoute: {
					name: "<well-card-inline> 组件",
					path: "/well-card-inline-intro"
				}
			}
		},  /* wellCardIntro [ end ] */
		
		wellCardInlineIntro: {
			header: {
				title: "<well-card-inline> 组件",
				summary: [
					{
						content: "顾名思义，这是一个“内联卡片”组件。与 <well-card> 组件的使用情景很相似，也是将一组相互关联的内容聚合在一起的组件。不过有些时候我们只希望在一行上渲染某些内容，此时我们就可以使用 <well-card-inline> 组件来达到目的。"
					},
					{
						content: "由于我们为此组件设置了内置的样式，所以在使用此组件时，需要注意在其外部包裹一个与之配套的组件 <well-card-inline-wrapper>。",
						important: true
					}
				]
			},
			sample: [
				{
					title: "示例一",
					summary: {
						title: "把三个不同用户各自的相关内容分别通过一个“内联卡片”组件聚合起来"
					},
					codeForPrint: [
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
									 "&lt;well-card-inline-wrapper&gt;<br class='nocode' />" +
							         "    &lt;well-card-inline&gt;<br class='nocode' />" +
									 "        &lt;template #title&gt;<br class='nocode' />" +
									 "            简<br class='nocode' />" +
									 "        &lt;/template&gt;<br class='nocode' />" +
									 "        &lt;template #des-1&gt;<br class='nocode' />" +
									 "            第一篇记事<br class='nocode' />" +
									 "        &lt;/template&gt;<br class='nocode' />" +
									 "        &lt;template #des-2&gt;<br class='nocode' />" +
									 "            随缘<br class='nocode' />" +
									 "        &lt;/template&gt;<br class='nocode' />" +
									 "    &lt;/well-card-inline&gt;<br class='nocode' />" +
									 "    &lt;well-card-inline&gt;<br class='nocode' />" +
									 "        &lt;template #title&gt;<br class='nocode' />" +
									 "            单<br class='nocode' />" +
									 "        &lt;/template&gt;<br class='nocode' />" +
									 "        &lt;template #des-1&gt;<br class='nocode' />" +
									 "            第一篇记事<br class='nocode' />" +
									 "        &lt;/template&gt;<br class='nocode' />" +
									 "        &lt;template #des-2&gt;<br class='nocode' />" +
									 "            随缘<br class='nocode' />" +
									 "        &lt;/template&gt;<br class='nocode' />" +
									 "    &lt;/well-card-inline&gt;<br class='nocode' />" +
									 "    &lt;well-card-inline&gt;<br class='nocode' />" +
									 "        &lt;template #title&gt;<br class='nocode' />" +
									 "            爱<br class='nocode' />" +
									 "        &lt;/template&gt;<br class='nocode' />" +
									 "        &lt;template #des-1&gt;<br class='nocode' />" +
									 "            第一篇记事<br class='nocode' />" +
									 "        &lt;/template&gt;<br class='nocode' />" +
									 "        &lt;template #des-2&gt;<br class='nocode' />" +
									 "            随缘<br class='nocode' />" +
									 "        &lt;/template&gt;<br class='nocode' />" +
									 "    &lt;/well-card-inline&gt;<br class='nocode' />" +
									 "&lt;/well-card-inline-wrapper&gt;"
						}
					]
				},
				{
					title: "示例二",
					summary: {
						title: "带头像的内联卡片",
						content: [
							"要实现给内联卡片添加头像，首先要将 mode 属性设置为字符串值 \"avatar\"。",
							"接着，通过给 avatar 属性设置头像图片地址字符串，来在卡片的开头位置添加一个头像。",
							"当给 avatar 属性赋值了头像图片地址字符串后，头像图片就占据了原本通过 title 插槽插入的内容的位置（头像图片替代了原本通过 title 插槽插入的文字内容），也就是说 title 插槽此时就不存在了。",
							"当给 avatar 属性赋值了头像图片地址字符串后，原本的 des-1 插槽就不存在了，取而代之的是 des-1-primary 和 des-1-secondary 两个插槽，不过 des-2 插槽还依然存在。"
						]
					},
					codeForPrint: [
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
									 "&lt;well-card-inline-wrapper&gt;<br class='nocode' />" +
							         "    &lt;well-card-inline<br class='nocode' />" +
									 "        mode=\"avatar\"<br class='nocode' />" +
									 "        avatar=\"media/image/avatar.jpg\"<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        &lt;template #des-1-primary&gt;<br class='nocode' />" +
									 "            第一篇记事<br class='nocode' />" +
									 "        &lt;/template&gt;<br class='nocode' />" +
									 "        &lt;template #des-1-secondary&gt;<br class='nocode' />" +
									 "            随缘<br class='nocode' />" +
									 "        &lt;/template&gt;<br class='nocode' />" +
									 "        &lt;template #des-2&gt;<br class='nocode' />" +
									 "            15:50<br class='nocode' />" +
									 "        &lt;/template&gt;<br class='nocode' />" +
									 "    &lt;/well-card-inline&gt;<br class='nocode' />" +
									 "    &lt;well-card-inline<br class='nocode' />" +
									 "        mode=\"avatar\"<br class='nocode' />" +
									 "        avatar=\"media/image/avatar-2.jpg\"<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        &lt;template #des-1-primary&gt;<br class='nocode' />" +
									 "            第一篇记事<br class='nocode' />" +
									 "        &lt;/template&gt;<br class='nocode' />" +
									 "        &lt;template #des-1-secondary&gt;<br class='nocode' />" +
									 "            随缘<br class='nocode' />" +
									 "        &lt;/template&gt;<br class='nocode' />" +
									 "        &lt;template #des-2&gt;<br class='nocode' />" +
									 "            15:51<br class='nocode' />" +
									 "        &lt;/template&gt;<br class='nocode' />" +
									 "    &lt;/well-card-inline&gt;<br class='nocode' />" +
									 "    &lt;well-card-inline<br class='nocode' />" +
									 "        mode=\"avatar\"<br class='nocode' />" +
									 "        avatar=\"media/image/avatar-3.jpg\"<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        &lt;template #des-1-primary&gt;<br class='nocode' />" +
									 "            第一篇记事<br class='nocode' />" +
									 "        &lt;/template&gt;<br class='nocode' />" +
									 "        &lt;template #des-1-secondary&gt;<br class='nocode' />" +
									 "            随缘<br class='nocode' />" +
									 "        &lt;/template&gt;<br class='nocode' />" +
									 "        &lt;template #des-2&gt;<br class='nocode' />" +
									 "            15:52<br class='nocode' />" +
									 "        &lt;/template&gt;<br class='nocode' />" +
									 "    &lt;/well-card-inline&gt;<br class='nocode' />" +
									 "&lt;/well-card-inline-wrapper&gt;"
						}
					]
				},
				{
					title: "示例三",
					summary: {
						title: "迷你内联卡片",
						content: [
							"通过给布尔类型属性 mini 设置 true 值，来开启迷你卡片功能。",
							"顾名思义，迷你内联卡片很适合在只有少量数据需要展示时进行使用。",
							"当开启了迷你卡片功能时，组件就只保留一个默认插槽用于内容插入了，其他具名插槽都不再存在。",
							"而且当处于迷你状态时，组件的 mode 属性和 avatar 属性都将不再发挥作用，也就是说不需要再给它们赋值。"
						]
					},
					codeForPrint: [
						{
							content: "/* css */<br class='nocode' />" +
									".well-doc__well-card-inline-intro-avatar-wrapper {<br class='nocode' />" +
									"    display: flex;<br class='nocode' />" +
									"    align-items: center;<br class='nocode' />" +
									"}<br class='nocode' />" +
									".well-doc__well-card-inline-intro-avatar {<br class='nocode' />" +
									"    width: 2.5rem;<br class='nocode' />" +
									"    height: 2.5rem;<br class='nocode' />" +
									"    margin-right: 0.5rem;<br class='nocode' />" +
									"    border-radius: 0.125rem;<br class='nocode' />" +
									"}",
							type: "css"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
									 "&lt;well-card-inline-wrapper&gt;<br class='nocode' />" +
							         "    &lt;well-card-inline<br class='nocode' />" +
									 "        :mini=\"true\"<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        &lt;div class=\"well-doc__well-card-inline-intro-avatar-wrapper\"&gt;<br class='nocode' />" +
									 "            &lt;img class=\"well-doc__well-card-inline-intro-avatar\" scr=\"media/image/avatar.jpg\" /&gt; 第一篇记事<br class='nocode' />" +
									 "        &lt;/div&gt;<br class='nocode' />" +
									 "    &lt;/well-card-inline&gt;<br class='nocode' />" +
									 "    &lt;well-card-inline<br class='nocode' />" +
									 "        :mini=\"true\"<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        &lt;div class=\"well-doc__well-card-inline-intro-avatar-wrapper\"&gt;<br class='nocode' />" +
									 "            &lt;img class=\"well-doc__well-card-inline-intro-avatar\" scr=\"media/image/avatar-2.jpg\" /&gt; 第一篇记事<br class='nocode' />" +
									 "        &lt;/div&gt;<br class='nocode' />" +
									 "    &lt;/well-card-inline&gt;<br class='nocode' />" +
									 "    &lt;well-card-inline<br class='nocode' />" +
									 "        :mini=\"true\"<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        &lt;div class=\"well-doc__well-card-inline-intro-avatar-wrapper\"&gt;<br class='nocode' />" +
									 "            &lt;img class=\"well-doc__well-card-inline-intro-avatar\" scr=\"media/image/avatar-3.jpg\" /&gt; 第一篇记事<br class='nocode' />" +
									 "        &lt;/div&gt;<br class='nocode' />" +
									 "    &lt;/well-card-inline&gt;<br class='nocode' />" +
									 "&lt;/well-card-inline-wrapper&gt;"
						}
					]
				},
				{
					title: "示例四",
					summary: {
						title: "包含了被激活卡片的一组内联卡片",
						content: [
							"通过给布尔类型属性 active 设置 true 值，来激活卡片。"
						]
					},
					codeForPrint: [
						{
							content: "/* css */<br class='nocode' />" +
									".well-doc__well-card-inline-intro-avatar-wrapper {<br class='nocode' />" +
									"    display: flex;<br class='nocode' />" +
									"    align-items: center;<br class='nocode' />" +
									"}<br class='nocode' />" +
									".well-doc__well-card-inline-intro-avatar {<br class='nocode' />" +
									"    width: 2.5rem;<br class='nocode' />" +
									"    height: 2.5rem;<br class='nocode' />" +
									"    margin-right: 0.5rem;<br class='nocode' />" +
									"    border-radius: 0.125rem;<br class='nocode' />" +
									"}",
							type: "css"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
									 "&lt;well-card-inline-wrapper&gt;<br class='nocode' />" +
							         "    &lt;well-card-inline<br class='nocode' />" +
									 "        :mini=\"true\"<br class='nocode' />" +
									 "        :active=\"true\"<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        &lt;div class=\"well-doc__well-card-inline-intro-avatar-wrapper\"&gt;<br class='nocode' />" +
									 "            &lt;img class=\"well-doc__well-card-inline-intro-avatar\" scr=\"media/image/avatar.jpg\" /&gt; 第一篇记事<br class='nocode' />" +
									 "        &lt;/div&gt;<br class='nocode' />" +
									 "    &lt;/well-card-inline&gt;<br class='nocode' />" +
									 "    &lt;well-card-inline<br class='nocode' />" +
									 "        :mini=\"true\"<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        &lt;div class=\"well-doc__well-card-inline-intro-avatar-wrapper\"&gt;<br class='nocode' />" +
									 "            &lt;img class=\"well-doc__well-card-inline-intro-avatar\" scr=\"media/image/avatar-2.jpg\" /&gt; 第一篇记事<br class='nocode' />" +
									 "        &lt;/div&gt;<br class='nocode' />" +
									 "    &lt;/well-card-inline&gt;<br class='nocode' />" +
									 "    &lt;well-card-inline<br class='nocode' />" +
									 "        :mini=\"true\"<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        &lt;div class=\"well-doc__well-card-inline-intro-avatar-wrapper\"&gt;<br class='nocode' />" +
									 "            &lt;img class=\"well-doc__well-card-inline-intro-avatar\" scr=\"media/image/avatar-3.jpg\" /&gt; 第一篇记事<br class='nocode' />" +
									 "        &lt;/div&gt;<br class='nocode' />" +
									 "    &lt;/well-card-inline&gt;<br class='nocode' />" +
									 "&lt;/well-card-inline-wrapper&gt;"
						}
					]
				}
			],
			property: [
				{
					name: "mode",
					type: "String",
					value: "\"default\"(默认值) |<br />\"avatar\"",
					option: "可选",
					intro: "设置内联卡片的使用模式。\"default\" 模式下，可以使用 title 插槽在卡片开始处插入文字。\"avatar\" 模式下，可通过为 avatar 属性赋值来在卡片开始处插入头像。"
				},
				{
					name: "avatar",
					type: "String",
					value: "\"\"(空字符串，默认值) |<br />[ 头像图片地址字符串 ]",
					option: "可选",
					intro: "在卡片的开始位置设置头像。"
				},
				{
					name: "mini",
					type: "Boolean",
					value: "false(默认值) |<br />true",
					option: "可选",
					intro: "设置是否开启迷你卡片模式。"
				},
				{
					name: "avatar",
					type: "String",
					value: "\"\"(空字符串，默认值) |<br />[ 头像图片地址字符串 ]",
					option: "可选",
					intro: "在卡片的开始位置设置头像。"
				},
				{
					name: "active",
					type: "Boolean",
					value: "false(默认值) |<br />true",
					option: "可选",
					intro: "设置是否将卡片的置于激活状态。在使用多个内联卡片时，有时会需要将卡片置于激活状态来达到提醒的作用。组件用户可根据需要，自定义逻辑来实现卡片的激活和取消激活。"
				}
			],
			slotCustom: [
				{
					name: "title",
					intro: "设置卡片中的主题或标题部分。"
				},
				{
					name: "des-1",
					intro: "设置主要描述性文字。此插槽只有当 mode 属性为 \"default\" 值时才会起作用。"
				},
				{
					name: "des-1-primary",
					intro: "设置主要描述性文字的首要部分。此插槽只有当 mode 属性为 \"avatar\" 值时才会起作用。"
				},
				{
					name: "des-1-secondary",
					intro: "设置主要描述性文字的次要部分。此插槽只有当 mode 属性为 \"avatar\" 值时才会起作用。"
				},
				{
					name: "des-2",
					intro: "设置次要描述性文字。"
				},
				{
					name: "default",
					intro: "这是一个默认插槽，此插槽只有当 mini 属性为 true 值时才会起作用。"
				}
			],
			nav: {
				prevRoute: {
					name: "<well-btn> 组件",
					path: "/well-btn-intro"
				},
				nextRoute: {
					name: "<well-carousel> 组件",
					path: "/well-carousel-intro"
				}
			}
		},  /* wellCardInlineIntro [ end ] */
		
		wellCarouselIntro: {
			items: [
				"项目一",
				"项目二",
				"项目三",
				"项目四"
			],
			header: {
				title: "<well-carousel> 组件",
				summary: [
					{
						content: "如果大家事先接触过像是 Bootstrap 等前端 UI 框架，那么对“carousel”组件一定不会陌生。简单来说，“carousel”组件就是一个“滚动图片”组件，当然不只是图片可以滚动，任何需要滚动的页面元素都可以放在其中。"
					},
					{
						content: "组件可以自动识别当前浏览器所在平台类型（pc端还是移动端），以应用更适合当前平台所使用的滚动功能。如果是在移动端平台，那么可以通过为 mode 属性设置不同的字符串值来获得不同的滚动体验。",
						important: true
					}
				]
			},
			sample: [
				{
					title: "示例一",
					summary: {
						title: "<well-carousel> 演示",
						content: [
							"<well-carousel> 组件有唯一一个 !必选! 属性 —— items，此属性接收一个数组类型值，数组中的每一项即是需要渲染并展示在每一个滚动项目中的数据。",
							"由于 <well-carousel> 组件内部运作的需要，我们在定义此组件时准备了三个作用域插槽，分别是first-item、last-item 和 item，它们被绑定的数据名称分别为 firstItem、lastItem 和 item。用户在使用此组件时 !请务必注意! 在 <well-carousel> 中同时使用这三个插槽。",
							"以上提到的三个作用域插槽所绑定的数据其实就是绑定到 <well-carousel> 组件的 items 属性上的数组中的元素。例如：如果绑定到 items 属性上的数组为 [ \"项目一\", \"项目二\", \"项目三\" ]，那么 first-item 插槽上绑定的数据即是数组中的第一个元素 —— \"项目一\"，last-item 插槽上绑定的数据即是数组中的最后一个元素 —— \"项目三\"，item 插槽上绑定的是数组中的每一个元素（在 <well-carousel> 组件内部，我们通过一个 for 循环，迭代了绑定到 items 属性上的数组中的每一个元素，并将这每一个元素都绑定到了 item 插槽上）。",
							"正如上面所提到的，为了 <well-carousel> 组件内部运作需要，我们额外定义了 first-item 和 last-item 插槽。此外，还需要说明的是，除了组件内部运作的需要，作用域插槽还起到帮助用户自由布局 <well-carousel> 组件中的每一个滚动项目的作用。"
						]
					},
					codeForPrint: [
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    data: {<br class='nocode' />" +
									 "        items: [<br class='nocode' />" +
									 "            \"项目一\",<br class='nocode' />" +
									 "            \"项目二\",<br class='nocode' />" +
									 "            \"项目三\"<br class='nocode' />" +
									 "            \"项目四\"<br class='nocode' />" +
									 "        ]<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "});"
						},
						{
							content: "/* css */<br class='nocode' />" +
							         ".well-doc__well-carousel-intro-item-wrapper {<br class='nocode' />" +
									 "    display: flex;<br class='nocode' />" +
									 "    height: 100%;<br class='nocode' />" +
									 "    justify-content: center;<br class='nocode' />" +
									 "    align-items: center;<br class='nocode' />" +
									 "}",
							type: "css"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-carousel<br class='nocode' />" +
									 "    :items=\"items\"<br class='nocode' />" +
									 "    :auto=\"true\"<br class='nocode' />" +
									 "    :delay=\"3000\"<br class='nocode' />" +
									 "    :height=\"400\"<br class='nocode' />" +
									 "    active-color=\"rgba(255, 235, 59, 0.9)\"<br class='nocode' />" +
									 "&gt;<br class='nocode' /><br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #first-item=\"firstItemProps\"<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        &lt;div class=\"well-doc__well-carousel-intro-item-wrapper\"&gt;<br class='nocode' />" +
									 "            {{ firstItemProps.firstItem }}<br class='nocode' />" +
									 "        &lt;/div&gt;<br class='nocode' />" +
									 "    &lt;/template&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #item=\"itemProps\"<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        &lt;div class=\"well-doc__well-carousel-intro-item-wrapper\"&gt;<br class='nocode' />" +
									 "            {{ itemProps.item }}<br class='nocode' />" +
									 "        &lt;/div&gt;<br class='nocode' />" +
									 "    &lt;/template&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #last-item=\"lastItemProps\"<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        &lt;div class=\"well-doc__well-carousel-intro-item-wrapper\"&gt;<br class='nocode' />" +
									 "            {{ lastItemProps.lastItem }}<br class='nocode' />" +
									 "        &lt;/div&gt;<br class='nocode' />" +
									 "    &lt;/template&gt;<br class='nocode' />" +
									 "&lt;/well-carousel&gt;"
						}
					]
				},
				{
					title: "示例二",
					summary: {
						title: "通过手指滑动来触发滚动的效果（必须在移动端下体验。可以打开浏览器的开发者工具并切换到移动端模拟来体验此效果）",
						content: [
							"在移动端下，通过给 mode 属性设置字符串值 \"touch\" 来实现此效果。"
						]
					},
					codeForPrint: [
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    data: {<br class='nocode' />" +
									 "        items: [<br class='nocode' />" +
									 "            \"项目一\",<br class='nocode' />" +
									 "            \"项目二\",<br class='nocode' />" +
									 "            \"项目三\"<br class='nocode' />" +
									 "        ]<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "});"
						},
						{
							content: "/* css */<br class='nocode' />" +
							         ".well-doc__well-carousel-intro-item-wrapper {<br class='nocode' />" +
									 "    display: flex;<br class='nocode' />" +
									 "    height: 100%;<br class='nocode' />" +
									 "    justify-content: center;<br class='nocode' />" +
									 "    align-items: center;<br class='nocode' />" +
									 "}",
							type: "css"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-carousel<br class='nocode' />" +
									 "    mode=\"touch\"<br class='nocode' />" +
									 "    :items=\"items\"<br class='nocode' />" +
									 "&gt;<br class='nocode' /><br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #first-item=\"firstItemProps\"<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        &lt;div class=\"well-doc__well-carousel-intro-item-wrapper\"&gt;<br class='nocode' />" +
									 "            {{ firstItemProps.firstItem }}<br class='nocode' />" +
									 "        &lt;/div&gt;<br class='nocode' />" +
									 "    &lt;/template&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #item=\"itemProps\"<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        &lt;div class=\"well-doc__well-carousel-intro-item-wrapper\"&gt;<br class='nocode' />" +
									 "            {{ itemProps.item }}<br class='nocode' />" +
									 "        &lt;/div&gt;<br class='nocode' />" +
									 "    &lt;/template&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #last-item=\"lastItemProps\"<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        &lt;div class=\"well-doc__well-carousel-intro-item-wrapper\"&gt;<br class='nocode' />" +
									 "            {{ lastItemProps.lastItem }}<br class='nocode' />" +
									 "        &lt;/div&gt;<br class='nocode' />" +
									 "    &lt;/template&gt;<br class='nocode' />" +
									 "&lt;/well-carousel&gt;"
						}
					]
				}
			],
			property: [
				{
					name: "mode",
					type: "String",
					value: "\"default\"(默认值) |<br />\"touch\"",
					option: "可选",
					intro: "设置触发滚动的不同方式。pc 端下不用为此属性赋值，只有在移动端下，此属性才会发挥作用。赋值 \"default\" 实现的是通过鼠标点击来触发滚动，赋值 \"touch\" 实现的是通过手指滑动来触发滚动。"
				},
				{
					name: "items",
					type: "Array",
					value: "null(默认值) |<br />[ 准备放在组件中滚动的一组数据 ]",
					option: "!必选!",
					intro: "这是唯一一个必选的属性。此属性所接收的数组类型值在组件内部将会被迭代，数组中的每一项都会绑定到指定的作用域插槽中，用户也就因此可以通过借助作用域插槽来自由布局要展示的数据。"
				},
				{
					name: "auto",
					type: "Boolean",
					value: "true(默认值) |<br />false",
					option: "可选",
					intro: "设置滚动效果是否自动播放。"
				},
				{
					name: "delay",
					type: "Number",
					value: "3000(单位：毫秒。默认值) |<br />[ 滚动动画暂停的时间 ]",
					option: "可选",
					intro: "设置相邻的两个滚动动画之间暂停的时间。"
				},
				{
					name: "height",
					type: "String | Number",
					value: "400(单位：px。默认值) |<br />[ 组件的高度 ]",
					option: "可选",
					intro: "设置组件的高度。"
				},
				{
					name: "position",
					type: "String",
					value: "right(默认值) |<br />left |<br />center",
					option: "可选",
					intro: "设置滚动项目指示器容器在组件中的位置。"
				},
				{
					name: "active-color",
					type: "String",
					value: "rgba(255, 235, 59, 0.9)(默认值) |<br />[ 触发滚动按钮以及指示器被激活时的颜色 ]",
					option: "可选",
					intro: "设置触发滚动按钮以及指示器被激活时的颜色。可以设置为任何浏览器能够解析的 css 颜色值。"
				}
			],
			slotCustom: [
				{
					name: "first-item",
					intro: "绑定了 items 数组中的第一个元素，绑定的数据名为 firstItem。（使用方式可参见“示例”）",
					scoped: true
				},
				{
					name: "last-item",
					intro: "绑定了 items 数组中的最后一个元素，绑定的数据名为 lastItem。",
					scoped: true
				},
				{
					name: "item",
					intro: "依次绑定了 items 数组中的每一个元素，绑定的数据名为 item。",
					scoped: true
				}
			],
			nav: {
				prevRoute: {
					name: "<well-card> 组件",
					path: "/well-card-intro"
				},
				nextRoute: {
					name: "<well-counter> 组件",
					path: "/well-counter-intro"
				}
			}
		}, /* wellCarouselIntro [ end ] */
		
		wellCounterIntro: {
			header: {
				title: "<well-counter> 组件",
				summary: [
					{
						content: "我们在构建用户界面时，经常会遇到需要“计数”的情况，例如用户收到了几条新消息，我们通常会在用户头像的拐角处“悬挂”代表新消息数量的数字以提醒用户。"
					},
					{
						content: "为了使得此组件能够“悬挂”在需要计数容器（此计数容器可以是原生 html 元素也可以是 vue 组件）的右上角，有两点需要提醒组件用户注意：一是此组件需要写在需要计数容器的内部；二是此组件具有一个自定义指令 wellComCounter，请用户将其添加到需要计数的容器上。",
						important: true
					}
				]
			},
			sample: [
				{
					title: "示例一",
					summary: {
						title: "提醒用户新消息的条数",
						content: [
							"通过给 count 属性设置数字类型值，来设置计数器中的数字。"
						]
					},
					codeForPrint: [
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-msg<br class='nocode' />" +
									 "    v-wellComCounter<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    新消息<br class='nocode' />" +
									 "    &lt;well-counter<br class='nocode' />" +
									 "        :count=\"10\"<br class='nocode' />" +
									 "    /&gt;<br class='nocode' />" +
									 "&lt;/well-msg&gt;"
						}
					]
				},
				{
					title: "示例二",
					summary: {
						title: "不显示数字的圆点计数器",
						content: [
							"如果不给 count 属性设置任何值（即保持其默认值），那么计数器就会变为一个圆点。"
						]
					},
					codeForPrint: [
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-msg<br class='nocode' />" +
									 "    v-wellComCounter<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    新消息<br class='nocode' />" +
									 "    &lt;well-counter /&gt;<br class='nocode' />" +
									 "&lt;/well-msg&gt;"
						}
					]
				},
				{
					title: "示例三",
					summary: {
						title: "超过最大计数值时，数字后跟 + 符号",
						content: [
							"通过给 max-count 属性设置一个最大计数值（数字类型），来实现当 count 值大于 max-count 值时，让计数器的数字后跟 + 符号的效果。"
						]
					},
					codeForPrint: [
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-msg<br class='nocode' />" +
									 "    v-wellComCounter<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    新消息<br class='nocode' />" +
									 "    &lt;well-counter<br class='nocode' />" +
									 "        :count=\"10\"<br class='nocode' />" +
									 "        :max-count=\"9\"<br class='nocode' />" +
									 "    /&gt;<br class='nocode' />" +
									 "&lt;/well-msg&gt;"
						}
					]
				}
			],
			property: [
				{
					name: "count",
					type: "Number",
					value: "undefined(默认值) |<br />[ 计数值 ]",
					option: "可选",
					intro: "设置计数器中的数字。"
				},
				{
					name: "max-count",
					type: "Number",
					value: "99(默认值) |<br />[ 最大计数值 ]",
					option: "可选",
					intro: "设置计数器中可以展现的最大数字。"
				}
			],
			nav: {
				prevRoute: {
					name: "<well-carousel> 组件",
					path: "/well-carousel-intro"
				},
				nextRoute: {
					name: "<well-txt> 组件",
					path: "/well-txt-intro"
				}
			}
		},  /* wellCounterIntro [ end ] */
		
		wellTxtIntro: {
			header: {
				title: "<well-txt> 组件",
				summary: [
					{
						content: "此组件实际上是对原生 html 表单控件 <input type=\"text | password\" /> 的包装。"
					},
					{
						content: "此组件除了在跨浏览器时具有比原生控件更一致的外观之外，还拥有对不合法（无效）输入进行提示以及处理的功能。"
					},
					{
						content: "此组件具有一个函数属性 errorHandler(错误处理器)，此属性接收一个用户自定义函数，此自定义函数接收一个参数，此参数即是用户输入到控件中的字符串值。组件用户可根据此参数值来判断用户的输入是否合法。我们在此组件内部会将上述函数的返回值渲染并展示出来以提醒用户输入的不合法之处（如果返回值为空字符串，则意味着输入是合法的，也就不会有额外提醒）。此组件具有一个自定义事件 valid-input，只有当上述函数返回空字符串时（意味着输入合法），才会触发此事件。"
					}
				]
			},
			sample: [
				{
					title: "示例一",
					summary: {
						title: "用户名输入框"
					},
					codeForPrint: [
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-txt&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #label-txt<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        用户名<br class='nocode' />" +
									 "    &lt;template&gt;<br class='nocode' />" +
									 "&lt;/well-txt&gt;" 
						}
					]
				},
				{
					title: "示例二",
					summary: {
						title: "密码不能少于 6 位",
						content: [
							"通过给 hint 属性设置字符串值，来在输入框中给出输入提示。",
							"通过给 errorHandler 属性设置一个自定义函数，来处理“密码少于 6 位”的不合法输入。"
						]
					},
					codeForPrint: [
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    methods: {<br class='nocode' />" +
									 "        errorHandler: function ( userInputString ) {<br class='nocode' />" +
									 "            if ( userInputString.length < 6 )<br class='nocode' />" +
									 "            {<br class='nocode' />" +
									 "                return \"密码少于 6 位\";<br class='nocode' />" +
									 "            }<br class='nocode' />" +
									 "            else<br class='nocode' />" +
									 "            {<br class='nocode' />" +
									 "                return \"\";<br class='nocode' />" +
									 "            }<br class='nocode' />" +
									 "        }<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "});"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-txt<br class='nocode' />" +
									 "    type=\"password\"<br class='nocode' />" +
									 "    hint=\"密码不能少于 6 位\"<br class='nocode' />" +
									 "    :errorHandler=\"errorHandler\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #label-txt<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        密码<br class='nocode' />" +
									 "    &lt;template&gt;<br class='nocode' />" +
									 "&lt;/well-txt&gt;" 
						}
					]
				},
				{
					title: "示例三",
					summary: {
						title: "对合法输入进行处理",
						content: [
							"通过 valid-input 自定义事件对合法输入进行处理。"
						]
					},
					codeForPrint: [
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    methods: {<br class='nocode' />" +
									 "        errorHandler: function ( userInputString ) {<br class='nocode' />" +
									 "            if ( userInputString.length < 6 )<br class='nocode' />" +
									 "            {<br class='nocode' />" +
									 "                return \"密码不能少于 6 位\";<br class='nocode' />" +
									 "            }<br class='nocode' />" +
									 "            else<br class='nocode' />" +
									 "            {<br class='nocode' />" +
									 "                return \"\";<br class='nocode' />" +
									 "            }<br class='nocode' />" +
									 "        },<br class='nocode' />" +
									 "        <br class='nocode' />" +
									 "        handlePassword: function ( validPassword ) {<br class='nocode' />" +
									 "            console.log( \"对密码 \" + validPassword + \" 进行操作...\" );<br class='nocode' />" +
									 "        }<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "});"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-txt<br class='nocode' />" +
									 "    type=\"password\"<br class='nocode' />" +
									 "    :errorHandler=\"errorHandler\"<br class='nocode' />" +
									 "    @valid-input=\"handlePassword\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #label-txt<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        密码<br class='nocode' />" +
									 "    &lt;template&gt;<br class='nocode' />" +
									 "&lt;/well-txt&gt;" 
						}
					]
				},
				{
					title: "示例四",
					summary: {
						title: "显示密码",
						content: [
							"通过给 passwordVisible 属性设置布尔值 true，来开启显示/隐藏密码的功能。"
						]
					},
					codeForPrint: [
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-txt<br class='nocode' />" +
									 "    type=\"password\"<br class='nocode' />" +
									 "    :passwordVisible=\"true\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #label-txt<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        密码<br class='nocode' />" +
									 "    &lt;template&gt;<br class='nocode' />" +
									 "&lt;/well-txt&gt;"
						}
					]
				}
			],
			property: [
				{
					name: "type",
					type: "String",
					value: "\"text\"(默认值) |<br />\"password\"",
					option: "可选",
					intro: "设置输入框类型。"
				},
				{
					name: "hint",
					type: "String",
					value: "\"\"(空字符串，默认值) |<br />[ 输入提示字符串 ]",
					option: "可选",
					intro: "设置输入框中的提示文字。"
				},
				{
					name: "errorHandler",
					type: "Function",
					value: "返回空字符串的函数(默认值) |<br />[ 错误输入处理函数 ]",
					option: "可选",
					intro: "设置错误输入处理函数。（使用方式可参见“示例二”）"
				},
				{
					name: "passwordVisible",
					type: "Boolean",
					value: "false(默认值) |<br />true",
					option: "可选",
					intro: "设置密码的可见性。（使用方式可参见“示例四”）"
				}
			],
			event: [
				{
					name: "valid-input",
					intro: "当用户输入有效时就会触发此事件。此事件在触发时会给绑定到它上面的处理函数传递一个参数。",
					param: "【 名称: validInputString | 类型: String | 介绍: 已经通过验证的有效的用户输入字符串 】"
				}
			],
			slotCustom: [
				{
					name: "label-txt",
					intro: "设置组件中与输入框对应的原生 html 元素 <label> 的文字。"
				}
			],
			nav: {
				prevRoute: {
					name: "<well-counter> 组件",
					path: "/well-counter-intro"
				},
				nextRoute: {
					name: "<well-radio> 组件",
					path: "/well-radio-intro"
				}
			}
		},  /* wellTxtIntro [ end ] */
		
		wellRadioIntro: {
			header: {
				title: "<well-radio> 组件",
				summary: [
					{
						content: "此组件实际上是对原生 html 表单控件 <input type=\"radio\" /> 的包装。"
					},
					{
						content: "此组件在跨浏览器时具有比原生控件更一致的外观。"
					}
				]
			},
			sample: [
				{
					title: "示例一",
					summary: {
						title: "选择性别",
						content: [
							"通过给 name 属性设置字符串值，来指定单选按钮的名字。我们建议用户始终为一组单选按钮设置同一个名字，因为只有当一组单选按钮拥有同一个名字时，才能实现单选。",
							"通过给 value 属性设置字符串值，来指定选择的值。"
						]
					},
					codeForPrint: [
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-radio<br class='nocode' />" +
									 "    name=\"sex\"<br class='nocode' />" +
									 "    value=\"male\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #label-txt<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        男<br class='nocode' />" +
									 "    &lt;template&gt;<br class='nocode' />" +
									 "&lt;/well-radio&gt;<br class='nocode' />" +
									 "&lt;well-radio<br class='nocode' />" +
									 "    name=\"sex\"<br class='nocode' />" +
									 "    value=\"female\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #label-txt<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        女<br class='nocode' />" +
									 "    &lt;template&gt;<br class='nocode' />" +
									 "&lt;/well-radio&gt;"
						}
					]
				},
				{
					title: "示例二",
					summary: {
						title: "处理被选择的值",
						content: [
							"通过给组件事件 change 绑定处理函数，来处理被选择的值。"
						]
					},
					codeForPrint: [
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    methods: {<br class='nocode' />" +
									 "        change: function ( checkedValue ) {<br class='nocode' />" +
									 "            console.log( \"被选择的值是：\", checkedValue );<br class='nocode' />" +
									 "        }<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "});"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-radio<br class='nocode' />" +
									 "    name=\"sex\"<br class='nocode' />" +
									 "    value=\"male\"<br class='nocode' />" +
									 "    @change=\"change\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #label-txt<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        男<br class='nocode' />" +
									 "    &lt;template&gt;<br class='nocode' />" +
									 "&lt;/well-radio&gt;<br class='nocode' />" +
									 "&lt;well-radio<br class='nocode' />" +
									 "    name=\"sex\"<br class='nocode' />" +
									 "    value=\"female\"<br class='nocode' />" +
									 "    @change=\"change\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #label-txt<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        女<br class='nocode' />" +
									 "    &lt;template&gt;<br class='nocode' />" +
									 "&lt;/well-radio&gt;" 
						}
					]
				},
				{
					title: "示例三",
					summary: {
						title: "窄边按钮",
						content: [
							"通过给属性 thin 设置布尔值 true，来让按钮由默认的宽边变为窄边。"
						]
					},
					codeForPrint: [
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-radio<br class='nocode' />" +
									 "    name=\"sex\"<br class='nocode' />" +
									 "    value=\"male\"<br class='nocode' />" +
									 "    :thin=\"true\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #label-txt<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        男<br class='nocode' />" +
									 "    &lt;template&gt;<br class='nocode' />" +
									 "&lt;/well-radio&gt;<br class='nocode' />" +
									 "&lt;well-radio<br class='nocode' />" +
									 "    name=\"sex\"<br class='nocode' />" +
									 "    value=\"female\"<br class='nocode' />" +
									 "    :thin=\"true\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #label-txt<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        女<br class='nocode' />" +
									 "    &lt;template&gt;<br class='nocode' />" +
									 "&lt;/well-radio&gt;"
						}
					]
				}
			],
			property: [
				{
					name: "name",
					type: "String",
					value: "\"\"(空字符串，默认值) |<br />[ 按钮的名字 ]",
					option: "可选",
					intro: "设置按钮的名字。我们建议用户始终为一组单选按钮设置同一个名字，因为只有当一组单选按钮拥有同一个名字时，才能实现单选。"
				},
				{
					name: "value",
					type: "String",
					value: "\"\"(空字符串，默认值) |<br />[ 按钮的值 ]",
					option: "可选",
					intro: "设置按钮的值。"
				},
				{
					name: "thin",
					type: "Boolean",
					value: "false(默认值) |<br />true",
					option: "可选",
					intro: "设置按钮的外形。（使用方式可参见“示例三”）"
				}
			],
			event: [
				{
					name: "change",
					intro: "当按钮被选中时就会触发此事件。此事件在触发时会给绑定到它上面的处理函数传递一个参数。",
					param: "【名称: checkedValue | 类型: String | 介绍: 被选中的按钮的值】"
				}
			],
			slotCustom: [
				{
					name: "label-txt",
					intro: "设置组件中与按钮对应的原生 html 元素 <label> 的文字。"
				}
			],
			nav: {
				prevRoute: {
					name: "<well-txt> 组件",
					path: "/well-txt-intro"
				},
				nextRoute: {
					name: "<well-checkbox> 组件",
					path: "/well-checkbox-intro"
				}
			}
		},  /* wellRadioIntro [ end ] */
		
		wellCheckboxIntro: {
			fruits: [],
			people: [],
			header: {
				title: "<well-checkbox> 组件",
				summary: [
					{
						content: "此组件实际上是对原生 html 表单控件 <input type=\"checkbox\" /> 的包装。"
					},
					{
						content: "此组件在跨浏览器时具有比原生控件更一致的外观。"
					},
					{
						content: "此组件具有一个事件 change，而此事件会向绑定到它上面的事件处理函数传递两个参数，而这两个参数分别是绑定到组件属性 bindValue 和 value 的值，其中 bindValue 的值是一个数组，此数组往往会作为选择的结果而被处理（例如：将其发送并保存到服务器），而 value 的值是一个字符串，当其值绑定到某个多选按钮并且此多选按钮被选中时，那么 bindValue 数组中就会添加一项，当多选按钮取消选中时，bindValue 数组中就会减少一项，而不管是添加的还是减少的这一项实际上就是 value 的值。由于上述的一系列处理有些复杂，所以我们还为此事件准备了对应的处理函数 wellComCheckboxChange（下面的示例会详细介绍这个处理函数）。",
						important: true
					}
				]
			},
			sample: [
				{
					title: "示例一",
					summary: {
						title: "选择水果（使用预定义处理函数 wellComCheckboxChange 来处理选择的结果）",
						content: [
							"通过给 name 属性设置字符串值，来指定单选按钮的名字。我们建议用户始终为一组多选按钮设置同一个名字，因为当此表单控件放在某个 <form> 元素中并且准备通过传统的提交方式来提交表单时，后端程序能够更方便的处理所提交的值。",
							"通过给 bindValue 属性设置数组值，来指定最终的选择结果将要保存的地方。",
							"通过给 value 属性设置字符串值，来指定选择的值。",
							"通过给 change 事件绑定预定义处理函数 wellComCheckboxChange 来处理选择的结果。需要注意的是，如需使用 wellComCheckboxChange 预定义处理函数，请先在 mixins 选项中使用组件库自带的工具函数（wellComHelper.wellComMixin）来将此函数混入到当前组件中。"
						]
					},
					codeForPrint: [
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    mixins: wellComHelper.wellComMixin( {<br class='nocode' />" +
									 "        components: [ \"checkbox\" ]<br class='nocode' />" +
									 "    } ),<br class='nocode' />" +
									 "    data: {<br class='nocode' />" +
									 "        fruits: []<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "} );"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-checkbox<br class='nocode' />" +
									 "    name=\"fruits\"<br class='nocode' />" +
									 "    :bindValue=\"fruits\"<br class='nocode' />" +
									 "    value=\"apple\"<br class='nocode' />" +
									 "    @change=\"wellComCheckboxChange\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #label-txt<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        苹果<br class='nocode' />" +
									 "    &lt;template&gt;<br class='nocode' />" +
									 "&lt;/well-checkbox&gt;<br class='nocode' />" +
									 "&lt;well-checkbox<br class='nocode' />" +
									 "    name=\"fruits\"<br class='nocode' />" +
									 "    :bindValue=\"fruits\"<br class='nocode' />" +
									 "    value=\"pear\"<br class='nocode' />" +
									 "    @change=\"wellComCheckboxChange\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #label-txt<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        梨子<br class='nocode' />" +
									 "    &lt;template&gt;<br class='nocode' />" +
									 "&lt;/well-checkbox&gt;<br class='nocode' />" +
									 "&lt;well-box&gt;fruits:{{ fruits }}&lt;/well-box&gt;"
						}
					]
				},
				{
					title: "示例二",
					summary: {
						title: "选择人物（使用自定义处理函数来处理选择的结果）",
						content: [
							"当使用自定义的处理函数来处理选择的结果时，需要注意的是，change 事件会向绑定到它上面的处理函数传递两个参数，这两个参数分别是绑定到组件属性 bindValue 和 value 的值，其中 bindValue 的值是一个数组，此数组往往会作为选择的结果而被处理（例如：将其发送并保存到服务器），而 value 的值是一个字符串，当其值绑定到某个多选按钮并且此多选按钮被选中时，那么 bindValue 数组中就会添加一项，当多选按钮取消选中时，bindValue 数组中就会减少一项，而不管是添加的还是减少的这一项实际上就是 value 的值。"
						]
					},
					codeForPrint: [
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    data: {<br class='nocode' />" +
									 "        people: []<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "    methods: {<br class='nocode' />" +
									 "        customChangeHandler: function ( bindValue, value ) {<br class='nocode' />" +
									 "            console.log( \"bindValue: \", bindValue, \"value: \", value );<br class='nocode' />" +
									 "        }<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "} );"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-checkbox<br class='nocode' />" +
									 "    name=\"people\"<br class='nocode' />" +
									 "    :bindValue=\"people\"<br class='nocode' />" +
									 "    value=\"Oscar\"<br class='nocode' />" +
									 "    @change=\"customChangeHandler\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #label-txt<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        Oscar<br class='nocode' />" +
									 "    &lt;template&gt;<br class='nocode' />" +
									 "&lt;/well-checkbox&gt;<br class='nocode' />" +
									 "&lt;well-checkbox<br class='nocode' />" +
									 "    name=\"people\"<br class='nocode' />" +
									 "    :bindValue=\"people\"<br class='nocode' />" +
									 "    value=\"Zero\"<br class='nocode' />" +
									 "    @change=\"customChangeHandler\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #label-txt<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        Zero<br class='nocode' />" +
									 "    &lt;template&gt;<br class='nocode' />" +
									 "&lt;/well-checkbox&gt;<br class='nocode' />"
						}
					]
				},
				{
					title: "示例三",
					summary: {
						title: "窄边按钮",
						content: [
							"通过给属性 thin 设置布尔值 true，来让按钮由默认的宽边变为窄边。"
						]
					},
					codeForPrint: [
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-checkbox<br class='nocode' />" +
									 "    name=\"number\"<br class='nocode' />" +
									 "    value=\"one\"<br class='nocode' />" +
									 "    :thin=\"true\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #label-txt<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        one<br class='nocode' />" +
									 "    &lt;template&gt;<br class='nocode' />" +
									 "&lt;/well-checkbox&gt;<br class='nocode' />" +
									 "&lt;well-checkbox<br class='nocode' />" +
									 "    name=\"number\"<br class='nocode' />" +
									 "    value=\"two\"<br class='nocode' />" +
									 "    :thin=\"true\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #label-txt<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        two<br class='nocode' />" +
									 "    &lt;template&gt;<br class='nocode' />" +
									 "&lt;/well-checkbox&gt;"
						}
					]
				}
			],
			property: [
				{
					name: "name",
					type: "String",
					value: "\"\"(空字符串，默认值) |<br />[ 按钮的名字 ]",
					option: "可选",
					intro: "设置按钮的名字。"
				},
				{
					name: "bindValue",
					type: "Array",
					value: "null(默认值) |<br />[ 保存选择结果的变量 ]",
					option: "可选",
					intro: "设置选择的结果将保存在何处（保存在哪个变量中）。需要注意的是，vue 在通过 v-modal 指令来处理绑定到 checkbox 上的值时，被绑定的值除了可以是 Array 类型之外，在当只有一个 checkbox 按钮时（例如：在实现 “记住账号、密码” 功能时，往往只需要单个 checkbox 按钮。），被绑定的值还可以是 Boolean 类型。但是，<well-checkbox> 组件的 bindValue 属性所接收的值只能是 Array 类型，这里需要提醒用户特别注意。"
				},
				{
					name: "value",
					type: "String",
					value: "\"\"(空字符串，默认值) |<br />[ 按钮的值 ]",
					option: "可选",
					intro: "设置按钮的值。"
				},
				{
					name: "thin",
					type: "Boolean",
					value: "false(默认值) |<br />true",
					option: "可选",
					intro: "设置按钮的外形。（使用方式可参见“示例三”）"
				}
			],
			event: [
				{
					name: "change",
					intro: "当按钮被选中或被取消选中时就会触发此事件。此事件在触发时会给绑定到它上面的处理函数传递两个参数。",
					param: "【名称: bindValue | 类型: Array | 介绍: 保存选择结果的数组。实际就是组件 bindValue 属性所接收的数组】<br />【名称: value | 类型: String | 介绍: 当前被选中或被取消选中的按钮的值。实际就是组件 value 属性接收的字符串】"
				}
			],
			slotCustom: [
				{
					name: "label-txt",
					intro: "设置组件中与按钮对应的原生 html 元素 <label> 的文字。"
				}
			],
			nav: {
				prevRoute: {
					name: "<well-radio> 组件",
					path: "/well-radio-intro"
				},
				nextRoute: {
					name: "<well-file> 组件",
					path: "/well-file-intro"
				}
			}
		},  /* wellCheckboxIntro [ end ] */
		
		wellFileIntro: {
			acceptTypes1: [ "jpg", "png" ],
			header: {
				title: "<well-file> 组件",
				summary: [
					{
						content: "此组件实际上是对原生 html 表单控件 <input type=\"file\" /> 的包装。"
					},
					{
						content: "此组件在跨浏览器时具有比原生控件更一致的外观。"
					},
					{
						content: "此组件通过 accept-types 属性、single-max-size 属性以及 total-max-size 属性来自动检测用户所选择的文件是否符合要求。",
						important: true
					},
					{
						content: "此组件具有自动上传用户所选文件的功能，这是通过将布尔值属性 upload 设置为 true、字符串值属性 url 设置为能够实现上传功能的后端地址来实现的。不过 upload 属性的默认值为 false，也就是说，默认情况下自动上传功能是关闭的。",
						important: true
					},
					{
						content: "在默认的自动上传功能关闭的情况下，组件用户可以通过 select 事件来处理所选择的文件，此事件会向其处理函数传递一个参数，此参数是 FormData 类型，可以通过 ajax 的方式将由 FormData 类型包装的文件传送到服务器。",
						important: true
					}
				]
			},
			sample: [
				{
					title: "示例一",
					summary: {
						title: "只选择一个文件，文件格式必须是 jpg 或 png 格式，文件大小不能超过 2Kb",
						content: [
							"通过给 accept-types 属性设置为一个数组类型值，来限定所选文件的类型。",
							"通过给 single-max-size 属性设置为一个数字类型值（单位：Mb），来限定所选文件的大小。",
							"通过 select 事件来处理已选择的文件。"
						]
					},
					codeForPrint: [
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    data: {<br class='nocode' />" +
									 "        acceptTypes: [ \"jpg\", \"png\" ]<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "    methods: {<br class='nocode' />" +
									 "        selectHandler: function ( file ) {<br class='nocode' />" +
									 "            console.log( file );<br class='nocode' />" +
									 "        }<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "} );"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-file<br class='nocode' />" +
									 "    name=\"avatar\"<br class='nocode' />" +
									 "    :accept-types=\"acceptTypes\"<br class='nocode' />" +
									 "    :single-max-size=\"0.002\"<br class='nocode' />" +
									 "    @select=\"selectHandler\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />"
						}
					]
				},
				{
					title: "示例二",
					summary: {
						title: "选择多个文件，单个文件大小不超过 80Kb，所选文件总大小不超过 200 Kb",
						content: [
							"通过给 multiple 属性设置布尔值 true，来实现选择多个文件的功能。",
							"通过给 total-max-size 属性设置数字类型值（单位：Mb），来限定所选文件的总大小。"
						]
					},
					codeForPrint: [
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    data: {<br class='nocode' />" +
									 "        acceptTypes: [ \"jpg\", \"png\" ]<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "} );"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-file<br class='nocode' />" +
									 "    name=\"avatar\"<br class='nocode' />" +
									 "    :multiple=\"true\"<br class='nocode' />" +
									 "    :accept-types=\"acceptTypes\"<br class='nocode' />" +
									 "    :single-max-size=\"0.08\"<br class='nocode' />" +
									 "    :total-max-size=\"0.2\"<br class='nocode' />" +
									 "/&gt;<br class='nocode' />"
						}
					]
				},
				{
					title: "示例三",
					summary: {
						title: "自定义文件选择过程中的提示文字",
						content: [
							"通过预定义的插槽来自定义文件选择过程中的提示文字。"
						]
					},
					codeForPrint: [
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    data: {<br class='nocode' />" +
									 "        acceptTypes: [ \"jpg\", \"png\" ]<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "} );"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-file<br class='nocode' />" +
									 "    name=\"avatar\"<br class='nocode' />" +
									 "    :accept-types=\"acceptTypes\"<br class='nocode' />" +
									 "    :single-max-size=\"0.08\"<br class='nocode' />" +
									 "&gt;<br class='nocode' /><br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #select-txt<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        选择头像<br class='nocode' />" +
									 "    &lt;template&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #selected-err-type-txt<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        头像文件类型不符合要求<br class='nocode' />" +
									 "    &lt;template&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #selected-err-size-txt<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        所选头像文件的大小超过指定大小<br class='nocode' />" +
									 "    &lt;template&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #selected-txt<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        头像已经选择<br class='nocode' />" +
									 "    &lt;template&gt;<br class='nocode' />" +
									 "&lt;well-file&gt;"
						}
					]
				},
				{
					title: "示例四",
					summary: {
						title: "窄边文件选择器",
						content: [
							"通过将 thin 属性设置布尔值 true，来让文件选择器由默认的宽边变为窄边。",
						]
					},
					codeForPrint: [
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    data: {<br class='nocode' />" +
									 "        acceptTypes: [ \"jpg\", \"png\" ]<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "} );"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-file<br class='nocode' />" +
									 "    name=\"avatar\"<br class='nocode' />" +
									 "    :thin=\"true\"<br class='nocode' />" +
									 "    :accept-types=\"acceptTypes\"<br class='nocode' />" +
									 "    :single-max-size=\"0.002\"<br class='nocode' />" +
									 "/&gt;<br class='nocode' />"
						}
					]
				},
				{
					title: "示例五",
					summary: {
						title: "自动上传所选文件",
						content: [
							"通过给 upload 属性设置布尔值 true，来开启自动上传所选文件功能。",
							"通过给 url 属性设置处理文件上传的后端地址字符串，来指定接收文件的后端地址。",
							"在文件上传成功或失败时会分别触发 upload-success 或 upload-fail 事件，组件用户可为其绑定处理函数。"
						]
					},
					codeForPrint: [
						{
							content: "/* php [ service/com-file-test.php ]*/<br class='nocode' />" +
							         "&lt;?php<br class='nocode' />" +
									 "echo json_encode( $_FILES );<br class='nocode' />" +
									 "?&gt;"
						},
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    data: {<br class='nocode' />" +
									 "        acceptTypes: [ \"jpg\", \"png\" ]<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "    methods: {<br class='nocode' />" +
									 "        uploadSuccessHandler: function ( data ) {<br class='nocode' />" +
									 "            console.log( data );<br class='nocode' />" +
									 "        }<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "} );"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-file<br class='nocode' />" +
									 "    name=\"avatar\"<br class='nocode' />" +
									 "    :upload=\"true\"<br class='nocode' />" +
									 "    url=\"service/com-file-test.php\"<br class='nocode' />" +
									 "    :accept-types=\"acceptTypes\"<br class='nocode' />" +
									 "    :single-max-size=\"0.05\"<br class='nocode' />" +
									 "    @upload-success=\"uploadSuccessHandler\"<br class='nocode' />" +
									 "/&gt;<br class='nocode' />"
						}
					]
				},
				{
					title: "示例六",
					summary: {
						title: "被禁用的文件选择器",
						content: [
							"通过给 disabled 属性设置布尔值 true，来禁用文件选择器。"
						]
					},
					codeForPrint: [
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    data: {<br class='nocode' />" +
									 "        acceptTypes: [ \"jpg\", \"png\" ]<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "} );"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-file<br class='nocode' />" +
									 "    name=\"avatar\"<br class='nocode' />" +
									 "    :disabled=\"true\"<br class='nocode' />" +
									 "    :accept-types=\"acceptTypes\"<br class='nocode' />" +
									 "    :single-max-size=\"0.05\"<br class='nocode' />" +
									 "/&gt;<br class='nocode' />"
						}
					]
				}
			],
			property: [
				{
					name: "name",
					type: "String",
					value: "\"\"(空字符串，默认值) |<br />[ 被选择文件的名称前缀 ]",
					option: "可选",
					intro: "设置被选择文件的名称前缀。例如：如果设置为 \"avatar\"，并且被选择的文件将被发送到服务器，那么服务器端接收到的文件名称就是 \"avatar-[index]\"([index] 是文件被选择时的索引号，如果只有一个文件被选择的话，那么 [index] 就是 0)。"
				},
				{
					name: "multiple",
					type: "Boolean",
					value: "false(默认值) |<br />true",
					option: "可选",
					intro: "设置是否开启多选功能。"
				},
				{
					name: "disabled",
					type: "Boolean",
					value: "false(默认值) |<br />true",
					option: "可选",
					intro: "设置文件选择器是否被禁用。"
				},
				{
					name: "upload",
					type: "Boolean",
					value: "false(默认值) |<br />true",
					option: "可选",
					intro: "设置是否开启文件自动上传功能。"
				},
				{
					name: "url",
					type: "String",
					value: "\"\"(空字符串，默认值) |<br />[ 处理文件上传的后端地址 ]",
					option: "可选",
					intro: "设置处理文件上传的后端地址。"
				},
				{
					name: "thin",
					type: "Boolean",
					value: "false(默认值) |<br />true",
					option: "可选",
					intro: "设置按钮的外形。（使用方式可参见“示例三”）"
				},
				{
					name: "accept-types",
					type: "Array",
					value: "null(默认值) |<br />[ 允许被选择的文件类型 ]",
					option: "可选",
					intro: "设置允许被选择的文件类型。"
				},
				{
					name: "single-max-size",
					type: "Number",
					value: "Infinity(默认值) |<br />[ 所选择的单个文件大小的最大值 ]",
					option: "可选",
					intro: "设置单个文件大小的最大值。"
				},
				{
					name: "total-max-size",
					type: "Number",
					value: "Infinity(默认值) |<br />[ 所选择的文件总大小的最大值 ]",
					option: "可选",
					intro: "设置所选择的文件总大小的最大值。"
				}
			],
			event: [
				{
					name: "select",
					intro: "当组件没有开启自动上传功能的情况下（即当 upload 属性保持默认值 false 的情况下），当文件被成功选择后（通过了 accept-types、single-max-size 以及 total-max-size 的验证），就会触发此事件。此事件会向绑定到它上面的处理函数传递一个 FormData 类型的参数。",
					param: "【名称: fileData | 类型: FormData | 介绍: 由 FormData 类型包装的被选择的文件】"
				},
				{
					name: "upload-success",
					intro: "当组件开启了自动上传功能的情况下（即当 upload 属性被设置为 true 的情况下），当文件成功被服务器接收时，就会触发此事件。此事件会向绑定到它上面的处理函数传递一个参数。",
					param: "【名称: data | 类型: Any | 介绍: 由服务器传回的数据】"
				},
				{
					name: "upload-fail",
					intro: "当组件开启了自动上传功能的情况下（即当 upload 属性被设置为 true 的情况下），当文件没能成功被服务器接收时，就会触发此事件。此事件会向绑定到它上面的处理函数传递一个错误码。",
					param: "【名称: errCode | 类型: Number | 介绍: 由服务器传回的请求失败错误码】"
				}
			],
			slotCustom: [
				{
					name: "select-txt",
					intro: "设置选择文件的提示文字。"
				},
				{
					name: "selected-err-type-txt",
					intro: "设置被选择的文件类型不符合要求的提示文字。"
				},
				{
					name: "selected-err-size-txt",
					intro: "设置单个文件大小不符合要求的提示文字。"
				},
				{
					name: "selected-err-total-size-txt",
					intro: "设置所有文件总大小不符合要求的提示文字。"
				},
				{
					name: "selected-txt",
					intro: "设置文件已经选择的提示文字。"
				},
				{
					name: "uploading-txt",
					intro: "设置文件正在上传的提示文字。"
				},
				{
					name: "upload-success-txt",
					intro: "设置文件被服务器成功接收的提示文字。"
				},
				{
					name: "upload-fail-txt",
					intro: "设置文件没有被服务器成功接收的提示文字。"
				}
			],
			nav: {
				prevRoute: {
					name: "<well-checkbox> 组件",
					path: "/well-checkbox-intro"
				},
				nextRoute: {
					name: "<well-infinite-scroll> 组件",
					path: "/well-infinite-scroll-intro"
				}
			}
		},  /* wellFileIntro [ end ] */
		
		wellInfiniteScrollIntro: {
			requesting: false,
			noMoreItems: false,
			items: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ],
			requesting2: false,
			noMoreItems2: false,
			items2: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ],
			header: {
				title: "<well-infinite-scroll> 组件",
				summary: [
					{
						content: "此组件顾名思义，是一个通过无限滚动来获取新数据并渲染的容器类组件。"
					},
					{
						content: "此组件具有一个事件 request，当组件容器中被滚动内容滚动到容器底部或者当设置了 distance 属性的值，被滚动内容在容器下方被隐藏部分的高度小于等于 distance 时，就会触发此事件。组件用户可以通过为此事件绑定处理函数来获取更多的数据，并借助 items 插槽将新获取的数据渲染到容器中。",
						important: true
					}
				]
			},
			sample: [
				{
					title: "示例一",
					summary: {
						title: "使用定时器来模拟无限滚动获取数据",
						content: [
							"通过给 size 属性设置字符串值 \"extra-small\"，来将容器的高度降低。",
							"通过给 requesting 属性交替设置布尔值 true/false，来显示/隐藏 loading 指示器(正在加载指示器) 。并且当 requesting 为 true 时，通过滚动来获取数据功能将会暂停，直至 requesting 变为 false 时，通过滚动来获取数据的功能才可以继续使用。",
							"通过给 no-more-items 属性设置布尔值属性 true，来在没有更多数据显示的情况下给出提示。"
						]
					},
					codeForPrint: [
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    data: {<br class='nocode' />" +
									 "        requesting: false,<br class='nocode' />" +
									 "        noMoreItems: false,<br class='nocode' />" +
									 "        items: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]<br class='nocode' />" +
									 "    }<br class='nocode' /><br class='nocode' />" +
									 "    methods: {<br class='nocode' />" +
									 "        requestHandler: function () {<br class='nocode' />" +
									 "            this.requesting = true;<br class='nocode' />" +
									 "<br class='nocode' />" +
									 "            var vm = this;<br class='nocode' />" +
									 "<br class='nocode' />" +
									 "            setTimeout( function () {<br class='nocode' />" +
									 "                vm.requesting = false;<br class='nocode' />" +
									 "                if ( vm.items.length > 29 )<br class='nocode' />" +
									 "                {<br class='nocode' />" +
									 "                    vm.noMoreItems = true;<br class='nocode' />" +
									 "                    return;<br class='nocode' />" +
									 "                }<br class='nocode' />" +
									 "                vm.items.push( vm.items.length + 1 );<br class='nocode' />" +
									 "            }, 2000 );<br class='nocode' />" +
									 "        }<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "} );"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-infinite-scroll<br class='nocode' />" +
									 "    size=\"extra-small\"<br class='nocode' />" +
									 "    :requesting=\"requesting\"<br class='nocode' />" +
									 "    :no-more-items=\"noMoreItems\"<br class='nocode' />" +
									 "    @request=\"requestHandler\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #items<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        &lt;div<br class='nocode' />" +
									 "            v-for=\"item in items\"<br class='nocode' />" +
									 "        &gt;<br class='nocode' />" +
									 "            {{ item }}<br class='nocode' />" +
									 "        &lt;/div&gt;<br class='nocode' />" +
									 "    &lt;template&gt;<br class='nocode' />" +
									 "&lt;/well-infinite-scroll&gt;<br class='nocode' />"
						}
					]
				},
				{
					title: "示例二",
					summary: {
						title: "隐藏组件容器的滚动条，并在被滚动内容在容器下方被隐藏部分的高度小于等于 20px 时来请求获取新数据。",
						content: [
							"通过将 hideScrollbar 属性设置为 true，来隐藏组件容器的滚动条。",
							"通过给 distance 属性设置数字值 30（单位：px），从而使组件在被滚动内容在容器下方被隐藏部分的高度小于等于 30px 时就开始请求获取新数据。"
						]
					},
					codeForPrint: [
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    data: {<br class='nocode' />" +
									 "        requesting: false,<br class='nocode' />" +
									 "        noMoreItems: false,<br class='nocode' />" +
									 "        items: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]<br class='nocode' />" +
									 "    }<br class='nocode' /><br class='nocode' />" +
									 "    methods: {<br class='nocode' />" +
									 "        requestHandler: function () {<br class='nocode' />" +
									 "            this.requesting = true;<br class='nocode' />" +
									 "<br class='nocode' />" +
									 "            var vm = this;<br class='nocode' />" +
									 "<br class='nocode' />" +
									 "            setTimeout( function () {<br class='nocode' />" +
									 "                vm.requesting = false;<br class='nocode' />" +
									 "                if ( vm.items.length >= 100 )<br class='nocode' />" +
									 "                {<br class='nocode' />" +
									 "                    vm.noMoreItems = true;<br class='nocode' />" +
									 "                    return;<br class='nocode' />" +
									 "                }<br class='nocode' />" +
									 "                for ( var i = 1, len = 10; i <= 10; ++i )<br class='nocode' />" +
									 "                {<br class='nocode' />" +
									 "                    vm.items.push( vm.items.length + 1 );<br class='nocode' />" +
									 "                }<br class='nocode' />" +
									 "            }, 2000 );<br class='nocode' />" +
									 "        }<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "} );"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-infinite-scroll<br class='nocode' />" +
									 "    :hide-scrollbar=\"true\"<br class='nocode' />" +
									 "    :distance=\"50\"<br class='nocode' />" +
									 "    size=\"extra-small\"<br class='nocode' />" +
									 "    :requesting=\"requesting\"<br class='nocode' />" +
									 "    :no-more-items=\"noMoreItems\"<br class='nocode' />" +
									 "    @request=\"requestHandler\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #items<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        &lt;div<br class='nocode' />" +
									 "            v-for=\"item in items\"<br class='nocode' />" +
									 "        &gt;<br class='nocode' />" +
									 "            {{ item }}<br class='nocode' />" +
									 "        &lt;/div&gt;<br class='nocode' />" +
									 "    &lt;template&gt;<br class='nocode' />" +
									 "&lt;/well-infinite-scroll&gt;<br class='nocode' />"
						}
					]
				}
			],
			property: [
				{
					name: "hide-scrollbar",
					type: "Boolean",
					value: "false(默认值) |<br />true",
					option: "可选",
					intro: "设置是否出现滚动条。"
				},
				{
					name: "size",
					type: "String",
					value: "\"normal\"(默认值) |<br />\"extra-small\" |<br />\"small\"",
					option: "可选",
					intro: "设置组件容器的尺寸，尺寸实际是指高度，因为组件容器的宽度固定为其父元素宽度的 100%。"
				},
				{
					name: "distance",
					type: "Number",
					value: "0(默认值) |<br />[ 请求新数据的滚动距离阈值（PS: “阀值”是错误的写法） ]",
					option: "可选",
					intro: "设置当被滚动内容在容器下方被隐藏部分的高度小于等于多少时，组件开始请求获取新数据。"
				},
				{
					name: "requesting",
					type: "Boolean",
					value: "false(默认值) |<br />true",
					option: "!必选!",
					intro: "设置显示/隐藏加载指示器的时机，当 requesting 为 true 时，显示加载指示器，当 requesting 为 false 时，隐藏加载指示器。并且当 requesting 为 true 时，通过滚动来获取数据功能将会暂停，直至 requesting 变为 false 时，通过滚动来获取数据的功能才可以继续使用。需要提醒注意的是，组件用户需要在 request 事件处理函数中自定义逻辑来切换 requesting 的值（具体方式可参见“示例”）。"
				},
				{
					name: "no-more-items",
					type: "Boolean",
					value: "false(默认值) |<br />true",
					option: "!必选!",
					intro: "设置无限滚动完成的时机。当没有更多数据展示时，我们可以通过给此属性设置 true 值来提醒用户已经没有更多的数据可以展示了。"
				}
			],
			event: [
				{
					name: "request",
					intro: "当组件容器中被滚动内容滚动到容器底部，或者当设置了 distance 属性的值，被滚动内容在容器下方被隐藏部分的高度小于等于 distance 时，就会触发此事件。组件用户可以通过为此事件绑定处理函数来获取更多的数据，并借助 items 插槽将新获取的数据渲染到容器中。"
				}
			],
			slotCustom: [
				{
					name: "items",
					intro: "插入需要渲染并展示的内容。通常来说，需要渲染的内容是一个列表，并且会随着滚动地不断进行被填充越来越多的数据用于渲染并展示。"
				},
				{
					name: "loading",
					intro: "插入 loading 加载指示器。组件内部通过 <well-loading> 组件预先设置了一个加载指示器，组件用户可根据需要，通过此插槽插入自定义的加载指示器。"
				},
				{
					name: "no-more-items-txt",
					intro: "插入与“没有更多数据可以展示”意思相近的提示性文字。"
				}
			],
			nav: {
				prevRoute: {
					name: "<well-file> 组件",
					path: "/well-file-intro"
				},
				nextRoute: {
					name: "<well-loading> 组件",
					path: "/well-loading-intro"
				}
			}
		},  /* wellInfiniteScrollIntro [ end ] */
		
		wellLoadingIntro: {
			header: {
				title: "<well-loading> 组件",
				summary: [
					{
						content: "顾名思义，这是一个用于提示“正在加载”或“某个操作正在进行当中”的组件。"
					}
				]
			},
			sample: [
				{
					title: "示例一",
					summary: {
						title: "两个不同大小的加载指示器",
						content: [
							"通过将 size 属性设置为字符串 \"large\"，来改变加载指示器的默认大小。"
						]
					},
					codeForPrint: [
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-loading /&gt;<br class='nocode' />" +
									 "<br class='nocode' />" +
									 "&lt;well-loading<br class='nocode' />" +
									 "    size=\"large\"<br class='nocode' />" +
									 "/&gt;"
						}
					]
				},
				{
					title: "示例二",
					summary: {
						title: "三个不同速度的加载指示器",
						content: [
							"通过将 speed 属性（默认值为 \"normal\"）设置为代表不同速度的字符串值，来改变加载指示器闪烁轮转的速度。"
						]
					},
					codeForPrint: [
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
							         "&lt;well-loading /&gt;<br class='nocode' />" +
									 "<br class='nocode' />" +
									 "&lt;well-loading<br class='nocode' />" +
									 "    speed=\"slow\"<br class='nocode' />" +
									 "/&gt;<br class='nocode' />" +
									 "<br class='nocode' />" +
									 "&lt;well-loading<br class='nocode' />" +
									 "    speed=\"fast\"<br class='nocode' />" +
									 "/&gt;"
						}
					]
				}
			],
			property: [
				{
					name: "size",
					type: "String",
					value: "\"normal\"(默认值) |<br />\"large\"",
					option: "可选",
					intro: "设置加载指示器的大小。"
				},
				{
					name: "speed",
					type: "String",
					value: "\"normal\"(默认值) |<br />\"slow\"<br />\"fast\"",
					option: "可选",
					intro: "设置加载指示器闪烁轮转的速度。"
				}
			],
			slotCustom: [
				{
					name: "title",
					intro: "设置卡片中的主题或标题部分。（使用方式可参见“示例”）"
				},
				{
					name: "des-1",
					intro: "设置主要描述性文字。"
				},
				{
					name: "des-2",
					intro: "设置次要描述性文字。"
				},
				{
					name: "body",
					intro: "设置卡片中的主要内容。"
				},
				{
					name: "footer-txt",
					intro: "设置卡片页脚处的文字。"
				}
			],
			nav: {
				prevRoute: {
					name: "<well-infinite-scroll> 组件",
					path: "/well-infinite-scroll-intro"
				},
				nextRoute: {
					name: "<well-menu> 组件",
					path: "/well-menu-intro"
				}
			}
		},  /* wellLoadingIntro [ end ] */
		
		wellMenuIntro: {
			menu1: {
				display: false
			},
			menu2: {
				show: false
			},
			header: {
				title: "<well-menu> 组件",
				summary: [
					{
						content: "顾名思义，这是一个“菜单”组件。当我们需要将一系列操作暂时性地隐藏起来以节省空间，让用户界面看起来更为简洁时，就可以使用此组件。"
					},
					{
						content: "此组件具有一个配套组件 <well-menu-item>。我们在此提醒组件用户注意，请在此组件（<well-menu>）的 items 插槽中直接使用 <well-menu-item> 组件，下面的示例会对此进行说明。",
						important: true
					},
					{
						content: "相比与其他组件，此组件（以及之后将要介绍的 <well-context-menu> 组件）有其特殊性，特殊性在于：我们在“菜单”处于打开状态时，往往需要在点击页面的任意部分都能够将菜单隐藏，特别是当页面中有多个菜单被打开的情况下，一般来说我们都希望在点击页面任意部分时隐藏所有这些被打开的菜单。为了处理这样的特殊性，我们既为 <well-menu> 组件预定义了两个工具函数，分别是 wellComMenuToggle 和 wellComMenuHideAll，还为 <well-menu-item> 组件预定义了一个工具函数 wellComMenuItemOperate。以下示例会对这两个函数的使用作详细说明。",
						important: true
					}
				]
			},
			sample: [
				{
					title: "示例一",
					summary: {
						title: "点击文字按钮弹出菜单",
						content: [
							"通过给 position 属性设置字符串值 \"down-right\"，来指定以文字按钮为参照物，菜单出现的位置是文字按钮的“下右”方。",
							"通过给 show 属性绑定一个布尔变量，来处理菜单的显示/隐藏。",
							"通过将工具函数 wellComMenuHideAll 绑定到应用根元素（或根组件）的 click 事件上，来处理页面中所有菜单的隐藏。",
							"通过将工具函数 wellComMenuToggle 绑定到 <well-menu> 组件的 toggle 事件上，来处理菜单的显示/隐藏。需要提醒组件用户注意的是，为了使 wellComMenuToggle 函数能够正常运行，我们对传递给其的参数有一些要求，即参数必须是一个对象字面量，且其中包含一个绑定到组件 show 属性上的属性，用户可以直接将此属性的名字定义为 \"show\"，也可以将其定义为其他名字，当定义为其他名字时，就需要将这个名字作为第二个参数传递给 wellComMenuToggle 函数，也就是说，此参数是可选的。",
							"通过将工具函数 wellComMenuItemOperate 绑定到 <well-menu-item> 组件的 operate 事件上，来让菜单项具有指定的功能，也就是说，让用户在点击菜单项后，能够进行某项指定的操作。wellComMenuItemOperate 函数接收三个参数，其中第一个参数与 wellComMenuToggle 函数所接收的参数完全相同。第二个参数是一个函数，其中封装了将要进行的操作。第三个参数与 wellComMenuToggle 函数的第二个参数完全相同，它同样是可选的。",
							
						]
					},
					codeForPrint: [
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    data: {<br class='nocode' />" +
									 "        menu: {<br class='nocode' />" +
									 "            display: false<br class='nocode' />" +
									 "        }<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "    methods: {<br class='nocode' />" +
									 "        operateHandler: function () {<br class='nocode' />" +
									 "            console.log( \"操作进行中...\" );<br class='nocode' />" +
									 "        }<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "});"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
									 "&lt;well-app<br class='nocode' />" +
									 "    @click.native=\"wellComMenuHideAll\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "<br class='nocode' />" +
							         "&lt;well-menu<br class='nocode' />" +
									 "    position=\"down-right\"<br class='nocode' />" +
									 "    :show=\"menu.show\"<br class='nocode' />" +
									 "    @toggle=\"wellComMenuToggle( menu, 'display' );\"<br class='nocode' />" +
									 "&gt;<br class='nocode' /><br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #toggle-btn-txt<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        打开菜单<br class='nocode' />" +
									 "    &lt;/template&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #items<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        &lt;well-menu-item<br class='nocode' />" +
									 "            @operate=\"wellComMenuItemOperate( menu, operateHandler, 'display' );\"<br class='nocode' />" +
									 "        &gt;<br class='nocode' />" +
									 "            菜单项 1<br class='nocode' />" +
									 "        &lt;/well-menu-item&gt;<br class='nocode' />" +
									 "        &lt;well-menu-item<br class='nocode' />" +
									 "            @operate=\"wellComMenuItemOperate( menu, operateHandler, 'display' );\"<br class='nocode' />" +
									 "        &gt;<br class='nocode' />" +
									 "            菜单项 2<br class='nocode' />" +
									 "        &lt;/well-menu-item&gt;<br class='nocode' />" +
									 "        &lt;well-menu-item<br class='nocode' />" +
									 "            @operate=\"wellComMenuItemOperate( menu, operateHandler, 'display' );\"<br class='nocode' />" +
									 "        &gt;<br class='nocode' />" +
									 "            菜单项 3<br class='nocode' />" +
									 "        &lt;/well-menu-item&gt;<br class='nocode' />" +
									 "    &lt;/template&gt;<br class='nocode' />" +
									 "&lt;/well-menu&gt;<br class='nocode' />" +
									 "<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "<br class='nocode' />" +
									 "&lt;/well-app&gt;"
						}
					]
				},
				{
					title: "示例二",
					summary: {
						title: "把文字按钮替换为图标按钮，并且将菜单变为“大号”的",
						content: [
							"通过给 avatar 属性设置图标图片地址字符串，来将菜单触发开关由文字按钮变为图标按钮。",
							"当把文字按钮替换为图标按钮时，就不再需要给 toggle-btn-txt 插槽填充任何内容了，因为它将被图标按钮替代。",
							"通过将 size 属性设置为字符串值 \"large\"，来改变菜单的大小。"
						]
					},
					codeForPrint: [
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    data: {<br class='nocode' />" +
									 "        menu: {<br class='nocode' />" +
									 "            show: false<br class='nocode' />" +
									 "        }<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "    methods: {<br class='nocode' />" +
									 "        operateHandler: function () {<br class='nocode' />" +
									 "            console.log( \"操作进行中...\" );<br class='nocode' />" +
									 "        }<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "});"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
									 "&lt;well-app<br class='nocode' />" +
									 "    @click.native=\"wellComMenuHideAll\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "<br class='nocode' />" +
							         "&lt;well-menu<br class='nocode' />" +
									 "    avatar=\"media/image/avatar.jpg\"<br class='nocode' />" +
									 "    size=\"large\"<br class='nocode' />" +
									 "    position=\"down-right\"<br class='nocode' />" +
									 "    :show=\"menu.show\"<br class='nocode' />" +
									 "    @toggle=\"wellComMenuToggle( menu );\"<br class='nocode' />" +
									 "&gt;<br class='nocode' /><br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #toggle-btn-txt<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        打开菜单<br class='nocode' />" +
									 "    &lt;/template&gt;<br class='nocode' />" +
									 "    &lt;template<br class='nocode' />" +
									 "        #items<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        &lt;well-menu-item<br class='nocode' />" +
									 "            @operate=\"wellComMenuItemOperate( menu, operateHandler );\"<br class='nocode' />" +
									 "        &gt;<br class='nocode' />" +
									 "            菜单项 1<br class='nocode' />" +
									 "        &lt;/well-menu-item&gt;<br class='nocode' />" +
									 "        &lt;well-menu-item<br class='nocode' />" +
									 "            @operate=\"wellComMenuItemOperate( menu, operateHandler );\"<br class='nocode' />" +
									 "        &gt;<br class='nocode' />" +
									 "            菜单项 2<br class='nocode' />" +
									 "        &lt;/well-menu-item&gt;<br class='nocode' />" +
									 "        &lt;well-menu-item<br class='nocode' />" +
									 "            @operate=\"wellComMenuItemOperate( menu, operateHandler );\"<br class='nocode' />" +
									 "        &gt;<br class='nocode' />" +
									 "            菜单项 3<br class='nocode' />" +
									 "        &lt;/well-menu-item&gt;<br class='nocode' />" +
									 "    &lt;/template&gt;<br class='nocode' />" +
									 "&lt;/well-menu&gt;<br class='nocode' />" +
									 "<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "<br class='nocode' />" +
									 "&lt;/well-app&gt;"
						}
					]
				}
			],
			property: [
				{
					name: "avatar",
					type: "String",
					value: "\"\"(默认值，空字符串) |<br />[ 图标按钮图片地址字符串 ]",
					option: "可选",
					intro: "设置图标按钮的图片地址。"
				},
				{
					name: "size",
					type: "String",
					value: "\"normal\"(默认值) |<br />\"large\" |<br />\"extra-large\"",
					option: "可选",
					intro: "设置菜单的大小。"
				},
				{
					name: "position",
					type: "String",
					value: "\"down-right\"(默认值) |<br />\"down-left\" |<br />\"up-left\" |<br />\"up-right\"",
					option: "可选",
					intro: "设置以触发按钮为参照物，菜单出现的位置。为了方便组件用户使用，以“右下方”为例，取值 \"down-right\" 和取值 \"right-down\" 的效果是一样的。"
				},
				{
					name: "show",
					type: "Boolean",
					value: "false(默认值) |<br />true",
					option: "!必选!",
					intro: "设置菜单的显示/隐藏。"
				}
			],
			event: [
				{
					name: "toggle",
					intro: "<well-menu> 组件上的事件。当点击菜单触发按钮时就会触发此事件，我们建议用户使用配套的工具函数 wellComMenuToggle 作为此事件的处理函数。"
				},
				{
					name: "operate",
					intro: "<well-menu-item> 组件上的事件。当点击菜单项时就会触发此事件，我们建议用户使用配套的工具函数 wellComMenuItemOperate 作为此事件的处理函数。"
				}
			],
			slotCustom: [
				{
					name: "toggle-btn-txt",
					intro: "设置文字按钮中的文字。"
				},
				{
					name: "items",
					intro: "为 <well-menu-item> 组件提供的插槽，也就是说，此插槽的直接组件必须是 <well-menu-item>。"
				}
			],
			nav: {
				prevRoute: {
					name: "<well-loading> 组件",
					path: "/well-loading-intro"
				},
				nextRoute: {
					name: "<well-context-menu> 组件",
					path: "/well-context-menu-intro"
				}
			}
		}, /* wellMenuIntro [ end ] */
		
		wellContextMenuIntro: {
			menu1: {
				display: false,
				x: 0,
				y: 0
			},
			menu2: {
				show: false,
				mouseX: 0,
				mouseY: 0
			},
			header: {
				title: "<well-context-menu> 组件",
				summary: [
					{
						content: "顾名思义，这是一个“上下文菜单”组件。当我们需要阻止浏览器原生的“上下文菜单”弹出，并且用自定义的“上下文菜单”来代替时，就可以使用此组件。"
					},
					{
						content: "此组件具有一个配套组件 <well-context-menu-item>。需要提醒注意的是，<well-context-menu> 组件的子元素（子组件）必须为此组件。",
						important: true
					}
				]
			},
			sample: [
				{
					title: "示例一",
					summary: {
						title: "在指定元素上点击鼠标右键弹出自定义的“上下文菜单”",
						content: [
							"通过给 show 属性绑定一个布尔变量，来处理菜单的显示/隐藏。",
							"通过将工具函数 wellComContextMenuHideAll 绑定到应用根元素（或根组件）的 click 事件上，来处理页面中所有菜单的隐藏。",
							"通过将工具函数 wellComContextMenuShow 绑定到需要弹出自定义菜单的元素（或组件）的浏览器原生 contextmenu 事件上（请注意绑定时需要添加 .prevent 修饰符来阻止原生菜单的弹出。另外，如果是绑定到 vue 组件上，还需要添加 .native 修饰符），来处理菜单的显示。需要提醒组件用户注意的是，为了使 wellComContextMenuShow 函数能够正常运行，我们对传递给其的参数有一些要求，即第一个参数必须是一个对象字面量，且其中需要包含至少 3 个属性，分别是：一个绑定到组件 show 属性上的属性，一个绑定到组件 mouse-x 属性上的属性和一个绑定到 mouse-y 属性上的属性。用户可以直接将上述 3 个属性的名字定义为 \"show\"、\"mouseX\" 和 \"mouseY\"，也可以将他们定义为其他名字，当定义为其他名字时，就要将需要更改的名字以对象字面量的形式包装成第三个参数传递给 wellComMenuToggle 函数，也就是说，此参数是可选的。最后要说明的是第二个参数，此参数必须是事件对象 $event。",
							"<well-context-menu> 组件的直接子元素必须是 <well-context-menu-item> 组件。",
							"通过将工具函数 wellComContextMenuItemOperate 绑定到 <well-context-menu-item> 组件的 operate 事件上，来让菜单项具有指定的功能，也就是说，让用户在点击菜单项后，能够进行某项指定的操作。wellComContextMenuItemOperate 函数接收三个参数，其中第一个参数与 wellComContextMenuShow 函数所接收的参数完全相同。第二个参数是一个函数，其中封装了将要进行的操作。第三个参数与 wellComMenuToggle 函数的第二个参数完全相同，它同样是可选的。",
							
						]
					},
					codeForPrint: [
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    data: {<br class='nocode' />" +
									 "        menu: {<br class='nocode' />" +
									 "            display: false,<br class='nocode' />" +
									 "            x: 0,<br class='nocode' />" +
									 "            y: 0<br class='nocode' />" +
									 "        }<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "    methods: {<br class='nocode' />" +
									 "        operateHandler: function () {<br class='nocode' />" +
									 "            console.log( \"操作进行中...\" );<br class='nocode' />" +
									 "        }<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "});"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
									 "&lt;well-app<br class='nocode' />" +
									 "    @click.native=\"wellComContextMenuHideAll\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "<br class='nocode' />" +
									 "&lt;div<br class='nocode' />" +
									 "    @contextmenu.prevent=\"wellComContextMenuShow( menu, $event, { showName: 'display', mouseXName: 'x', mouseYName: 'y' } );\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    点击鼠标右键打开上下文菜单<br class='nocode' />" +
									 "&lt;/div&gt;<br class='nocode' />" +
							         "&lt;well-context-menu<br class='nocode' />" +
									 "    :show=\"menu.display\"<br class='nocode' />" +
									 "    :mouse-x=\"menu.x\"<br class='nocode' />" +
									 "    :mouse-y=\"menu.y\"<br class='nocode' />" +
									 "&gt;<br class='nocode' /><br class='nocode' />" +
									 "    &lt;well-context-menu-item<br class='nocode' />" +
									 "        @operate=\"wellComContextMenuItemOperate( menu, operateHandler, \'display\' );\"<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        菜单项 1<br class='nocode' />" +
									 "    &lt;/well-context-menu-item&gt;<br class='nocode' />" +
									 "&lt;/well-context-menu&gt;<br class='nocode' />" +
									 "<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "<br class='nocode' />" +
									 "&lt;/well-app&gt;"
						}
					]
				},
				{
					title: "示例二",
					summary: {
						title: "把菜单变为“大号”的",
						content: [
							"通过将 size 属性设置为字符串值 \"large\"，来改变菜单的大小。"
						]
					},
					codeForPrint: [
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    data: {<br class='nocode' />" +
									 "        menu: {<br class='nocode' />" +
									 "            show: false<br class='nocode' />" +
									 "            mouseX: 0<br class='nocode' />" +
									 "            mouseY: 0<br class='nocode' />" +
									 "        }<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "    methods: {<br class='nocode' />" +
									 "        operateHandler: function () {<br class='nocode' />" +
									 "            console.log( \"操作进行中...\" );<br class='nocode' />" +
									 "        }<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "});"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
									 "&lt;well-app<br class='nocode' />" +
									 "    @click.native=\"wellComContextMenuHideAll\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "<br class='nocode' />" +
									 "&lt;div<br class='nocode' />" +
									 "    @contextmenu.prevent=\"wellComContextMenuShow( menu, $event );\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    点击鼠标右键打开上下文菜单<br class='nocode' />" +
									 "&lt;/div&gt;<br class='nocode' />" +
							         "&lt;well-context-menu<br class='nocode' />" +
									 "    size=\"large\"<br class='nocode' />" +
									 "    :show=\"menu.display\"<br class='nocode' />" +
									 "    :mouse-x=\"menu.x\"<br class='nocode' />" +
									 "    :mouse-y=\"menu.y\"<br class='nocode' />" +
									 "&gt;<br class='nocode' /><br class='nocode' />" +
									 "    &lt;well-context-menu-item<br class='nocode' />" +
									 "        @operate=\"wellComContextMenuItemOperate( menu, operateHandler );\"<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        菜单项 1<br class='nocode' />" +
									 "    &lt;/well-context-menu-item&gt;<br class='nocode' />" +
									 "&lt;/well-context-menu&gt;<br class='nocode' />" +
									 "<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "...<br class='nocode' />" +
									 "<br class='nocode' />" +
									 "&lt;/well-app&gt;"
						}
					]
				}
			],
			property: [
				{
					name: "size",
					type: "String",
					value: "\"normal\"(默认值) |<br />\"large\" |<br />\"extra-large\"",
					option: "可选",
					intro: "设置菜单的大小。"
				},
				{
					name: "show",
					type: "Boolean",
					value: "false(默认值) |<br />true",
					option: "!必选!",
					intro: "设置菜单的显示/隐藏。"
				},
				{
					name: "mouse-x",
					type: "Number",
					value: "0(默认值) |<br />[ 鼠标右击时的 x 轴坐标 ]",
					option: "!必选!",
					intro: "设置菜单出现位置的 x 轴坐标，与鼠标右击时的 x 轴坐标一致。"
				},
				{
					name: "mouse-y",
					type: "Number",
					value: "0(默认值) |<br />[ 鼠标右击时的 y 轴坐标 ]",
					option: "!必选!",
					intro: "设置菜单出现位置的 y 轴坐标，与鼠标右击时的 y 轴坐标一致。"
				}
			],
			event: [
				{
					name: "operate",
					intro: "<well-context-menu-item> 组件上的事件。当点击菜单项时就会触发此事件，我们建议用户使用配套的工具函数 wellComContextMenuItemOperate 作为此事件的处理函数。"
				}
			],
			slotCustom: [
				{
					name: "[ 默认插槽 ]",
					intro: "为 <well-context-menu-item> 组件提供的插槽，也就是说，此默认插槽的直接组件必须是 <well-context-menu-item>。"
				}
			],
			nav: {
				prevRoute: {
					name: "<well-menu> 组件",
					path: "/well-menu-intro"
				},
				nextRoute: {
					name: "<well-modal> 组件",
					path: "/well-modal-intro"
				}
			}
		}, /* wellContextMenuIntro [ end ] */
		
		wellModalIntro: {
			offline: false,
			header: {
				title: "<well-modal> 组件",
				summary: [
					{
						content: "顾名思义，这是一个“模态框”组件。当需要向用户提示将要进行的操作时，就可以使用此组件。"
					},
					{
						content: "此组件具有两种使用方式，一种是用户在进行某项操作时（例如：删除文章操作），弹出模态框进行提示。还有一种是在网页需要在某个特定的时候向用户发出提示的情况下，弹出模态框。下面会对这两种使用方式分别进行说明。",
						important: true
					}
				]
			},
			sample: [
				{
					title: "示例一",
					summary: {
						title: "点击按钮打开模态框",
						content: [
							"通过给 operation 属性绑定一个函数，来处理当点击了模态框中的“确定”按钮时，将要进行的操作。请用户注意上述函数的返回值必须是一个 promise，因为该组件内部需要借助返回的这个 promise 来对操作的结果是成功还是失败进行提醒，所以用户在定义这个函数时要注意对操作成功的情况进行 resolve，并对操作失败的情况进行 reject。",
							"通过将 animation 属性设置为布尔值 true，来使模态框在显示时具有动画效果。"
						]
					},
					codeForPrint: [
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    methods: {<br class='nocode' />" +
									 "        asyncOperation: function () {<br class='nocode' />" +
									 "            return new Promise( function ( resolve, reject ) {<br class='nocode' />" +
									 "                var n = Math.random() * 10;<br class='nocode' />" +
									 "                <br class='nocode' />" +
									 "                setTimeout( function () {<br class='nocode' />" +
									 "                    if ( n < 5 )<br class='nocode' />" +
									 "                    {<br class='nocode' />" +
									 "                        resolve();<br class='nocode' />" +
									 "                    }<br class='nocode' />" +
									 "                    else<br class='nocode' />" +
									 "                    {<br class='nocode' />" +
									 "                        reject();<br class='nocode' />" +
									 "                    }<br class='nocode' />" +
									 "                }, 3000 );<br class='nocode' />" +
									 "            } )<br class='nocode' />" +
									 "        }<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "});"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
									 "&lt;well-modal<br class='nocode' />" +
									 "    :operation=\"asyncOperation\"<br class='nocode' />" +
									 "    :animation=\"true\"<br class='nocode' />" +
									 "/&gt;<br class='nocode' />"
						}
					]
				},
				{
					title: "示例二",
					summary: {
						title: "当网络连接出现故障时，弹出模态框来提示用户。",
						content: [
							"通过将 auto 属性设置为布尔值 true，来开启模态框在特定条件下自动弹出功能。",
							"通过给 open 属性设置一个布尔变量，并在特定时机切换此布尔变量的值，使得当此布尔变量为 true 时弹出模态框，为 false 时隐藏模态框。",
							"正如我们接下来将要看到的例子，当网络连接出现故障时，模态框就会弹出，但是如果此时用户还想对页面当中的一些不依赖网络的部分进行操作，由于模态框是页面元素中的最上层，所以上述的操作就无法进行了。为了解决这个问题，组件提供了 force-close-modal 事件，我们可以为其绑定一个处理函数，在此函数中只需要将绑定到 open 属性上的布尔变量设置为 false，就可以关闭模态框，从而达到对页面中的其他部分进行操作的目的。"
						]
					},
					codeForPrint: [
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    data: {<br class='nocode' />" +
									 "        offline: false<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "    mounted: function () {<br class='nocode' />" +
									 "        if ( !navigator.onLine )<br class='nocode' />" +
									 "        {<br class='nocode' />" +
									 "            this.offline = true;<br class='nocode' />" +
									 "        }<br class='nocode' />" +
									 "        <br class='nocode' />" +
									 "        var vm = this;<br class='nocode' />" +
									 "        <br class='nocode' />" +
									 "        window.addEventListener( \"online\", function () {<br class='nocode' />" +
									 "            vm.offline = false;<br class='nocode' />" +
									 "        }, false );<br class='nocode' />" +
									 "        <br class='nocode' />" +
									 "        window.addEventListener( \"offline\", function () {<br class='nocode' />" +
									 "            vm.offline = true;<br class='nocode' />" +
									 "        }, false );<br class='nocode' />" +
									 "    },<br class='nocode' />" +
									 "    methods: {<br class='nocode' />" +
									 "        forceCloseModal: function () {<br class='nocode' />" +
									 "            this.offline = false;<br class='nocode' />" +
									 "        }<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "});"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
									 "&lt;well-modal<br class='nocode' />" +
									 "    :auto=\"true\"<br class='nocode' />" +
									 "    :open=\"offline\"<br class='nocode' />" +
									 "    @force-close-modal=\"forceCloseModal\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    &lt;template slot=\"body\"&gt;<br class='nocode' />" +
									 "        &lt;div class=\"well-ori-text-align--c\"&gt;&lt;i class=\"fas fa-exclamation-circle\"&gt;&lt;/i&gt; {{ offline ? \"网络连接出现异常\" : \"\" }}&lt;/div&gt;<br class='nocode' />" +
									 "    &lt;/template&gt;<br class='nocode' />" +
									 "&lt;/well-modal&gt;"
						}
					]
				}
			],
			property: [
				{
					name: "size",
					type: "String",
					value: "\"normal\"(默认值) |<br />\"small\" |<br />\"large\" |<br />\"extra-large\"",
					option: "可选",
					intro: "设置模态框的大小。"
				},
				{
					name: "operation",
					type: "Function",
					value: "null(默认值) |<br />[ 点击模态框中的“确定”按钮后将要进行的操作 ]",
					option: "可选",
					intro: "设置点击模态框中的“确定”按钮后将要进行的操作。"
				},
				{
					name: "auto",
					type: "Boolean",
					value: "false(默认值) |<br />true",
					option: "可选",
					intro: "设置是否开启模态框的自动弹出功能。"
				},
				{
					name: "open",
					type: "Boolean",
					value: "false(默认值) |<br />true",
					option: "可选",
					intro: "当 auto 属性处于 true 值状态时，通过给此属性绑定布尔值来处理模态框的显示/隐藏。"
				},
				{
					name: "animation",
					type: "Boolean",
					value: "false(默认值) |<br />true",
					option: "可选",
					intro: "设置是否开启模态框显示时的动画。"
				}
			],
			event: [
				{
					name: "force-close-modal",
					intro: "当模态框处于自动弹出模式时，通过为此事件绑定处理函数，来处理当点击模态框遮罩层上的“×”按钮时，强制关闭模态框的操作。"
				}
			],
			slotCustom: [
				{
					name: "open-btn-txt",
					intro: "模态框打开按钮的文字。"
				},
				{
					name: "body",
					intro: "模态框的主体内容。"
				},
				{
					name: "footer-confirm-btn-txt",
					intro: "模态框底部确定按钮的文字。"
				},
				{
					name: "footer-close-btn-txt",
					intro: "模态框底部关闭按钮的文字。"
				},
				{
					name: "operate-success-msg",
					intro: "操作成功时的提示消息。"
				},
				{
					name: "operate-fail-msg",
					intro: "操作失败时的提示消息。"
				},
				{
					name: "operating-msg",
					intro: "操作正在进行中的提示消息。"
				}
			],
			nav: {
				prevRoute: {
					name: "<well-context-menu> 组件",
					path: "/well-context-menu-intro"
				},
				nextRoute: {
					name: "<well-msg> 组件",
					path: "/well-msg-intro"
				}
			}
		}, /* wellModalIntro [ end ] */
		
		wellMsgIntro: {
			header: {
				title: "<well-msg> 组件",
				summary: [
					{
						content: "顾名思义，这是一个“消息”组件。当需要向用户提示某种信息时，可以使用此组件。"
					}
				]
			},
			sample: [
				{
					title: "示例",
					summary: {
						title: "向用户提示“发布文章成功”的消息",
						content: [
							"通过将 size 属性设置为字符串值 \"large\"，来增大“消息”的字体。",
							"通过将 state 属性设置为字符串值 \"success\"，来改变“消息”框的背景色（由默认的白色变为绿色）。"
						]
					},
					codeForPrint: [
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
									 "&lt;well-msg<br class='nocode' />" +
									 "    size=\"large\"<br class='nocode' />" +
									 "    state=\"success\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    发布文章成功<br class='nocode' />" +
									 "&lt;/well-app&gt;"
						}
					]
				}
			],
			property: [
				{
					name: "size",
					type: "String",
					value: "\"normal\"(默认值) |<br />\"large\" |<br />\"extra-large\"",
					option: "可选",
					intro: "设置消息的字体大小。"
				},
				{
					name: "state",
					type: "String",
					value: "\"normal\"(默认值) |<br />\"caution\" |<br />\"success\" |<br />\"fail\"",
					option: "可选",
					intro: "设置消息的状态。消息一共有四种状态，分别是默认（背景白色）、注意（背景黄色）、成功（背景绿色）、失败（背景红色）。"
				}
			],
			nav: {
				prevRoute: {
					name: "<well-modal> 组件",
					path: "/well-modal-intro"
				},
				nextRoute: {
					name: "<well-pagination> 组件",
					path: "/well-pagination-intro"
				}
			}
		}, /* wellMsgIntro [ end ] */
		
		wellPaginationIntro: {
			api: "service/test.php",
			header: {
				title: "<well-pagination> 组件",
				summary: [
					{
						content: "顾名思义，这是一个“分页”组件，当有许多条数据需要展示时，可以通过此组件实现分页功能。"
					},
					{
						content: "由于分页是一个会涉及到网络请求的功能，因此在组件内部的实现过程中，我们整合了网络请求，也就是说，当点击分页按钮时，会直接通过 ajax 发出一个网络请求来请求指定页的数据。",
						important: true
					}
				]
			},
			sample: [
				{
					title: "示例",
					summary: {
						title: "分页",
						content: [
							"通过给 total 属性设置一个数字类型值，来指定数据的总条目数。",
							"通过给 count 属性设置一个数字类型值，来指定每页显示的条目数。",
							"通过给 init-request-page 属性设置一个数字类型值，来指定初始请求的是那一页。",
							"通过给 url 属性设置一个字符串值，来指定请求的后端地址。",
							"通过给 url-param-page 设置一个字符串值，来指定所请求后端地址中的代表“页面”参数部分的参数名称，默认值为 “page”。",
							"通过给 align 属性设置一个字符串值，来指定此组件出现在页面中的位置（是居左、居中、还是居右）。"
						]
					},
					codeForPrint: [
						{
							content: "/* php [ service/test.php ]*/<br class='nocode' />" +
									 "&lt;?php<br class='nocode' />" +
									 "if ( isset( $_GET[ 'p' ] ) )<br class='nocode' />" +
									 "{<br class='nocode' />" +
									 "	echo json_encode( 'hello world!' . ' ' . $_GET[ 'p' ] );<br class='nocode' />" +
									 "}<br class='nocode' />" +
									 "else<br class='nocode' />" +
									 "{<br class='nocode' />" +
									 "	echo json_encode( 'hello world!' );<br class='nocode' />" +
									 "}<br class='nocode' />" +
									 "?&gt;"
						},
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    data: {<br class='nocode' />" +
									 "        api: \"service/test.php\"<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "    methods: {<br class='nocode' />" +
									 "        requestSuccessHandler: function ( data ) {<br class='nocode' />" +
									 "            console.log( data );<br class='nocode' />" +
									 "        }<br class='nocode' />" +
									 "        requestFailHandler: function ( errMsg ) {<br class='nocode' />" +
									 "            console.log( errMsg );<br class='nocode' />" +
									 "        }<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "});"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
									 "&lt;well-pagination<br class='nocode' />" +
									 "    :total=\"10\"<br class='nocode' />" +
									 "    :count=\"1\"<br class='nocode' />" +
									 "    :init-request-page=\"10\"<br class='nocode' />" +
									 "    :url=\"api\"<br class='nocode' />" +
									 "    url-param-page=\"p\"<br class='nocode' />" +
									 "    align=\"center\"<br class='nocode' />" +
									 "    @request-success=\"requestSuccessHandler\"<br class='nocode' />" +
									 "    @request-fail=\"requestFailHandler\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    &lt;template #prev-btn-txt&gt;上一页&lt;/template&gt;<br class='nocode' />" +
								     "    &lt;template #next-btn-txt&gt;下一页&lt;/template&gt;<br class='nocode' />" +
									 "&lt;/well-pagination&gt;"
						}
					]
				}
			],
			property: [
				{
					name: "total",
					type: "Number",
					value: "0(默认值) |<br />[ 总条目数 ]",
					option: "!必选!",
					intro: "设置总条目数。"
				},
				{
					name: "count",
					type: "Number",
					value: "1(默认值) |<br />[ 每页条目数 ]",
					option: "!必选!",
					intro: "设置每页条目数。"
				},
				{
					name: "init-request-page",
					type: "Number",
					value: "1(默认值) |<br />[ 初始请求的页面 ]",
					option: "可选",
					intro: "设置初始请求的页面。"
				},
				{
					name: "url",
					type: "String",
					value: "\"\"(默认值，空字符串) |<br />[ 请求的后端地址 ]",
					option: "!必选!",
					intro: "设置请求的后端地址"
				},
				{
					name: "url-param-page",
					type: "String",
					value: "\"page\"(默认值) |<br />[ 所请求后端地址中的代表“页面”参数部分的参数名称 ]",
					option: "!必选!",
					intro: "设置所请求后端地址中的代表“页面”参数部分的参数名称"
				},
				{
					name: "align",
					type: "String",
					value: "\"left\"(默认值) |<br />\"center\"<br />\"right\"",
					option: "!必选!",
					intro: "设置组件在页面中出现的位置。"
				}
			],
			event: [
				{
					name: "request-success",
					intro: "当请求 url 成功时，就会触发此事件，此事件会传递一个参数。",
					param: "此参数是从服务器发回的数据，往往用于渲染当前请求的分页。"
				},
				{
					name: "request-fail",
					intro: "当请求 url 失败时，就会触发此事件，此事件会传递一个参数。",
					param: "此参数是请求失败的错误消息提示。"
				}
			],
			slotCustom: [
				{
					name: "prev-btn-txt",
					intro: "设置“前一页”按钮中的文字。"
				},
				{
					name: "next-btn-txt",
					intro: "设置“后一页”按钮中的文字。"
				}
			],
			nav: {
				prevRoute: {
					name: "<well-msg> 组件",
					path: "/well-msg-intro"
				},
				nextRoute: {
					name: "<well-sidebar> 组件",
					path: "/well-sidebar-intro"
				}
			}
		}, /* wellPaginationIntro [ end ] */
		
		wellSidebarIntro: {
			header: {
				title: "<well-sidebar> 组件",
				summary: [
					{
						content: "顾名思义，这是一个“侧边栏”组件。由于手机的屏幕比较小，用户界面的有些部分（例如页面导航列表）可以通过隐藏到屏幕之外来节省界面空间，并使界面看起来更为整洁。而在需要时可以显示出来。"
					}
				]
			},
			sample: [
				{
					title: "示例",
					summary: {
						title: "在处于移动端平台时，本文档本身就使用了此组件来隐藏页面的导航列表，而在需要导航时，可以通过滑动的方式来显示这个导航列表。",
						content: [
							"可以通过从左往右滑动的方式来显示“侧边栏”。"
						]
					},
					codeForPrint: [
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
									 "&lt;well-sidebar&gt;<br class='nocode' />" +
									 "    导航列表...<br class='nocode' />" +
									 "&lt;/well-sidebar&gt;"
						}
					]
				}
			],
			nav: {
				prevRoute: {
					name: "<well-pagination> 组件",
					path: "/well-pagination-intro"
				},
				nextRoute: {
					name: "<well-tab> 组件",
					path: "/well-tab-intro"
				}
			}
		}, /* wellSidebarIntro [ end ] */
		
		wellTabIntro: {
			tabs: [
				{ active: true },
				{ active: false },
				{ active: false }
			],
			header: {
				title: "<well-tab> 组件",
				summary: [
					{
						content: "顾名思义，这是一个“标签页”组件，适合在需要显示当前项而隐藏一系列相关项的情况下使用。"
					},
					{
						content: "此组件有三个配套组件，它们分别是 <well-tab-toggle-wrapper>、<well-tab-toggle> 和 <well-tab-item>。它们具体的使用方式会在下面的示例中进行说明。",
						important: true
					}
				]
			},
			sample: [
				{
					title: "示例",
					summary: {
						title: "标签页",
						content: [
							"此组件需要用到预定义的工具函数 wellComTabToggle，此函数接收三个参数，第一个参数是一个数组，数组中的每一项中都必须是一个对象字面量，且该对象字面量中必须包含一个将被绑定到 <well-tab-toggle> 以及 <well-tab-item> 组件的 active 属性上的一个布尔属性值。第二个参数是上述对象字面量在其所在数组中的索引值。第三个参数仅当上述对象字面量中将被绑定到 active 属性上的布尔属性的名称不为 active 时才需要传入，也就是说此参数是布尔属性的名称，因此此参数是可选的。",
							"要使用上述提到的 wellComTabToggle 工具函数，需要先通过 wellComHelper.wellComMixin 工具函数来混入此函数。"
						]
					},
					codeForPrint: [
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    mixins: wellComHelper.wellComMixin( {<br class='nocode' />" +
									 "        components: [ \"tab\" ]<br class='nocode' />" +
									 "    } ),<br class='nocode' />" +
									 "    data: {<br class='nocode' />" +
									 "        tabs: [<br class='nocode' />" +
									 "            { active: true },<br class='nocode' />" +
									 "            { active: false },<br class='nocode' />" +
									 "            { active: false }<br class='nocode' />" +
									 "        ]<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "});"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
									 "&lt;well-tab&gt;<br class='nocode' />" +
									 "    &lt;well-tab-toggle-wrapper&gt;<br class='nocode' />" +
									 "        &lt;well-tab-toggle<br class='nocode' />" +
									 "            v-for=\"( tab, index) in tabs\"<br class='nocode' />" +
									 "            :key=\"index\"<br class='nocode' />" +
									 "            :active=\"tab.active\"<br class='nocode' />" +
									 "            @toggle=\"wellComTabToggle( tabs, index );\"<br class='nocode' />" +
									 "        &gt;<br class='nocode' />" +
									 "            标签页 {{ index + 1 }} 切换按钮<br class='nocode' />" +
									 "        &lt;/well-tab-toggle&gt;<br class='nocode' />" +
									 "    &lt;/well-tab-toggle-wrapper&gt;<br class='nocode' />" +
									 "    &lt;well-tab-item<br class='nocode' />" +
									 "        v-for=\"( tab, index) in tabs\"<br class='nocode' />" +
									 "        :key=\"index\"<br class='nocode' />" +
									 "        :active=\"tab.active\"<br class='nocode' />" +
									 "    &gt;<br class='nocode' />" +
									 "        标签页 {{ index + 1 }}<br class='nocode' />" +
									 "    &lt;/well-tab-item&gt;<br class='nocode' />" +
									 "&lt;/well-tab&gt;"
						}
					]
				}
			],
			property: [
				{
					name: "active",
					type: "Boolean",
					value: "false(默认值) |<br />true",
					option: "!必选!",
					intro: "需要特别提醒用户注意的是，此属性是 <well-tab-toggle> 和 <well-tab-item> 两个组件上都存在的，且这两个相同的名为 active 的属性所绑定的也是同一个布尔属性，这也是非常符合逻辑的，因为“标签页切换按钮”与“标签页”是一一对应的，当“标签页切换按钮”处于激活状态时，与之对应的“标签页”也一定是处于激活（显示）状态的。"
				}
			],
			event: [
				{
					name: "toggle",
					intro: "<well-tab-toggle> 组件上的事件。当点击标签页切换按钮时就会触发此事件，可以使用配套的工具函数 wellComTabToggle 作为此事件的处理函数。"
				}
			],
			nav: {
				prevRoute: {
					name: "<well-sidebar> 组件",
					path: "/well-sidebar-intro"
				},
				nextRoute: {
					name: "<well-tip> 组件",
					path: "/well-tip-intro"
				}
			}
		}, /* wellTabIntro [ end ] */
		
		wellTipIntro: {
			tip: {
				show: false,
				mouseX: 0,
				mouseY: 0,
				hideForced: false
			},
			header: {
				title: "<well-tip> 组件",
				summary: [
					{
						content: "此组件的功能类似于浏览器原生的元素上的 title 属性所实现的功能。即在鼠标移动到某个需要给出相关提示的页面部分上的时候，弹出相应提示。"
					},
					{
						content: "需要提醒组件用户注意的是，此组件所展示的效果只适合在桌面端使用，请勿在移动端使用此组件。",
						important: true
					},
					{
						content: "此组件需要使用到预定义的工具函数，下面的示例会对工具函数进行说明。请用户首先在 mixins 选项中使用组件库自带的工具函数 wellComHelper.wellComMixin 来将工具函数混入到当前组件中。",
						important: true
					}
				]
			},
			sample: [
				{
					title: "示例",
					summary: {
						title: "鼠标移动到目标元素后，弹出提示框",
						content: [
							"首先在目标元素（或目标组件）上设置一个 id 属性（在此，我们将其称之为“目标元素 id”），因为预定义的工具函数内部必须使用此属性来确定目标元素是哪一个。",
							"其次在此组件上设置一个 id 属性（在此，我们将其称之为“提示组件 id”），原因同上一条的说明相同。",
							"给目标元素（或目标组件）的两个浏览器原生事件 mouseenter 和 mouseleave 分别绑定预定义工具函数 wellComTipTargetMouseenter 和 wellComTipTargetMouseleave。这两个工具函数的第一个和第二个参数相同，其中第一个参数是一个对象字面量，该字面量必须包含四个指定名字的属性，它们分别是 show、mouseX 和 mouseY 和 hideForced。第二个参数是事件对象 $event。wellComTipTargetMouseleave 工具函数还接收第三个参数，此参数是上面介绍过的“提示组件 id”。",
							"先给提示组件的三个属性 show、mouse-x 和 mouse-y 分别绑定在上一条中提到的传递给工具函数的第一个参数中的三个对应属性，接着再给提示组件的两个浏览器原生事件 mouseenter 和 mouseleave 分别绑定预定义工具函数 wellComTipSelfMouseenter 和 wellComTipSelfMouseleave。这两个工具函数的第一个和第二个参数与上面讲到的两个工具函数的第一个和第二个参数完全一样，并且这两个工具函数都接收第三个参数，这个参数是上面介绍过的“目标元素 id”。",
							"上述事件在绑定工具函数时请务必注意一点，如果目标元素是一个 vue 组件，那么必须给事件添加 .native 修饰符。而对于 <well-tip> 组件上的事件来说，则必须要添加 .native 修饰符。"
						]
					},
					codeForPrint: [
						{
							content: "/* js */<br class='nocode' />" +
							         "new Vue( {<br class='nocode' />" +
									 "    mixins: wellComHelper.wellComMixin( {<br class='nocode' />" +
									 "        components: [ \"tip\" ]<br class='nocode' />" +
									 "    } ),<br class='nocode' />" +
									 "    data: {<br class='nocode' />" +
									 "        tip: {<br class='nocode' />" +
									 "            show: false<br class='nocode' />" +
									 "            mouseX: 0<br class='nocode' />" +
									 "            mouseY: 0<br class='nocode' />" +
									 "            hideForced: false<br class='nocode' />" +
									 "        }<br class='nocode' />" +
									 "    }<br class='nocode' />" +
									 "});"
						},
						{
							content: "&lt;!-- html --&gt;<br class='nocode' />" +
									 "&lt;well-box<br class='nocode' />" +
									 "    id=\"target\"<br class='nocode' />" +
									 "    @mouseenter.native=\"wellComTipTargetMouseenter( tip, $event );\"<br class='nocode' />" +
									 "    @mouseleave.native=\"wellComTipTargetMouseleave( tip, $event, 'tip' );\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    目标元素<br class='nocode' />" +
									 "&lt;/well-box&gt;<br class='nocode' />" +
									 "&lt;well-tip<br class='nocode' />" +
									 "    id=\"tip\"<br class='nocode' />" +
									 "    :show=\"tip.show\"<br class='nocode' />" +
									 "    :mouse-x=\"tip.mouseX\"<br class='nocode' />" +
									 "    :mouse-y=\"tip.mouseY\"<br class='nocode' />" +
									 "    @mouseenter.native=\"wellComTipSelfMouseenter( tip, $event, 'target' );\"<br class='nocode' />" +
									 "    @mouseleave.native=\"wellComTipSelfMouseleave( tip, $event, 'target' );\"<br class='nocode' />" +
									 "&gt;<br class='nocode' />" +
									 "    提示<br class='nocode' />" +
									 "&lt;/well-tip&gt;"
						}
					]
				}
			],
			property: [
				{
					name: "show",
					type: "Boolean",
					value: "false(默认值) |<br />true",
					option: "!必选!",
					intro: "设置提示框的显示/隐藏。"
				},
				{
					name: "mouse-x",
					type: "Number",
					value: "0(默认值) |<br />[ 鼠标右击时的 x 轴坐标 ]",
					option: "!必选!",
					intro: "设置提示框出现位置的 x 轴坐标，与鼠标移入目标元素时的 x 轴坐标一致。"
				},
				{
					name: "mouse-y",
					type: "Number",
					value: "0(默认值) |<br />[ 鼠标右击时的 y 轴坐标 ]",
					option: "!必选!",
					intro: "设置提示框出现位置的 y 轴坐标，与鼠标移入目标元素时的 y 轴坐标有一个固定的偏移量（20px）。"
				}
			],
			nav: {
				prevRoute: {
					name: "<well-tab> 组件",
					path: "/well-tab-intro"
				}
			}
		}, /* wellTipIntro [ end ] */
	}
};