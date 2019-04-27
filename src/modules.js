'use strict';
import $ from 'webpack-zepto';
require('./css/modules.less');

function loadImage(currentImage){
  var oImage = new Image();
  oImage.src = currentImage.getAttribute('data-src');
  oImage.onload = function(){
    currentImage.src = this.src;
    currentImage.className = 'on';
    oImage = null;
  }
  currentImage.setAttribute('isLoad' ,true);
}

function loadAllImage(){
  var imageList = document.getElementById('image-list');
  var images = imageList.getElementsByTagName('img');
  for( var i=0,len=images.length; i<len; i++ ){
    if( !!images[i].getAttribute('isLoad') ) continue;
    var parentNode = images[i].parentNode;
    var selfHeight = $(parentNode).offset().top + images[i].offsetHeight;
    var windowHeight = $(window).height() + $(window).scrollTop();
    if( selfHeight < windowHeight ){
      loadImage(images[i]);
    }
  }
}

window.setTimeout(loadAllImage, 500);

window.onscroll = loadAllImage;
