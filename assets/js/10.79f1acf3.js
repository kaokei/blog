(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{341:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"快速开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("本库是利用 typescript 的 decorator 实现了依赖注入能力的小型工具库。实现过程参考了 "),s("a",{attrs:{href:"https://spring.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://angular.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Angular"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://github.com/typestack/typedi",target:"_blank",rel:"noopener noreferrer"}},[t._v("typedi"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://github.com/inversify/InversifyJS",target:"_blank",rel:"noopener noreferrer"}},[t._v("InversifyJS"),s("OutboundLink")],1),t._v("等类似的开源实现。")]),t._v(" "),s("p",[t._v("本库一般不是直接用于业务开发，而是作为其他库的依赖，提供统一的依赖注入能力。")]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @kaokei/di reflect-metadata\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("注意到我们同时安装了 reflect-metadata，这是因为我们需要获取 ts 提供的类型信息。")]),t._v(" "),s("p",[t._v("还需要注意本库是强依赖 typescript 环境的，需要在 tsconfig.js 文件中配置如下两个字段。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v('"emitDecoratorMetadata": true,'),s("br"),t._v('\n"experimentalDecorators": true,')])]),t._v(" "),s("h2",{attrs:{id:"基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),s("p",[t._v("最常见的使用场景就是代替手动 new 一个类来获取实例对象，可以通过本库自动获取对象。")]),t._v(" "),s("div",{staticClass:"language-ts line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Injectable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Injector "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@kaokei/di"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Injectable")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"from logger service ==>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Injectable")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CountService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" logger"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" LoggerService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addOne")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"addOne ==> "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实例化一个注入器对象")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" injector "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Injector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过注入器对象获取CountService类的实例对象")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 并且本库会自动注入LoggerService类的实例对象作为CountService的依赖")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" countService "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" injector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CountService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意到我们并没有手动的维护LoggerService的注入过程")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 但是this.logger.log依然可以打印出相应的日志")]),t._v("\ncountService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addOne")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br")])]),s("h2",{attrs:{id:"使用建议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用建议"}},[t._v("#")]),t._v(" 使用建议")]),t._v(" "),s("p",[t._v("建议直接"),s("a",{attrs:{href:"https://github.com/kaokei/di",target:"_blank",rel:"noopener noreferrer"}},[t._v("看源码"),s("OutboundLink")],1),t._v("即可，总共也就 400 行代码。")]),t._v(" "),s("p",[t._v("建议搭配测试用例服用效果更佳。单元测试覆盖率已经达到 100%。")])])}),[],!1,null,null,null);s.default=e.exports}}]);