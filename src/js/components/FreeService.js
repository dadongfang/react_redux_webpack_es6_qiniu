import React from 'react'

require('../../css/FreeService')

class FreeService extends React.Component {
  constructor() {
    super()
    this.goService = this.goService.bind(this)
    this.goShare = this.goShare.bind(this)
    this.state = {
      wechat: false,
      showShareHint: 'none'
    }
  }
  goService() {
    const device = global.default.device
    const isIphone = global.default.isIphone
    const ipad = global.default.ipad
    const isAndroid = global.default.isAndroid
    
    if (device == 'h5') {
      window.location.href = 'http://v.boqii.com/merchants/1/a//o/?cityId=3201';
    } else {
      if (isIphone || ipad) {
        var apiurl = encodeURIComponent("boqii://BQMerchantListViewController/bqh5");

        $("#forms").attr("action", apiurl).submit();
      } else if (isAndroid) {
        var param = 'INDEX=' + 4;
        var path = "com.boqii.petlifehouse.activities.NewListMerchantActivity";
        Boqii.Jump(path, param);
      }
    }
  }
  goShare() {
    let status = this.state.showShareHint
    status = status == 'none' ? 'block' : 'none'
    this.setState({
      showShareHint: status
    })
  }
  render() {
    return (
      <div className='freeService'>
        <img src='../img/freeService_05.jpg' />
        <img src='../img/freeService_06.jpg' />
        <img src='../img/freeService_07.jpg' />
        <div className='posRelative floatL'>
          {
            this.state.wechat ?
              <div>
                <img src='../img/freeService_share.jpg' />
                <span className='goService' onClick={this.goService}>&nbsp;</span>
                <span className='goShare' onClick={this.goShare}>&nbsp;</span>
              </div>
            :
              <div>
                <img src='../img/freeService_noshare.jpg' />
                <span className='goService_noshare' onClick={this.goService}>&nbsp;</span>
              </div>
          }
        </div>
        <img src='../img/freeService_08.jpg' />
        <img src='../img/freeService_09.jpg' />
        <img src='../img/freeService_10.jpg' />
        <img src='../img/freeService_11.jpg' />
        <img src='../img/freeService_12.jpg' />
        <img src='../img/freeService_13.jpg' />
        <div className='clear'></div>
        <div className='shareHint' style={{display: this.state.showShareHint}}>
          <div className='posRelative'>
            <img src='../img/share_hint.png' />
            <span className='close' onClick={this.goShare}>&nbsp;</span>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = FreeService
