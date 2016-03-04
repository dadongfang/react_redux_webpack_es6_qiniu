import React from 'react';
<<<<<<< HEAD
require('./css/');

=======

require('./css/');

const device = global.device
>>>>>>> e1864dfa9eb19668a89eeb86760f69c389b2e915
class AppDownload extends React.Component {
  constructor() {
    super()
    this.hide = this.hide.bind(this)

<<<<<<< HEAD
    const device = global.device
=======
>>>>>>> e1864dfa9eb19668a89eeb86760f69c389b2e915
    this.state = {
      display: device == 'h5' ? 'block' : 'none'
    }
  }
  hide() {
    this.setState({
      display: 'none'
    })
  }
  download() {
    //统计点击量
<<<<<<< HEAD
    global.count('56d68c9b2db23d2049e5a219');
=======
    const ApiUrl = global.ApiUrl
    const signParams = global.signParams

    var params = {
      trackId: '56d68c9b2db23d2049e5a219',
      trackType: 'EVENT',
      referrer: document.referrer,
      current: location.href,
      source: device.toUpperCase()
    };
    const sign = signParams(params);
    $.ajax({
      url: ApiUrl + '/v1.1/insights/trackers',
      data: params,
      async: true,
      type: 'POST',
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Sign", sign)
      },
      success: function (data) {
        //todo
      }
    });
>>>>>>> e1864dfa9eb19668a89eeb86760f69c389b2e915

    window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.boqii.petlifehouse&ckey=CK1323968426615';
  }
  render() {
    const Display = this.state.display;
    return (
      <div className='appDownload posRelative floatL' style={{display: Display}}>
        <img src={require('./img/freeService_04.jpg')} />
        <span className='close' onClick={this.hide}>&nbsp;</span>
        <span className='download' onClick={this.download}>&nbsp;</span>
      </div>
    )
  }
}

export default AppDownload
