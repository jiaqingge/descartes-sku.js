'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SearchSKU = function () {
  /**
   * [constructor 搜索skuu]
   * @method constructor
   * @param  {[Array]}    SKU [SKU 数组]
   * @param  {[Object]}    sku [待搜索的对象]
   */
  function SearchSKU(SKU, sku) {
    _classCallCheck(this, SearchSKU);

    if (_lodash2.default.isArray(SKU)) this._SKU = SKU;else throw new Error('Sorry, the receiving parameter should be an Array');
    if (_lodash2.default.isObject(sku)) this._sku = sku;else throw new Error('Sorry, the receiving parameter should be an Object');
  }

  _createClass(SearchSKU, [{
    key: 'search',
    value: function search() {
      var SKU = this._SKU;
      var sku = this._sku;
      var result = {};

      if (_lodash2.default.size(SKU) > 0 && _lodash2.default.size(sku) > 0) {
        if (_lodash2.default.isObject(SKU[0])) result = this._Search_Obj(SKU, sku);
      }
      return result;
    }
  }, {
    key: '_Search_Arr',
    value: function _Search_Arr(_SKU, _sku) {
      var SKU = _SKU || this._SKU;
      var sku = _sku || this._sku;
      console.log(SKU, sku);
    }

    /**
     * [_Search_Obj 搜索]
     * @method _Search_Obj
     * @return {[Object]} [SKU]
     */

  }, {
    key: '_Search_Obj',
    value: function _Search_Obj(_SKU, _sku) {
      var SKU = _SKU || this._SKU;
      var sku = _sku || this._sku;
      var result = void 0;

      var _search = function _search(sku, _search_obj, sku_key) {
        try {
          var _sku_key = sku_key || 0;
          var keys = _lodash2.default.keys(_search_obj);
          var _result = [];
          sku.forEach(function (item) {
            if (item[keys[_sku_key]] === _search_obj[keys[_sku_key]]) _result.push(item);
          });

          if (_lodash2.default.size(_result) > 1) _search(_result, _search_obj, _sku_key + 1);else if (_lodash2.default.size(_result) === 1) result = _result;
        } catch (err) {
          throw new Error('The data entered is incorrect !!!');
        }
      };

      _search(_SKU, _sku);

      return _lodash2.default.size(result) === 1 && result ? result[0] : {};
    }
  }]);

  return SearchSKU;
}();

exports.default = SearchSKU;