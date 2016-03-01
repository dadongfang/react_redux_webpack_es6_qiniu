import React from 'react';
import ReactDom from 'react-dom';

// require('../../css/helloWorld');

var dialog = React.createClass({
  displayName: 'dialog',
  render: function() {
    return (
      React.createElement('div', {
        className: "dialogBox"
      }, "Hello, {this.props.name}! I am a dialogBox.")
      // <div className='commentBox'>
      //   Hello, world! I am a CommentBox.
      // </div>
    );
  }
});
ReactDom.render(
  React.createElement('dialog', {
    name: "dialog"
  }, 'dialog'),
  // <HelloWorld>hello,world!</HelloWorld>,
  document.getElementById('dongFang')
);
