(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{545:function(e,a,v){"use strict";v.r(a);var n=v(15),t=Object(n.a)({},(function(){var e=this,a=e.$createElement,v=e._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),v("p",[e._v("一般常听说动态链接库和静态链接库。")]),e._v(" "),v("p",[e._v("首先说一说在 java 和 nodejs 中的库，这些库都是以源码或者中间代码存在。")]),e._v(" "),v("p",[e._v("比如在 nodejs 中，npm 包可以发布到 npmjs.com 中，然后使用"),v("code",[e._v("npm install")]),e._v("来下载依赖的第三方 npm 包。而 npm 包中都是源码。")]),e._v(" "),v("p",[e._v("这是因为在执行 nodejs 代码时，执行方式是"),v("code",[e._v("node xxx.js")]),e._v("。注意到 node 命令后是直接使用的 js 源代码，并不存在中间代码。")]),e._v(" "),v("p",[e._v("相对的 java 环境中，假设我们编写了一个简单的 Hello.java 文件，必须要先"),v("code",[e._v("javac Hello.java")]),e._v("编译成"),v("code",[e._v("Hello.class")]),e._v("文件，然后才能执行"),v("code",[e._v("java Hello")]),e._v("。")]),e._v(" "),v("p",[e._v("所以当我们想要发布一个 java 库时，就需要发布成 class 文件。这里需要明确 java 中的 import 和 export 具体规则。")]),e._v(" "),v("p",[e._v("但是如果时 c 或者 c++语言，又不一样了，c 或者 c++是直接编译成机器码的，并不是中间代码。所谓静态链接库是指我们的代码在编译完成后，在链接阶段把依赖的第三方库直接包含进来变成一整个可执行文件。")]),e._v(" "),v("p",[e._v("其缺点是每个程序都有自己的静态链接库，并不会复用。相反动态链接库则是可以复用的，并不会打包进可执行文件。这里涉及到如何寻找动态链接库的机制。公共链接库和私有链接库，链接库如何发布的问题。")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://www.zhihu.com/question/20484931/answer/69553616",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux 中的动态链接库和静态链接库是干什么的？ - wuxinliulei 的回答 - 知乎"),v("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=t.exports}}]);