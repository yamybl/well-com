( function ( global ) {
	function isProtoProp( prop, obj ) {
		return ( prop in obj ) &&
			   ( !obj.hasOwnProperty( prop ) );
	}
	
	function reallyHasProtoProp( prop, obj ) {
		var hasOwn = false,
			hasProto = false;
		
		var propPrevVal;
		if ( hasOwn = obj.hasOwnProperty( prop ) ) {
			propPrevVal = obj[ prop ];
			delete obj[ prop ];
		}
		
		hasProto = isProtoProp( prop, obj );
		
		if ( hasOwn ) {
			obj[ prop ] = propPrevVal;
		}
		
		return hasProto;
	}
	
	/**
	 * 判断用户浏览器是否在移动平台上运行
	 */
	var isMobile = reallyHasProtoProp( "ontouchstart", document );
	
	/**
	 * 全局混入
	 */
	Vue.mixin( {
		data: function () {
			return {
				wellDocData: {
					isMobile: isMobile
				}
			};
		}
	} );
} )( this );