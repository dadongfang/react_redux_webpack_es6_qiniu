import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Table, Popconfirm, Select, Input, Button, Modal, message, Upload } from 'antd'
import moment from 'moment'
import { getUserList, modifyUser, lockUser, activeUser } from 'src/actions/userManager'
import { hasPermission } from 'src/js/tools'
import global from 'src/js/global'
import './index.less'

const FormItem = Form.Item;
const Option = Select.Option;

class TrumpetList extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      userModalVisible: false,
      editUserId: '',
      currentPage: 1,
      pageSize: 10,
      total: 0
    }

    this.getUsers = this.getUsers.bind(this)
    this.editUser = this.editUser.bind(this)
    this._exportUsers = this._exportUsers.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.getUsers()
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
    }))
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

  // 修改小号信息
  handleSubmit(e) {
    e.preventDefault()
    const { dispatch, form } = this.props
    const { editUserId } = this.state
    const fieldsArr = ['userName', 'organization', 'role', 'telephone', 'phone', 'email']

    form.validateFieldsAndScroll(fieldsArr, (err, values) => {
      if (!err) {
        console.log('用户信息: ', values);
        var userJson = { modifyUserBaseDTO: Object.assign(values, { id: editUserId }) }
        dispatch(modifyUser(userJson)).then(result => {
          if (result.code === global.successCode) {
            message.success('修改成功')
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

  render() {
    const { userModalVisible, roleList = [], uploading } = this.state
    const { userManager, form } = this.props
    const { getFieldDecorator } = form
    const { userList } = userManager
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
      title: '通讯服务商',
      dataIndex: 'accountName'
    }, {
      title: '归属地',
      dataIndex: 'userName'
    }, {
      title: '小号',
      dataIndex: 'organizationName'
    }, {
      title: '状态',
      dataIndex: 'roleName'
    }, {
      title: '操作人',
      dataIndex: 'createTime',
      render: (text, record)=> moment(text).format('YYYY-MM-DD HH:mm:ss')
    }, {
      title: '操作时间',
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
          {
            record.status === '1'
              ? (hasPermission('10007') && <Button size="small" icon="pushpin" onClick={() => this.lock(record.id)}>锁定</Button>)
              : (hasPermission('10008') && <Button size="small" icon="pushpin-o" onClick={() => this.unlock(record.id)}>激活</Button>)
          }
        </div>
      )
    }]

    const uploadProps = {
      name: 'file',
      action: `${global.api}/user/importUserExcel`,
      headers: {
        "token": window.LS.get('token')
      },
      showUploadList: false,
      onChange: (info)=> {
        const { status, response} = info.file
        this.setState({uploading: status == 'uploading'})
        if (status === 'done') {
          if (response.code === global.successCode) {
            message.success(`${info.file.name}导入成功`)
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
        小号管理<br /><br />
        <Form className="search" layout="inline">
          <FormItem label="归属地">
            {getFieldDecorator('searchAccount')(<Input placeholder="请输入归属地" />)}
          </FormItem>
          <FormItem label="小号">
            {getFieldDecorator('searchName')(<Input placeholder="请输入小号" />)}
          </FormItem>
          <FormItem label="状态">
            {getFieldDecorator('searchDepartment')(
              <Select placeholder="请选择" style={{width: '200px'}}>
                {/* {roleList.map(item => <Option value={item.code}>{item.roleName}</Option>)} */}
              </Select>
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
            <Button icon="reload" onClick={() => form.resetFields(['searchAccount', 'searchName', 'searchDepartment'])}>重置</Button>
          </FormItem>
        </Form>
        <div className="operate">
          {hasPermission('10003') && <Upload {...uploadProps} className="upload"><Button icon="upload" loading={uploading}>导入</Button></Upload>}
          {hasPermission('10011') && <Button icon="download" onClick={this._exportUsers}>导出</Button>}
          <Button icon="profile" onClick={this.downloadTemplate}>模板下载</Button>
        </div>
        <Table dataSource={userList} columns={columns} pagination={{
          showSizeChanger: true,
          pageSizeOptions: [10, 20, 30],
          showQuickJumper: true,
          onShowSizeChange: (current, size) => { this.setState({ pageSize: size }) }
        }} />
        <Modal
          title='小号管理-修改'
          visible={userModalVisible}
          onOk={this.handleSubmit}
          onCancel={() => this.setState({ userModalVisible: false })}
          okText="确认"
          cancelText="取消">
          <Form>
            <FormItem
              {...formItemLayout}
              label="通讯服务商"
            >{getFieldDecorator('accountName', {
              rules: [{
                required: true, message: '请输入用户名',
              }],
            })(
              <Input placeholder="用户账号范围在2~10位字符" />
            )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="归属地"
            >{getFieldDecorator('userName', {
              rules: [{
                required: true, message: '请输入个人真实姓名',
              }],
            })(
              <Input placeholder="填写个人真实姓名" />
            )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="小号"
            >{getFieldDecorator('email', {
              rules: [{
                type: 'email', message: '邮箱格式错误',
              }, {
                required: true, message: '请输入常用邮箱',
              }],
            })(
              <Input placeholder="请输入常用邮箱" />
            )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="状态"
            >{getFieldDecorator('role', {
              rules: [{
                required: true, message: '请选择角色',
              }],
            })(
              <Select placeholder="请选择角色">
                {roleList.map(item => <Option value={item.code}>{item.roleName}</Option>)}
              </Select>
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

TrumpetList = Form.create()(TrumpetList)

export default connect(mapStateToProps)(TrumpetList)
