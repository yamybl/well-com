var templateProperty = {
	name: "template-property",
	
	props: {
		property: {
			type: Array,
			default: null
		}
	},
	
	template: '\
		<div class="well-doc__template-wrapper">\
			<h3>组件属性介绍</h3>\
			<template\
				v-if="!property"\
			>\
				<well-msg\
					size="large"\
				>\
					此组件没有自定义属性\
				</well-msg>\
			</template>\
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
							<th class="well-doc__table-th">类型</th>\
							<th class="well-doc__table-th well-doc__table-th--value">取值</th>\
							<th class="well-doc__table-th well-doc__table-th--option">可选性</th>\
							<th class="well-doc__table-th">介绍</th>\
						</tr>\
					</thead>\
					<tbody>\
						<tr\
							v-for="item in property"\
							class="well-doc__table-tr"\
						>\
							<td class="well-doc__table-td well-doc__table-td--name">{{ item.name }}</td>\
							<td class="well-doc__table-td well-doc__table-td--type">{{ item.type }}</td>\
							<td\
								v-html="item.value"\
								class="well-doc__table-td"\
							></td>\
							<td class="well-doc__table-td well-doc__table-td--option">{{ item.option }}</td>\
							<td class="well-doc__table-td">{{ item.intro }}</td>\
						</tr>\
					</tbody>\
				</table>\
				<well-card-inline-wrapper\
					v-else\
				>\
					<well-card-inline\
						v-for="item in property"\
						:mini="true"\
					>\
						<table class="well-doc__table">\
							<tr class="well-doc__table-tr">\
								<td class="well-doc__table-td well-doc__table-td--title">名称</td>\
								<td class="well-doc__table-td">{{ item.name }}</td>\
							</tr>\
							<tr class="well-doc__table-tr">\
								<td class="well-doc__table-td well-doc__table-td--title">类型</td>\
								<td class="well-doc__table-td">{{ item.type }}</td>\
							</tr>\
							<tr class="well-doc__table-tr">\
								<td class="well-doc__table-td well-doc__table-td--title">取值</td>\
								<td\
									v-html="item.value"\
									class="well-doc__table-td"\
								></td>\
							</tr>\
							<tr class="well-doc__table-tr">\
								<td class="well-doc__table-td well-doc__table-td--title">可选性</td>\
								<td class="well-doc__table-td">{{ item.option }}</td>\
							</tr>\
							<tr class="well-doc__table-tr">\
								<td class="well-doc__table-td well-doc__table-td--title">介绍</td>\
								<td class="well-doc__table-td">{{ item.intro }}</td>\
							</tr>\
						</table>\
					</well-card-inline>\
				</well-card-inline-wrapper>\
			<template>\
		</div>\
	'
};

Vue.component( "template-property", templateProperty );