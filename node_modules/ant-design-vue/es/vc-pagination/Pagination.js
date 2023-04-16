import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["class"];
import { createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
import PropTypes from '../_util/vue-types';
import BaseMixin from '../_util/BaseMixin';
import { hasProp, getComponent, splitAttrs, isValidElement } from '../_util/props-util';
import Pager from './Pager';
import Options from './Options';
import LOCALE from './locale/zh_CN';
import KEYCODE from './KeyCode';
import classNames from '../_util/classNames';
import { defineComponent, withDirectives } from 'vue';
import antInput from '../_util/antInputDirective';
import { cloneElement } from '../_util/vnode';
import firstNotUndefined from '../_util/firstNotUndefined';
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
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Pagination',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: undefined
    },
    prefixCls: PropTypes.string.def('rc-pagination'),
    selectPrefixCls: PropTypes.string.def('rc-select'),
    current: Number,
    defaultCurrent: PropTypes.number.def(1),
    total: PropTypes.number.def(0),
    pageSize: Number,
    defaultPageSize: PropTypes.number.def(10),
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
    selectComponentClass: PropTypes.any,
    showPrevNextJumpers: {
      type: Boolean,
      default: true
    },
    showQuickJumper: PropTypes.oneOfType([PropTypes.looseBool, PropTypes.object]).def(false),
    showTitle: {
      type: Boolean,
      default: true
    },
    pageSizeOptions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    buildOptionText: Function,
    showTotal: Function,
    simple: {
      type: Boolean,
      default: undefined
    },
    locale: PropTypes.object.def(LOCALE),
    itemRender: PropTypes.func.def(defaultItemRender),
    prevIcon: PropTypes.any,
    nextIcon: PropTypes.any,
    jumpPrevIcon: PropTypes.any,
    jumpNextIcon: PropTypes.any,
    totalBoundaryShowSizeChanger: PropTypes.number.def(50)
  },
  data: function data() {
    var props = this.$props;
    var current = firstNotUndefined([this.current, this.defaultCurrent]);
    var pageSize = firstNotUndefined([this.pageSize, this.defaultPageSize]);
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
      if (!hasProp(this, 'current')) {
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
      if (hasProp(this, 'current')) {
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
      var iconNode = getComponent(this, icon, this.$props) || _createVNode("button", {
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
      if (event.keyCode === KEYCODE.ARROW_UP || event.keyCode === KEYCODE.ARROW_DOWN) {
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
      if (e.keyCode === KEYCODE.ENTER) {
        this.handleChange(value);
      } else if (e.keyCode === KEYCODE.ARROW_UP) {
        this.handleChange(value - 1);
      } else if (e.keyCode === KEYCODE.ARROW_DOWN) {
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
        if (!hasProp(this, 'pageSize')) {
          this.setState({
            statePageSize: size
          });
        }
        if (!hasProp(this, 'current')) {
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
        if (!hasProp(this, 'current')) {
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
      if (event.keyCode === KEYCODE.ENTER || event.type === 'click') {
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
      return isValidElement(prevButton) ? cloneElement(prevButton, disabled ? {
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
      return isValidElement(nextButton) ? cloneElement(nextButton, disabled ? {
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
    var _splitAttrs$extraAttr = splitAttrs(this.$attrs).extraAttrs,
      className = _splitAttrs$extraAttr.class,
      restAttrs = _objectWithoutProperties(_splitAttrs$extraAttr, _excluded);
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
          gotoButton = _createVNode("button", {
            "type": "button",
            "onClick": this.handleGoTO,
            "onKeyup": this.handleGoTO
          }, [locale.jump_to_confirm]);
        } else {
          gotoButton = _createVNode("span", {
            "onClick": this.handleGoTO,
            "onKeyup": this.handleGoTO
          }, [goButton]);
        }
        var _gotoButton = function () {
          return gotoButton;
        }();
        gotoButton = _createVNode("li", {
          "title": showTitle ? "".concat(locale.jump_to).concat(stateCurrent, "/").concat(allPages) : null,
          "class": "".concat(prefixCls, "-simple-pager")
        }, [gotoButton]);
      }
      return _createVNode("ul", _objectSpread({
        "class": classNames("".concat(prefixCls, " ").concat(prefixCls, "-simple"), _defineProperty({}, "".concat(prefixCls, "-disabled"), disabled), className)
      }, restAttrs), [_createVNode("li", {
        "title": showTitle ? locale.prev_page : null,
        "onClick": this.prev,
        "tabindex": hasPrev ? 0 : null,
        "onKeypress": this.runIfEnterPrev,
        "class": classNames("".concat(prefixCls, "-prev"), _defineProperty({}, "".concat(prefixCls, "-disabled"), !hasPrev)),
        "aria-disabled": !hasPrev
      }, [this.renderPrev(prevPage)]), _createVNode("li", {
        "title": showTitle ? "".concat(stateCurrent, "/").concat(allPages) : null,
        "class": "".concat(prefixCls, "-simple-pager")
      }, [withDirectives(_createVNode("input", {
        "type": "text",
        "value": this.stateCurrentInputValue,
        "disabled": disabled,
        "onKeydown": this.handleKeyDown,
        "onKeyup": this.handleKeyUp,
        "onInput": this.handleKeyUp,
        "onChange": this.handleKeyUp,
        "size": "3"
      }, null), [[antInput]]), _createVNode("span", {
        "class": "".concat(prefixCls, "-slash")
      }, [_createTextVNode("\uFF0F")]), allPages]), _createVNode("li", {
        "title": showTitle ? locale.next_page : null,
        "onClick": this.next,
        "tabindex": hasNext ? 0 : null,
        "onKeypress": this.runIfEnterNext,
        "class": classNames("".concat(prefixCls, "-next"), _defineProperty({}, "".concat(prefixCls, "-disabled"), !hasNext)),
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
        pagerList.push(_createVNode(Pager, _objectSpread(_objectSpread({}, pagerProps), {}, {
          "key": "noPager",
          "page": 1,
          "class": "".concat(prefixCls, "-item-disabled")
        }), null));
      }
      for (var i = 1; i <= allPages; i += 1) {
        var active = stateCurrent === i;
        pagerList.push(_createVNode(Pager, _objectSpread(_objectSpread({}, pagerProps), {}, {
          "key": i,
          "page": i,
          "active": active
        }), null));
      }
    } else {
      var prevItemTitle = showLessItems ? locale.prev_3 : locale.prev_5;
      var nextItemTitle = showLessItems ? locale.next_3 : locale.next_5;
      if (showPrevNextJumpers) {
        jumpPrev = _createVNode("li", {
          "title": this.showTitle ? prevItemTitle : null,
          "key": "prev",
          "onClick": this.jumpPrev,
          "tabindex": "0",
          "onKeypress": this.runIfEnterJumpPrev,
          "class": classNames("".concat(prefixCls, "-jump-prev"), _defineProperty({}, "".concat(prefixCls, "-jump-prev-custom-icon"), !!jumpPrevIcon))
        }, [itemRender({
          page: this.getJumpPrevPage(),
          type: 'jump-prev',
          originalElement: this.getItemIcon('jumpPrevIcon', 'prev page')
        })]);
        jumpNext = _createVNode("li", {
          "title": this.showTitle ? nextItemTitle : null,
          "key": "next",
          "tabindex": "0",
          "onClick": this.jumpNext,
          "onKeypress": this.runIfEnterJumpNext,
          "class": classNames("".concat(prefixCls, "-jump-next"), _defineProperty({}, "".concat(prefixCls, "-jump-next-custom-icon"), !!jumpNextIcon))
        }, [itemRender({
          page: this.getJumpNextPage(),
          type: 'jump-next',
          originalElement: this.getItemIcon('jumpNextIcon', 'next page')
        })]);
      }
      lastPager = _createVNode(Pager, {
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
      firstPager = _createVNode(Pager, {
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
        pagerList.push(_createVNode(Pager, {
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
        pagerList[0] = _createVNode(Pager, {
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
        pagerList[pagerList.length - 1] = _createVNode(Pager, {
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
      totalText = _createVNode("li", {
        "class": "".concat(prefixCls, "-total-text")
      }, [showTotal(total, [total === 0 ? 0 : (stateCurrent - 1) * statePageSize + 1, stateCurrent * statePageSize > total ? total : stateCurrent * statePageSize])]);
    }
    var prevDisabled = !hasPrev || !allPages;
    var nextDisabled = !hasNext || !allPages;
    var buildOptionText = this.buildOptionText || this.$slots.buildOptionText;
    return _createVNode("ul", _objectSpread(_objectSpread({
      "unselectable": "on",
      "ref": "paginationNode"
    }, restAttrs), {}, {
      "class": classNames((_classNames6 = {}, _defineProperty(_classNames6, "".concat(prefixCls), true), _defineProperty(_classNames6, "".concat(prefixCls, "-disabled"), disabled), _classNames6), className)
    }), [totalText, _createVNode("li", {
      "title": showTitle ? locale.prev_page : null,
      "onClick": this.prev,
      "tabindex": prevDisabled ? null : 0,
      "onKeypress": this.runIfEnterPrev,
      "class": classNames("".concat(prefixCls, "-prev"), _defineProperty({}, "".concat(prefixCls, "-disabled"), prevDisabled)),
      "aria-disabled": prevDisabled
    }, [this.renderPrev(prevPage)]), pagerList, _createVNode("li", {
      "title": showTitle ? locale.next_page : null,
      "onClick": this.next,
      "tabindex": nextDisabled ? null : 0,
      "onKeypress": this.runIfEnterNext,
      "class": classNames("".concat(prefixCls, "-next"), _defineProperty({}, "".concat(prefixCls, "-disabled"), nextDisabled)),
      "aria-disabled": nextDisabled
    }, [this.renderNext(nextPage)]), _createVNode(Options, {
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