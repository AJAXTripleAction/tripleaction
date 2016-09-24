webpackHotUpdate(0,{

/***/ 508:
/*!*****************************************!*\
  !*** ./src/client/app/nav/container.js ***!
  \*****************************************/
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
	
	var _presentation = __webpack_require__(/*! ./presentation.js */ 509);
	
	var _presentation2 = _interopRequireDefault(_presentation);
	
	var _axios = __webpack_require__(/*! axios */ 457);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NavContainer = function (_React$Component) {
	  _inherits(NavContainer, _React$Component);
	
	  function NavContainer() {
	    _classCallCheck(this, NavContainer);
	
	    return _possibleConstructorReturn(this, (NavContainer.__proto__ || Object.getPrototypeOf(NavContainer)).apply(this, arguments));
	  }
	
	  _createClass(NavContainer, [{
	    key: 'componentDidMount',
	
	
	    // componentWillMount() {
	    // } 
	
	    value: function componentDidMount() {
	      //console.log('it hit componentDidMount =====>', this.state.user, this.props);
	    }
	  }, {
	    key: 'addDoc',
	    value: function addDoc() {
	      console.log('==================props', this.props);
	      var name = prompt('What\'s your name?');
	      this.props.dispatch({
	        type: 'UPDATE_USER',
	        userName: name
	      });
	
	      // axios.get()
	      _reactRouter.hashHistory.push('/doc');
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
	          _react2.default.createElement(_presentation2.default, { addDoc: this.addDoc.bind(this), userName: this.props.userName })
	        )
	      );
	    }
	  }]);
	
	  return NavContainer;
	}(_react2.default.Component);
	
	NavContainer.propTypes = {};
	
	
	function mapStateToProps(state) {
	  return {
	    userName: state.userReducer.userName //<=== shouldnt have to do this...? 
	  };
	}
	
	var _default = (0, _reactRedux.connect)(mapStateToProps)(NavContainer);
	
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(NavContainer, 'NavContainer', '/Users/eggie/codesocket/src/client/app/nav/container.js');
	
	  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/eggie/codesocket/src/client/app/nav/container.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/eggie/codesocket/src/client/app/nav/container.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=0.ea6f16dca871a9e7262e.hot-update.js.map