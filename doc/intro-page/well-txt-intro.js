var wellTxtIntro = {
	name: "well-txt-intro",
	
	data: function () {
		return store.state.wellTxtIntro
	},
	
	methods: {
		errorHandler: function ( userInputString ) {
			if ( userInputString.length < 6 )
			{
				return "密码少于 6 位";
			}
			else
			{
				return "";
			}
		},
		
		handlePassword: function ( validPassword ) {
			console.log( "对密码 "+ validPassword + " 进行操作..." );
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
						<well-txt>\
							<template\
								#label-txt\
							>\
								用户名\
							</template>\
						</well-txt>\
					</template>\
					<template v-else-if="i === 1">\
						<well-txt\
							type="password"\
							hint="密码不能少于 6 位"\
							:errorHandler="errorHandler"\
						>\
							<template\
								#label-txt\
							>\
								密码\
							</template>\
						</well-txt>\
					</template>\
					<template v-else-if="i === 2">\
						<well-txt\
							type="password"\
							:errorHandler="errorHandler"\
							@valid-input="handlePassword"\
						>\
							<template\
								#label-txt\
							>\
								密码\
							</template>\
						</well-txt>\
					</template>\
					<template v-else-if="i === 3">\
						<well-txt\
							type="password"\
							:passwordVisible="true"\
						>\
							<template\
								#label-txt\
							>\
								密码\
							</template>\
						</well-txt>\
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