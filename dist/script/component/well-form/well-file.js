var wellFile = {
	name: "well-file",
	mixins: yHelper.wellComMixin( {
		components: [ "file" ]
	} ),
	props: {
		name: {
			type: String,
			default: "file"
		},
		multiple: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		upload: {
			type: Boolean,
			default: false
		},
		url: {
			type: String,
			default: ""
		},
		thin: {
			type: Boolean,
			default: false
		},
		acceptTypes: {
			type: Array,
			default: null
		},
		maxSize: {
			type: Number,
			default: Infinity
		}
	},
	data: function () {
		return {
			fileId: "",
			fileSelected: false,
			fileCount: 0,
			fileTypeNeedToValidate: false,
			fileSizeNeedToValidate: false,
			fileTypeInvalid: false,
			fileSizeInvalid: false,
			fileData: null,
			ajax: null,
			uploadStart: false,
			uploading: false,
			uploadSuccess: false,
			uploadFail: false,
			timerId: -1
		};
	},
	computed: {
		fileLabelCls: function () {
			return {
				"well-com-file__label": true,
				"well-com-file__label--thin": this.thin,
				"well-com-file__label--selected": this.fileSelected,
				"well-com-file__label--disabled": this.disabled,
				"well-com-file__label--uploading": this.uploading
			};
		},
		
		iconCls: function () {
			return {
				"well-com-file__label-icon": true,
				"fa": true,
				"fas": true,
				"fa-file": !this.multiple && !this.uploadSuccess && !this.uploadFail,
				"fa-copy": this.multiple && !this.uploadSuccess && !this.uploadFail,
				"fa-check-circle": this.uploadSuccess,
				"fa-times-circle": this.fileTypeInvalid || this.fileSizeInvalid || this.uploadFail
			};
		}
	},
	created: function () {
		this.fileId = "file-" + ++yHelper.wellComGlobal.file.idCounter;
		
		if ( this.upload )
		{
			this.ajax = new yHelper.SimpleAjax( "file" );
		}
		
		this.fileTypeNeedToValidate = this.acceptTypes && Array.isArray( this.acceptTypes );
		this.fileSizeNeedToValidate = typeof this.maxSize === "number" && this.maxSize > 0;
	},
	beforeDestroy: function () {
		clearTimeout( this.timerId );
		this.ajax.destroy();
	},
	methods: {
		changeHandler: function ( evt ) {
			var files = evt.target.files,
				i,
				len = files.length;
			
			this.fileTypeInvalid = false;
			this.fileSizeInvalid = false;
			
			if ( len === 0 )
			{
				this.fileSelected = false;
			}
			else
			{
				this.fileSelected = true;
				this.fileCount = len;
				
				for ( i = 0; i < len; ++i )
				{
					if ( this.fileTypeNeedToValidate && !this.wellComFileTypeValidator( this.acceptTypes, files[ i ].type ) )
					{
						this.fileTypeInvalid = true;
						return;
					}
					
					if ( this.fileSizeNeedToValidate && !this.wellComFileSizeValidator( this.maxSize, files[ i ].size ) )
					{
						this.fileSizeInvalid = true;
						return;
					}
				}
				
				this.fileData = new FormData();
				
				for ( i = 0; i < len; ++i )
				{
					this.fileData.append( this.name + "-" + i, files[ i ] );
				}
				
				if ( this.upload )
				{
					this.doUpload();
				}
				else
				{
					this.$emit( "select", this.fileData );
				}
			}
		},
		
		doUpload: function () {
			this.uploadStart = true;
			this.uploading = true;
			this.uploadSuccess = false;
			this.uploadFail = false;
			
			this.ajax.request( {
				method: "post",
				url: this.url,
				data: this.fileData,
				success: function ( data ) {
					this.uploading = false;
					this.uploadSuccess = true;
					this.fileData = null;
					
					this.$emit( "uploadSuccess", data );
					
					this.timerId = setTimeout( ( function () {
						this.fileSelected = false;
						this.uploadStart = false;
						this.uploadSuccess = false;
					} ).bind( this ), 3000 );
				},
				fail: function ( errCode ) {
					this.uploading = false;
					this.uploadFail = true;
					
					this.$emit( "uploadFail", errCode );
				},
				thisInCallback: this
			} );
		},
		
		cancelUpload: function () {
			this.fileSelected = false;
			this.uploadStart = false;
			this.uploadFail = false;
			this.fileData = null;
		}
	},
	template: '\
		<div class="well-com-file">\
			<input\
				class="well-com-file__input"\
				:id="fileId"\
				type="file"\
				:multiple="multiple"\
				:disabled="disabled || uploadStart"\
				@change="changeHandler( $event );"\
			/>\
			<label\
			    :class="fileLabelCls"\
				:for="fileId">\
				<i :class="iconCls"></i>\
				<span class="well-com-file__label-txt">\
					<template v-if="!multiple && !fileSelected && !uploadStart">\
						<slot name="select-txt">选择文件</slot>\
					</template>\
					<template v-else-if="multiple && !fileSelected && !uploadStart">\
						<slot name="select-txt">选择多个文件</slot>\
					</template>\
					<template v-if="!uploadStart && fileSelected && fileTypeInvalid">\
						<slot name="selected-err-type-txt">所选文件的类型不符合要求</slot>\
						<span class="well-com-file__label-reselect">重新选择</span>\
					</template>\
					<template v-else-if="!uploadStart && fileSelected && fileSizeInvalid">\
						<slot name="selected-err-size-txt">所选文件的大小不符合要求</slot>\
						<span class="well-com-file__label-reselect">重新选择</span>\
					</template>\
					<template v-else-if="!uploadStart && !multiple && fileSelected">\
						<slot name="selected-txt">文件已经选择</slot>\
					</template>\
					<template v-else-if="!uploadStart && multiple && fileSelected">\
						<slot name="selected-txt">已经选择了 {{ fileCount }} 个文件</slot>\
					</template>\
					<template v-if="uploading">\
						<slot name="uploading-txt">文件正在上传...</slot>\
					</template>\
					<template v-if="uploadSuccess">\
						<slot name="upload-success-txt">文件上传成功</slot>\
					</template>\
					<template v-if="uploadFail">\
						<slot name="upload-fail-txt">文件上传失败</slot>\
					</template>\
				</span>\
				<template v-if="uploadFail">\
					<span\
						class="well-com-file__label-retry"\
						@click="doUpload">重新上传</span>\
					<span\
					    class="well-com-file__label-cancel"\
					    @click.prevent="cancelUpload">取消上传</span>\
				</template>\
			</label>\
		</div>\
	'
};

Vue.component( "well-file", wellFile );