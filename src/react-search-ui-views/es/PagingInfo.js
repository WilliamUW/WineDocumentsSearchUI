import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from "prop-types";
import React from "react";
import { appendClassName } from "./view-helpers";

function PagingInfo(_ref) {
  var className = _ref.className,
    end = _ref.end,
    searchTerm = _ref.searchTerm,
    start = _ref.start,
    totalResults = _ref.totalResults,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "end",
      "searchTerm",
      "start",
      "totalResults"
    ]);

  return /*#__PURE__*/ React.createElement(
    "div",
    _extends(
      {
        className: appendClassName("sui-paging-info", className)
      },
      rest
    ),
    "This is ES Currently Showing",
    " ",
    /*#__PURE__*/ React.createElement("strong", null, start, " - ", end),
    " ",
    "out of !!ES",
    /*#__PURE__*/ React.createElement("strong", null, totalResults),
    searchTerm &&
      /*#__PURE__*/ React.createElement(
        React.Fragment,
        null,
        " ",
        "for: ",
        /*#__PURE__*/ React.createElement("em", null, searchTerm)
      )
  );
}

PagingInfo.propTypes = {
  end: PropTypes.number.isRequired,
  searchTerm: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired,
  className: PropTypes.string
};
export default PagingInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYWdpbmdJbmZvLmpzIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIlJlYWN0IiwiYXBwZW5kQ2xhc3NOYW1lIiwiUGFnaW5nSW5mbyIsImNsYXNzTmFtZSIsImVuZCIsInNlYXJjaFRlcm0iLCJzdGFydCIsInRvdGFsUmVzdWx0cyIsInJlc3QiLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLE9BQWxCO0FBRUEsU0FBU0MsZUFBVCxRQUFnQyxnQkFBaEM7O0FBRUEsU0FBU0MsVUFBVCxPQU9HO0FBQUEsTUFOREMsU0FNQyxRQU5EQSxTQU1DO0FBQUEsTUFMREMsR0FLQyxRQUxEQSxHQUtDO0FBQUEsTUFKREMsVUFJQyxRQUpEQSxVQUlDO0FBQUEsTUFIREMsS0FHQyxRQUhEQSxLQUdDO0FBQUEsTUFGREMsWUFFQyxRQUZEQSxZQUVDO0FBQUEsTUFERUMsSUFDRjs7QUFDRCxzQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFFUCxlQUFlLENBQUMsaUJBQUQsRUFBb0JFLFNBQXBCO0FBQS9CLEtBQW1FSyxJQUFuRSxjQUNVLEdBRFYsZUFFRSxvQ0FDR0YsS0FESCxTQUNhRixHQURiLENBRkYsRUFJWSxHQUpaLDBCQUtTLG9DQUFTRyxZQUFULENBTFQsRUFNR0YsVUFBVSxpQkFDVCwwQ0FDRyxHQURILHdCQUVPLGdDQUFLQSxVQUFMLENBRlAsQ0FQSixDQURGO0FBZUQ7O0FBRURILFVBQVUsQ0FBQ08sU0FBWCxHQUF1QjtBQUNyQkwsRUFBQUEsR0FBRyxFQUFFTCxTQUFTLENBQUNXLE1BQVYsQ0FBaUJDLFVBREQ7QUFFckJOLEVBQUFBLFVBQVUsRUFBRU4sU0FBUyxDQUFDYSxNQUFWLENBQWlCRCxVQUZSO0FBR3JCTCxFQUFBQSxLQUFLLEVBQUVQLFNBQVMsQ0FBQ1csTUFBVixDQUFpQkMsVUFISDtBQUlyQkosRUFBQUEsWUFBWSxFQUFFUixTQUFTLENBQUNXLE1BQVYsQ0FBaUJDLFVBSlY7QUFLckJSLEVBQUFBLFNBQVMsRUFBRUosU0FBUyxDQUFDYTtBQUxBLENBQXZCO0FBUUEsZUFBZVYsVUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgYXBwZW5kQ2xhc3NOYW1lIH0gZnJvbSBcIi4vdmlldy1oZWxwZXJzXCI7XG5cbmZ1bmN0aW9uIFBhZ2luZ0luZm8oe1xuICBjbGFzc05hbWUsXG4gIGVuZCxcbiAgc2VhcmNoVGVybSxcbiAgc3RhcnQsXG4gIHRvdGFsUmVzdWx0cyxcbiAgLi4ucmVzdFxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXthcHBlbmRDbGFzc05hbWUoXCJzdWktcGFnaW5nLWluZm9cIiwgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxuICAgICAgU2hvd2luZ3tcIiBcIn1cbiAgICAgIDxzdHJvbmc+XG4gICAgICAgIHtzdGFydH0gLSB7ZW5kfVxuICAgICAgPC9zdHJvbmc+e1wiIFwifVxuICAgICAgb3V0IG9mIDxzdHJvbmc+e3RvdGFsUmVzdWx0c308L3N0cm9uZz5cbiAgICAgIHtzZWFyY2hUZXJtICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgZm9yOiA8ZW0+e3NlYXJjaFRlcm19PC9lbT5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5QYWdpbmdJbmZvLnByb3BUeXBlcyA9IHtcbiAgZW5kOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHNlYXJjaFRlcm06IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3RhcnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdG90YWxSZXN1bHRzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5nSW5mbztcbiJdfQ==
