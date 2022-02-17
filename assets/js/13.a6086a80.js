(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{494:function(t,s,n){"use strict";n.r(s);var a=n(15),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"什么是-injector"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是-injector"}},[t._v("#")]),t._v(" 什么是 Injector")]),t._v(" "),n("p",[t._v("Injector 是代码实现的产物，并不是一定需要它，只不过有了 Injector 可以更好的组织代码。")]),t._v(" "),n("p",[t._v("就像桌子上摆放了一堆水果，我们不会说桌子上摆放了一堆苹果、梨子、香蕉、橘子、菠萝。因为这么说太过于啰嗦了。")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("p",[t._v("Injector 又叫作注入器、Container、依赖注入容器。")])]),t._v(" "),n("h2",{attrs:{id:"如果没有-injector"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如果没有-injector"}},[t._v("#")]),t._v(" 如果没有 Injector")]),t._v(" "),n("p",[t._v("回忆一下"),n("RouterLink",{attrs:{to:"/pages/4828a1/"}},[t._v("什么是 Provider")]),t._v("中，我们主要是做了两件事。")],1),t._v(" "),n("p",[t._v("第一件事是声明 providers，第二件事是获取服务对象。如果没有 Injector，我们可能需要定义这样的两个 API。")]),t._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义providers")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" providers "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明providers")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setProviders")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("providers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取服务对象")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" someService "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getService")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SomeToken"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("可以看出来这样的两个 API 显得比较分散，不够内聚。更加关键的问题是这样的实现隐含着全局只能有一个 providers。\n就算我们把"),n("code",[t._v("setProviders")]),t._v("实现成追加模式而不是替换模式。仍然改变不了全局只有一个 providers 的事实。")]),t._v(" "),n("p",[t._v("相反通过 Injector，可以让 API 更加内聚，而且我们可以实例化多个 injector 对象，然后组合这些 injector 对象形成一颗 injector 树。从而支持分级注入的特性。"),n("a",{attrs:{href:"https://github.com/inversify/InversifyJS/blob/master/wiki/hierarchical_di.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考这里"),n("OutboundLink")],1),t._v("以及"),n("a",{attrs:{href:"https://angular.cn/guide/hierarchical-dependency-injection",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考这里"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意这里只是伪代码，只是用于演示什么是分级注入特性")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意@kaokie/di中的Injector的实际用法和下面的Injector并不一致")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" parentInjector "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Injector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" childInjector "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Injector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nchildInjector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" parentInjector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nparentInjector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineKeyValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tokenA"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ClassA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nchildInjector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineKeyValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tokenB"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ClassB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意到childInjector中并没有定义tokenA，但是仍然可以获取到服务实例")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" serviceA "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" childInjector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValueByKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tokenA"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" serviceB "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" childInjector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValueByKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tokenB"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("p",[n("a",{attrs:{href:"https://github.com/kaokei/di/blob/a7d59cfe90411b51216d6e43982902b8ec110d87/src/Injector.ts#L33",target:"_blank",rel:"noopener noreferrer"}},[t._v("Injector 源码"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);