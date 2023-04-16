"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));
var _propsUtil = require("../_util/props-util");
var _Pager = _interopRequireDefault(require("./Pager"));
var _Options = _interopRequireDefault(require("./Options"));
var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));
var _KeyCode = _interopRequireDefault(require("./KeyCode"));
var _classNames9 = _interopRequireDefault(require("../_util/classNames"));
var _antInputDirective = _interopRequireDefault(require("../_util/antInputDirective"));
var _vnode = require("../_util/vnode");
var _firstNotUndefined = _interopRequireDefault(require("../_util/firstNotUndefined"));
var _excluded = ["class"];
// 是否是正整数
function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
function defaultItemRender(_ref) {
  var originalElement = _ref.originalElement;
  return originalElement;
}
function calculatePage(p, state, props) {
  var pageSize = typeof p === 'undefined' ? state.statePageSize : p;
  return Math.floor((props.total - 1) / pageSize) + 1;
}
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Pagination',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: undefined
    },
    prefixCls: _vueTypes.default.string.def('rc-pagination'),
    selectPrefixCls: _vueTypes.default.string.def('rc-select'),
    current: Number,
    defaultCurrent: _vueTypes.default.number.def(1),
    total: _vueTypes.default.number.def(0),
    pageSize: Number,
    defaultPageSize: _vueTypes.default.number.def(10),
    hideOnSinglePage: {
      type: Boolean,
      default: false
    },
    showSizeChanger: {
      type: Boolean,
      default: undefined
    },
    showLessItems: {
      type: Boolean,
      default: false
    },
    // showSizeChange: PropTypes.func.def(noop),
    selectComponentClass: _vueTypes.default.any,
    showPrevNextJumpers: {
      type: Boolean,
      default: true
    },
    showQuickJumper: _vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.object]).def(false),
    showTitle: {
      type: Boolean,
      default: true
    },
    pageSizeOptions: _vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string])),
    buildOptionText: Function,
    showTotal: Function,
    simple: {
      type: Boolean,
      default: undefined
    },
    locale: _vueTypes.default.object.def(_zh_CN.default),
    itemRender: _vueTypes.default.func.def(defaultItemRender),
    prevIcon: _vueTypes.default.any,
    nextIcon: _vueTypes.default.any,
    jumpPrevIcon: _vueTypes.default.any,
    jumpNextIcon: _vueTypes.default.any,
    totalBoundaryShowSizeChanger: _vueTypes.default.number.def(50)
  },
  data: function data() {
    var props = this.$props;
    var current = (0, _firstNotUndefined.default)([this.current, this.defaultCurrent]);
    var pageSize = (0, _firstNotUndefined.default)([this.pageSize, this.defaultPageSize]);
    current = Math.min(current, calculatePage(pageSize, undefined, props));
    return {
      stateCurrent: current,
      stateCurrentInputValue: current,
      statePageSize: pageSize
    };
  },
  watch: {
    current: function current(val) {
      this.setState({
        stateCurrent: val,
        stateCurrentInputValue: val
      });
    },
    pageSize: function pageSize(val) {
      var newState = {};
      var current = this.stateCurrent;
      var newCurrent = calculatePage(val, this.$data, this.$props);
      current = current > newCurrent ? newCurrent : current;
      if (!(0, _propsUtil.hasProp)(this, 'current')) {
        newState.stateCurrent = current;
        newState.stateCurrentInputValue = current;
      }
      newState.statePageSize = val;
      this.setState(newState);
    },
    stateCurrent: function stateCurrent(_val, oldValue) {
      var _this = this;
      // When current page change, fix focused style of prev item
      // A hacky solution of https://github.com/ant-design/ant-design/issues/8948
      this.$nextTick(function () {
        if (_this.$refs.paginationNode) {
          var lastCurrentNode = _this.$refs.paginationNode.querySelector(".".concat(_this.prefixCls, "-item-").concat(oldValue));
          if (lastCurrentNode && document.activeElement === lastCurrentNode) {
            lastCurrentNode.blur();
          }
        }
      });
    },
    total: function total() {
      var newState = {};
      var newCurrent = calculatePage(this.pageSize, this.$data, this.$props);
      if ((0, _propsUtil.hasProp)(this, 'current')) {
        var current = Math.min(this.current, newCurrent);
        newState.stateCurrent = current;
        newState.stateCurrentInputValue = current;
      } else {
        var _current = this.stateCurrent;
        if (_current === 0 && newCurrent > 0) {
          _current = 1;
        } else {
          _current = Math.min(this.stateCurrent, newCurrent);
        }
        newState.stateCurrent = _current;
      }
      this.setState(newState);
    }
  },
  methods: {
    getJumpPrevPage: function getJumpPrevPage() {
      return Math.max(1, this.stateCurrent - (this.showLessItems ? 3 : 5));
    },
    getJumpNextPage: function getJumpNextPage() {
      return Math.min(calculatePage(undefined, this.$data, this.$props), this.stateCurrent + (this.showLessItems ? 3 : 5));
    },
    getItemIcon: function getItemIcon(icon, label) {
      var prefixCls = this.$props.prefixCls;
      var iconNode = (0, _propsUtil.getComponent)(this, icon, this.$props) || (0, _vue.createVNode)("button", {
        "type": "button",
        "aria-label": label,
        "class": "".concat(prefixCls, "-item-link")
      }, null);
      return iconNode;
    },
    getValidValue: function getValidValue(e) {
      var inputValue = e.target.value;
      var allPages = calculatePage(undefined, this.$data, this.$props);
      var stateCurrentInputValue = this.$data.stateCurrentInputValue;
      var value;
      if (inputValue === '') {
        value = inputValue;
      } else if (isNaN(Number(inputValue))) {
        value = stateCurrentInputValue;
      } else if (inputValue >= allPages) {
        value = allPages;
      } else {
        value = Number(inputValue);
      }
      return value;
    },
    isValid: function isValid(page) {
      return isInteger(page) && page !== this.stateCurrent;
    },
    shouldDisplayQuickJumper: function shouldDisplayQuickJumper() {
      var _this$$props = this.$props,
        showQuickJumper = _this$$props.showQuickJumper,
        pageSize = _this$$props.pageSize,
        total = _this$$props.total;
      if (total <= pageSize) {
        return false;
      }
      return showQuickJumper;
    },
    // calculatePage (p) {
    //   let pageSize = p
    //   if (typeof pageSize === 'undefined') {
    //     pageSize = this.statePageSize
    //   }
    //   return Math.floor((this.total - 1) / pageSize) + 1
    // },
    handleKeyDown: function handleKeyDown(event) {
      if (event.keyCode === _KeyCode.default.ARROW_UP || event.keyCode === _KeyCode.default.ARROW_DOWN) {
        event.preventDefault();
      }
    },
    handleKeyUp: function handleKeyUp(e) {
      if (e.isComposing || e.target.composing) return;
      var value = this.getValidValue(e);
      var stateCurrentInputValue = this.stateCurrentInputValue;
      if (value !== stateCurrentInputValue) {
        this.setState({
          stateCurrentInputValue: value
        });
      }
      if (e.keyCode === _KeyCode.default.ENTER) {
        this.handleChange(value);
      } else if (e.keyCode === _KeyCode.default.ARROW_UP) {
        this.handleChange(value - 1);
      } else if (e.keyCode === _KeyCode.default.ARROW_DOWN) {
        this.handleChange(value + 1);
      }
    },
    changePageSize: function changePageSize(size) {
      var current = this.stateCurrent;
      var preCurrent = current;
      var newCurrent = calculatePage(size, this.$data, this.$props);
      current = current > newCurrent ? newCurrent : current;
      // fix the issue:
      // Once 'total' is 0, 'current' in 'onShowSizeChange' is 0, which is not correct.
      if (newCurrent === 0) {
        current = this.stateCurrent;
      }
      if (typeof size === 'number') {
        if (!(0, _propsUtil.hasProp)(this, 'pageSize')) {
          this.setState({
            statePageSize: size
          });
        }
        if (!(0, _propsUtil.hasProp)(this, 'current')) {
          this.setState({
            stateCurrent: current,
            stateCurrentInputValue: current
          });
        }
      }
      this.__emit('update:pageSize', size);
      if (current !== preCurrent) {
        this.__emit('update:current', current);
      }
      this.__emit('showSizeChange', current, size);
      this.__emit('change', current, size);
    },
    handleChange: function handleChange(p) {
      var disabled = this.$props.disabled;
      var page = p;
      if (this.isValid(page) && !disabled) {
        var currentPage = calculatePage(undefined, this.$data, this.$props);
        if (page > currentPage) {
          page = currentPage;
        } else if (page < 1) {
          page = 1;
        }
        if (!(0, _propsUtil.hasProp)(this, 'current')) {
          this.setState({
            stateCurrent: page,
            stateCurrentInputValue: page
          });
        }
        // this.__emit('input', page)
        this.__emit('update:current', page);
        this.__emit('change', page, this.statePageSize);
        return page;
      }
      return this.stateCurrent;
    },
    prev: function prev() {
      if (this.hasPrev()) {
        this.handleChange(this.stateCurrent - 1);
      }
    },
    next: function next() {
      if (this.hasNext()) {
        this.handleChange(this.stateCurrent + 1);
      }
    },
    jumpPrev: function jumpPrev() {
      this.handleChange(this.getJumpPrevPage());
    },
    jumpNext: function jumpNext() {
      this.handleChange(this.getJumpNextPage());
    },
    hasPrev: function hasPrev() {
      return this.stateCurrent > 1;
    },
    hasNext: function hasNext() {
      return this.stateCurrent < calculatePage(undefined, this.$data, this.$props);
    },
    getShowSizeChanger: function getShowSizeChanger() {
      var _this$$props2 = this.$props,
        showSizeChanger = _this$$props2.showSizeChanger,
        total = _this$$props2.total,
        totalBoundaryShowSizeChanger = _this$$props2.totalBoundaryShowSizeChanger;
      if (typeof showSizeChanger !== 'undefined') {
        return showSizeChanger;
      }
      return total > totalBoundaryShowSizeChanger;
    },
    runIfEnter: function runIfEnter(event, callback) {
      if (event.key === 'Enter' || event.charCode === 13) {
        for (var _len = arguments.length, restParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          restParams[_key - 2] = arguments[_key];
        }
        callback.apply(void 0, restParams);
      }
    },
    runIfEnterPrev: function runIfEnterPrev(event) {
      this.runIfEnter(event, this.prev);
    },
    runIfEnterNext: function runIfEnterNext(event) {
      this.runIfEnter(event, this.next);
    },
    runIfEnterJumpPrev: function runIfEnterJumpPrev(event) {
      this.runIfEnter(event, this.jumpPrev);
    },
    runIfEnterJumpNext: function runIfEnterJumpNext(event) {
      this.runIfEnter(event, this.jumpNext);
    },
    handleGoTO: function handleGoTO(event) {
      if (event.keyCode === _KeyCode.default.ENTER || event.type === 'click') {
        this.handleChange(this.stateCurrentInputValue);
      }
    },
    renderPrev: function renderPrev(prevPage) {
      var itemRender = this.$props.itemRender;
      var prevButton = itemRender({
        page: prevPage,
        type: 'prev',
        originalElement: this.getItemIcon('prevIcon', 'prev page')
      });
      var disabled = !this.hasPrev();
      return (0, _propsUtil.isValidElement)(prevButton) ? (0, _vnode.cloneElement)(prevButton, disabled ? {
        disabled: disabled
      } : {}) : prevButton;
    },
    renderNext: function renderNext(nextPage) {
      var itemRender = this.$props.itemRender;
      var nextButton = itemRender({
        page: nextPage,
        type: 'next',
        originalElement: this.getItemIcon('nextIcon', 'next page')
      });
      var disabled = !this.hasNext();
      return (0, _propsUtil.isValidElement)(nextButton) ? (0, _vnode.cloneElement)(nextButton, disabled ? {
        disabled: disabled
      } : {}) : nextButton;
    }
  },
  render: function render() {
    var _classNames6;
    var _this$$props3 = this.$props,
      prefixCls = _this$$props3.prefixCls,
      disabled = _this$$props3.disabled,
      hideOnSinglePage = _this$$props3.hideOnSinglePage,
      total = _this$$props3.total,
      locale = _this$$props3.locale,
      showQuickJumper = _this$$props3.showQuickJumper,
      showLessItems = _this$$props3.showLessItems,
      showTitle = _this$$props3.showTitle,
      showTotal = _this$$props3.showTotal,
      simple = _this$$props3.simple,
      itemRender = _this$$props3.itemRender,
      showPrevNextJumpers = _this$$props3.showPrevNextJumpers,
      jumpPrevIcon = _this$$props3.jumpPrevIcon,
      jumpNextIcon = _this$$props3.jumpNextIcon,
      selectComponentClass = _this$$props3.selectComponentClass,
      selectPrefixCls = _this$$props3.selectPrefixCls,
      pageSizeOptions = _this$$props3.pageSizeOptions;
    var stateCurrent = this.stateCurrent,
      statePageSize = this.statePageSize;
    var _splitAttrs$extraAttr = (0, _propsUtil.splitAttrs)(this.$attrs).extraAttrs,
      className = _splitAttrs$extraAttr.class,
      restAttrs = (0, _objectWithoutProperties2.default)(_splitAttrs$extraAttr, _excluded);
    // When hideOnSinglePage is true and there is only 1 page, hide the pager
    if (hideOnSinglePage === true && this.total <= statePageSize) {
      return null;
    }
    var allPages = calculatePage(undefined, this.$data, this.$props);
    var pagerList = [];
    var jumpPrev = null;
    var jumpNext = null;
    var firstPager = null;
    var lastPager = null;
    var gotoButton = null;
    var goButton = showQuickJumper && showQuickJumper.goButton;
    var pageBufferSize = showLessItems ? 1 : 2;
    var prevPage = stateCurrent - 1 > 0 ? stateCurrent - 1 : 0;
    var nextPage = stateCurrent + 1 < allPages ? stateCurrent + 1 : allPages;
    var hasPrev = this.hasPrev();
    var hasNext = this.hasNext();
    if (simple) {
      if (goButton) {
        if (typeof goButton === 'boolean') {
          gotoButton = (0, _vue.createVNode)("button", {
            "type": "button",
            "onClick": this.handleGoTO,
            "onKeyup": this.handleGoTO
          }, [locale.jump_to_confirm]);
        } else {
          gotoButton = (0, _vue.createVNode)("span", {
            "onClick": this.handleGoTO,
            "onKeyup": this.handleGoTO
          }, [goButton]);
        }
        var _gotoButton = function () {
          return gotoButton;
        }();
        gotoButton = (0, _vue.createVNode)("li", {
          "title": showTitle ? "".concat(locale.jump_to).concat(stateCurrent, "/").concat(allPages) : null,
          "class": "".concat(prefixCls, "-simple-pager")
        }, [gotoButton]);
      }
      return (0, _vue.createVNode)("ul", (0, _objectSpread2.default)({
        "class": (0, _classNames9.default)("".concat(prefixCls, " ").concat(prefixCls, "-simple"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-disabled"), disabled), className)
      }, restAttrs), [(0, _vue.createVNode)("li", {
        "title": showTitle ? locale.prev_page : null,
        "onClick": this.prev,
        "tabindex": hasPrev ? 0 : null,
        "onKeypress": this.runIfEnterPrev,
        "class": (0, _classNames9.default)("".concat(prefixCls, "-prev"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-disabled"), !hasPrev)),
        "aria-disabled": !hasPrev
      }, [this.renderPrev(prevPage)]), (0, _vue.createVNode)("li", {
        "title": showTitle ? "".concat(stateCurrent, "/").concat(allPages) : null,
        "class": "".concat(prefixCls, "-simple-pager")
      }, [(0, _vue.withDirectives)((0, _vue.createVNode)("input", {
        "type": "text",
        "value": this.stateCurrentInputValue,
        "disabled": disabled,
        "onKeydown": this.handleKeyDown,
        "onKeyup": this.handleKeyUp,
        "onInput": this.handleKeyUp,
        "onChange": this.handleKeyUp,
        "size": "3"
      }, null), [[_antInputDirective.default]]), (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-slash")
      }, [(0, _vue.createTextVNode)("\uFF0F")]), allPages]), (0, _vue.createVNode)("li", {
        "title": showTitle ? locale.next_page : null,
        "onClick": this.next,
        "tabindex": hasNext ? 0 : null,
        "onKeypress": this.runIfEnterNext,
        "class": (0, _classNames9.default)("".concat(prefixCls, "-next"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-disabled"), !hasNext)),
        "aria-disabled": !hasNext
      }, [this.renderNext(nextPage)]), gotoButton]);
    }
    if (allPages <= 3 + pageBufferSize * 2) {
      var pagerProps = {
        locale: locale,
        rootPrefixCls: prefixCls,
        showTitle: showTitle,
        itemRender: itemRender,
        onClick: this.handleChange,
        onKeypress: this.runIfEnter
      };
      if (!allPages) {
        pagerList.push((0, _vue.createVNode)(_Pager.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, pagerProps), {}, {
          "key": "noPager",
          "page": 1,
          "class": "".concat(prefixCls, "-item-disabled")
        }), null));
      }
      for (var i = 1; i <= allPages; i += 1) {
        var active = stateCurrent === i;
        pagerList.push((0, _vue.createVNode)(_Pager.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, pagerProps), {}, {
          "key": i,
          "page": i,
          "active": active
        }), null));
      }
    } else {
      var prevItemTitle = showLessItems ? locale.prev_3 : locale.prev_5;
      var nextItemTitle = showLessItems ? locale.next_3 : locale.next_5;
      if (showPrevNextJumpers) {
        jumpPrev = (0, _vue.createVNode)("li", {
          "title": this.showTitle ? prevItemTitle : null,
          "key": "prev",
          "onClick": this.jumpPrev,
          "tabindex": "0",
          "onKeypress": this.runIfEnterJumpPrev,
          "class": (0, _classNames9.default)("".concat(prefixCls, "-jump-prev"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-jump-prev-custom-icon"), !!jumpPrevIcon))
        }, [itemRender({
          page: this.getJumpPrevPage(),
          type: 'jump-prev',
          originalElement: this.getItemIcon('jumpPrevIcon', 'prev page')
        })]);
        jumpNext = (0, _vue.createVNode)("li", {
          "title": this.showTitle ? nextItemTitle : null,
          "key": "next",
          "tabindex": "0",
          "onClick": this.jumpNext,
          "onKeypress": this.runIfEnterJumpNext,
          "class": (0, _classNames9.default)("".concat(prefixCls, "-jump-next"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-jump-next-custom-icon"), !!jumpNextIcon))
        }, [itemRender({
          page: this.getJumpNextPage(),
          type: 'jump-next',
          originalElement: this.getItemIcon('jumpNextIcon', 'next page')
        })]);
      }
      lastPager = (0, _vue.createVNode)(_Pager.default, {
        "locale": locale,
        "last": true,
        "rootPrefixCls": prefixCls,
        "onClick": this.handleChange,
        "onKeypress": this.runIfEnter,
        "key": allPages,
        "page": allPages,
        "active": false,
        "showTitle": showTitle,
        "itemRender": itemRender
      }, null);
      firstPager = (0, _vue.createVNode)(_Pager.default, {
        "locale": locale,
        "rootPrefixCls": prefixCls,
        "onClick": this.handleChange,
        "onKeypress": this.runIfEnter,
        "key": 1,
        "page": 1,
        "active": false,
        "showTitle": showTitle,
        "itemRender": itemRender
      }, null);
      var left = Math.max(1, stateCurrent - pageBufferSize);
      var right = Math.min(stateCurrent + pageBufferSize, allPages);
      if (stateCurrent - 1 <= pageBufferSize) {
        right = 1 + pageBufferSize * 2;
      }
      if (allPages - stateCurrent <= pageBufferSize) {
        left = allPages - pageBufferSize * 2;
      }
      for (var _i = left; _i <= right; _i += 1) {
        var _active = stateCurrent === _i;
        pagerList.push((0, _vue.createVNode)(_Pager.default, {
          "locale": locale,
          "rootPrefixCls": prefixCls,
          "onClick": this.handleChange,
          "onKeypress": this.runIfEnter,
          "key": _i,
          "page": _i,
          "active": _active,
          "showTitle": showTitle,
          "itemRender": itemRender
        }, null));
      }
      if (stateCurrent - 1 >= pageBufferSize * 2 && stateCurrent !== 1 + 2) {
        pagerList[0] = (0, _vue.createVNode)(_Pager.default, {
          "locale": locale,
          "rootPrefixCls": prefixCls,
          "onClick": this.handleChange,
          "onKeypress": this.runIfEnter,
          "key": left,
          "page": left,
          "class": "".concat(prefixCls, "-item-after-jump-prev"),
          "active": false,
          "showTitle": this.showTitle,
          "itemRender": itemRender
        }, null);
        pagerList.unshift(jumpPrev);
      }
      if (allPages - stateCurrent >= pageBufferSize * 2 && stateCurrent !== allPages - 2) {
        pagerList[pagerList.length - 1] = (0, _vue.createVNode)(_Pager.default, {
          "locale": locale,
          "rootPrefixCls": prefixCls,
          "onClick": this.handleChange,
          "onKeypress": this.runIfEnter,
          "key": right,
          "page": right,
          "class": "".concat(prefixCls, "-item-before-jump-next"),
          "active": false,
          "showTitle": this.showTitle,
          "itemRender": itemRender
        }, null);
        pagerList.push(jumpNext);
      }
      if (left !== 1) {
        pagerList.unshift(firstPager);
      }
      if (right !== allPages) {
        pagerList.push(lastPager);
      }
    }
    var totalText = null;
    if (showTotal) {
      totalText = (0, _vue.createVNode)("li", {
        "class": "".concat(prefixCls, "-total-text")
      }, [showTotal(total, [total === 0 ? 0 : (stateCurrent - 1) * statePageSize + 1, stateCurrent * statePageSize > total ? total : stateCurrent * statePageSize])]);
    }
    var prevDisabled = !hasPrev || !allPages;
    var nextDisabled = !hasNext || !allPages;
    var buildOptionText = this.buildOptionText || this.$slots.buildOptionText;
    return (0, _vue.createVNode)("ul", (0, _objectSpread2.default)((0, _objectSpread2.default)({
      "unselectable": "on",
      "ref": "paginationNode"
    }, restAttrs), {}, {
      "class": (0, _classNames9.default)((_classNames6 = {}, (0, _defineProperty2.default)(_classNames6, "".concat(prefixCls), true), (0, _defineProperty2.default)(_classNames6, "".concat(prefixCls, "-disabled"), disabled), _classNames6), className)
    }), [totalText, (0, _vue.createVNode)("li", {
      "title": showTitle ? locale.prev_page : null,
      "onClick": this.prev,
      "tabindex": prevDisabled ? null : 0,
      "onKeypress": this.runIfEnterPrev,
      "class": (0, _classNames9.default)("".concat(prefixCls, "-prev"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-disabled"), prevDisabled)),
      "aria-disabled": prevDisabled
    }, [this.renderPrev(prevPage)]), pagerList, (0, _vue.createVNode)("li", {
      "title": showTitle ? locale.next_page : null,
      "onClick": this.next,
      "tabindex": nextDisabled ? null : 0,
      "onKeypress": this.runIfEnterNext,
      "class": (0, _classNames9.default)("".concat(prefixCls, "-next"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-disabled"), nextDisabled)),
      "aria-disabled": nextDisabled
    }, [this.renderNext(nextPage)]), (0, _vue.createVNode)(_Options.default, {
      "disabled": disabled,
      "locale": locale,
      "rootPrefixCls": prefixCls,
      "selectComponentClass": selectComponentClass,
      "selectPrefixCls": selectPrefixCls,
      "changeSize": this.getShowSizeChanger() ? this.changePageSize : null,
      "current": stateCurrent,
      "pageSize": statePageSize,
      "pageSizeOptions": pageSizeOptions,
      "buildOptionText": buildOptionText || null,
      "quickGo": this.shouldDisplayQuickJumper() ? this.handleChange : null,
      "goButton": goButton
    }, null)]);
  }
});
exports.default = _default;