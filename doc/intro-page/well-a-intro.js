var wellAIntro = {
	name: "well-a-intro",
	
	template: '\
		<well-box>\
			<h2>&lt;well-a&gt; 组件</h2>\
			<well-msg\
				size="large"\
			>\
				<ul class="well-doc__msg-list">\
					<li class="well-doc__msg-list-item">\
						这是与原生 html 标签 &lt;a&gt; 相对应的一个组件。\
					</li>\
					<li class="well-doc__msg-list-item">\
						此组件既可以配合 vue-router 路由器，当成 &lt;router-link&gt; 来使用，也可当做原生 html 标签 &lt;a&gt; 来使用。\
					</li>\
				</ul>\
			</well-msg>\
			<h3>示例一</h3>\
			<well-card-inline-wrapper>\
				<well-card-inline\
					:mini="true"\
				>\
					<well-msg\
						size="large"\
					>\
						作为 &lt;router-link&gt; 来使用（这是组件的默认功能）\
					</well-msg>\
				</well-card-inline>\
				<well-card-inline\
					:mini="true"\
				>\
					<well-msg\
						size="large"\
						state="success"\
					>\
						<ul class="well-doc__msg-list">\
							<li class="well-doc__msg-list-item">\
								由于这是组件的默认功能，所以不进行任何设置即可使用。\
							</li>\
							<li class="well-doc__msg-list-item">\
								也可以通过将 mode 属性设置为字符串值 "vue" 来实现此功能。\
							</li>\
						</ul>\
					</well-msg>\
				</well-card-inline>\
			</well-card-inline-wrapper>\
			<h5>示例代码</h5>\
<pre class="prettyprint well-doc__code">\
&lt;!-- html --&gt;<br class="nocode" />\
&lt;well-a<br class="nocode" />\
    mode="vue"<br class="nocode" />\
    href="/install"<br class="nocode" />\
&gt;<br class="nocode" />\
    进入本文档的“安装页面”<br class="nocode" />\
&lt;/well-a&gt;\
</pre>\
			<h5>代码运行效果</h5>\
			<well-box>\
				<well-a\
					mode="vue"\
					href="/install"\
				>\
					进入本文档的“安装页面”\
				</well-a>\
			</well-box>\
			<h3>示例二</h3>\
			<well-card-inline-wrapper>\
				<well-card-inline\
					:mini="true"\
				>\
					<well-msg\
						size="large"\
					>\
						作为原生 html 标签 &lt;a&gt; 来使用\
					</well-msg>\
				</well-card-inline>\
				<well-card-inline\
					:mini="true"\
				>\
					<well-msg\
						size="large"\
						state="success"\
					>\
						可以通过将 mode 属性设置为字符串值 "native" 来实现此功能。\
					</well-msg>\
				</well-card-inline>\
			</well-card-inline-wrapper>\
			<h5>示例代码</h5>\
<pre class="prettyprint well-doc__code">\
&lt;!-- html --&gt;<br class="nocode" />\
&lt;well-a<br class="nocode" />\
    mode="native"<br class="nocode" />\
    href="https://www.baidu.com"<br class="nocode" />\
    target="_blank"<br class="nocode" />\
&gt;<br class="nocode" />\
    在新标签页打开百度<br class="nocode" />\
&lt;/well-a&gt;\
</pre>\
			<h5>代码运行效果</h5>\
			<well-box>\
				<well-a\
					mode="native"\
					href="https://www.baidu.com"\
					target="_blank"\
				>\
					在新标签页打开百度\
				</well-a>\
			</well-box>\
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
						<td class="well-doc__table-td">mode</td>\
						<td class="well-doc__table-td">String</td>\
						<td class="well-doc__table-td">"vue"(默认值) |<br />"native"</td>\
						<td class="well-doc__table-td well-doc__table-td--option">可选</td>\
						<td class="well-doc__table-td">设置不同的使用方式。赋值 "vue" 可实现 &lt;router-link&gt; 功能，赋值 "native" 可实现原生标签 &lt;a&gt; 的功能。</td>\
					</tr>\
					<tr class="well-doc__table-tr">\
						<td class="well-doc__table-td">size</td>\
						<td class="well-doc__table-td">String</td>\
						<td class="well-doc__table-td">"normal"(默认值) |<br />"small" |<br />"large"</td>\
						<td class="well-doc__table-td well-doc__table-td--option">可选</td>\
						<td class="well-doc__table-td">设置组件的尺寸（字体）大小。</td>\
					</tr>\
					<tr class="well-doc__table-tr">\
						<td class="well-doc__table-td">href</td>\
						<td class="well-doc__table-td">String</td>\
						<td class="well-doc__table-td">""(空字符串，默认值) |<br />[ 地址字符串 ]</td>\
						<td class="well-doc__table-td well-doc__table-td--option">可选</td>\
						<td class="well-doc__table-td">设置将要链接到的地址。"vue" 模式下为路由路径（以本文档为例，如："/guide"、"/well-a-intro" 等等）；"native" 模式下即为一般的链接地址，如："https://www.baidu.com" 等等。</td>\
					</tr>\
					<tr class="well-doc__table-tr">\
						<td class="well-doc__table-td">target</td>\
						<td class="well-doc__table-td">String</td>\
						<td class="well-doc__table-td">"_self"(默认值) |<br />"_blank" |<br />"_parent"|<br />"_top"</td>\
						<td class="well-doc__table-td well-doc__table-td--option">可选</td>\
						<td class="well-doc__table-td">设置将要在何处打开链接。</td>\
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
							<td class="well-doc__table-td">mode</td>\
						</tr>\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">类型</td>\
							<td class="well-doc__table-td">String</td>\
						</tr>\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">取值</td>\
							<td class="well-doc__table-td">"vue"(默认值) | "native"</td>\
						</tr>\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">可选性</td>\
							<td class="well-doc__table-td">可选</td>\
						</tr>\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">介绍</td>\
							<td class="well-doc__table-td">设置不同的使用方式。赋值 "vue" 可实现 &lt;router-link&gt; 功能，赋值 "native" 可实现原生标签 &lt;a&gt; 的功能。</td>\
						</tr>\
					</table>\
				</well-card-inline>\
				<well-card-inline\
					:mini="true"\
				>\
					<table class="well-doc__table">\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">名称</td>\
							<td class="well-doc__table-td">size</td>\
						</tr>\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">类型</td>\
							<td class="well-doc__table-td">String</td>\
						</tr>\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">取值</td>\
							<td class="well-doc__table-td">"normal"(默认值) |<br />"small" |<br />"large"</td>\
						</tr>\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">可选性</td>\
							<td class="well-doc__table-td">可选</td>\
						</tr>\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">介绍</td>\
							<td class="well-doc__table-td">设置组件的尺寸（字体）大小。</td>\
						</tr>\
					</table>\
				</well-card-inline>\
				<well-card-inline\
					:mini="true"\
				>\
					<table class="well-doc__table">\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">名称</td>\
							<td class="well-doc__table-td">href</td>\
						</tr>\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">类型</td>\
							<td class="well-doc__table-td">String</td>\
						</tr>\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">取值</td>\
							<td class="well-doc__table-td">""(空字符串，默认值) |<br />[ 地址字符串 ]</td>\
						</tr>\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">可选性</td>\
							<td class="well-doc__table-td">可选</td>\
						</tr>\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">介绍</td>\
							<td class="well-doc__table-td">设置将要链接到的地址。"vue" 模式下为路由路径（以本文档为例，如："/guide"、"/well-a-intro" 等等）；"native" 模式下即为一般的链接地址，如："https://www.baidu.com" 等等。</td>\
						</tr>\
					</table>\
				</well-card-inline>\
				<well-card-inline\
					:mini="true"\
				>\
					<table class="well-doc__table">\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">名称</td>\
							<td class="well-doc__table-td">target</td>\
						</tr>\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">类型</td>\
							<td class="well-doc__table-td">String</td>\
						</tr>\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">取值</td>\
							<td class="well-doc__table-td">"_self"(默认值) |<br />"_blank" |<br />"_parent"|<br />"_top"</td>\
						</tr>\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">可选性</td>\
							<td class="well-doc__table-td">可选</td>\
						</tr>\
						<tr class="well-doc__table-tr">\
							<td class="well-doc__table-td well-doc__table-td--title">介绍</td>\
							<td class="well-doc__table-td">设置将要在何处打开链接。</td>\
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
					@click="$router.push( \'/install\' );"\
				><i class="fa fas fa-angle-left"></i> 安装</well-btn>\
				<well-btn\
					size="large"\
					@click="$router.push( \'/well-app-intro\' );"\
				>&lt;well-app&gt; 组件 <i class="fa fas fa-angle-right"></i> </well-btn>\
			</div>\
		</well-box>\
	'
};