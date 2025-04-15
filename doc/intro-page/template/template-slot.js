var templateSlot = {
	name: "template-slot",
	
	props: {
		noSlot: {
			type: Boolean,
			default: false
		},
		slotCustom: {
			type: Array,
			default: null
		}
	},
	
	template: '\
		<div class="well-doc__template-wrapper">\
			<h3>组件插槽介绍</h3>\
			<template\
				v-if="noSlot"\
			>\
				<well-msg\
					size="large"\
				>\
					此组件没有插槽\
				</well-msg>\
			</template>\
			<template\
				v-else\
			>\
				<well-msg\
					v-if="!slotCustom"\
					size="large"\
				>\
					此组件仅有一个默认插槽\
				</well-msg>\
				<template\
					v-else\
				>\
					<table\
						v-if="!wellDocData.isMobile"\
						class="well-doc__table"\
					>\
						<thead>\
							<tr class="well-doc__table-tr">\
								<th class="well-doc__table-th">名称</th>\
								<th class="well-doc__table-th">介绍</th>\
							</tr>\
						</thead>\
						<tbody>\
							<tr\
								v-for="item in slotCustom"\
								class="well-doc__table-tr"\
							>\
								<td class="well-doc__table-td well-doc__table-td--name">{{ item.name }}</td>\
								<td class="well-doc__table-td">\
									<well-msg\
										v-if="item.scoped"\
										state="caution"\
									>\
										作用域插槽\
									</well-msg>\
									{{ item.intro }}\
								</td>\
							</tr>\
						</tbody>\
					</table>\
					<well-card-inline-wrapper\
						v-else\
					>\
						<well-card-inline\
							v-for="item in slotCustom"\
							:mini="true"\
						>\
							<table class="well-doc__table">\
								<tr class="well-doc__table-tr">\
									<td class="well-doc__table-td well-doc__table-td--title">名称</td>\
									<td class="well-doc__table-td">{{ item.name }}</td>\
								</tr>\
								<tr class="well-doc__table-tr">\
									<td class="well-doc__table-td well-doc__table-td--title">介绍</td>\
									<td class="well-doc__table-td">\
										<well-msg\
											v-if="item.scoped"\
											state="caution"\
										>\
											作用域插槽\
										</well-msg>\
										{{ item.intro }}\
									</td>\
								</tr>\
							</table>\
						</well-card-inline>\
					</well-card-inline-wrapper>\
				</template>\
			</template>\
		</div>\
	'
};

Vue.component( "template-slot", templateSlot );