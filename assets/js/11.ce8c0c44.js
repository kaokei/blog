(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{491:function(s,t,a){"use strict";a.r(t);var e=a(15),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"什么是服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是服务"}},[s._v("#")]),s._v(" 什么是服务")]),s._v(" "),a("p",[s._v("服务是从英文单词"),a("code",[s._v("Service")]),s._v("翻译过来的。我理解的服务是一个由"),a("code",[s._v("数据")]),s._v("和"),a("code",[s._v("方法")]),s._v("组成的对象，可能只有"),a("code",[s._v("数据")]),s._v("，也可能只有"),a("code",[s._v("方法")]),s._v("。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("所以任何数据都可以是服务，只不过一个标准的服务应该既包含数据，也包含方法。")])]),s._v(" "),a("h2",{attrs:{id:"服务与服务工厂"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务与服务工厂"}},[s._v("#")]),s._v(" 服务与服务工厂")]),s._v(" "),a("p",[s._v("一个典型的例子就是类与实例化对象。实例化对象是一个服务，类则是服务工厂。")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CountService")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addOne")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" countService "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CountService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("上方例子中，"),a("code",[s._v("CountService")]),s._v("就是服务工厂，"),a("code",[s._v("countService")]),s._v("则是服务，这个服务有数据"),a("code",[s._v("count")]),s._v("属性，也有方法"),a("code",[s._v("addOne")]),s._v("。")]),s._v(" "),a("p",[s._v("服务是由服务工厂生产的。在这里就是由类实例化而来。类的实例化过程是一个由抽象到具体的过程。服务的生产过程也是一个由抽象到具体的过程。")]),s._v(" "),a("p",[s._v("服务也可以只有数据，比如现在有一个字符串变量代表网站的主题颜色，希望以服务的形式来表达。")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" theme "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"red"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("useValue")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" themeService "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("theme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("注意到"),a("code",[s._v("theme")]),s._v("完全就是一个字符串而已，最终"),a("code",[s._v("themeService")]),s._v("也只是一摸一样的字符串，那么为什么需要定义一个 useValue 这样的函数呢？")]),s._v(" "),a("p",[s._v("因为想要特意表达出一种抽象到具体的过程。"),a("code",[s._v("theme")]),s._v("只是服务的定义，"),a("code",[s._v("themeService")]),s._v("才是真正的服务对象。")]),s._v(" "),a("p",[s._v("和上面的例子做对比来看：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("theme")]),s._v("相当于"),a("code",[s._v("CountService")])]),s._v(" "),a("li",[a("code",[s._v("themeService")]),s._v("相当于"),a("code",[s._v("countService")])]),s._v(" "),a("li",[a("code",[s._v("useValue")]),s._v("则相当于"),a("code",[s._v("new")]),s._v("关键字。")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("这里列举的两个例子只是想清晰的解释服务和服务工厂的区别，以及到底什么是服务。\n更多的服务和服务工厂的例子请参考"),a("RouterLink",{attrs:{to:"/pages/4828a1/"}},[s._v("什么是Provider")]),s._v("。")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);