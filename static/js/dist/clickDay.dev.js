"use strict";

function click_day(id) {
  var FullYear = new Date().getFullYear();
  var Month = new Date().getMonth();
  var Day = id;
  var input = document.getElementsByName("날짜")[0];
  input.value = "".concat(FullYear, "\uB144 ").concat(Month, "\uC6D4 ").concat(Day, "\uC77C");
}