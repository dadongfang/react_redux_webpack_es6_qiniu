webpackJsonp([1,3],{

/***/ 127:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "#cont {\r\n  background: url(" + __webpack_require__(257) + ") repeat-y;\r\n  background-size: contain;\r\n}\r\n.home img {\r\n  float: left;\r\n  width: 100%;\r\n}\r\n.home .freeButton {\r\n  width: 55%;\r\n  height: 29%;\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 63%;\r\n  left: 23%;\r\n}\r\n", ""]);
	
	// exports


/***/ },

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, ".appDownload .close {\n    width: 6%;\n    height: 35%;\n    display: inline-block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.appDownload .download {\n    width: 35%;\n    height: 36%;\n    display: inline-block;\n    position: absolute;\n    top: 52%;\n    left: 38%;\n}\r\n", ""]);
	
	// exports


/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\pro\\react-es6-postcss-webpack\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\pro\\react-es6-postcss-webpack\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(256);
	
	var AppDownload = function (_React$Component) {
	  _inherits(AppDownload, _React$Component);
	
	  function AppDownload() {
	    _classCallCheck(this, AppDownload);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(AppDownload).call(this));
	  }
	
	  _createClass(AppDownload, [{
	    key: 'hide',
	    value: function hide() {
	      this.props.onCloseClick('HIDE');
	    }
	  }, {
	    key: 'download',
	    value: function download() {
	      alert('hello');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var display = this.props.show == 'SHOW' ? 'block' : 'none';
	      return _react2.default.createElement(
	        'div',
	        { className: 'appDownload posRelative floatL', style: { display: display } },
	        _react2.default.createElement('img', { src: __webpack_require__(265) }),
	        _react2.default.createElement(
	          'span',
	          { className: 'close', onClick: this.hide.bind(this) },
	          ' '
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: 'download', onClick: this.download },
	          ' '
	        )
	      );
	    }
	  }]);
	
	  return AppDownload;
	}(_react2.default.Component);
	
	exports.default = AppDownload;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\pro\\react-es6-postcss-webpack\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\pro\\react-es6-postcss-webpack\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\pro\\react-es6-postcss-webpack\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(91);
	
	var _reactRedux = __webpack_require__(83);
	
	var _appDownload = __webpack_require__(125);
	
	var _AppDownload = __webpack_require__(246);
	
	var _AppDownload2 = _interopRequireDefault(_AppDownload);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(254);
	
	var Home = function (_React$Component) {
	  _inherits(Home, _React$Component);
	
	  function Home() {
	    _classCallCheck(this, Home);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).apply(this, arguments));
	  }
	
	  _createClass(Home, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var dispatch = _props.dispatch;
	      var showDownload = _props.showDownload;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'home' },
	        _react2.default.createElement('img', { src: __webpack_require__(258) }),
	        _react2.default.createElement(
	          'div',
	          { className: 'posRelative floatL' },
	          _react2.default.createElement('img', { src: __webpack_require__(259) }),
	          _react2.default.createElement(
	            'span',
	            { className: 'freeButton' },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/another', className: 'block_a' },
	              ' '
	            )
	          )
	        ),
	        _react2.default.createElement(_AppDownload2.default, {
	          show: showDownload,
	          onCloseClick: function onCloseClick(show) {
	            return dispatch((0, _appDownload.appDownload)(show));
	          } }),
	        _react2.default.createElement('div', { className: 'clear' })
	      );
	    }
	  }]);
	
	  return Home;
	}(_react2.default.Component);
	
	function mapStateToProps(state) {
	  return { showDownload: state.appDownload };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Home);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\pro\\react-es6-postcss-webpack\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Home.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(127);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./Home.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./Home.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(129);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/postcss-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/postcss-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 257:
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCAACAoADAREAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAgMAAQQI/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAIBA//aAAwDAQACEAMQAAAA+vHTGMYw3NlCpUsXLFy5csegtS9LYs513pUq5sYhGMYxnTbznjAbxgzeLnvMzRVPRwJkEwqCQqYAgAcJhAAmAmBUwJCpgAEmoJ4TVkzV/8QAHRAAAgMBAQEBAQAAAAAAAAAAAAEDEDJBAlEgMP/aAAgBAQABPwD9R5I+kfSPJHwj6R6I8sh0R8I+EfSPpAR5ZHojwyAj0R9I9V8/l5p6dyadyaZ6zfo9ZOOnpjy6enfseXf0k0j2SYY8u3pns46emcdcdf/EABoRAAIDAQEAAAAAAAAAAAAAAAABAhBAQUL/2gAIAQIBAT8Ax8qJ6xRHURjI29//xAAbEQACAwADAAAAAAAAAAAAAAAAEAECQSAwUP/aAAgBAwEBPwDxqqrzhppKr31KqTDCpKwlSv/Z"

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/img/ab4ffdff.freeService_02.jpg";

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/img/6a061426.freeService_03.jpg";

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/img/dd23cdd2.freeService_04.jpg";

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL0hvbWUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0FwcERvd25sb2FkL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvQXBwRG93bmxvYWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbnRhaW5lcnMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL0hvbWUuY3NzP2NiZWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvQXBwRG93bmxvYWQvY3NzL2luZGV4LmNzcz8yOTVhIiwid2VicGFjazovLy8uL3NyYy9pbWcvYmcuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvZnJlZVNlcnZpY2VfMDIuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvZnJlZVNlcnZpY2VfMDMuanBnIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0FwcERvd25sb2FkL2ltZy9mcmVlU2VydmljZV8wNC5qcGciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7QUFHQTtBQUNBLGtDQUFpQyxpRUFBaUUsK0JBQStCLEtBQUssZUFBZSxrQkFBa0Isa0JBQWtCLEtBQUssdUJBQXVCLGlCQUFpQixrQkFBa0IsNEJBQTRCLHlCQUF5QixlQUFlLGdCQUFnQixLQUFLOztBQUVqVjs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLGdEQUErQyxnQkFBZ0Isa0JBQWtCLDRCQUE0Qix5QkFBeUIsYUFBYSxjQUFjLEdBQUcsMEJBQTBCLGlCQUFpQixrQkFBa0IsNEJBQTRCLHlCQUF5QixlQUFlLGdCQUFnQixHQUFHOztBQUV4VDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7Ozs7Ozs7Ozs7OztBQUNBLHFCQUFRLEdBQVI7O0tBRU07OztBQUNKLFlBREksV0FDSixHQUFjOzJCQURWLGFBQ1U7O21FQURWLHlCQUNVO0lBQWQ7O2dCQURJOzs0QkFJRztBQUNMLFlBQUssS0FBTCxDQUFXLFlBQVgsQ0FBd0IsTUFBeEIsRUFESzs7OztnQ0FHSTtBQUNULGFBQU0sT0FBTixFQURTOzs7OzhCQUdGO0FBQ1AsV0FBTSxVQUFVLEtBQUssS0FBTCxDQUFXLElBQVgsSUFBbUIsTUFBbkIsR0FBNEIsT0FBNUIsR0FBc0MsTUFBdEMsQ0FEVDtBQUVQLGNBQ0U7O1dBQUssV0FBVSxnQ0FBVixFQUEyQyxPQUFPLEVBQUMsU0FBUyxPQUFULEVBQVIsRUFBaEQ7U0FDRSx1Q0FBSyxLQUFLLG9CQUFRLEdBQVIsQ0FBTCxFQUFMLENBREY7U0FFRTs7YUFBTSxXQUFVLE9BQVYsRUFBa0IsU0FBUyxLQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsSUFBZixDQUFULEVBQXhCOztVQUZGO1NBR0U7O2FBQU0sV0FBVSxVQUFWLEVBQXFCLFNBQVMsS0FBSyxRQUFMLEVBQXBDOztVQUhGO1FBREYsQ0FGTzs7OztVQVZMO0dBQW9CLGdCQUFNLFNBQU47O21CQXNCWCxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJmOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBLHFCQUFRLEdBQVI7O0tBRU07Ozs7Ozs7Ozs7OzhCQUNLO29CQUM0QixLQUFLLEtBQUwsQ0FENUI7V0FDQywyQkFERDtXQUNXLG1DQURYOztBQUVQLGNBQ0U7O1dBQUssV0FBVSxNQUFWLEVBQUw7U0FDRSx1Q0FBSyxLQUFLLG9CQUFRLEdBQVIsQ0FBTCxFQUFMLENBREY7U0FFRTs7YUFBSyxXQUFVLG9CQUFWLEVBQUw7V0FDRSx1Q0FBSyxLQUFLLG9CQUFRLEdBQVIsQ0FBTCxFQUFMLENBREY7V0FFRTs7ZUFBTSxXQUFVLFlBQVYsRUFBTjthQUNFOztpQkFBTSxJQUFHLFVBQUgsRUFBYyxXQUFVLFNBQVYsRUFBcEI7O2NBREY7WUFGRjtVQUZGO1NBUUU7QUFDRSxpQkFBTSxZQUFOO0FBQ0EseUJBQWU7b0JBQ2IsU0FBUyw4QkFBWSxJQUFaLENBQVQ7WUFEYSxFQUZqQixDQVJGO1NBYUUsdUNBQUssV0FBVSxPQUFWLEVBQUwsQ0FiRjtRQURGLENBRk87Ozs7VUFETDtHQUFhLGdCQUFNLFNBQU47O0FBdUJuQixVQUFTLGVBQVQsQ0FBeUIsS0FBekIsRUFBZ0M7QUFDOUIsVUFBTyxFQUFFLGNBQWMsTUFBTSxXQUFOLEVBQXZCLENBRDhCO0VBQWhDOzttQkFJZSx5QkFBUSxlQUFSLEVBQXlCLElBQXpCLEU7Ozs7Ozs7OztBQ2xDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFtRjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUE0RjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7OztBQ3BCQSxtQ0FBa0MsZ3VCOzs7Ozs7O0FDQWxDLDZFOzs7Ozs7O0FDQUEsNkU7Ozs7Ozs7QUNBQSw2RSIsImZpbGUiOiJqcy9Ib21lLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjY29udCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vaW1nL2JnLmpwZ1wiKSArIFwiKSByZXBlYXQteTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuLmhvbWUgaW1nIHtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5ob21lIC5mcmVlQnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA1NSU7XFxyXFxuICBoZWlnaHQ6IDI5JTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNjMlO1xcclxcbiAgbGVmdDogMjMlO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9wb3N0Y3NzLWxvYWRlciEuL3NyYy9jc3MvSG9tZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFwcERvd25sb2FkIC5jbG9zZSB7XFxuICAgIHdpZHRoOiA2JTtcXG4gICAgaGVpZ2h0OiAzNSU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcbi5hcHBEb3dubG9hZCAuZG93bmxvYWQge1xcbiAgICB3aWR0aDogMzUlO1xcbiAgICBoZWlnaHQ6IDM2JTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTIlO1xcbiAgICBsZWZ0OiAzOCU7XFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Bvc3Rjc3MtbG9hZGVyIS4vc3JjL2pzL2NvbXBvbmVudHMvQXBwRG93bmxvYWQvY3NzL2luZGV4LmNzc1xuICoqIG1vZHVsZSBpZCA9IDEyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5yZXF1aXJlKCcuL2Nzcy8nKVxyXG5cclxuY2xhc3MgQXBwRG93bmxvYWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxuICBoaWRlKCkge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlQ2xpY2soJ0hJREUnKVxyXG4gIH1cclxuICBkb3dubG9hZCgpIHtcclxuICAgIGFsZXJ0KCdoZWxsbycpXHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLnByb3BzLnNob3cgPT0gJ1NIT1cnID8gJ2Jsb2NrJyA6ICdub25lJ1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2FwcERvd25sb2FkIHBvc1JlbGF0aXZlIGZsb2F0TCcgc3R5bGU9e3tkaXNwbGF5OiBkaXNwbGF5fX0+XHJcbiAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoJy4vaW1nL2ZyZWVTZXJ2aWNlXzA0LmpwZycpfSAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY2xvc2UnIG9uQ2xpY2s9e3RoaXMuaGlkZS5iaW5kKHRoaXMpfT4mbmJzcDs8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkb3dubG9hZCcgb25DbGljaz17dGhpcy5kb3dubG9hZH0+Jm5ic3A7PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcERvd25sb2FkXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvQXBwRG93bmxvYWQvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgYXBwRG93bmxvYWQgfSBmcm9tICcuLi9hY3Rpb25zL2FwcERvd25sb2FkJ1xyXG5pbXBvcnQgQXBwRG93bmxvYWQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBEb3dubG9hZC8nXHJcbnJlcXVpcmUoJy4uLy4uL2Nzcy9Ib21lJylcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIHNob3dEb3dubG9hZCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbWUnPlxyXG4gICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi8uLi9pbWcvZnJlZVNlcnZpY2VfMDIuanBnJyl9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Bvc1JlbGF0aXZlIGZsb2F0TCc+XHJcbiAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZSgnLi4vLi4vaW1nL2ZyZWVTZXJ2aWNlXzAzLmpwZycpfSAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmcmVlQnV0dG9uJz5cclxuICAgICAgICAgICAgPExpbmsgdG89Jy9hbm90aGVyJyBjbGFzc05hbWU9J2Jsb2NrX2EnPiZuYnNwOzwvTGluaz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QXBwRG93bmxvYWRcclxuICAgICAgICAgIHNob3c9e3Nob3dEb3dubG9hZH1cclxuICAgICAgICAgIG9uQ2xvc2VDbGljaz17IHNob3cgPT5cclxuICAgICAgICAgICAgZGlzcGF0Y2goYXBwRG93bmxvYWQoc2hvdykpXHJcbiAgICAgICAgICB9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsZWFyJz48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcclxuICByZXR1cm4geyBzaG93RG93bmxvYWQ6IHN0YXRlLmFwcERvd25sb2FkIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhvbWUpXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbnRhaW5lcnMvSG9tZS5qc1xuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzIS4vSG9tZS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzIS4vSG9tZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanMhLi9Ib21lLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jc3MvSG9tZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL0FwcERvd25sb2FkL2Nzcy9pbmRleC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0JEQUFJQkFRSUJBUUlDQWdJQ0FnSUNBd1VEQXdNREF3WUVCQU1GQndZSEJ3Y0dCd2NJQ1FzSkNBZ0tDQWNIQ2cwS0Nnc01EQXdNQndrT0R3ME1EZ3NNREF6LzJ3QkRBUUlDQWdNREF3WURBd1lNQ0FjSURBd01EQXdNREF3TURBd01EQXdNREF3TURBd01EQXdNREF3TURBd01EQXdNREF3TURBd01EQXdNREF3TURBd01EQXovd2dBUkNBQUNBb0FEQVJFQUFoRUJBeEVCLzhRQUdRQUJBUUVCQVFFQUFBQUFBQUFBQUFBQUFnTUFBUVFJLzhRQUZ3RUJBUUVCQUFBQUFBQUFBQUFBQUFBQUFBSUJBLy9hQUF3REFRQUNFQU1RQUFBQSt2SFRHTVl3M05sQ3BVc1hMRnk1Y3NlZ3RTOUxZczUxM3BVcTVzWWhHTVl4blRiem5qQWJ4Z3plTG52TXpSVlBSd0prRXdxQ1FxWUFnQWNKaEFBbUFtQlV3SkNwZ0FFbW9KNFRWa3pWLzhRQUhSQUFBZ01CQVFFQkFRQUFBQUFBQUFBQUFBRURFREpCQWxFZ01QL2FBQWdCQVFBQlB3RDlSNUkra2ZTUEpId2o2UjZJOHNoMFI4SStFZlNQcEFSNVpIb2p3eUFqMFI5STlWOC9sNXA2ZHlhZHlhWjZ6Zm85Wk9PbnBqeTZlbmZzZVhmMGswajJTWVk4dTNwbnM0NmVtY2RjZGYvRUFCb1JBQUlEQVFFQUFBQUFBQUFBQUFBQUFBQUJBaEJBUVVMLzJnQUlBUUlCQVQ4QXg4cUo2eFJIVVJqSTI5Ly94QUFiRVFBQ0F3QURBQUFBQUFBQUFBQUFBQUFBRUFFQ1FTQXdVUC9hQUFnQkF3RUJQd0R4cXFyemhwcEtyMzFLcVREQ3BLd2xTdi9aXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ltZy9iZy5qcGdcbiAqKiBtb2R1bGUgaWQgPSAyNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWcvYWI0ZmZkZmYuZnJlZVNlcnZpY2VfMDIuanBnXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbWcvZnJlZVNlcnZpY2VfMDIuanBnXG4gKiogbW9kdWxlIGlkID0gMjU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvaW1nLzZhMDYxNDI2LmZyZWVTZXJ2aWNlXzAzLmpwZ1wiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW1nL2ZyZWVTZXJ2aWNlXzAzLmpwZ1xuICoqIG1vZHVsZSBpZCA9IDI1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ltZy9kZDIzY2RkMi5mcmVlU2VydmljZV8wNC5qcGdcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvQXBwRG93bmxvYWQvaW1nL2ZyZWVTZXJ2aWNlXzA0LmpwZ1xuICoqIG1vZHVsZSBpZCA9IDI2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==