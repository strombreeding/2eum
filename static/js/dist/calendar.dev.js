"use strict";

var date = new Date(); // 달력 생성

var currentMonth = {};

var makeCalendar = function makeCalendar(date) {
  // 현재의 년도와 월 받아오기
  var nowYear = new Date(date).getFullYear();
  var nowMonth = new Date(date).getMonth() + 1; // 지난달의 마지막 요일

  var prevDay = new Date(nowYear, nowMonth - 1, 1).getDay(); // 현재 월의 마지막 날 구하기

  var lastDay = new Date(nowYear, nowMonth, 0).getDate(); // 남은 박스만큼 다음달 날짜 표시

  var limitDay = prevDay + lastDay;
  var nextDay = Math.ceil(limitDay / 7) * 7;
  var htmlDummy = ''; // 전달 날짜 표시하기

  for (var i = 0; i < prevDay; i++) {
    htmlDummy += "<div class=\"noColor\"></div>";
  } // 현재 날짜 표시하기 및 날짜 클릭


  for (var _i = 1; _i <= lastDay; _i++) {
    htmlDummy += "<div class=\"div\" id='".concat(_i, "' onclick=click_day(this.id)>").concat(_i, "</div>");
  } // 다음달 날짜 표시하기


  for (var _i2 = limitDay; _i2 < nextDay; _i2++) {
    htmlDummy += "<div class=\"noColor\"></div>";
  }

  document.querySelector(".dateBoard").innerHTML = htmlDummy;
  document.querySelector(".dateTitle").innerText = "".concat(nowYear, "\uB144 ").concat(nowMonth, "\uC6D4");
};

var click_day = function click_day(id) {
  var FullYear = currentMonth.getFullYear();
  var Month = currentMonth.getMonth() + 1;
  var Day = id;
  var input = document.getElementsByName("날짜")[0];
  input.value = "".concat(FullYear, "\uB144 ").concat(Month, "\uC6D4 ").concat(Day, "\uC77C");
};

makeCalendar(date); // 이전달 이동

document.querySelector(".prevDay").onclick = function () {
  currentMonth = new Date(date.setMonth(date.getMonth() - 1));
  makeCalendar(currentMonth);
}; // 다음달 이동


document.querySelector(".nextDay").onclick = function () {
  currentMonth = new Date(date.setMonth(date.getMonth() + 1));
  makeCalendar(currentMonth);
};