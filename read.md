1.什么是express
  express是一个基于node.js的极简，灵活的web开发框架。可以实现非常强大的web服务功能

2.express的特点
  可以设置中间件相应或过滤http请求
  可以使用路由实现动态网页，相应不同的http请求
  内置支持ejs模板（默认是jade模板）实现模板渲染生成html

3.express-generator生成器
  express-generator是express官方团队位开发者准备的一个快速生成工具，可以非常快速的生成一个基于express开发

4.express安装与使用
  1）安装express-generator生成器
    npm i -g express-generator          //安装完可以使用express命令

  2）创建项目
    express -e 项目名称       //自动创建项目目录
    express -e        //手动创建项目目录

  3）安装依赖
    npm i
  
  4）启动项目
    node app   //就是使用node打开app.js文件
    npm start
    node ./bin/www

  5）测试项目
    浏览器：localhost

5.目录
  bin       可执行文件目录
  node_modules        依赖包目录
  public        静态资源文件目录
    所有的静态文件都应该放在这个目录下（静态html，css，js，图片，字体，视频等资源）
  routers       路由模块目录，动态文件的目录
    优先找静态文件，如果没有静态文件则找动态路由，如果动态路由也没有，就404
  views         视图目录，用于存储所有ejs模块

6.文件
  app.js    项目的主文件，对整个项目的所有资源进行统筹的安排
  package.json    项目说明文件





路由
  1，什么是路由
    路由是指接收用户请求，处理用户数据，返回结果给用户的应用程序。

