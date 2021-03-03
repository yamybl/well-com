var wellCard = {
	name: "well-card",
	props: {
		avatar: {
			type: String,
			default: ""
		}
	},
	template: '\
		<div class="well-com-card">\
			<div class="well-base-wrapper well-ori-margin--0">\
				<div class="well-base-wrapper well-ori-margin--0 well-ori-padding--normal well-com-card__title">\
					<slot name="title">标题</slot>\
				</div>\
				<div class="well-ori-display__flex-row--sb well-ori-padding--normal well-com-card__des-wrapper">\
					<div class="well-com-card__des">\
						<slot name="des1">描述1</slot>\
					</div>\
					<div class="well-com-card__des">\
						<slot name="des2"></slot>\
					</div>\
				</div>\
			</div>\
			<div class="well-base-wrapper well-ori-margin--0 well-ori-padding--normal">\
				<slot name="body">内容</slot>\
			</div>\
			<div class="well-ori-display__flex-row--e-c well-ori-padding--normal well-com-card__footer">\
				<img v-if="avatar"\
				     class="well-com-card__footer-avatar"\
				     :src="avatar" />\
				<slot name="footer-txt">页脚</slot>\
			</div>\
		</div>\
	'
};

Vue.component( "well-card", wellCard );