react redux es6 postcss webpack 种子项目
=========

使用
-------
git clone 项目地址 --depth 1
只克隆最后一次commit记录，否则项目很大

项目介绍
-------

+ 本项目使用koa搭建服务，前端react，react router，redux, react-redux, postcss，es6，babel等，webpack 和gulp配合打包构建，打包后的项目资源代码自动上传到七牛云
+ 提供快速搭建项目结构，自动化构建开发流程，自动化部署的单页面模块化应用

操作命令
-------

+ npm run precompile 预编译第三方库依赖包
+ npm run build 生成开发环境代码
+ npm start 开发环境
+ npm start --production 生产环境
+ npm run release 打包到生产环境
+ npm run qiniu 上传生产环境文件到七牛云
+ npm run qiniu_list 查看七牛云文件列表

config配置详细
-------

+ port 开发环境、正式环境端口
+ rootDir 开发目录、编译目录，正式环境目录
+ qiniu qiniu相关配置
    host: qiniu域名
    bucket_name: 存放文件bucket
    pre_path: 自定义文件路径
    ACCESS_KEY: access_key
    SECRET_KEY: secret_key
    upload_dir: 上传到七牛云的正式环境下的目录集合，数组

说明
-------

+ 先执行npm run precompile对一些固定不变的第三方依赖库预编译打包
+ npm start开发之前先执行npm run build命令
