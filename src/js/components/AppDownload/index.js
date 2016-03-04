import React from 'react';
require('./css/');

class AppDownload extends React.Component {
  constructor() {
    super()
    this.hide = this.hide.bind(this)

    const device = global.device
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
    global.count('56d68c9b2db23d2049e5a219');

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
