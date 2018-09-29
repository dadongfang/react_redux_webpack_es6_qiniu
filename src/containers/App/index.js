import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch, Prompt, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { LocaleProvider, Menu, Icon, Layout, Dropdown, Spin, Avatar, Modal, Form, Input, List, message } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import { renderRoutes } from 'react-router-config'
import Loadable from 'react-loadable'
import _ from 'lodash'

// import Sider from './sider'
// import Header from './header'
import Loading from 'src/components/Loading'
import { logout, changePwd } from 'src/actions/account'
import routerConfig from 'src/router'
import global from 'src/js/global'
import './index.less'
const SubMenu = Menu.SubMenu
const { Header, Sider, Content } = Layout
const FormItem = Form.Item

const ErrorDisplay = ({ error }) => <div>{error.message}</div>
const Login = Loadable({ loader: () => import('../Login'), loading: () => Loading, ErrorComponent: ErrorDisplay })

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapsed: false,
      authorizedRoute: [],
      openKeys: [],
      selectedKeys: []
    }

    this.authorized = this.authorized.bind(this)
    this.toggleCollapsed = this.toggleCollapsed.bind(this)
    this.renderMenu = this.renderMenu.bind(this)
    this.onMenuClick = this.onMenuClick.bind(this)
    this.changePwdSubmit = this.changePwdSubmit.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.validateToNextPassword = this.validateToNextPassword.bind(this)
    this.compareToFirstPassword = this.compareToFirstPassword.bind(this)
    this.openMenu = this.openMenu.bind(this)
    this.onMenu = this.onMenu.bind(this)
    this.repeatPwdBlur = this.repeatPwdBlur.bind(this)
  }

  componentDidMount() {
    const userInfo = JSON.parse(window.LS.get('userInfo') || '{}')
    const roleList = JSON.parse(window.LS.get('roleList') || '{}')
    const menuRoleList = _.map(_.filter(roleList, { type: '1', roleid: parseInt(userInfo.role) }), 'id')

    let { authorizedRoute, openKeys, selectedKeys } = this.state
    var getAuthorizedRoute = (routes, childMenu) => {
      routes.map(route => {
        if (route.data) {
          // 有权限或者标志为总是显示的
          if (route.data.id && _.includes(menuRoleList, route.data.id) || route.data.showAlways) {
            // 不包含标志为隐藏的
            if (!route.data.hide) {
              childMenu.push({
                path: route.path,
                exact: route.exact,
                component: route.component,
                data: route.data
              })
              // 含有子级路由
              if (route.routes && route.routes.length) {
                const subchildMenu = childMenu[childMenu.length - 1]
                subchildMenu.routes = []
                getAuthorizedRoute(route.routes, subchildMenu.routes)
              }
            }
          }
        }
      })
    }
    getAuthorizedRoute(routerConfig, authorizedRoute)
    window.LS.set('authorizedRoute', JSON.stringify(authorizedRoute))

    if (!this.combineProps) {
      return
    }
    const currentPath = this.combineProps.location.pathname
    authorizedRoute.map((menu, index) => {
      if (menu.path == currentPath) {
        selectedKeys.push(index.toString())
      } else if (menu.routes && menu.routes.length) {
        menu.routes.map((submenu, subindex) => {
          if (submenu.path == currentPath) {
            selectedKeys.push(`sub${index}-${subindex}`)
            openKeys.push(`sub${index}`)
          }
        })
      }
    })
    this.setState({
      authorizedRoute,
      openKeys,
      selectedKeys
    })
  }

  toggleCollapsed() {
    this.setState({ collapsed: !this.state.collapsed })
  }

  openMenu(openKeys) {
    this.setState({ openKeys })
  }

  onMenu({ item, key, keyPath }) {
    this.setState({ selectedKeys: [key] })
  }

  renderMenu() {
    const { authorizedRoute, openKeys, selectedKeys } = this.state
    console.info(routerConfig, this.combineProps, authorizedRoute, selectedKeys, openKeys)

    return (
      <Menu
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        mode="inline"
        theme="dark"
        inlineCollapsed={this.state.collapsed}
        className="menu"
        onOpenChange={this.openMenu}
        onClick={this.onMenu}>
        {
          authorizedRoute.map((menu, index) => {
            if (!menu.routes) {
              return (
                <Menu.Item key={index}>
                  <Link to={menu.path}>
                    <Icon type={menu.data.icon || "home"} />
                    <span>{menu.data.title}</span>
                  </Link>
                </Menu.Item>
              )
            } else {
              return (
                <SubMenu key={`sub${index}`} title={<span><Icon type={menu.data.icon || "home"} /><span>{menu.data.title}</span></span>}>
                  {
                    menu.routes.map((submenu, subindex) => {
                      return (
                        <Menu.Item key={`sub${index}-${subindex}`}>
                          <Link to={submenu.path}>
                            {/* <Icon type={submenu.data.icon || "home"} /> */}
                            <span>{submenu.data.title}</span>
                          </Link>
                        </Menu.Item>
                      )
                    })
                  }
                </SubMenu>
              )
            }
          })
        }
      </Menu>
    )
  }

  renderSider() {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
      >
        <div className='logo'>
          <Link to="/">
            <img src={global.logo} alt="logo" />
            <h1>后台管理</h1>
          </Link>
        </div>
        {this.renderMenu()}
      </Sider>
    )
  }

  onMenuClick({ key }) {
    switch (key) {
      case 'logout':
        const { dispatch, history } = this.combineProps
        dispatch(logout()).then(result => {
          if (result.code === global.successCode) {
            window.LS.remove('token')
            window.LS.remove('userInfo')
            window.LS.remove('roleList')
            // history.replace('/login')
            window.location.href = '/login'
          }
        })
        break
      case 'changePwd':
        this.handleModal('changePwdVisible', true)
        break
      case 'userInfo':
        this.handleModal('userInfoVisible', true)
        break
      default:
    }
  }

  changePwdSubmit() {
    const { form, dispatch } = this.props
    const userInfo = JSON.parse(window.LS.get('userInfo') || '{}')

    form.validateFields({ force: true }, (err, values) => {
      if (!err) {
        this.setState({ confirmLoading: true })
        dispatch(changePwd(Object.assign(values))).then(result => {
          this.setState({ confirmLoading: false })
          if (result.code === global.successCode) {
            message.success('密码修改成功.')
            this.setState({ changePwdVisible: false })
          }
        })
      }
    })
  }

  handleModal(modal, show) {
    this.setState({ [modal]: show })
  }

  validateToNextPassword(rule, value, callback) {
    const form = this.props.form
    if (value && this.state.confirmDirty) {
      form.validateFields(['repeatNewPwd'], { force: true })
    }
    callback()
  }

  compareToFirstPassword(rule, value, callback) {
    const form = this.props.form
    if (value && value !== form.getFieldValue('newPassword')) {
      callback('两次输入的密码不一致！')
    } else {
      callback()
    }
  }

  repeatPwdBlur(e) {
    const value = e.target.value
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }

  renderHeader() {
    const { collapsed, changePwdVisible, userInfoVisible, confirmLoading } = this.state
    const { getFieldDecorator } = this.props.form
    const userInfo = JSON.parse(window.LS.get('userInfo') || '{}')

    const menu = (
      <Menu className='menu' selectedKeys={[]} onClick={this.onMenuClick}>
        <Menu.Item key="changePwd">
          <Icon type="edit" />修改密码
        </Menu.Item>
        <Menu.Item key="userInfo">
          <Icon type="user" />个人信息
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />退出登录
        </Menu.Item>
      </Menu>
    )

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 },
      }
    }

    return (
      <Header>
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggleCollapsed} />
        <div className="right">
          {
            userInfo ? (
              <Dropdown overlay={menu}>
                <span className='account'>
                  <Avatar size="small" className="avatar" src={global.logo} />
                  <span className="name">{userInfo.accountName} {userInfo.roleName}</span>
                </span>
              </Dropdown>
            ) : (
                <Spin size="small" style={{ marginLeft: 8 }} />
              )
          }
          <Modal title="修改密码"
            visible={changePwdVisible}
            confirmLoading={confirmLoading}
            onOk={this.changePwdSubmit}
            onCancel={() => this.handleModal('changePwdVisible', false)}
            destroyOnClose={true}
            maskClosable={false}>
            <Form>
              <FormItem
                {...formItemLayout}
                label="原密码">
                {getFieldDecorator('oldPassword', {
                  rules: [{
                    required: true, message: '请输入原密码！'
                  }, {
                    min: 6, max: 18, message: '密码至少6个字符，最多18个字符！'
                  }],
                })(<Input type="password" />)}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="新密码">
                {getFieldDecorator('newPassword', {
                  rules: [{
                    required: true, message: '请输入新密码！'
                  }, {
                    min: 6, max: 18, message: '密码至少6个字符，最多18个字符！'
                  }, {
                    validator: this.validateToNextPassword
                  }],
                })(<Input type="password" />)}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="重复新密码">
                {getFieldDecorator('repeatNewPwd', {
                  rules: [{
                    required: true, message: '请输入重复新密码！'
                  }, {
                    min: 6, max: 18, message: '密码至少6个字符，最多18个字符！'
                  }, {
                    validator: this.compareToFirstPassword
                  }],
                })(<Input type="password" onBlur={this.repeatPwdBlur} />)}
              </FormItem>
            </Form>
          </Modal>
          <Modal title="个人信息"
            visible={userInfoVisible}
            confirmLoading={confirmLoading}
            onCancel={() => this.handleModal('userInfoVisible', false)}
            footer={null}>
            <List
              bordered
              dataSource={[
                `用户账号：${userInfo.accountName}`,
                `姓名：${userInfo.userName}`,
                `手机号码：${userInfo.telephone}`,
                `办公电话：${userInfo.phone}`,
                `邮箱：${userInfo.email}`,
                `组织机构：${userInfo.organization}`
              ]}
              renderItem={item => (<List.Item>{item}</List.Item>)}
            />
          </Modal>
        </div>
      </Header>
    )
  }

  renderLayout(router) {
    const { loading } = this.props

    return (
      <Layout>
        <Loading loading={loading} />
        {this.renderSider()}
        <Layout>
          {this.renderHeader()}
          <Content>
            {router}
          </Content>
        </Layout>
      </Layout>
    )
  }

  authorized(props) {
    const { authorizedRoute } = this.state
    this.combineProps = { ...props, ...this.props }
    const logined = window.LS.get('token')
    return logined ? this.renderLayout(renderRoutes(authorizedRoute)) : <Redirect to="/login" />
  }

  render() {
    return (
      <Router>
        <LocaleProvider locale={zh_CN}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/" render={this.authorized} />
          </Switch>
        </LocaleProvider>
      </Router>
    )
  }
}


const mapStateToProps = ({ account, loading }) => {
  return {
    userInfo: account.userInfo,
    loading: loading.loading,
    error: account.error
  }
}

App = Form.create()(App)

export default connect(mapStateToProps)(App)
