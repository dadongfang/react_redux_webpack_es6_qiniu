import React from 'react';
import ReactDom from 'react-dom';

require('../../css/helloWorld');

var HelloWorld = React.createClass({
  displayName: 'HelloWorld',
  render: function() {
    return (
      React.createElement('div', {
        className: "commentBox"
      }, "Hello, {this.props.name}! I am a CommentBox.")
      // <div className='commentBox'>
      //   Hello, world! I am a CommentBox.
      // </div>
    );
  }
});
ReactDom.render(
  React.createElement('HelloWorld', {
    name: "world"
  }, 'test.0'),
  // <HelloWorld>hello,world!</HelloWorld>,
  document.getElementById('dongFang')
);
