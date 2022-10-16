"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var myName = "Mohammad";
var myF = function myF() {
  console.log(myName);
};
var ID = 1640359281;
var myClass = /*#__PURE__*/function () {
  function myClass() {
    _classCallCheck(this, myClass);
  }
  _createClass(myClass, [{
    key: "sayMyname",
    value: function sayMyname() {
      console.log("Mohammad");
    }
  }]);
  return myClass;
}();
var myClassName = "Hello there";
var calculate = function calculate(a, b) {
  return a + b;
};
