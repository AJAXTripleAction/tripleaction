webpackHotUpdate(0,{

/***/ 518:
/*!*********************************************!*\
  !*** ./src/client/app/console/container.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 394);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 480);
	
	var _presentation = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./presentation\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _presentation2 = _interopRequireDefault(_presentation);
	
	var _axios = __webpack_require__(/*! axios */ 457);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ConsoleContainer = function (_React$Component) {
	  _inherits(ConsoleContainer, _React$Component);
	
	  function ConsoleContainer() {
	    _classCallCheck(this, ConsoleContainer);
	
	    return _possibleConstructorReturn(this, (ConsoleContainer.__proto__ || Object.getPrototypeOf(ConsoleContainer)).apply(this, arguments));
	  }
	
	  _createClass(ConsoleContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var oldLog = console.log;
	      console.log = function (message) {
	        // DO MESSAGE HERE.
	        var messageNode = document.createElement("P");
	        var text = document.createTextNode(message);
	        messageNode.appendChild(text);
	        document.getElementById('test').appendChild(messageNode);
	
	        oldLog.apply(console, arguments);
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'body-container' },
	          _react2.default.createElement('textarea', { cols: '20', rows: '10', id: 'editor' }),
	          _react2.default.createElement(
	            'button',
	            { id: 'run' },
	            'Run the code!'
	          ),
	          _react2.default.createElement(
	            'button',
	            { id: 'save' },
	            'Save the code!'
	          ),
	          _react2.default.createElement('div', { id: 'test' }),
	          _react2.default.createElement(_presentation2.default, { userName: this.props.userName })
	        )
	      );
	    }
	  }]);
	
	  return ConsoleContainer;
	}(_react2.default.Component);
	
	ConsoleContainer.propTypes = {};
	
	
	function mapStateToProps(state) {
	  return {
	    userName: state.userReducer.userName //<=== shouldnt have to do this...? 
	  };
	}
	
	var _default = (0, _reactRedux.connect)(mapStateToProps)(ConsoleContainer);
	
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(ConsoleContainer, 'ConsoleContainer', '/Users/eggie/codesocket/src/client/app/console/container.js');
	
	  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/eggie/codesocket/src/client/app/console/container.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/eggie/codesocket/src/client/app/console/container.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=0.3d43a5bb30173a00bf9b.hot-update.js.map