var wellAppIntro = {
	name: "well-app-intro",
	
	data: function () {
		return {
			favouriteTheme: "light",
			favouriteThemeSelfString: "{{ favouriteTheme }}"
		};
	},
	
	methods: {
		toggleTheme: function () {
			switch ( this.favouriteTheme )
			{
				case "light":
					this.favouriteTheme = "dark";
					break;
					
				case "dark":
					this.favouriteTheme = "soft";
					break;
					
				case "soft":
					this.favouriteTheme = "strong";
					break;
					
				case "strong":
					this.favouriteTheme = "light";
					break;
			}
		}
	},
	
	template: '\
		<well-box>\
			<h2>&lt;well-app&gt; 组件</h2>\
			<well-msg\
				size="large"\
			>\
				<ul class="well-doc__msg-list">\
					<li class="well-doc__msg-list-item well-doc__msg-list-item--important">\
						我们希望用户在使用此组件库时，把此组件作为整个文档的“根组件”来使用。这也是我们为该组件起名为 "well-app" 的原因。\
					</li>\
					<li class="well-doc__msg-list-item">\
						此组件主要是作为最外层的包裹元素，来实现为整个文档应用不同的主题色的功能。我们提供了四种主题色供用户选择，它们分别是：light、black、soft 和 strong。\
					</li>\
				</ul>\
			</well-msg>\
			<h3>示例</h3>\
			<well-card-inline-wrapper>\
				<well-card-inline\
					:mini="true"\
				>\
					<well-msg\
						size="large"\
					>\
						为文档应用不同的主题色\
					</well-msg>\
				</well-card-inline>\
				<well-card-inline\
					:mini="true"\
				>\
					<well-msg\
						size="large"\
						state="success"\
					>\
						通过给 theme 属性设置不同的字符串值，来为文档应用不同的主题色\
					</well-msg>\
				</well-card-inline>\
			</well-card-inline-wrapper>\
			<h5>示例代码</h5>\
<pre class="prettyprint well-doc__code">\
/* js */<br class="nocode" />\
new Vue( {<br class="nocode" />\
    data: {<br class="nocode" />\
        favouriteTheme: "soft"<br class="nocode" />\
    },<br class="nocode" />\
    <br class="nocode" />\
    methods: {<br class="nocode" />\
        toggleTheme: function () {<br class="nocode" />\
            switch ( this.favouriteTheme )<br class="nocode" />\
            {<br class="nocode" />\
                case "light":<br class="nocode" />\
                    this.favouriteTheme = "dark";<br class="nocode" />\
                    break;<br class="nocode" />\
                    <br class="nocode" />\
                case "dark":<br class="nocode" />\
                    this.favouriteTheme = "soft";<br class="nocode" />\
                    break;<br class="nocode" />\
                    <br class="nocode" />\
                case "soft":<br class="nocode" />\
                    this.favouriteTheme = "strong";<br class="nocode" />\
                    break;<br class="nocode" />\
                    <br class="nocode" />\
                case "strong":<br class="nocode" />\
                    this.favouriteTheme = "light";<br class="nocode" />\
                    break;<br class="nocode" />\
            }<br class="nocode" />\
        }<br class="nocode" />\
    }<br class="nocode" />\
} );<br class="nocode" />\
</pre>\
<pre class="prettyprint well-doc__code">\
&lt;!-- html --&gt;<br class="nocode" />\
&lt;well-app<br class="nocode" />\
    :theme="favouriteTheme"<br class="nocode" />\
&gt;<br class="nocode" />\
    &lt;well-box&gt;<br class="nocode" />\
        点击下面的按钮来切换文档主题色<br class="nocode" />\
        当前主题色：{{ favouriteThemeSelfString }}<br class="nocode" />\
    &lt;/well-box&gt;<br class="nocode" /><br class="nocode" />\
    &lt;well-btn<br class="nocode" />\
        @click.native="toggleTheme();"<br class="nocode" />\
    &gt;<br class="nocode" />\
        切换主题色<br class="nocode" />\
    &lt;/well-btn&gt;<br class="nocode" />\
&lt;/well-app&gt;\
</pre>\
			<h5>代码运行效果</h5>\
			<well-app\
				:theme="favouriteTheme"\
			>\
				<well-box>\
					点击下面的按钮来切换文档主题色<br />\
					当前主题色：{{ favouriteTheme }}\
				</well-box>\
				<well-btn\
					@click.native="toggleTheme();"\
				>切换主题色</well-btn>\
			</well-app>\
			<h3>组件自定义属性介绍</h3>\
			<table\
				v-if="!wellDocData.isMobile"\
				class="well-doc__table">\
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
					<tr class="well-doc__table-tr">\
						<td class="well-doc__table-td">theme</td>\
						<td class="well-doc__table-td">String</td>\
						<td class="well-doc__table-td">"light"(默认值) |<br />"dark" |<br />"soft" |<br />"strong"</td>\
						<td class="well-doc__table-td well-doc__table-td--option">可选</td>\
						<td class="well-doc__table-td">设置文档的主题色。</td>\
					</tr>\
				</tbody>\
			</table>\
			<well-card-inline-wrapper\
				v-else\
			>\
				<well-card-inline\
					:mini="true"\
				>\
					<table class="well-doc__table">\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">名称</td>\
							<td class="well-doc__table-td">theme</td>\
						</tr>\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">类型</td>\
							<td class="well-doc__table-td">String</td>\
						</tr>\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">取值</td>\
							<td class="well-doc__table-td">"light"(默认值) |<br />"dark" |<br />"soft" |<br />"strong"</td>\
						</tr>\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">可选性</td>\
							<td class="well-doc__table-td">可选</td>\
						</tr>\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">介绍</td>\
							<td class="well-doc__table-td">设置文档的主题色。</td>\
						</tr>\
					</table>\
				</well-card-inline>\
			</well-card-inline-wrapper>\
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
					@click="$router.push( \'/well-a-intro\' );"\
				><i class="fa fas fa-angle-left"></i> &lt;well-a&gt; 组件</well-btn>\
				<well-btn\
					size="large"\
					@click="$router.push( \'/well-box-intro\' );"\
				>&lt;well-box&gt; 组件 <i class="fa fas fa-angle-right"></i> </well-btn>\
			</div>\
		</well-box>\
	'
};