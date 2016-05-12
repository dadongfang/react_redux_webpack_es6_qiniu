/*
* production环境下文件上传到七牛云
*/

var qiniu = require('qiniu');
var path = require('path');
var fs = require('fs');
var config = require('./config');
var uploadDir = config.qiniu.upload_dir;
var productionDir = config.rootDir.production;
var host = config.qiniu.host;
var pre_path = config.qiniu.pre_path;
var bucket_name = config.qiniu.bucket_name;
var ACCESS_KEY = config.qiniu.ACCESS_KEY;
var SECRET_KEY = config.qiniu.SECRET_KEY;

// 初始化
qiniu.conf.ACCESS_KEY = ACCESS_KEY;
qiniu.conf.SECRET_KEY = SECRET_KEY;

// 如果有参数list，则列出文件列表
var params = process.argv;
var marker = null;
var limit = null;
if(params.length > 2 && params[2] == 'list') {
  qiniuList();
  return;
}

// 查看相应文件夹七牛文件列表
function qiniuList() {
  qiniu.rsf.listPrefix(bucket_name, pre_path, marker, limit, function(err, ret) {
  if (!err) {
    marker = ret.marker;
    console.log('public_path: ' + path.join(host, pre_path) + '\n');
    ret.items.forEach((item) => {
      console.log(item.key);
    });
  } else {
    console.log(err)
  }
});
}

var up_token = uptoken(bucket_name);
var fileList = getFileList(productionDir, '');
var i = 0;
var len = fileList.length;
if(len == 0) {
  console.log('no file needs upload...');
} else {
  for(i; i < len; i++) {
    localFile = fileList[i].path;
    // key = fileList[i].name;
    console.log('file: ' + localFile + ' 准备上传');
    key = generatePath(localFile);

    // 开始上传
    uploadFile(localFile, key, up_token);
  }
}

// 生成上传到七牛云的路径
function generatePath(localFilePath) {
  localFilePath = localFilePath.substring(productionDir.length);
  return pre_path + localFilePath;
}

function getFileList(path)
{
 var filesList = [];
 readFile(path, filesList);
 return filesList;
}

//遍历读取文件
function readFile(path, filesList)
{
 files = fs.readdirSync(path);//需要用到同步读取
 files.forEach(walk);
 function walk(file)
 {
  states = fs.statSync(path + '/' + file);
  if(states.isDirectory())
  {
   readFile(path + '/' + file, filesList);
  }
  else
  {
   if(checkFile(path + '/' + file)) {
    //创建一个对象保存信息
    var obj = new Object();
    obj.size = states.size;//文件大小，以字节为单位
    obj.name = file;//文件名
    obj.path = path + '/' + file; //文件绝对路径

    filesList.push(obj);
   }
  }
 }
}

// 正则验证文件是否匹配
function checkFile(path) {
  var i = 0;
  var len = uploadDir.length;
  var url;
  for(i; i < len; i++) {
    url = toReg(productionDir + '/' + uploadDir[i]);
    var matchfile = path.match(url);
    if(matchfile) {
      return true;
    }
  }
  return false;
}

// 字符串转换为正则表达式
// js/test/0fbeb70c.button.min.js => /js\/.*\.js$/
function toReg(str) {
  // / => \/
  str = str.replace(/\//g, "\\/");

  // . => \.
  str = str.replace(/\./g, "\\.");

  // ** => .*
  str = str.replace(/\*\*/g, ".*");

  // str => /str/
  str = '/^' + str + '$/';

  return eval(str);
}

// 生成上传验证token
function uptoken(bucketname) {
  var putPolicy = new qiniu.rs.PutPolicy(bucketname);
  //putPolicy.callbackUrl = callbackUrl;
  //putPolicy.callbackBody = callbackBody;
  //putPolicy.returnUrl = returnUrl;
  //putPolicy.returnBody = returnBody;
  //putPolicy.asyncOps = asyncOps;
  //putPolicy.expires = expires;

  return putPolicy.token();
}

function uploadFile(localFile, key, uptoken) {
  var extra = new qiniu.io.PutExtra();
  //extra.params = params;
  //extra.mimeType = mimeType;
  //extra.crc32 = crc32;
  //extra.checkCrc = checkCrc;

  qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
    if(!err) {
      // 上传成功， 处理返回值
      console.log('public_path: ' + path.join(host, ret.key), 'hash: ' + ret.hash);
    } else {
      // 上传失败， 处理返回代码
      console.log(err);
    }
  });
}
