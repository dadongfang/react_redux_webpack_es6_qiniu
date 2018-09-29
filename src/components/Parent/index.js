import React from 'react'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'

class Parent extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  componentWillMount() {
    const { route, history, location } = this.props
    if (location.pathname == route.path) { // 父级路由
      let redirect = route.data.redirect
      if (!redirect) {
        if (route.routes.length) {
          redirect = route.routes[0].path
        } else {
          redirect = '/'
        }
      }
      history.replace(redirect)
    }
  }

  render() {
    const { route } = this.props

    return (
      <div className='parent'>
        {renderRoutes(route.routes, { hasParent: true })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Parent)
