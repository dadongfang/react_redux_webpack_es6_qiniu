import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { appDownload } from '../actions/appDownload'
import AppDownload from '../components/AppDownload/'
require('../../css/Home')

class Home extends React.Component {
  render() {
    const { dispatch, showDownload } = this.props
    return (
      <div className='home'>
        <img src={require('../../img/freeService_02.jpg')} />
        <div className='posRelative floatL'>
          <img src={require('../../img/freeService_03.jpg')} />
          <span className='freeButton'>
            <Link to='/another' className='block_a'>&nbsp;</Link>
          </span>
        </div>
        <AppDownload
          show={showDownload}
          onCloseClick={ show =>
            dispatch(appDownload(show))
          } />
        <div className='clear'></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { showDownload: state.appDownload }
}

export default connect(mapStateToProps)(Home)
