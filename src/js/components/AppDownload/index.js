import React from 'react';
require('./css/');

class AppDownload extends React.Component {
  constructor() {
    super()
    this.hide = this.hide.bind(this)
    this.state = {
      display: 'block'
    }
  }
  hide() {
    this.setState({
      display: 'none'
    })
  }
  download() {
    alert('hello')
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
