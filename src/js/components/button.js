import React from 'react';
import ReactDom from 'react-dom';

require('../../css/helloWorld');

var button = React.createClass({
  displayName: 'button',
  render: function() {
    return (
      React.createElement('div', {
        className: "buttonBox"
      }, "Hello, {this.props.name}! I am a buttonBox.")
      // <div className='commentBox'>
      //   Hello, world! I am a CommentBox.
      // </div>
    );
  }
});
ReactDom.render(
  React.createElement('button', {
    name: "button"
  }, 'button'),
  // <HelloWorld>hello,world!</HelloWorld>,
  document.getElementById('dongFang')
);
