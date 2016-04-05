import React from 'react'
import { Link } from 'react-router'

require('../../css/Home')
import AppDownload from './AppDownload/'

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <img src={require('../../img/freeService_02.jpg')} />
        <div className='posRelative floatL'>
          <img src={require('../../img/freeService_03.jpg')} />
          <span className='freeButton'>
            <Link to='/another' className='block_a'>&nbsp;</Link>
          </span>
        </div>
        <AppDownload />
        <div className='clear'></div>
      </div>
    )
  }
}

module.exports = Home
