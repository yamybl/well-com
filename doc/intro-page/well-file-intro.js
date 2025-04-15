var wellFileIntro = {
	name: "well-file-intro",
	
	data: function () {
		return store.state.wellFileIntro
	},
	
	methods: {
		selectHandler: function ( file ) {
			console.log(file);
		},
		uploadSuccessHandler: function ( data ) {
			console.log( data );
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
						<well-file\
							name="avatar"\
							:accept-types="acceptTypes1"\
							:single-max-size="0.002"\
							@select="selectHandler"\
						/>\
					</template>\
					<template v-else-if="i === 1">\
						<well-file\
							name="avatar"\
							:multiple="true"\
							:accept-types="acceptTypes1"\
							:single-max-size="0.08"\
							:total-max-size="0.2"\
						/>\
					</template>\
					<template v-else-if="i === 2">\
						<well-file\
							name="avatar"\
							:accept-types="acceptTypes1"\
							:single-max-size="0.08"\
						>\
							<template\
								#select-txt\
							>\
								选择头像\
							</template>\
							<template\
								#selected-err-type-txt\
							>\
								头像文件类型不符合要求\
							</template>\
							<template\
								#selected-err-size-txt\
							>\
								所选头像文件的大小超过指定大小\
							</template>\
							<template\
								#selected-txt\
							>\
								头像已经选择\
							</template>\
						</well-file>\
					</template>\
					<template v-else-if="i === 3">\
						<well-file\
							name="avatar"\
							:thin="true"\
							:accept-types="acceptTypes1"\
							:single-max-size="0.002"\
						/>\
					</template>\
					<template v-if="i === 4">\
						<well-file\
							name="avatar"\
							:upload="true"\
							url="service/com-file-test.php"\
							:accept-types="acceptTypes1"\
							:single-max-size="0.05"\
							@upload-success="uploadSuccessHandler"\
						/>\
					</template>\
					<template v-if="i === 5">\
						<well-file\
							name="avatar"\
							:disabled="true"\
							:accept-types="acceptTypes1"\
							:single-max-size="0.05"\
							@select="selectHandler"\
						/>\
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