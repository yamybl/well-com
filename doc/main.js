new Vue( {
	el: "#vue-container",
	
	mixins: wellComHelper.wellComMixin( {
		components: [ "menu", "contextMenu" ]
	} ),
	
	router: router,
	
	data: store.state,
	
	computed: {
		wellDocCls: function () {
			return {
				"well-doc": true,
				"well-ori-tap-highlight--none": this.wellDocData.isMobile
			};
		},
		
		wellDocSidebarCls: function () {
			return {
				"well-doc__sidebar": true,
				"well-doc__sidebar--mobile": this.wellDocData.isMobile
			};
		},
		
		wellDocBodyCls: function () {
			return {
				"well-doc__body": true,
				"well-doc__body--mobile": this.wellDocData.isMobile
			};
		}
	},
	
	mounted: function () {
		PR.prettyPrint();
	},
	
	updated: function () {
		PR.prettyPrint();
	},
	
	methods: {
		appClickHandler: function () {
			this.wellComMenuHideAll();
			
			this.wellComContextMenuHideAll();
		}
	},
	
	template: '\
		<div\
		    :class="wellDocCls"\
			@click="appClickHandler"\
		>\
			<div\
			    :class="wellDocSidebarCls"\
				v-if="!wellDocData.isMobile"\
			>\
				<well-card-inline-wrapper>\
					<well-card-inline\
						:mini="true"\
						v-for="item in sidebar.items"\
						@click.native="$router.push( item.path );"\
						:active="item.active"\
					>\
						{{ item.name }}\
					</well-card-inline>\
				</well-card-inline-wrapper>\
			</div>\
			<well-sidebar\
				v-else\
			>\
				<div\
					:class="wellDocSidebarCls"\
				>\
					<well-card-inline-wrapper>\
						<well-card-inline\
							:mini="true"\
							v-for="item in sidebar.items"\
							@click.native="$router.push( item.path );"\
							:active="item.active"\
						>\
							{{ item.name }}\
						</well-card-inline>\
					</well-card-inline-wrapper>\
				</div>\
			</well-sidebar>\
			<div :class="wellDocBodyCls">\
				<transition name="v-fade">\
					<router-view></router-view>\
				</transition>\
			</div>\
		</div>\
	'
} );