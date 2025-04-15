var wellCheckboxIntro = {
	name: "well-checkbox-intro",
	
	mixins: wellComHelper.wellComMixin( {
		components: [ "checkbox" ]
	} ),
	
	data: function () {
		return store.state.wellCheckboxIntro
	},
	
	methods: {
		customChangeHandler: function ( bindValue, value ) {
			console.log( "bindValue: ", bindValue, "value: ", value );
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
						<well-checkbox\
							name="fruits"\
							:bindValue="fruits"\
							value="apple"\
							@change="wellComCheckboxChange"\
						>\
							<template\
								#label-txt\
							>\
								苹果\
							</template>\
						</well-checkbox>\
						<well-checkbox\
							name="fruits"\
							:bindValue="fruits"\
							value="pear"\
							@change="wellComCheckboxChange"\
						>\
							<template\
								#label-txt\
							>\
								梨子\
							</template>\
						</well-checkbox>\
						<well-box>fruits:{{ fruits }}</well-box>\
					</template>\
					<template v-else-if="i === 1">\
						<well-checkbox\
							name="people"\
							:bindValue="people"\
							value="Oscar"\
							@change="customChangeHandler"\
						>\
							<template\
								#label-txt\
							>\
								Oscar\
							</template>\
						</well-checkbox>\
						<well-checkbox\
							name="people"\
							:bindValue="people"\
							value="Zero"\
							@change="customChangeHandler"\
						>\
							<template\
								#label-txt\
							>\
								Zero\
							</template>\
						</well-checkbox>\
					</template>\
					<template v-else-if="i === 2">\
						<well-checkbox\
							name="number"\
							value="one"\
							:thin="true"\
						>\
							<template\
								#label-txt\
							>\
								one\
							</template>\
						</well-checkbox>\
						<well-checkbox\
							name="number"\
							value="two"\
							:thin="true"\
						>\
							<template\
								#label-txt\
							>\
								two\
							</template>\
						</well-checkbox>\
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