(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{334:function(t,s,n){"use strict";n.r(s);var a=n(1),e=function(t){t.options.__data__block__={mermaid_382ee1c4:"flowchart TB\n  subgraph app [ ]\n    a1[App Injector];\n  end\n  subgraph body [ ]\n    b1[根组件 Injector];\n  end\n  subgraph component [ ]\n    c1[组件1 Injector];\n    c2[组件2 Injector];\n    c3[组件3 Injector];\n    c2 --\x3e c3;\n  end\n  R(Root Injector) --\x3e a1;\n  a1 --\x3e b1;\n  b1 --\x3e c1;\n  b1 --\x3e c2;\n",mermaid_382ee1c8:"flowchart TB\n  subgraph body [ ]\n    b1[根组件 Injector];\n  end\n  subgraph component [ ]\n    c1[组件1 Injector];\n    c2[组件2 Injector];\n    c3[组件3 Injector];\n    c2 --\x3e c3;\n  end\n  R(Root Injector) --\x3e b1;\n  b1 --\x3e c1;\n  b1 --\x3e c2;\n",mermaid_382ee1e0:"flowchart TB\n  subgraph component [ ]\n    c1[组件1 Injector];\n    c2[组件2 Injector];\n    c3[组件3 Injector];\n    c2 --\x3e c3;\n  end\n  R(Root Injector);\n  R --\x3e c1;\n  R --\x3e c2;\n",mermaid_382ee23e:"flowchart TB\n  subgraph app [ ]\n    direction LR;\n    a1[App1 Injector];\n    a2[App2 Injector];\n  end\n  subgraph subcomponent2 [ ]\n    sc21[组件21 Injector];\n    sc22[组件22 Injector];\n    sc23[组件23 Injector];\n    sc22 --\x3e sc23;\n  end\n  subgraph subcomponent1 [ ]\n    sc11[组件11 Injector];\n    sc12[组件12 Injector];\n    sc13[组件13 Injector];\n    sc12 --\x3e sc13;\n  end\n  R(Root Injector);\n  R --\x3e a1;\n  R --\x3e a2;\n  a1 --\x3e sc11;\n  a1 --\x3e sc12;\n  a2 --\x3e sc21;\n  a2 --\x3e sc22;\n",mermaid_382ee242:"flowchart TB\n  subgraph subcomponent2 [ ]\n    sc21[组件21 Injector];\n    sc22[组件22 Injector];\n    sc23[组件23 Injector];\n    sc22 --\x3e sc23;\n  end\n  subgraph subcomponent1 [ ]\n    sc11[组件11 Injector];\n    sc12[组件12 Injector];\n    sc13[组件13 Injector];\n    sc12 --\x3e sc13;\n  end\n  R(Root Injector);\n  R --\x3e sc11;\n  R --\x3e sc12;\n  R --\x3e sc21;\n  R --\x3e sc22;\n"}},r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"组件与-injector"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件与-injector"}},[t._v("#")]),t._v(" 组件与 Injector")]),t._v(" "),s("h2",{attrs:{id:"名词解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[t._v("#")]),t._v(" 名词解释")]),t._v(" "),s("p",[s("strong",[t._v("组件：")]),t._v(" 就是指 vue 组件")]),t._v(" "),s("p",[s("strong",[t._v("Injector：")]),t._v(" 是指"),s("code",[t._v("@kaokei/di")]),t._v("提供的依赖注入容器")]),t._v(" "),s("p",[s("strong",[t._v("根组件：")]),t._v(" 是指传递给"),s("code",[t._v("createApp")]),t._v("的第一个参数，一般是"),s("code",[t._v("App.vue")])]),t._v(" "),s("p",[s("strong",[t._v("根组件 Injector：")]),t._v(" 是指根组件对应的那个 Injector，也就是在根组件中调用"),s("code",[t._v("declareProviders")]),t._v("关联的那个 Injector")]),t._v(" "),s("p",[s("strong",[t._v("App：")]),t._v(" 也称为应用，是指"),s("code",[t._v("createApp")]),t._v("函数的返回值")]),t._v(" "),s("p",[s("strong",[t._v("App Injector：")]),t._v(" app 对应的 Injector，理论上应该提供但实际上本库没有提供这种 Injector，对比根组件 Injector，它应该是在应用创建之前存在的")]),t._v(" "),s("p",[s("strong",[t._v("Root Injector：")]),t._v(" 也称为根 Injector，是指"),s("code",[t._v("@kaokei/use-vue-service")]),t._v("自带的默认的 Injector")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("重要")]),t._v(" "),s("p",[t._v("在其他文档中，刻意忽略了根组件和应用的区别。也刻意忽略了根组件 Injector，App Injector 和 Root Injector 的区别。")])]),t._v(" "),s("h2",{attrs:{id:"单个应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单个应用"}},[t._v("#")]),t._v(" 单个应用")]),t._v(" "),s("p",[t._v("这里单个应用的意思是指只调用一次"),s("code",[t._v("createApp")]),t._v("创建一个应用。可以说绝大多数项目只会有一个应用。")]),t._v(" "),s("p",[t._v("组件和 Injector 的对应关系是一个组件可以对应 1 个或者 0 个 Injector。")]),t._v(" "),s("p",[t._v("在其他文档中，我会经常提到根组件就是对应的根 Injector，实际上是不准确的。根组件就是普通的组件，只不过是处在最顶层的位置。只要在根组件中调用"),s("code",[t._v("declareProviders")]),t._v("就会生成一个相关联的 Injector，这个 Injector 就是根组件的 Injector。")]),t._v(" "),s("p",[t._v("实际上，当我们引入本库时，就已经自带了一个根 Injector 了。也就是说"),s("code",[t._v("@kaokei/use-vue-service")]),t._v("自带了一个默认 Injector。这个根 Injector 并没有和根组件绑定，而且是先于根组件存在的。")]),t._v(" "),s("p",[t._v("后续当我们在组件中调用"),s("code",[t._v("declareProviders")]),t._v("时，如果没有找到父级 Injector，就会把自带的根 Injector 当作父级 Injector。所以最终形成的 Injector 树的根节点就是本库自带的那个根 Injector。")]),t._v(" "),s("h3",{attrs:{id:"理想中的-injector-结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理想中的-injector-结构"}},[t._v("#")]),t._v(" 理想中的 Injector 结构")]),t._v(" "),s("Mermaid",{attrs:{id:"mermaid_382ee1c4",graph:t.$dataBlock.mermaid_382ee1c4}}),s("h3",{attrs:{id:"实际中的-injector-结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实际中的-injector-结构"}},[t._v("#")]),t._v(" 实际中的 Injector 结构")]),t._v(" "),s("Mermaid",{attrs:{id:"mermaid_382ee1c8",graph:t.$dataBlock.mermaid_382ee1c8}}),s("center",[t._v("图1：有根组件Injector结构")]),t._v(" "),s("hr"),t._v(" "),s("Mermaid",{attrs:{id:"mermaid_382ee1e0",graph:t.$dataBlock.mermaid_382ee1e0}}),s("center",[t._v("图2：没有根组件Injector结构")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("观察上方 3 张图可以发现目前本库并没有实现所谓的 App Injector。又因为绝大多数项目中只会有"),s("strong",[t._v("一个")]),t._v(" createApp 创建的 vue 应用。所以把 Root Injector 当作 App Injector 也是可以接受的。")]),t._v(" "),s("p",[t._v("同时注意到根组件的 Injector 可能有，也可能没有，但是这并不重要，因为有根 Injector 兜底。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("其他文档中提到的全局服务，默认情况下也是会存储在这个根 Injector 中，因为并没有所谓的 App Injector。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("上面的关系图展示了 Injector 结构树，所以省略了很多没有关联 Injector 的组件节点，因为并不是每一个组件都会关联一个 Injector。")])]),t._v(" "),s("h2",{attrs:{id:"多个应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多个应用"}},[t._v("#")]),t._v(" 多个应用")]),t._v(" "),s("p",[t._v("这里多个应用的意思是指多次调用"),s("code",[t._v("createApp")]),t._v("创建多个应用。虽然很少见有这种做法，但是理论上是可以这么做的。")]),t._v(" "),s("p",[t._v("根组件对应的 Injector 应该是应用级别的 Injector，假设我们的项目非常复杂，是由多个 vue 应用组成的，即多次调用了"),s("code",[t._v("createApp")]),t._v("方法。每个"),s("code",[t._v("createApp")]),t._v("创建的 vue 应用都应该有自己的 App Injector。当然这些 App Injector 也是自带的根 Injector 的子 Injector。以上只是纯粹理论分析。")]),t._v(" "),s("h3",{attrs:{id:"理想中的-injector-结构-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理想中的-injector-结构-2"}},[t._v("#")]),t._v(" 理想中的 Injector 结构")]),t._v(" "),s("Mermaid",{attrs:{id:"mermaid_382ee23e",graph:t.$dataBlock.mermaid_382ee23e}}),s("h3",{attrs:{id:"实际中的-injector-结构-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实际中的-injector-结构-2"}},[t._v("#")]),t._v(" 实际中的 Injector 结构")]),t._v(" "),s("Mermaid",{attrs:{id:"mermaid_382ee242",graph:t.$dataBlock.mermaid_382ee242}}),s("p",[t._v("上方 2 张图中并没有展示根组件对应的 Injector，因为根组件对应的 Injector 和普通组件的 Injector 并没有什么区别，可以存在，也可以不存在，不影响分析。")]),t._v(" "),s("p",[t._v("可以明显的发现在多 App 项目中，由于缺少 App Injector 会导致不同的 App 的全局服务只能出现在 Root Injector，缺少数据隔离性，而且 App 的服务的生命周期和 App 不能保持一致。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("从代码完整性角度来看，我应该提供 App Injector 的实现，从而可以支持更加复杂的业务场景。\n但是我并不想因为比较少见的业务场景而增加代码复杂度，因为绝大多数项目都只有一个"),s("code",[t._v("createApp")]),t._v("应用，此时把 Root Injector 当作 App Injector 是完全可以接受的。")])]),t._v(" "),s("h2",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),s("h3",{attrs:{id:"方案一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案一"}},[t._v("#")]),t._v(" 方案一")]),t._v(" "),s("p",[t._v("使用根组件 Injector 代替 App Injector，也就是在各个 createApp 创建的应用对应的"),s("code",[t._v("App.vue")]),t._v("组件中使用 declareProviders 声明 token 和服务的关联关系。")]),t._v(" "),s("p",[t._v("这是最容易想到的方案，可以做到数据隔离，但是这不是理想中的 App Injector，因为它要求必须在应用创建之后才能生效。")]),t._v(" "),s("h3",{attrs:{id:"方案二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案二"}},[t._v("#")]),t._v(" 方案二")]),t._v(" "),s("p",[t._v("实现一个 vue 插件，通过插件来配置 providers，可以实现在 app 创建之前生效，准确来说是 mount 之前。")]),t._v(" "),s("div",{staticClass:"language-ts line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义插件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  getInjector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEFAULT_INJECTOR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INJECTOR_KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@kaokei/use-vue-service"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实现插件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("declareAppProviders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("providers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" currentInjector "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInjector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("providers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEFAULT_INJECTOR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("provide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INJECTOR_KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currentInjector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("div",{staticClass:"language-ts line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用插件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义providers数组")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" providers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  SomeService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    provide"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SomeToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    useClass"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AnotherService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用插件配置providers")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里会在app.context.providers中关联一个App Injector")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意这里的Injector并不是关联到某一个组件而是app，我称之为App Injector")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("declareAppProviders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("providers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#app"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("这个方案看起来要比方案一要好一些，但是实际上并没有差别，这里是指方案一需要等到应用创建完成之后才能生效，而方案二看似是在创建应用之前就能配置 providers，但是这里并没有提供一个函数在创建应用之前就能获取对应的服务。")]),t._v(" "),s("p",[t._v("对比"),s("code",[t._v("declareRootProviders/useRootService")]),t._v("，这一对方法是完整的可以在创建应用之前使用的。所以我们还缺少"),s("code",[t._v("useAppService")]),t._v("这个方法。\n但是"),s("code",[t._v("useAppService")]),t._v("的实现相对来说比较麻烦一些，而且对用户的使用也有更多的要求和限制。")])]),t._v(" "),s("h2",{attrs:{id:"鸡・蛋问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#鸡・蛋问题"}},[t._v("#")]),t._v(" 鸡・蛋问题")]),t._v(" "),s("p",[t._v("可以"),s("a",{attrs:{href:"https://www.zhihu.com/question/30301819",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考这里"),s("OutboundLink")],1),t._v("介绍了非常有意思的鸡・蛋问题。")]),t._v(" "),s("p",[t._v("这里也是有类似的鸡蛋问题，正常逻辑是需要先通过 declareProviders 配置 token 和服务的关联关系。然后通过 useService 获取对应的服务。")]),t._v(" "),s("p",[t._v("但是 declareProviders 要求只能在组件内部调用，也就是要求 createApp 之后才能使用 declareProviders/useService 这一套逻辑。\n但是如果我们在调用 createApp 之前有依赖服务，就要先支持 declareProviders/useService 这一套逻辑。显然这里就出现了死循环。")]),t._v(" "),s("p",[t._v("在"),s("RouterLink",{attrs:{to:"/pages/3a3a6b/"}},[t._v("应用服务化")]),t._v("中我们有介绍可以通过 declareRootProviders/useRootService 来解决这个死循环，这是最简单的方案，但并不是最理想的解决方案。")],1),t._v(" "),s("p",[t._v("后来我对比了 Angular 中的实现，关键在于从底层消除循环依赖，一定有一个最早执行的可控代码。")]),t._v(" "),s("p",[t._v("比如我定义了一个"),s("code",[t._v("bootstrapApp")]),t._v("的方法，所有的服务的初始化都要在这个方法执行之后，也就是说不会存在执行 bootstrapApp 之前还依赖了其他服务的场景。")]),t._v(" "),s("h2",{attrs:{id:"最终实现方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最终实现方案"}},[t._v("#")]),t._v(" 最终实现方案")]),t._v(" "),s("div",{staticClass:"language-ts line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义bootstrapApp函数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  getInjector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEFAULT_INJECTOR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INJECTOR_KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  getServiceFromInjector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@kaokei/use-vue-service"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bootstrapApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("init"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" appInjector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("declareAppProviders")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("providers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" appInjector "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInjector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("providers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEFAULT_INJECTOR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("provide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INJECTOR_KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" appInjector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("useAppService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getServiceFromInjector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appInjector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("declareAppProviders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useAppService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br")])]),s("div",{staticClass:"language-ts line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用bootstrapApp函数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bootstrapApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("declareAppProviders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useAppService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义providers数组")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" providers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    SomeService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      provide"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SomeToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      useClass"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AnotherService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用插件配置providers")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里会在app.context.providers中关联一个App Injector")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意这里的Injector并不是关联到某一个组件而是app，我称之为App Injector")]),t._v("\n  app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("declareAppProviders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("providers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有需要的话可以提前获取服务")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" someService "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useAppService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SomeService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 并在创建应用之前就能调用服务的方法")]),t._v("\n  someService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#app"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("注意"),s("code",[t._v("declareAppProviders")]),t._v("只能调用一次，否则 appInjector 就被覆盖了。"),s("code",[t._v("useAppService")]),t._v("必须在"),s("code",[t._v("declareAppProviders")]),t._v("后面调用。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("以上代码只是作为参考，绝大多数项目是完全不需要这种实现方案的，直接使用 Root Injector 就可以了。")])])],1)}),[],!1,null,null,null);"function"==typeof e&&e(r);s.default=r.exports}}]);