var express = require('express')
var router = express.Router()
var fs = require('fs')
var path = require('path')

// 用户登录
router.post('/user/login', function (req, res) {
  const username = req.body.userName
  const password = req.body.password
  res.json({
    "code": "CMN000000",
    "message": "成功",
    "userDTO": {
      "id": 12,
      "accountName": "admin1",
      "userName": "管理人员2",
      "organization": null,
      "role": "1",
      "roleName": "系统管理员",
      "telephone": "123456789",
      "phone": "123456789",
      "email": "123456789",
      "status": "1",
      "createTime": null,
      "token": "2716899ce7a04ade219e93fae45bbf5fT"
    },
    "roleMenuList": [
      {
        "id": "10000",
        "roleid": 1,
        "alias": "1",
        "name": "用户管理",
        "orderBy": "0",
        "url": "/user",
        "parentId": "0",
        "type": "1",
        "createBy": null,
        "updateBy": null,
        "updateDate": null,
        "createDate": null
      },
      {
        "id": "10001",
        "roleid": 1,
        "alias": "2",
        "name": "查询",
        "orderBy": "1",
        "url": "/user/queryUser",
        "parentId": "10000",
        "type": "2",
        "createBy": null,
        "updateBy": null,
        "updateDate": null,
        "createDate": null
      },
      {
        "id": "10002",
        "roleid": 1,
        "alias": "2",
        "name": "登出",
        "orderBy": "5",
        "url": "/user/loginout",
        "parentId": "10000",
        "type": "2",
        "createBy": null,
        "updateBy": null,
        "updateDate": null,
        "createDate": null
      },
      {
        "id": "10003",
        "roleid": 1,
        "alias": "2",
        "name": "新增",
        "orderBy": "2",
        "url": "/user/add",
        "parentId": "10000",
        "type": "2",
        "createBy": null,
        "updateBy": null,
        "updateDate": null,
        "createDate": null
      },
      {
        "id": "10004",
        "roleid": 1,
        "alias": "2",
        "name": "导入",
        "orderBy": "3",
        "url": "/user/import",
        "parentId": "10000",
        "type": "2",
        "createBy": null,
        "updateBy": null,
        "updateDate": null,
        "createDate": null
      },
      {
        "id": "10005",
        "roleid": 1,
        "alias": "2",
        "name": "修改",
        "orderBy": "4",
        "url": "/user/update",
        "parentId": "10000",
        "type": "2",
        "createBy": null,
        "updateBy": null,
        "updateDate": null,
        "createDate": null
      }
    ]
  })
})

// 用户登出
router.post('/logout', function (req, res) {
  res.json({
    code: 'CMN000000',
    message: 'success'
  })
})
//角色
router.post('/user/getRoleList', function (req, res) {
  res.json({
    code: 'CMN000000',
    message: 'success',
    roleList: ['去玩我无', '反反复复', '广告费费']
  })
})
// 部门选择
router.post('/user/getOrganizationList', function (req, res) {
  res.json({
    code: 'CMN000000',
    message: 'success',
    organizationTreeList: [{
      "name": "招行信用卡中心",
      "code": "10001",
      "parentCode": "10000",
      "iconCls": "folder",
      "leaf": false,
      "expanded": false,
      "children": [{
        "name": "资管",
        "code": "10002",
        "parentCode": "10001",
        "iconCls": "folder",
        "leaf": false,
        "expanded": false,
        "children": [{
          "name": "M3大金额1组",
          "code": "10003",
          "parentCode": "10002",
          "iconCls": "folder",
          "leaf": true,
          "expanded": true,
          "children": null
        }, {
          "name": "M3大金额2组",
          "code": "10004",
          "parentCode": "10002",
          "iconCls": "folder",
          "leaf": true,
          "expanded": true,
          "children": null
        }]
      }]
    }
    ]
  })
})

// 用户列表
router.post('/user/queryUser', function (req, res) {
  const accountName = req.body.accountName
  const userName = req.body.userName
  const departId = req.body.departId
  res.json({
    code: 'CMN000000',
    message: 'success',
    userList: {
      endRow: 0,
      firstPage: 0,
      hasNextPage: false,
      hasPreviousPage: false,
      isFirstPage: false,
      isLastPage: false,
      lastPage: 0,
      list: [{
        accountName: "test1235",
        createTime: 1535702021000,
        email: "string",
        id: 25,
        organization: null,
        organizationName: null,
        phone: "string",
        roleName: null,
        status: "1",
        statusName: "激活有效状态",
        telephone: "string",
        userName: "string"
      }, {
        accountName: "test1235",
        createTime: 1535702021000,
        email: "string",
        id: 25,
        organization: null,
        organizationName: null,
        phone: "string",
        roleName: null,
        status: "1",
        statusName: "激活有效状态",
        telephone: "string",
        userName: "string"
      }, {
        accountName: "test1235",
        createTime: 1535702021000,
        email: "string",
        id: 25,
        organization: null,
        organizationName: null,
        phone: "string",
        roleName: null,
        status: "1",
        statusName: "激活有效状态",
        telephone: "string",
        userName: "string"
      }, {
        accountName: "test1235",
        createTime: 1535702021000,
        email: "string",
        id: 25,
        organization: null,
        organizationName: null,
        phone: "string",
        roleName: null,
        status: "1",
        statusName: "激活有效状态",
        telephone: "string",
        userName: "string"
      }, {
        accountName: "test1235",
        createTime: 1535702021000,
        email: "string",
        id: 25,
        organization: null,
        organizationName: null,
        phone: "string",
        roleName: null,
        status: "1",
        statusName: "激活有效状态",
        telephone: "string",
        userName: "string"
      }, {
        accountName: "test1235",
        createTime: 1535702021000,
        email: "string",
        id: 25,
        organization: null,
        organizationName: null,
        phone: "string",
        roleName: null,
        status: "1",
        statusName: "激活有效状态",
        telephone: "string",
        userName: "string"
      }],
      navigateFirstPage: 0,
      navigateLastPage: 0,
      navigatePages: 0,
      navigatepageNums: null,
      nextPage: 0,
      pageNum: 1,
      pageSize: 10,
      pages: 3,
      prePage: 0,
      size: 0,
      startRow: 0,
      total: 29
    }
  })
})

router.post('/*', function (req, res) {
  res.json({
    code: 'CMN000000',
    message: 'success'
  })
})








/**保存问卷 */
router.post('/save_survey', function (req, res) {
  const json = req.body.json;

  fs.writeFile(path.join(__dirname, '../public/survey.json'), JSON.stringify(json), { encoding: 'utf-8' }, function (err) {
    if (err) {
      console.log(err)
      res.json(JSON.stringify({
        code: -1,
        message: 'failed'
      }))
    }
    res.json(JSON.stringify({
      code: 0,
      message: 'success'
    }))
  })
})

/**获取问卷 */
router.post('/survey', function (req, res) {
  fs.readFile(path.join(__dirname, '../public/survey.json'), { encoding: 'utf-8' }, function (error, data) {
    if (error) {
      res.json({ code: -1 })
    }
    res.json(data)
  })
})

router.get('/createSurveyQRCode', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../public/imgs/qrcode.png'))
})

router.post('/getSurveyStatistics', function (req, res) {
  res.end(fs.readFileSync(path.resolve(__dirname, 'data/statistics.json'), { encoding: 'utf8' }))
})


module.exports = router;
