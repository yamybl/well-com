var wellInfiniteScrollIntro = {
	name: "well-infinite-scroll-intro",
	
	data: function () {
		return store.state.wellInfiniteScrollIntro
	},
	
	methods: {
		requestHandler: function () {
			this.requesting = true;

			var vm = this;

			setTimeout( function () {
                vm.requesting = false;
                if ( vm.items.length > 29 )
                {
                    vm.noMoreItems = true;
                    return;
                }
                vm.items.push( vm.items.length + 1 );
            }, 2000 );
		},
		
		requestHandler2: function () {
			this.requesting2 = true;

			var vm = this;

			setTimeout( function () {
                vm.requesting2 = false;
                if ( vm.items2.length >= 100 )
                {
                    vm.noMoreItems2 = true;
                    return;
                }
				for ( var i = 1, len = 10; i <= len; ++i )
				{
					vm.items2.push( vm.items2.length + 1 );
				}
            }, 2000 );
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
						<well-infinite-scroll\
							size="extra-small"\
							:requesting="requesting"\
							:no-more-items="noMoreItems"\
							@request="requestHandler"\
						>\
							<template\
								#items\
							>\
								<div\
									v-for="item in items"\
								>\
									{{ item }}\
								</div>\
							</template>\
						</well-infinite-scroll>\
					</template>\
					<template v-else-if="i === 1">\
						<well-infinite-scroll\
							:hideScrollbar="true"\
							:distance="50"\
							size="extra-small"\
							:requesting="requesting2"\
							:no-more-items="noMoreItems2"\
							@request="requestHandler2"\
						>\
							<template\
								#items\
							>\
								<div\
									v-for="item in items2"\
								>\
									{{ item }}\
								</div>\
							</template>\
						</well-infinite-scroll>\
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