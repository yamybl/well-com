var install = {
	name: "install",
	
	template: '\
		<well-box>\
			<h2>安装</h2>\
			<h4>请在 html 文档的 &lt;head&gt; 标签中依次引入以下代码</h4>\
<pre class="prettyprint well-doc__code">\
&lt;!-- font-awesome --&gt;<br class="nocode" />\
&lt;link rel="stylesheet" href="vendor/font-awesome/css/font-awesome.min.css" /&gt;<br class="nocode" />\
<br class="nocode" />\
&lt;!-- vue.js --&gt;<br class="nocode" />\
&lt;script src="vendor/vue/vue.min.js"&gt;&lt;/script&gt;<br class="nocode" />\
<br class="nocode" />\
&lt;!-- well --&gt;<br class="nocode" />\
&lt;link rel="stylesheet" href="dist/style/well.min.css" /&gt;<br class="nocode" />\
&lt;script src="dist/script/well.min.js"&gt;&lt;/script&gt;<br class="nocode" />\
</pre>\
			<well-card-inline-wrapper>\
				<well-card-inline\
					:mini="true"\
				>\
					<well-msg\
						size="large"\
						state="caution"\
					>\
						<ul class="well-doc__msg-list">\
							<li class="well-doc__msg-list-item">由于组件库中使用到了 font-awesome 字体图标，所以 font-awesome 是必须要引入的。</li>\
							<li class="well-doc__msg-list-item">请务必注意，以上代码的 font-awesome 部分是需要用户自行下载的。</li>\
						</ul>\
					</well-msg>\
				</well-card-inline>\
				<well-card-inline\
					:mini="true"\
				>\
					<well-msg\
						size="large"\
						state="caution"\
					>\
						由于此组件库是基于 vue.js 的，所以 vue.js 必须在组件库相关代码（ well.css 和 well.js ）之前引入。\
					</well-msg>\
				</well-card-inline>\
				<well-card-inline\
					:mini="true"\
				>\
					<well-msg\
						size="large"\
					>\
						以上代码的 well 部分可以从 dist 文件夹中找到。\
					</well-msg>\
				</well-card-inline>\
			</well-card-inline-wrapper>\
			<h4>组件简单使用示例</h4>\
<pre class="prettyprint well-doc__code">\
/* js */<br class="nocode" />\
new Vue( {<br class="nocode" />\
    data: {<br class="nocode" />\
        favouriteTheme: "soft"<br class="nocode" />\
    }<br class="nocode" />\
} );<br class="nocode" />\
</pre>\
<pre class="prettyprint well-doc__code">\
&lt;!-- html --&gt;<br class="nocode" />\
&lt;well-app<br class="nocode" />\
    :theme="favouriteTheme"<br class="nocode" />\
&gt;<br class="nocode" />\
    &lt;well-box&gt;<br class="nocode" />\
        Welcome to well-com!<br class="nocode" />\
    &lt;/well-box&gt;<br class="nocode" />\
&lt;/well-app&gt;\
</pre>\
			<h5>以上示例运行效果如下</h5>\
			<well-app\
				theme="soft"\
			>\
				<well-box>\
					Welcome to well-com!\
				</well-box>\
			</well-app>\
			<h4>导航：</h4>\
			<div class="well-doc__nav">\
				<well-btn\
					size="large"\
					@click="$router.push( \'/guide\' );"\
				><i class="fa fas fa-angle-left"></i> 简介</well-btn>\
				<well-btn\
					size="large"\
					@click="$router.push( \'/well-a-intro\' );"\
				>&lt;well-a&gt; 组件 <i class="fa fas fa-angle-right"></i> </well-btn>\
			</div>\
		</well-box>\
	'
};