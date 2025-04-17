## 使用须知

1. 这是一个基于 vue.js 的 web 前端组件库，它的名字叫 well com。
   
2. 我们先在这里为组件的使用方法作简要说明（以 modal 组件为例）：

   ( 1 ) 我们通过为组件添加统一的前缀 'well-' 来在页面中使用它们，如 well-modal。
   
   ( 2 ) 组件的 '属性名称' 、 '事件名称' 以及 '插槽名称' 建议一律使用短横线 '-' 连接的方式进行命名，即像 'v-bind:prop-name-oscar'、
         'v-on:event-name-zero'、 'v-slot:slot-name-abc' 这样来进行命名。
   
3. 我们在编写组件中的 '插槽' 部分时，使用的是较新版本的 vue 中的语法，所以我们 !要求! 用户使用 v2.6.0+ 版本的 vue.js。

4. 用户可以通过在本地运行 doc 文件夹下的 index.html 文件来阅读本组件库的文档，或者直接打开链接 https://yamybl.github.io/well-com/doc 对文档进行在线阅读。
