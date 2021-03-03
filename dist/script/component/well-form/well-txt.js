var wellTxt = {
	name: "well-txt",
	
	mixins: yHelper.wellComMixin( {
		data: true
	} ),
	
	props: {
		type: {
			type: String,
			default: "text"
		},
		
		hint: {
			type: String,
			default: ""
		},
		
		errorHandler: {
			type: Function,
			default: function () {
				return "";
			}
		},
		
		passwordVisible: {
			type: Boolean,
			default: false
		}
	},
	
	data: function () {
		return {
			wellComTxtId: "",
			errMsg: "",
			typeSelf: this.type
		};
	},
	
	computed: {
		wellComTxtLabelCls: function () {
			return {
				"well-com-txt__label": true,
				"well-com-txt__label--mobile": this.wellComData.isMobile
			};
		},
		
		wellComTxtInputCls: function () {
			return {
				"well-com-txt__input": true,
				"well-com-txt__input--mobile": this.wellComData.isMobile,
				"well-com-txt__input--error": this.errMsg
			};
		},
		
		wellComTxtInputWrapperCls: function () {
			return {
				"well-com-txt__input-wrapper": true,
				"well-com-txt__input-wrapper--mobile": this.wellComData.isMobile
			};
		},
		
		wellComTxtInputPasswordToggleIconCls: function () {
			return {
				"well-com-txt__input-password-toggle-icon": true,
				"fa": true,
				"fas": true,
				"fa-eye": this.typeSelf === "password",
				"fa-eye-slash": this.typeSelf === "text"
			};
		},
		
		wellComTxtErrorCls: function () {
			return {
				"well-com-txt__error": true,
				"well-com-txt__error--mobile": this.wellComData.isMobile
			};
		}
	},
	
	created: function () {
		this.wellComTxtId = "well-com-txt-" + ++yHelper.wellComGlobal.txt.idCounter;
	},
	
	methods: {
		inputHandler: function ( val ) {
			this.errMsg = this.errorHandler( val );
			
			if ( !this.errMsg )
			{
				this.$emit( "validInput", val );
			}
		},
		
		togglePassword: function () {
			if ( this.typeSelf === "password" )
			{
				this.typeSelf = "text";
			}
			else if ( this.typeSelf === "text" )
			{
				this.typeSelf = "password";
			}
		}
	},
	
	template: '\
		<div class="well-com-txt">\
			<label\
				:class="wellComTxtLabelCls"\
				:for="wellComTxtId"\
			>\
				<slot name="label-txt">标签</slot>\
			</label>\
			<input\
				v-if="!passwordVisible"\
				:type="type"\
				:class="wellComTxtInputCls"\
				:id="wellComTxtId"\
				:placeholder="hint"\
				@input="inputHandler( $event.target.value );"\
			/>\
			<div\
				v-else\
				:class="wellComTxtInputWrapperCls"\
			>\
				<input\
					:type="typeSelf"\
					:class="wellComTxtInputCls"\
					:id="wellComTxtId"\
					:placeholder="hint"\
					@input="inputHandler( $event.target.value );"\
				/>\
				<div\
				    class="well-com-txt__input-password-toggle"\
					@click="togglePassword"><i :class="wellComTxtInputPasswordToggleIconCls"></i></div>\
			</div>\
			<div\
				v-show="errMsg"\
				:class="wellComTxtErrorCls"\
			>{{ errMsg }}</div>\
		</div>\
	'
};

Vue.component( "well-txt", wellTxt );