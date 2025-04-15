var guide = {
	name: "guide",
	
	template: '\
		<well-box>\
			<h2>简介</h2>\
			<well-msg\
				size="large"\
			>\
				<ul class="well-doc__msg-list">\
					<li class="well-doc__msg-list-item">\
						欢迎来到 well com 组件库！\
					</li>\
					<li class="well-doc__msg-list-item">\
						此组件库专注于提供给用户尽可能少的组件，从而减少用户在构建用户界面时要面对的在众多相似组件中要使用哪一个类似这样的选择上的难度，以帮助用户简便快捷的构建用户界面。\
					</li>\
					<li class="well-doc__msg-list-item">\
						此组件库具有两个依赖，一个是 vue.js，另一个是 font-awesome 字体图标库。用户在使用此组件库时需要注意将这二者事先引入，具体参见\
						<well-a\
							href="/install"\
						>安装</well-a> 页面。\
					</li>\
					<li class="well-doc__msg-list-item">\
						为了使组件便于使用，此组件库为某些组件提供了对应的工具函数。如果用户决定使用这些工具函数，那么首先需要在当前组件的 mixins 选项中使用预定义的函数 wellComHelper.wellComMixin 来混入对应的工具函数。对于如何混入工具函数以及如何使用混入后的工具函数，本文档会在之后的组件介绍中进行详细说明，用户可以留意查看。\
					</li>\
				</ul>\
			</well-msg>\
			<h4>导航</h4>\
			<div class="well-doc__nav well-doc__nav--single">\
				<well-btn\
					size="large"\
					@click="$router.push( \'/install\' );"\
				>安装 <i class="fa fas fa-angle-right"></i> </well-btn>\
			</div>\
		</well-box>\
	'
};