import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Form, Table, Popconfirm, Select, Input, Button, TreeSelect, Modal, message, Upload } from 'antd'
import { getUserList, deleteUserList, getManagerTreeList, getRoleList, addUserList, modifyUser, resetPassword, lockUser, activeUser, exportUsers } from 'src/actions/userManager'
import { hasPermission } from 'src/js/tools'
import global from 'src/js/global'
import './index.less'

const TreeNode = TreeSelect.TreeNode;
const FormItem = Form.Item;
const Option = Select.Option;

class UserManager extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      userModalVisible: false,
      pwdResetVisible: false,
      editUserId: '',
      currentPage: 1,
      pageSize: 10,
      total: 0
    }

    this.pwdResetSubmit = this.pwdResetSubmit.bind(this)
    this.getUsers = this.getUsers.bind(this)
    this.editUser = this.editUser.bind(this)
    this._exportUsers = this._exportUsers.bind(this)
    this.showModal = this.showModal.bind(this)
    this.showResetPasswordModal = this.showResetPasswordModal.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetPwdBlur = this.resetPwdBlur.bind(this)
    this.validateToNextPassword = this.validateToNextPassword.bind(this)
    this.compareToFirstPassword = this.compareToFirstPassword.bind(this)
    this.rePwdBlur = this.rePwdBlur.bind(this)
    this.validateToNextPassword_u = this.validateToNextPassword_u.bind(this)
    this.compareToFirstPassword_u = this.compareToFirstPassword_u.bind(this)
    this.resetFields = this.resetFields.bind(this)
    this.changeOrganization = this.changeOrganization.bind(this)
  }

  componentDidMount() {
    this.getUsers()
    this.getOrganizations()
  }

  // 获取用户列表
  getUsers() {
    const { dispatch, form } = this.props
    const { currentPage, pageSize } = this.state
    const { searchAccount = '', searchName = '', searchDepartment = [] } = form.getFieldsValue(['searchAccount', 'searchName', 'searchDepartment'])
    dispatch(getUserList({
      accountName: searchAccount,
      userName: searchName,
      orgCodes: searchDepartment,
      pageNum: currentPage,
      pageSize: pageSize
    })).then(result => {
      console.info('99999', result)
      this.setState({ total: result.userList.total })
    })
  }

  // 获取组织机构
  getOrganizations() {
    const { dispatch } = this.props
    dispatch(getManagerTreeList())
  }

  // 获取角色
  getRole(code) {
    const { dispatch } = this.props
    dispatch(getRoleList({ orgCode: code })).then(result => {
      if (result.code === global.successCode) {
        this.setState({ roleList: result.roleList })
      }
    })
  }

  // 切换组织机构
  changeOrganization(value) {
    this.props.form.setFields({ role: { value: '' } })
    this.getRole(value)
  }

  // 新增用户
  showModal() {
    this.props.form.setFields({
      accountName: { value: '' },
      userName: { value: '' },
      password: { value: '' },
      rePassword: { value: '' },
      organization: { value: '' },
      role: { value: '' },
      telephone: { value: '' },
      phone: { value: '' },
      email: { value: '' }
    })
    this.setState({
      userModalVisible: true,
      editUserId: ''
    })
  }

  // 编辑用户
  editUser(record) {
    const { id, accountName, userName, organizationName, roleName, phone, telephone, email } = record
    this.props.form.setFields({
      accountName: { value: accountName },
      userName: { value: userName },
      organization: { value: organizationName },
      role: { value: roleName },
      telephone: { value: telephone },
      phone: { value: phone },
      email: { value: email }
    })
    this.setState({
      editUserId: id,
      userModalVisible: true
    })
  }

  //新增,修改用户信息
  handleSubmit(e) {
    e.preventDefault()
    const { dispatch, form } = this.props
    const { editUserId } = this.state
    const fieldsArr = ['userName', 'organization', 'role', 'telephone', 'phone', 'email']
    if (!editUserId) {
      fieldsArr.push('accountName', 'password', 'rePassword')
    }

    form.validateFieldsAndScroll(fieldsArr, (err, values) => {
      if (!err) {
        console.log('用户信息: ', values);
        var userJson = editUserId ? { modifyUserBaseDTO: Object.assign(values, { id: editUserId }) } : { addUserBaseDTO: values }
        editUserId ?
          dispatch(modifyUser(userJson)).then(result => {
            if (result.code === global.successCode) {
              message.success('修改成功')
              this.setState({ userModalVisible: false })
            }
          }) :
          dispatch(addUserList(userJson)).then(result => {
            if (result.code === global.successCode) {
              message.success('新增用户成功')
              this.setState({ userModalVisible: false })
            }
          })
      }
    })
  }

  // 删除用户
  deleteUser(id) {
    const { dispatch } = this.props
    dispatch(deleteUserList({ id })).then(result => {
      if (result.code == global.successCode) {
        message.success('删除用户成功')
        this.getUsers()
      }
    })
  }

  validateToNextPassword_u(rule, value, callback) {
    const form = this.props.form
    if (value && this.state.confirmDirty_u) {
      form.validateFields(['rePassword'], { force: true })
    }
    callback()
  }

  compareToFirstPassword_u(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码输入不一致！');
    } else {
      callback();
    }
  }

  // 用户录入重复密码失去焦点
  rePwdBlur(e) {
    const value = e.target.value
    this.setState({ confirmDirty_u: this.state.confirmDirty_u || !!value })
  }

  validateToNextPassword(rule, value, callback) {
    const form = this.props.form
    if (value && this.state.confirmDirty) {
      form.validateFields(['resetRePassword'], { force: true })
    }
    callback()
  }

  compareToFirstPassword(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('resetPassword')) {
      callback('两次密码输入不一致！');
    } else {
      callback();
    }
  }

  // 重置密码重复密码失去焦点
  resetPwdBlur(e) {
    const value = e.target.value
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }

  showResetPasswordModal(record) {
    this.setState({
      pwdResetVisible: true,
      resetUserId: record.id
    })
  }

  // 修改密码
  pwdResetSubmit(e) {
    e.preventDefault()
    const { dispatch, form } = this.props
    const { resetUserId } = this.state

    form.validateFieldsAndScroll(['resetPassword', 'resetRePassword'], (err, values) => {
      if (!err) {
        dispatch(resetPassword({
          id: resetUserId,
          password: values.resetPassword
        })).then(result => {
          if (result.code === global.successCode) {
            message.success('密码修改成功.')
            this.setState({ pwdResetVisible: false })
          }
        })
      }
    })
  }

  // 锁定用户
  lock(id) {
    const { dispatch } = this.props
    dispatch(lockUser({ id })).then(result => {
      if (result.code == global.successCode) {
        message.success('用户锁定成功')
        this.getUsers()
      }
    })
  }

  // 激活用户
  unlock(id) {
    const { dispatch } = this.props
    dispatch(activeUser({ id })).then(result => {
      if (result.code == global.successCode) {
        message.success('用户激活成功')
        this.getUsers()
      }
    })
  }

  // 模板下载
  downloadTemplate() {
    window.location.href = '/static/用户导入.xlsx'
  }

  // 导出用户
  _exportUsers() {
    const { dispatch, form } = this.props
    const { searchAccount = '', searchName = '', searchDepartment = [] } = form.getFieldsValue(['searchAccount', 'searchName', 'searchDepartment'])
    // const data = {
    //   accountName: searchAccount,
    //   userName: searchName,
    //   orgCodes: searchDepartment
    // }

    fetch(`${global.api}/user/exportUserExcel?accountName=${searchAccount}&userName=${searchName}&orgCodes=${JSON.stringify(searchDepartment)}`, {
      method: 'GET',
      headers: { "token": window.LS.get('token') }
    })
      .then(response => response.blob())
      .then(blob => {
        var url = window.URL.createObjectURL(blob)
        var a = document.createElement('a')
        a.href = url
        a.download = "用户列表.xlsx"
        a.click()
      })
  }

  // 重置
  resetFields() {
    const { form } = this.props
    form.resetFields(['searchAccount', 'searchName', 'searchDepartment'])
    this.getUsers()
  }

  render() {
    const { editUserId, userModalVisible, pwdResetVisible, roleList = [], uploading, currentPage, pageSize, total } = this.state
    const { userManager, form } = this.props
    const { getFieldDecorator } = form
    const { userList, managerTreeList } = userManager
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      }
    }

    const columns = [{
      title: '用户账号',
      dataIndex: 'accountName'
    }, {
      title: '用户名称',
      dataIndex: 'userName'
    }, {
      title: '组织机构',
      dataIndex: 'organizationName'
    }, {
      title: '角色',
      dataIndex: 'roleName'
    }, {
      title: '创建时间',
      dataIndex: 'createTime',
      render: (text, record) => moment(text).format('YYYY-MM-DD HH:mm:ss')
    }, {
      title: '状态',
      dataIndex: 'statusName'
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => (
        <div className='handleBtns'>
          {
            hasPermission('10005') && (
              <Popconfirm title="确定要删除吗？" onConfirm={() => this.deleteUser(record.id)}>
                <Button type="danger" size="small" icon="delete">删除</Button>
              </Popconfirm>
            )
          }
          {hasPermission('10004') && <Button type="primary" size="small" icon="edit" onClick={() => this.editUser(record)}>编辑</Button>}
          {hasPermission('10006') && <Button size="small" icon="edit" onClick={() => this.showResetPasswordModal(record)}>密码重置</Button>}
          {
            record.status === '1'
              ? (hasPermission('10007') && <Button size="small" icon="pushpin" onClick={() => this.lock(record.id)}>锁定</Button>)
              : (hasPermission('10008') && <Button size="small" icon="pushpin-o" onClick={() => this.unlock(record.id)}>激活</Button>)
          }
        </div>
      )
    }]

    function createTreeList(list) {
      return list.map(item => {
        return (
          <TreeNode value={item.code} title={item.name} key={item.code}>
            {createTreeList(item.children || [])}
          </TreeNode>
        )
      })
    }
    var treeNodeArr = createTreeList(managerTreeList)

    const uploadProps = {
      name: 'file',
      action: `${global.api}/user/importUserExcel`,
      headers: {
        "token": window.LS.get('token'),
      },
      showUploadList: false,
      onChange: (info) => {
        const { status, response } = info.file
        this.setState({ uploading: status == 'uploading' })
        if (status === 'done') {
          if (response.code === global.successCode) {
            message.success(`${info.file.name}导入成功`)
          } else if (!response.code) {
            /**
             * 返回非json字符串时，当做txt文件下载
             */
            var content = response;
            var elink = document.createElement('a');
            elink.download = `errorUserInfo_${moment(new Date()).format('YYYYMMDDHHmmssms')}.txt`;
            elink.style.display = 'none';
            var blob = new Blob([JSON.stringify(content)], { type: 'text/plain' });
            elink.href = URL.createObjectURL(blob);
            document.body.appendChild(elink);
            elink.click();
          } else {
            message.error(response.message)
          }
        } else if (status === 'error') {
          message.error(`${info.file.name} 导入失败.`);
        }
      }
    }

    return (
      <div className='userManager'>
        用户管理<br /><br />
        <Form className="search" layout="inline">
          <FormItem label="用户账号">
            {getFieldDecorator('searchAccount')(<Input placeholder="请输入用户账号" />)}
          </FormItem>
          <FormItem label="用户名称">
            {getFieldDecorator('searchName')(<Input placeholder="请输入用户名称" />)}
          </FormItem>
          <FormItem label="选择部门">
            {getFieldDecorator('searchDepartment')(
              <TreeSelect
                showSearch
                style={{ width: '200px' }}
                dropdownStyle={{ maxHeight: 200, overflow: 'auto' }}
                placeholder="请选择"
                allowClear
                multiple
                searchValue=''
                treeDefaultExpandAll>
                {treeNodeArr}
              </TreeSelect>
            )}
          </FormItem>
          {
            hasPermission('10001') && (
              <FormItem>
                <Button type="primary" icon="search" onClick={this.getUsers}>查询</Button>
              </FormItem>
            )
          }
          <FormItem>
            <Button icon="reload" onClick={this.resetFields}>重置</Button>
          </FormItem>
        </Form>
        <div className="operate">
          {hasPermission('10002') && <Button icon="user-add" onClick={this.showModal}>用户录入</Button>}
          {hasPermission('10003') && <Upload {...uploadProps} className="upload"><Button icon="upload" loading={uploading}>导入</Button></Upload>}
          {hasPermission('10011') && <Button icon="download" onClick={this._exportUsers}>导出</Button>}
          <Button icon="profile" onClick={this.downloadTemplate}>模板下载</Button>
        </div>
        <Table dataSource={userList} columns={columns} pagination={{
          current: currentPage,
          pageSize,
          total,
          showSizeChanger: true,
          pageSizeOptions: [10, 20, 30],
          showQuickJumper: true,
          onChange: (page, pageSize) => this.setState({ currentPage: page }, () => this.getUsers()),
          onShowSizeChange: (current, size) => this.setState({ pageSize: size, currentPage: 1 }, () => this.getUsers())
        }} />
        <Modal
          title={editUserId ? '编辑用户' : '新增用户'}
          visible={userModalVisible}
          onOk={this.handleSubmit}
          onCancel={() => this.setState({ userModalVisible: false })}
          okText="确认"
          cancelText="取消"
          maskClosable={false}>
          <Form>
            <FormItem
              {...formItemLayout}
              label="用户账号">
              {getFieldDecorator('accountName', {
                rules: [{
                  required: true, message: '请输入用户名！'
                }, {
                  min: 2, max: 10, message: '请输入2-10位字符！'
                }, {
                  whitespace: true, message: '不能全部为空格！'
                }],
              })(
                <Input placeholder="用户账号范围在2~10位字符" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="用户名称">
              {getFieldDecorator('userName', {
                rules: [{
                  required: true, message: '请输入个人真实姓名！',
                }, {
                  min: 2, max: 10, message: '请输入2-10位字符！'
                }, {
                  whitespace: true, message: '不能全部为空格！'
                }],
              })(
                <Input placeholder="填写个人真实姓名" />
              )}
            </FormItem>
            {
              !editUserId &&
              <FormItem
                {...formItemLayout}
                label="密码">
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: '请输入密码！'
                  }, {
                    min: 6, max: 18, message: '密码至少6个字符，最多18个字符！'
                  }, {
                    validator: this.validateToNextPassword_u
                  }],
                })(
                  <Input placeholder="密码至少6个字符，最多18个字符" />
                )}
              </FormItem>
            }
            {
              !editUserId &&
              <FormItem
                {...formItemLayout}
                label="重复密码">
                {getFieldDecorator('rePassword', {
                  rules: [{
                    required: true, message: '请再次输入密码！',
                  }, {
                    min: 6, max: 18, message: '密码至少6个字符，最多18个字符！'
                  }, {
                    validator: this.compareToFirstPassword_u
                  }],
                })(
                  <Input placeholder="请再次输入密码" onBlur={this.rePwdBlur} />
                )}
              </FormItem>
            }
            <FormItem
              {...formItemLayout}
              label="组织机构">
              {getFieldDecorator('organization', {
                rules: [{
                  required: true, message: '请选择组织机构！',
                }],
              })(
                <TreeSelect
                  dropdownStyle={{ maxHeight: 200, overflow: 'auto' }}
                  placeholder="请选择"
                  allowClear
                  treeDefaultExpandAll
                  onChange={(value, label, extra) => this.changeOrganization(value)}>
                  {treeNodeArr}
                </TreeSelect>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="用户角色">
              {getFieldDecorator('role', {
                rules: [{
                  required: true, message: '请选择角色！',
                }],
              })(
                <Select placeholder="请选择角色">
                  {roleList.map(item => <Option value={item.code}>{item.roleName}</Option>)}
                </Select>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="手机号码">
              {getFieldDecorator('telephone', {
                rules: [{
                  required: true, message: '请输入手机号！',
                }, {
                  pattern: /^1[0-9]{10}$/, message: '手机号格式不正确！'
                }],
              })(
                <Input placeholder="请输入手机号" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="办公电话">
              {getFieldDecorator('phone', {
                rules: [{
                  required: true, message: '请输入办公电话！',
                }, {
                  pattern: /^[0-9]{3}-[0-9]{8}$|^[0-9]{4}-[0-9]{7}$/, message: '请输入正确的办公电话格式！如 0511-4405222 或 021-87888822'
                }],
              })(
                <Input placeholder="请输入办公电话" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="常用邮箱">
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: '邮箱格式错误！',
                }, {
                  required: true, message: '请输入常用邮箱！',
                }],
              })(
                <Input placeholder="请输入常用邮箱" />
              )}
            </FormItem>
          </Form>
        </Modal>
        <Modal
          title="重置密码"
          visible={pwdResetVisible}
          destroyOnClose={true}
          onOk={this.pwdResetSubmit}
          onCancel={() => this.setState({ pwdResetVisible: false, confirmDirty: false })}
          okText="确认"
          cancelText="取消"
          maskClosable={false}>
          <Form>
            <FormItem
              {...formItemLayout}
              label="密码">
              {getFieldDecorator('resetPassword', {
                rules: [{
                  required: true, message: '请输入密码！',
                }, {
                  min: 6, max: 18, message: '密码至少6个字符，最多18个字符！'
                }, {
                  validator: this.validateToNextPassword,
                }],
              })(
                <Input placeholder="密码至少6个字符，最多18个字符" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="重复密码">
              {getFieldDecorator('resetRePassword', {
                rules: [{
                  required: true, message: '请再次输入密码！',
                }, {
                  min: 6, max: 18, message: '密码至少6个字符，最多18个字符！'
                }, {
                  validator: this.compareToFirstPassword,
                }],
              })(
                <Input placeholder="请再次输入密码" onBlur={this.resetPwdBlur} />
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { userManager } = state
  return { userManager }
}

UserManager = Form.create()(UserManager)

export default connect(mapStateToProps)(UserManager)
