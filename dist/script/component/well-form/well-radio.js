var wellRadio = {
	name: "well-radio",
	props: {
		name: {
			type: String,
			default: ""
		},
		value: {
			type: String,
			default: ""
		},
		thin: {
			type: Boolean,
			default: false
		}
	},
	data: function () {
		return {
			radioId: ""
		};
	},
	computed: {
		radioLabelCls: function () {
			return {
				"well-com-radio__label": true,
				"well-com-radio__label--thin": this.thin
			};
		}
	},
	created: function () {
		this.radioId = "radio-" + ++yHelper.wellComGlobal.radio.idCounter;
	},
	template: '\
		<div class="well-com-radio">\
			<input\
			    class="well-com-radio__input"\
				:id="radioId"\
			    type="radio"\
				:name="name"\
				:value="value"\
				@change="$emit( \'change\', $event.target.value );"\
			/>\
			<label\
				:class="radioLabelCls"\
			    :for="radioId">\
				<slot>{{ radioId }} label</slot>\
			</label>\
		</div>\
	'
};

Vue.component( "well-radio", wellRadio );