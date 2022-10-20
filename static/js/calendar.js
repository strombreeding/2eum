const date = new Date();
// 달력 생성
let currentMonth = {}
const makeCalendar = (date) => {
    // 현재의 년도와 월 받아오기
    const nowYear = new Date(date).getFullYear();
    const nowMonth = new Date(date).getMonth() + 1;
  
    // 지난달의 마지막 요일
    const prevDay = new Date(nowYear, nowMonth - 1, 1).getDay();
  
    // 현재 월의 마지막 날 구하기
    const lastDay = new Date(nowYear, nowMonth, 0).getDate();
  
    // 남은 박스만큼 다음달 날짜 표시
    const limitDay = prevDay + lastDay;
    const nextDay = Math.ceil(limitDay / 7) * 7;
  
    let htmlDummy = '';
  
    // 전달 날짜 표시하기
    for (let i = 0; i < prevDay; i++) {
      htmlDummy += `<div class="noColor"></div>`;
    }
  
    // 현재 날짜 표시하기 및 날짜 클릭
    for (let i = 1; i <= lastDay; i++) { 
      htmlDummy += `<div class="div" id='${i}' onclick=click_day(this.id)>${i}</div>`;
    }


    // 다음달 날짜 표시하기
    for (let i = limitDay; i < nextDay; i++) {
      htmlDummy += `<div class="noColor"></div>`;
    }
  
    document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
    document.querySelector(`.dateTitle`).innerText = `${nowYear}년 ${nowMonth}월`;
  }
const  click_day= (id)=>{
  const FullYear =currentMonth.getFullYear()
  const Month = currentMonth.getMonth()+1
  const Day = id
  const input = document.getElementsByName("날짜")[0]
  input.value=`${FullYear}년 ${Month}월 ${Day}일`
}
  
  
  makeCalendar(date);
  
  // 이전달 이동
  document.querySelector(`.prevDay`).onclick = () => {
  currentMonth=new Date(date.setMonth(date.getMonth() - 1))
  makeCalendar(currentMonth);
  }
  
  // 다음달 이동
  document.querySelector(`.nextDay`).onclick = () => {
  currentMonth=new Date(date.setMonth(date.getMonth() + 1))
  makeCalendar(currentMonth);
  }