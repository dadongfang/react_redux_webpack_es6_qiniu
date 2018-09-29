import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './index.less'

class Home extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  componentWillMount() {
    console.info(this)
    // this.props.history.replace('/user')
  }

  render() {
    return (
      <div className='home'>
        <div className='posRelative floatL'>
          <span className='freeButton'>
            首页<br /><br />
            {/* <Link to='/user' className='block_a'>用户管理</Link> */}
          </span>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Home)
