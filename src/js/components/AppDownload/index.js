import React from 'react'
require('./css/')

class AppDownload extends React.Component {
  constructor() {
    super()
  }
  hide() {
    this.props.onCloseClick('HIDE')
  }
  download() {
    alert('hello')
  }
  render() {
    const display = this.props.show == 'SHOW' ? 'block' : 'none'
    return (
      <div className='appDownload posRelative floatL' style={{display: display}}>
        <img src={require('./img/freeService_04.jpg')} />
        <span className='close' onClick={this.hide.bind(this)}>&nbsp;</span>
        <span className='download' onClick={this.download}>&nbsp;</span>
      </div>
    )
  }
}

export default AppDownload
