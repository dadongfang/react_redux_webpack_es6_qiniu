import React from 'react'
import { Link } from 'react-router'

require('../../css/FreeEntry')
import AppDownload from './AppDownload/'
// require.ensure(['./dialog'], function(require) {
//   //todo
// }, 'dialog');

class FreeEntry extends React.Component {
  render() {
    return (
      <div className='freeEntry'>
        <img src={require('../../img/freeService_01.jpg')} />
        <img src={require('../../img/freeService_02.jpg')} />
        <div className='posRelative floatL'>
          <img src={require('../../img/freeService_03.jpg')} />
          <span className='freeButton'>
            <Link to='/free' className='block_a'>&nbsp;</Link>
          </span>
        </div>
        <AppDownload />
        <div className='clear'></div>
      </div>
    )
  }
}

module.exports = FreeEntry
