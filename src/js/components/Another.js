import React from 'react'
require('../../css/Another')

class Another extends React.Component {
  constructor() {
    super()
    this.goService = this.goService.bind(this)
    this.goShare = this.goShare.bind(this)

    const isWeixin = global.isWeixin
    this.state = {
      wechat: isWeixin,
      showShareHint: 'none'
    }
  }
  goService() {
    alert('hello')
  }
  goShare() {
    let status = this.state.showShareHint == 'none' ? 'block' : 'none'
    this.setState({
      showShareHint: status
    })
  }
  render() {
    return (
      <div className='another'>
        <img src={require('../../img/freeService_05.jpg')} />
        <div className='posRelative floatL'>
          {
            this.state.wechat ?
              <div>
                <img src={require('../../img/freeService_share.jpg')} />
                <span className='goService' onClick={this.goService}>&nbsp;</span>
                <span className='goShare' onClick={this.goShare}>&nbsp;</span>
              </div>
            :
              <div>
                <img src={require('../../img/freeService_noshare.jpg')} />
                <span className='goService_noshare' onClick={this.goService}>&nbsp;</span>
              </div>
          }
        </div>
        <img src={require('../../img/freeService_08.jpg')} />
        <div className='clear'></div>
        <div className='shareHint' style={{display: this.state.showShareHint}}>
          <div className='posRelative'>
            <img src={require('../../img/share_hint.png')} />
            <span className='close' onClick={this.goShare}>&nbsp;</span>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Another
