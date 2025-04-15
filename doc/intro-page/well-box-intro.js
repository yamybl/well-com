var wellBoxIntro = {
	name: "well-box-intro",
	
	template: '\
		<well-box>\
			<h2>&lt;well-box&gt; 组件</h2>\
			<well-msg\
				size="large"\
			>\
				<ul class="well-doc__msg-list">\
					<li class="well-doc__msg-list-item">\
						这是一个划分页面不同部分的容器组件。\
					</li>\
					<li class="well-doc__msg-list-item">\
						我们在设计页面布局时，通常倾向于将页面中不同的部分划分开来，此时我们就可以使用此组件将每个部分包含其中，以此来区分页面中不同的部分。\
					</li>\
				</ul>\
			</well-msg>\
			<h3>示例</h3>\
			<well-msg\
				size="large"\
			>\
				使用几个 &lt;well-box&gt; 组件来将页面划分成几个部分\
			</well-msg>\
			<h5>示例代码</h5>\
<pre class="prettyprint lang-css well-doc__code">\
/* css */<br class="nocode" />\
.well-doc__well-box-intro-sample-wrapper {<br class="nocode" />\
    display: flex;<br class="nocode" />\
    justify-content: space-between;<br class="nocode" />\
}<br class="nocode" />\
<br class="nocode" />\
.well-doc__well-box-intro-sample-item {<br class="nocode" />\
    height: 5rem;<br class="nocode" />\
    line-height: 5rem;<br class="nocode" />\
    text-align: center;<br class="nocode" />\
}<br class="nocode" />\
<br class="nocode" />\
.well-doc__well-box-intro-sample-item--primary {<br class="nocode" />\
    flex-grow: 3;<br class="nocode" />\
}<br class="nocode" />\
<br class="nocode" />\
.well-doc__well-box-intro-sample-item--secondary {<br class="nocode" />\
    flex-grow: 1;<br class="nocode" />\
}<br class="nocode" />\
</pre>\
<pre class="prettyprint well-doc__code">\
&lt;!-- html --&gt;<br class="nocode" />\
&lt;well-app&gt;<br class="nocode" />\
    &lt;well-box<br class="nocode" />\
        class="well-doc__well-box-intro-sample-item"<br class="nocode" />\
    &gt;<br class="nocode" />\
        页首<br class="nocode" />\
    &lt;/well-box&gt;<br class="nocode" />\
    &lt;div<br class="nocode" />\
        class="well-doc__well-box-intro-sample-wrapper"<br class="nocode" />\
    &gt;<br class="nocode" />\
        &lt;well-box<br class="nocode" />\
            class="well-doc__well-box-intro-sample-item well-doc__well-box-intro-sample-item--secondary"<br class="nocode" />\
        &gt;<br class="nocode" />\
            左边栏<br class="nocode" />\
        &lt;/well-box&gt;<br class="nocode" />\
        &lt;well-box<br class="nocode" />\
            class="well-doc__well-box-intro-sample-item well-doc__well-box-intro-sample-item--primary"<br class="nocode" />\
        &gt;<br class="nocode" />\
            页面主体<br class="nocode" />\
        &lt;/well-box&gt;<br class="nocode" />\
        &lt;well-box<br class="nocode" />\
            class="well-doc__well-box-intro-sample-item well-doc__well-box-intro-sample-item--secondary"<br class="nocode" />\
        &gt;<br class="nocode" />\
            右边栏<br class="nocode" />\
        &lt;/well-box&gt;<br class="nocode" />\
    &lt;/div&gt;<br class="nocode" />\
    &lt;well-box<br class="nocode" />\
        class="well-doc__well-box-intro-sample-item"<br class="nocode" />\
    &gt;<br class="nocode" />\
        页脚<br class="nocode" />\
    &lt;/well-box&gt;<br class="nocode" />\
&lt;/well-app&gt;<br class="nocode" />\
</pre>\
			<h5>代码运行效果</h5>\
			<well-app>\
				<well-box\
					class="well-doc__well-box-intro-sample-item"\
				>\
					页首\
				</well-box>\
				<div\
					class="well-doc__well-box-intro-sample-wrapper"\
				>\
					<well-box\
						class="well-doc__well-box-intro-sample-item well-doc__well-box-intro-sample-item--secondary"\
					>\
						左边栏\
					</well-box>\
					<well-box\
						class="well-doc__well-box-intro-sample-item well-doc__well-box-intro-sample-item--primary"\
					>\
						页面主体\
					</well-box>\
					<well-box\
						class="well-doc__well-box-intro-sample-item well-doc__well-box-intro-sample-item--secondary"\
					>\
						右边栏\
					</well-box>\
				</div>\
				<well-box\
					class="well-doc__well-box-intro-sample-item"\
				>\
					页脚\
				</well-box>\
			</well-app>\
			<h3>组件自定义属性介绍</h3>\
			<well-msg\
				size="large"\
			>\
				此组件没有自定义属性\
			</well-msg>\
			<h3>组件自定义事件介绍</h3>\
			<well-msg\
				size="large"\
			>\
				此组件没有自定义事件\
			</well-msg>\
			<h3>组件插槽介绍</h3>\
			<well-msg\
				size="large"\
			>\
				此组件仅有一个默认插槽\
			</well-msg>\
			<h4>导航</h4>\
			<div class="well-doc__nav">\
				<well-btn\
					size="large"\
					@click="$router.push( \'/well-app-intro\' );"\
				><i class="fa fas fa-angle-left"></i> &lt;well-app&gt; 组件</well-btn>\
				<well-btn\
					size="large"\
					@click="$router.push( \'/well-btn-intro\' );"\
				>&lt;well-btn&gt; 组件 <i class="fa fas fa-angle-right"></i> </well-btn>\
			</div>\
		</well-box>\
	'
};