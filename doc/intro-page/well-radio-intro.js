var wellRadioIntro = {
	name: "well-radio-intro",
	
	data: function () {
		return store.state.wellRadioIntro
	},
	
	methods: {
		change: function ( checkedValue ) {
			console.log( "被选择的值是：", checkedValue );
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
						<well-radio\
							name="sex"\
							value="male"\
						>\
							<template\
								#label-txt\
							>\
								男\
							</template>\
						</well-radio>\
						<well-radio\
							name="sex"\
							value="female"\
						>\
							<template\
								#label-txt\
							>\
								女\
							</template>\
						</well-radio>\
					</template>\
					<template v-else-if="i === 1">\
						<well-radio\
							name="sex"\
							value="male"\
							@change="change"\
						>\
							<template\
								#label-txt\
							>\
								男\
							</template>\
						</well-radio>\
						<well-radio\
							name="sex"\
							value="female"\
							@change="change"\
						>\
							<template\
								#label-txt\
							>\
								女\
							</template>\
						</well-radio>\
					</template>\
					<template v-else-if="i === 2">\
						<well-radio\
							name="sex"\
							value="male"\
							:thin="true"\
						>\
							<template\
								#label-txt\
							>\
								男\
							</template>\
						</well-radio>\
						<well-radio\
							name="sex"\
							value="female"\
							:thin="true"\
						>\
							<template\
								#label-txt\
							>\
								女\
							</template>\
						</well-radio>\
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