(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{390:function(t,a,r){"use strict";r.r(a);var s=r(1),p=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("目前抓包软件总体可以分为两类：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("一种是设置代理抓取 http 包，比如 charles 和 fiddle，以及 mitmproxy 和 anyproxy。")])]),t._v(" "),a("li",[a("p",[t._v("另一种是直接抓取经过网卡的所有协议包，比如 tcpdump、wireshark、tshark、httpry、ngrep。")])])]),t._v(" "),a("h2",{attrs:{id:"使用-charles-和-fiddle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-charles-和-fiddle"}},[t._v("#")]),t._v(" 使用 charles 和 fiddle")]),t._v(" "),a("p",[t._v("macos 常用 charles，windows 常用 fiddle。")]),t._v(" "),a("p",[t._v("macos 支持断点功能，可以修改请求以及返回值。并且支持 map local 和 map remote。")]),t._v(" "),a("p",[t._v("但是最大的缺陷是不能区分 options 请求和 GET/POST 请求。导致以上功能完全不能使用。")]),t._v(" "),a("h2",{attrs:{id:"使用-anyproxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-anyproxy"}},[t._v("#")]),t._v(" 使用 anyproxy")]),t._v(" "),a("p",[t._v("因为 anyproxy 可以手动创建规则，可以通过编程来处理请求和返回值，这样就可以方便的区分 options 请求和 GET/POST 请求。")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("实际情况比较复杂。")]),t._v(" "),a("p",[t._v("比如在 ios14，ios15 的 safari 浏览器中都不能正常解析 https 请求。\n另外一台 ios13 则可以正常解析 https 请求，使用的也是 safari 浏览器。")]),t._v(" "),a("p",[t._v("比如在小米手机自带的浏览器中，就算手机已经安装了证书，该浏览器还是不信任证书，这个真是大无语事件。\n但是在小米手机上的 UC 浏览器中就可以正常访问。所以建议不要使用自带的浏览器。")])]),t._v(" "),a("p",[t._v("总体上来看还是可以使用的。")]),t._v(" "),a("p",[t._v("有想法做一个可视化界面来配置代理规则，而不用手动写代码了。")]),t._v(" "),a("h2",{attrs:{id:"建议使用-mitmproxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建议使用-mitmproxy"}},[t._v("#")]),t._v(" 建议使用 mitmproxy")]),t._v(" "),a("p",[t._v("mitmproxy 和 anyproxy 比较类似，主要是语言方面的区别，mitmproxy 是 python 语言开发的，anyproxy 是 nodejs 开发的。另外 mitmproxy 目前仍然在积极维护，但是 anyproxy 似乎不再维护了。")]),t._v(" "),a("p",[t._v("charles 和 fiddle 是自带客户端的，anyproxy 和 mitmproxy 是通过 web GUI 和命令行来显示抓包数据的。这里更加推荐命令行的。")]),t._v(" "),a("h2",{attrs:{id:"对于-wireshark-和-tcpdump"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对于-wireshark-和-tcpdump"}},[t._v("#")]),t._v(" 对于 wireshark 和 tcpdump")]),t._v(" "),a("p",[t._v("如果想要抓取非 http 的包，或者在服务器上直接抓包，可以使用这些工具。")])])}),[],!1,null,null,null);a.default=p.exports}}]);