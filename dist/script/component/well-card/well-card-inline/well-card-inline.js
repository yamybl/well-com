var wellCardInline = {
	name: "well-card-inline",
	props: {
		mode: {
			type: String,
			default: "default"
		},
		avatar: {
			type: String,
			default: ""
		}
	},
	computed: {
		cardInlineCls: function () {
			switch ( this.mode )
			{
				case "default":
					return {
						"well-com-box": true,
						"well-ori-display__flex-row--sb": true,
						"well-ori-margin--0": true,
						"well-ori-padding--small": true,
						"well-com-card-inline": true
					};
					
				case "avatar":
					return {
						"well-com-box": true,
						"well-ori-display__flex-row--sb": true,
						"well-ori-margin--0": true,
						"well-ori-padding--normal": true,
						"well-com-card-inline": true
					};
			}
		},
		
		cardInlineTitleCls: function () {
			switch ( this.mode )
			{
				case "default":
					return {
						"well-ori-width--15": true,
						"well-com-card-inline__title": true
					};
					
				case "avatar":
					return {
						"well-ori-display__flex-row--s": true,
						"well-ori-width--15": true,
						"well-com-card-inline__title": true
					};
			}
		},
		
		cardInlineDes1Cls: function () {
			switch ( this.mode )
			{
				case "default":
					return {
						"well-ori-width--60": true
					};
					
				case "avatar":
					return {
						"well-ori-box-sizing--border": true,
						"well-ori-display__flex-align-self--s": true,
						"well-ori-width--60": true,
						"well-ori-padding--extra-small": true
					};
			}
		},
		
		cardInlineDes2Cls: function () {
			switch ( this.mode )
			{
				case "default":
					return {
						"well-ori-width--15": true,
						"well-com-card-inline__des-2": true
					};
					
				case "avatar":
					return {
						"well-ori-display__flex-align-self--s": true,
						"well-ori-width--15": true,
						"well-ori-text-align--r": true,
						"well-com-card-inline__des-2": true
					};
			}
		}
	},
	template: '\
		<div :class="cardInlineCls">\
			<div :class="cardInlineTitleCls">\
				<template v-if="mode === \'default\'">\
					<slot name="title">标题</slot>\
				</template>\
				<template v-else>\
					<img class="well-com-card-inline__title-avatar"\
				         :src="avatar" />\
				</template>\
			</div>\
			<div :class="cardInlineDes1Cls">\
				<template v-if="mode === \'default\'">\
					<slot name="des-1">描述1</slot>\
				</template>\
				<template v-else>\
					<div class="well-com-card-inline__des-1-primary">\
						<slot name="des-1-primary">首要</slot>\
					</div>\
					<div class="well-com-card-inline__des-1-secondary">\
						<slot name="des-1-secondary">次要</slot>\
					</div>\
				</template>\
			</div>\
			<div :class="cardInlineDes2Cls">\
				<slot name="des2">描述2</slot>\
			</div>\
		</div>\
	'
};

Vue.component( "well-card-inline", wellCardInline );