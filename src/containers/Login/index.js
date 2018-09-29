import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, Icon } from 'antd'
import { login } from 'src/actions/account'
import global from 'src/js/global'
import './index.less'
const FormItem = Form.Item

class Login extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    if (window.LS.get('token')) {
      const { history } = this.props
      history.replace('/')
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.props.logining) return

    this.props.form.validateFields({ force: true }, (err, values) => {
      if (!err) {
        const { dispatch, history } = this.props
        dispatch(login(values)).then(result => {
          if (result.code === global.successCode) {
            window.LS.set('token', result.userDTO.token)
            window.LS.set('userInfo', JSON.stringify(result.userDTO))
            window.LS.set('roleList', JSON.stringify(result.roleMenuList))
            // history.replace('/user')
            window.location.href = '/user'
          }
        })
      }
    })
  }

  render() {
    const { form, logining, error } = this.props
    const { getFieldDecorator } = form

    return (
      <div className='login'>
        <div className='logo'>
          <img alt="" src={global.logo} />
          <span>后台管理系统</span>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{
                required: true,
                message: '请输入用户名'
              }],
            })(
              <Input
                prefix={<Icon type="user" className='prefixIcon' />}
                placeholder="请输入用户名"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{
                required: true,
                message: '请输入密码'
              }],
            })(
              <Input
                prefix={<Icon type="lock" className='prefixIcon' />}
                type="password"
                placeholder="请输入密码"
              />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" loading={logining}>
              登录{logining}
            </Button>
          </FormItem>
          {
            // error && (
            //   <div className='error'>
            //     {/* <Icon type="info-circle" /> */}
            //     {error}
            //   </div>
            // )
          }
        </Form>
      </div>
    )
  }
}

function mapStateToProps({ account }) {
  return {
    logining: account.logining,
    user: account.user,
    error: account.error
  }
}

Login = Form.create()(Login)

export default connect(mapStateToProps)(Login)
