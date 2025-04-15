var templateEvent = {
	name: "template-event",
	
	props: {
		event: {
			type: Array,
			default: null
		}
	},
	
	template: '\
		<div class="well-doc__template-wrapper">\
			<h3>组件事件介绍</h3>\
			<well-msg\
				v-if="!event"\
				size="large"\
			>\
				此组件没有自定义事件\
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
							<th class="well-doc__table-th">处理函数参数介绍</th>\
						</tr>\
					</thead>\
					<tbody>\
						<tr\
							v-for="item in event"\
							class="well-doc__table-tr"\
						>\
							<td class="well-doc__table-td well-doc__table-td--name well-doc__table-td--event-name">{{ item.name }}</td>\
							<td class="well-doc__table-td">{{ item.intro }}</td>\
							<td\
								v-if="item.param"\
								class="well-doc__table-td well-doc__table-td--event-param"\
								v-html="item.param"\
							></td>\
							<td\
								v-else\
								class="well-doc__table-td well-doc__table-td--event-param"\
							>\
								此事件不传递参数\
							</td>\
						</tr>\
					</tbody>\
				</table>\
				<well-card-inline-wrapper\
					v-else\
				>\
					<well-card-inline\
						v-for="item in event"\
						:mini="true"\
					>\
						<table class="well-doc__table">\
							<tr class="well-doc__table-tr">\
								<td class="well-doc__table-td well-doc__table-td--title">名称</td>\
								<td class="well-doc__table-td">{{ item.name }}</td>\
							</tr>\
							<tr class="well-doc__table-tr">\
								<td class="well-doc__table-td well-doc__table-td--title">介绍</td>\
								<td class="well-doc__table-td">{{ item.intro }}</td>\
							</tr>\
							<tr class="well-doc__table-tr">\
								<td class="well-doc__table-td well-doc__table-td--title">处理函数参数介绍</td>\
								<td\
									v-if="item.param"\
									class="well-doc__table-td"\
									v-html="item.param"\
								></td>\
								<td\
								    v-else\
									class="well-doc__table-td"\
								>\
									此事件不传递参数\
								</td>\
							</tr>\
						</table>\
					</well-card-inline>\
				</well-card-inline-wrapper>\
			</template>\
		</div>\
	'
};

Vue.component( "template-event", templateEvent );