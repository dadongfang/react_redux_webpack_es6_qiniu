import React from 'react'
import {Link} from 'react-router'

require('../../css/helloWorld')
// require.ensure(['./dialog'], function(require) {
//   //todo
// }, 'dialog');

class FreeEntry extends React.Component{
  render() {
    return (
      <div className='commentBox'>
        Hello, world! I am a CommentBox.
        <Link to='/free'>freeservice</Link>
      </div>
    )
  }
}

module.exports = FreeEntry
