var wellCheckbox = {
	name: "well-checkbox",
	props: {
		name: {
			type: String,
			default: ""
		},
		value: {
			type: String,
			default: ""
		},
		bindValue: {
			type: Array,
			default: null
		},
		thin: {
			type: Boolean,
			default: false
		}
	},
	data: function () {
		return {
			checkboxId: ""
		};
	},
	computed: {
		checkboxLabelCls: function () {
			return {
				"well-com-checkbox__label": true,
				"well-com-checkbox__label--thin": this.thin
			};
		}
	},
	created: function () {
		this.checkboxId = "checkbox-" + ++yHelper.wellComGlobal.checkbox.idCounter;
	},
	template: '\
		<div class="well-com-checkbox">\
			<input\
				class="well-com-checkbox__input"\
				:id="checkboxId"\
			    type="checkbox"\
				:name="name"\
				:value="value"\
				@change="$emit( \'change\', bindValue, $event.target.value );"\
			/>\
			<label\
				:class="checkboxLabelCls"\
			    :for="checkboxId">\
				<slot>{{ checkboxId }} label</slot>\
			</label>\
		</div>\
	'
};

Vue.component( "well-checkbox", wellCheckbox );