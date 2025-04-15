var wellModalIntro = {
	name: "well-modal-intro",
	
	data: function () {
		return store.state.wellModalIntro
	},
	
	mounted: function () {
		if ( !navigator.onLine )
		{
			this.offline = true;
		}
		
		var vm = this;
		
		window.addEventListener( "online", function () {
			vm.offline = false;
		}, false );
		
		window.addEventListener( "offline", function () {
			vm.offline = true;
		}, false );
	},
	
	methods: {
		asyncOperation: function () {
			return new Promise( function ( resolve, reject ) {
				var n = Math.random() * 10;
			
				setTimeout( function () {
					if ( n < 5 )
					{
						resolve();
					}
					else
					{
						reject();
					}
				}, 3000 );
			} );
		},
		forceCloseModal: function () {
			this.offline = false;
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
						<well-modal\
							:operation="asyncOperation"\
							:animation="true"\
						/>\
					</template>\
					<template v-else-if="i === 1">\
						<well-msg\
							size="large"\
							state="caution"\
						>\
							请将网络切换为 offline 状态来尝试此效果\
						</well-msg>\
						<well-modal\
							:auto="true"\
							:open="offline"\
							@force-close-modal="forceCloseModal();"\
						>\
							<template slot="body">\
								<div class="well-ori-text-align--c"><i class="fas fa-exclamation-circle"></i> {{ offline ? \"网络连接出现异常\" : \"\" }}</div>\
							</template>\
						</well-modal>\
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

