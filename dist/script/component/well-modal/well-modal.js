var wellModal = {
	name: "well-modal",
	props: {
		size: {
			type: String,
			default: "normal"
		},
		operation: {
			type: Function,
			default: null
		},
		auto: {
			type: Boolean,
			default: false
		},
		open: {
			type: Boolean,
			default: false
		},
		animation: {
			type: Boolean,
			default: false
		}
	},
	data: function () {
		return {
			isHide: true,
			isDataOperating: false,
			isDataOperateSuccess: false,
			isDataOperateFail: false,
			isAutoModeCloseBtnShow: false,
			autoModeCloseBtnTimer: null
		};
	},
	computed: {
		wrapperCls: function () {
			switch ( this.auto )
			{
				case false:
					return {
						"well-base-wrapper-inline": true,
						"well-ori-margin--0": true
					};
					
				case true:
					return {};
			}
		},
		
		isModalBoxShow: function () {
			switch ( this.auto )
			{
				case false:
					return !this.isHide;
					
				case true:
					return this.open;
			}
		},
		
		modalCls: function () {
			switch ( this.auto )
			{
				case false:
					return {
						"well-com-box": true,
						"well-com-modal": true,
						"well-ori-border-radius--small": true,
						"well-ori-padding--0": true,
						"well-com-modal--small": this.size === "small",
						"well-com-modal--large": this.size === "large",
						"well-com-modal--extra-large": this.size === "extraLarge"
					};
					
				case true:
					return {
						"well-com-box": true,
						"well-ori-display__flex-row--sb-c": true,
						"well-com-modal": true,
						"well-com-modal--small": true
					};
			}
		},
		
		modalBodyCls: function () {
			switch ( this.auto )
			{
				case false:
					return {
						"well-base-wrapper": true,
						"well-ori-padding--small": true,
						"well-com-modal__body": true
					};
					
				case true:
					return {
						"well-com-msg": true,
						"well-com-msg--caution": true,
						"well-com-modal__body": true,
						"well-com-modal__body--msg": true,
						"well-com-modal__body--normal-height": true,
						"well-ori-width--100": true,
						"well-ori-font__size--normal": true
					}
			}
		},
		
		dataOperateResultMsgCls: function () {
			return {
				"well-com-msg": true,
				"well-com-msg--large": true,
				"well-com-msg--success": this.isDataOperateSuccess,
				"well-com-msg--fail": this.isDataOperateFail
			}
		},
		
		dataOperateResultMsgTxt: function () {
			if ( this.isDataOperateSuccess )
			{
				return "数据处理成功";
			}
			else if ( this.isDataOperateFail )
			{
				return "数据处理失败";
			}
			else
			{
				return "数据处理中...";
			}
		}
	},
	watch: {
		isHide: function ( newVal, oldVal ) {
			if ( !newVal )
			{
				this.isDataOperating = false;
				this.isDataOperateSuccess = false;
				this.isDataOperateFail = false;
			}
		},
		
		open: function ( newVal, oldVal ) {
			var vm = this;
			
			if ( newVal )
			{
				this.autoModeCloseBtnTimer = setTimeout( function () {
					vm.isAutoModeCloseBtnShow = true;
					clearTimeout( vm.autoModeCloseBtnTimer );
					vm.autoModeCloseBtnTimer = null;
				}, 3000 );
			}
			
			if ( !newVal )
			{
				if ( this.autoModeCloseBtnTimer )
				{
					clearTimeout( this.autoModeCloseBtnTimer );
					this.autoModeCloseBtnTimer = null;
				}
				this.isAutoModeCloseBtnShow = false;
			}
		}
	},
	methods: {
		openModal: function () {
			this.isHide = false;
		},
		
		closeModal: function () {
			this.isHide = true;
		},
		
		setDataOperatingOn: function () {
			this.isDataOperating = true;
		},
		
		setDataOperatingOff: function () {
			this.isDataOperating = false;
		},
		
		setDataOperateSuccessOn: function () {
			this.isDataOperateSuccess = true;
		},
		
		setDataOperateSuccessOff: function () {
			this.isDataOperateSuccess = false;
		},
		
		setDataOperateFailOn: function () {
			this.isDataOperateFail = true;
		},
		
		setDataOperateFailOff: function () {
			this.isDataOperateFail = false;
		},
		
		confirm: function () {
			this.setDataOperatingOn();
			
			var vm = this;
			
			this.operation().then( function ( data ) { console.log( data );
				vm.setDataOperateSuccessOn();
				
				setTimeout( function () {					
					vm.closeModal();
				}, 3000 );
			} ).catch( function ( errMsg ) { console.log( errMsg );
				vm.setDataOperateFailOn();
				
				setTimeout( function () {
					vm.closeModal();
				}, 3000 );
			} );
		}
	},
	template: '\
		<div :class="wrapperCls">\
			<div v-if="!auto"\
			     class="well-com-btn"\
			     @click="openModal();">\
				<slot name="open-btn-txt">打开模态框</slot>\
			</div>\
			<transition :name="animation ? \'v-fade\' : \'\'">\
				<div v-show="isModalBoxShow"\
				     class="well-com-modal__box">\
					<transition name="v-fade">\
						<div v-if="auto && isAutoModeCloseBtnShow"\
							 class="well-com-btn well-com-btn--round well-ori-margin--large well-com-modal__force-close-btn"\
							 @click="$emit( \'forceCloseModal\' )">&times;</div>\
					</transition>\
					<div v-if="!isDataOperating"\
						 :class="modalCls">\
						<div v-if="!auto"\
							 class="well-com-wrapper well-ori-display__flex-row--e-c well-ori-padding--small well-com-modal__header">\
							<div class="well-com-btn well-com-btn--round well-ori-margin--0" @click="closeModal();">&times;</div>\
						</div>\
						<div :class="modalBodyCls">\
							<slot name="body">消息</slot>\
						</div>\
						<div v-if="!auto"\
							 class="well-ori-display__flex-row--sa-c well-ori-margin--0 well-ori-padding--small well-com-modal__footer">\
							<div class="well-com-btn well-com-btn--large well-com-btn--caution" @click="confirm();">\
								<slot name="footer-confirm-btn-txt">确定</slot>\
							</div>\
							<div class="well-com-btn well-com-btn--large" @click="closeModal();">\
								<slot name="footer-close-btn-txt">取消</slot>\
							</div>\
						</div>\
					</div>\
					<div v-else\
						 class="well-com-box well-ori-border-radius--small well-ori-text-align--c">\
						<div v-if="!auto"\
							 :class="dataOperateResultMsgCls">\
							<template v-if="isDataOperateSuccess">\
								<slot name="operate-success-msg">数据处理成功</slot>\
							</template>\
							<template v-else-if="isDataOperateFail">\
								<slot name="operate-fail-msg">数据处理失败</slot>\
							</template>\
							<template v-else>\
								<slot name="operating-msg">数据处理中...</slot>\
							</template>\
						</div>\
					</div>\
				</div>\
			</transition>\
		</div>\
	'
};

Vue.component( "well-modal", wellModal );