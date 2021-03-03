## 使用须知

1. 这是一个基于 vue.js 的 web 前端组件库，它的名字叫 well com。

2. 我们在构建库中的组件时，使用到了：我们自己编写的配套 css 文件、配套 js 文件以及 font-awesome 字体图标库。
   因此，用户在使用此组件库时，需要在页面中事先引入我们上述提到的这些文件。对于配套的 css 和 js 文件，是直接
   包含在库中的，直接引用即可；而对于 font-awesome 字体图标库则需要用户自行下载，我们建议用户从 font-awesome
   的官网上下载 v5 版本的字体图标库，当然也可以选择较老的版本，用户可根据需要自行决定。
   
3. 我们现在这里为组件的使用方法作简要说明（以 modal 组件为例）：

   ( 1 ) 我们通过为组件添加统一的前缀 'well-' 来在页面中使用它们，如 well-modal。
   ( 2 ) 组件的 '属性名称' 以及 '事件名称' 一律使用小驼峰命名法进行命名，即像 'propNameOscar'、'eventNameZero'
         这样来进行命名。
   
3. 我们在为组件编写配套示例时，例如 well-modal 组件的 'auto' 模式示例，其中为了更加方便的演示组件的运行效果，
   而用到了浏览器开发者工具中提供的 Network -> offline / online 功能，对于此功能的介绍是完全基于 chrome 浏览
   器的。正因为如此，我们建议用户在阅读以及运行配套示例时使用 chrome 浏览器。当然如果您对其他浏览器的对应功能
   也比较熟悉的话，选择其他浏览器也完全没有问题。
   
4. 部分配套示例中引用了一些图片文件，这些文件也是包含在库中的，用户只要不删除预先包含在库中的这些文件，就可以
   正常的运行这些配套示例。
   
5. 我们在介绍组件中的 '插槽' 部分时，使用的是较新版本的 vue 中的语法，所以我们 !强烈建议! 用户使用 v2.6.0+ 版
   本的 vue.js。
