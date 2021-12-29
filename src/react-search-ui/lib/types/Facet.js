"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FacetType = _interopRequireDefault(require("./FacetType"));

var _FacetValue = _interopRequireDefault(require("./FacetValue"));

var _default = _propTypes.default.shape({
  data: _propTypes.default.arrayOf(_FacetValue.default).isRequired,
  // Name of the field this facet is associated with
  field: _propTypes.default.string.isRequired,
  type: _FacetType.default.isRequired
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9GYWNldC5qcyJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJzaGFwZSIsImRhdGEiLCJhcnJheU9mIiwiRmFjZXRWYWx1ZSIsImlzUmVxdWlyZWQiLCJmaWVsZCIsInN0cmluZyIsInR5cGUiLCJGYWNldFR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztlQUVlQSxtQkFBVUMsS0FBVixDQUFnQjtBQUM3QkMsRUFBQUEsSUFBSSxFQUFFRixtQkFBVUcsT0FBVixDQUFrQkMsbUJBQWxCLEVBQThCQyxVQURQO0FBRTdCO0FBQ0FDLEVBQUFBLEtBQUssRUFBRU4sbUJBQVVPLE1BQVYsQ0FBaUJGLFVBSEs7QUFJN0JHLEVBQUFBLElBQUksRUFBRUMsbUJBQVVKO0FBSmEsQ0FBaEIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBGYWNldFR5cGUgZnJvbSBcIi4vRmFjZXRUeXBlXCI7XG5pbXBvcnQgRmFjZXRWYWx1ZSBmcm9tIFwiLi9GYWNldFZhbHVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFByb3BUeXBlcy5zaGFwZSh7XG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheU9mKEZhY2V0VmFsdWUpLmlzUmVxdWlyZWQsXG4gIC8vIE5hbWUgb2YgdGhlIGZpZWxkIHRoaXMgZmFjZXQgaXMgYXNzb2NpYXRlZCB3aXRoXG4gIGZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHR5cGU6IEZhY2V0VHlwZS5pc1JlcXVpcmVkXG59KTtcbiJdfQ==