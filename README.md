javascript 学习项目

学习笔记：

一 .网页输入网址后enter之后发生的事情：

1.DNS解析   即域名 ->  IP地址

2.客户端浏览器发送请求与服务器链接 （三次握手

3.服务器建立TCP链接后，返回给客户端需要的资源

4.客户端下载资源并根据html页面构建DOM Tree

5.根据css文件构建CSSDOM Tree

6.将DOM Tree 与 CSSDOM Tree整合形成 Render Tree

7.渲染Render Tree  ，期间遇到<script> 要先加载script 停止渲染。直至渲染完成

二. window.onload  与 window.DOMContentLoaded的区别
前者是所有资源加载完成，后者是只加载完成DOM节点 ，视频图片等大资源可以不着急，后者更合理一些 

三. 前端性能优化

原则

1. 多使用内存、缓存或其他方法

2. 减少CPU计算量，减少网络加载耗时

3. （适用于所有编程以及算法）空间换时间

入手方向

一. 加载更快
   1.减少资源体积、压缩代码、图片 、资源
   2.Gzip压缩（服务器端）
   3.减少请求次数 ：  合并代码，雪碧图 ，ssr服务端渲染， 使用缓存（cookie，storage等）
   4.使用更快的网络： CDN


2 渲染更快 
	
	1. 把css放在head,把js放在body底部

	2. 尽早加载js，使用DOMContentLoaded

	3. 使用图片懒加载

	4. 对dom操作进行缓存

	5. 对dom查询进行缓存

	6. 频繁dom操作，应该合并一起插入dom中

	7. 防抖和节流


	三.   Web安全前端方面

	1. XSS跨站请求攻击
		过滤script标签

	2. XSRF跨站请求伪造

			用post请求防御

	四. typeof能判断的类型

	1. 值类型 :  undefind number  symbol string  boolean

	2. object   ,(注意 typeof null === 'object')

	3. Function

	五. 列举js的强制类型转换和隐式转换

	1、强制类型转换  有 parseInt parseFloat  toString

	2. 隐式类型转换有 if  、逻辑运算 以及  == 还有 字符串拼接


	六. 函数表达式和函数声明有什么区别

	函数表达式: var a = function () {}

	函数声明 : function a () {}

	函数声明会变量提升 寻找上文中没声明直接调用的地方。 而函数表达式则不会


	七. ajax中 get  与post的区别

	1. get用于查询  post用于提交

	2. get请求参数放在url， post放在请求体body里（可以存放大量数据）

	3. post请求可以防止xsrf攻击


	八. new Object() 与 Object.create()的区别

	