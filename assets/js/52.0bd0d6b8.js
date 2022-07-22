(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{382:function(e,r,t){"use strict";t.r(r);var n=t(1),s=Object(n.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"硬件角度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#硬件角度"}},[e._v("#")]),e._v(" 硬件角度")]),e._v(" "),r("p",[e._v("cluster 由 node 组成。即集群由节点构成。")]),e._v(" "),r("p",[e._v("node 一般认为是一组 CPU 和 RAM。可以是台式电脑，笔记本电脑，也可以是机架服务器，甚至可以是虚拟机。")]),e._v(" "),r("p",[e._v("集群的优点是让程序员不再关心程序具体是运行在哪台机器上，不用再担心机器损坏导致服务不可用。")]),e._v(" "),r("p",[e._v("namespace 命名空间又叫作名字空间。用于创建虚拟集群，它们底层依赖于同一个物理集群。")]),e._v(" "),r("p",[e._v("Persistent Volumes 又叫作持久卷。可以看作是集群的硬盘。容易理解 node 自带的文件系统只能是作为临时缓存使用。所以要想实现持久化的功能，必须要持久卷来实现。")]),e._v(" "),r("h2",{attrs:{id:"软件角度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#软件角度"}},[e._v("#")]),e._v(" 软件角度")]),e._v(" "),r("p",[e._v("Container 又叫作容器。容器是一种开放且广泛使用的标准，所以我们可以使用现有的很多容器。最常见的就是 docker 容器。这里需要注意 container 和 image 的区别。")]),e._v(" "),r("p",[e._v("Pod，不知道怎么翻译，一般也不说中文。注意到 Pod 可以包含多个 Container，但是一般也只有一个 Container，如果有其他 Container，一般称呼为 side-cars。")]),e._v(" "),r("p",[e._v("Deployment，一般翻译为部署。一个部署可以包含若干个 Pod，一般建议最少 2 个，互为备份。Pod 的数量又称为副本个数，英文是 Replicas。部署的好处是可以监控 Pod 的健康度，如果其中一个挂掉，部署会自动创建一个新的 Pod。")]),e._v(" "),r("p",[e._v("服务，一开始容易和部署这个概念混淆，因为都是一组 Pod。部署强调的是管理 Pod 的状态。服务则是强调外部 ip 和 Pod 的对应关系，因为 Pod 具有临时性，可能随时被删除或者替换掉。")]),e._v(" "),r("h2",{attrs:{id:"dns"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[e._v("#")]),e._v(" DNS")]),e._v(" "),r("p",[e._v("Kubernetes 为服务和 Pods 创建 DNS 记录。 你可以使用一致的 DNS 名称而非 IP 地址来访问服务。")]),e._v(" "),r("h2",{attrs:{id:"ingress"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ingress"}},[e._v("#")]),e._v(" Ingress")]),e._v(" "),r("p",[e._v("可以理解为集群的 nginx。用于连接集群和外部网络。")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://medium.com/google-cloud/kubernetes-101-pods-nodes-containers-and-clusters-c1509e409e16",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes 101: Pods, Nodes, Containers, and Clusters"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://medium.com/google-cloud/kubernetes-110-your-first-deployment-bf123c1d3f8",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes 110: Your First Deployment"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://medium.com/@sanche/kubernetes-120-networking-basics-3b903f13093a",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes 120: Networking Basics"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://kubernetes.io/zh/docs/concepts/services-networking/connect-applications-service/",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 Service 连接到应用"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://www.redhat.com/zh/topics/containers/kubernetes-architecture",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes 架构简介"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://kubernetes.io/zh/docs/reference/glossary/?fundamental=true",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes 词汇表"),r("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=s.exports}}]);