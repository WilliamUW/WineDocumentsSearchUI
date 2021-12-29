import PropTypes from "prop-types";
import FacetType from "./FacetType";
import FacetValue from "./FacetValue";
export default PropTypes.shape({
  data: PropTypes.arrayOf(FacetValue).isRequired,
  // Name of the field this facet is associated with
  field: PropTypes.string.isRequired,
  type: FacetType.isRequired
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9GYWNldC5qcyJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJGYWNldFR5cGUiLCJGYWNldFZhbHVlIiwic2hhcGUiLCJkYXRhIiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiLCJmaWVsZCIsInN0cmluZyIsInR5cGUiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGFBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixjQUF2QjtBQUVBLGVBQWVGLFNBQVMsQ0FBQ0csS0FBVixDQUFnQjtBQUM3QkMsRUFBQUEsSUFBSSxFQUFFSixTQUFTLENBQUNLLE9BQVYsQ0FBa0JILFVBQWxCLEVBQThCSSxVQURQO0FBRTdCO0FBQ0FDLEVBQUFBLEtBQUssRUFBRVAsU0FBUyxDQUFDUSxNQUFWLENBQWlCRixVQUhLO0FBSTdCRyxFQUFBQSxJQUFJLEVBQUVSLFNBQVMsQ0FBQ0s7QUFKYSxDQUFoQixDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IEZhY2V0VHlwZSBmcm9tIFwiLi9GYWNldFR5cGVcIjtcbmltcG9ydCBGYWNldFZhbHVlIGZyb20gXCIuL0ZhY2V0VmFsdWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgUHJvcFR5cGVzLnNoYXBlKHtcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5T2YoRmFjZXRWYWx1ZSkuaXNSZXF1aXJlZCxcbiAgLy8gTmFtZSBvZiB0aGUgZmllbGQgdGhpcyBmYWNldCBpcyBhc3NvY2lhdGVkIHdpdGhcbiAgZmllbGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdHlwZTogRmFjZXRUeXBlLmlzUmVxdWlyZWRcbn0pO1xuIl19