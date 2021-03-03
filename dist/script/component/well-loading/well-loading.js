var wellLoading = {
	name: "well-loading",
	props: {
		size: {
			type: String,
			default: ""
		},
		speed: {
			type: String,
			default: "normal"
		}
	},
	data: function () {
		return {
			items: [
				{ light: true },
				{ light: false },
				{ light: false },
				{ light: false }
			],
			lightItemIdx: 0,
			timerId: 0
		};
	},
	computed: {
		loadingCls: function () {
			return {
				"well-com-loading": true,
				"well-com-loading--large": this.size === "large"
			};
		},
		delay: function () {
			switch ( this.speed )
			{
				case "normal":
					return 200;
					
				case "slow":
					return 300;
					
				case "fast":
					return 100;
			}
		}
	},
	mounted: function () {
		this.run();
	},
	beforeDestroy: function () {
		clearTimeout( this.timerId );
	},
	methods: {
		run: function () {
			this.timerId = setTimeout( ( function () {
				this.items[ this.lightItemIdx ].light = false;
				
				if ( this.lightItemIdx === 0 )
				{
					this.lightItemIdx = 1;
				}
				else if ( this.lightItemIdx === 1 )
				{
					this.lightItemIdx = 3;
				}
				else if ( this.lightItemIdx === 3 )
				{
					this.lightItemIdx = 2;
				}
				else if ( this.lightItemIdx === 2 )
				{
					this.lightItemIdx = 0;
				}
				
				this.items[ this.lightItemIdx ].light = true;
				
				this.run();
			} ).bind( this ), this.delay );
		}
	},
	template: '\
		<div :class="loadingCls">\
			<span v-for="i in items"\
			      :class="[ \'well-com-loading__item\', i.light ? \'well-com-loading__item--light\' : \'\' ]"></span>\
		</div>\
	'
};

Vue.component( "well-loading", wellLoading );