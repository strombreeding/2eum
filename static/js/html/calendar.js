const date = new Date();
// 달력 생성
let currentMonth = date

let Month;
const makeCalendar = async(date) => {
  const tickets = await $.ajax({
    url:`http://localhost:4000/tickets`,
    type:"GET",
    success:(res)=>{
      
    }
})
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
    console.log("에이젝스 전")
    await $.ajax({
      url:`http://localhost:4000/tickets`,
      type:"Get",
      success:(res)=>{
        console.log(res)
      }
    })
  
    document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
    document.querySelector(`.dateTitle`).innerText = `${nowYear}년 ${nowMonth}월`;
  }
const  click_day= async(id)=>{
  const FullYear = document.getElementsByClassName("dateTitle")[0].textContent.substring(0,4)
  const Month = currentMonth.getMonth()+1
  const Day = id
  const input = document.getElementsByName("날짜")[0]
  const timetable = document.getElementsByClassName("timetable")[0]
  while ( timetable.hasChildNodes() ){
    timetable.removeChild( timetable.firstChild );       
  }
  for (let i = 10; i < 23; i++) {
    const a = document.createElement("a")
    const p = document.createElement("p")
    p.id=i
    a.textContent=i+" 시"
    a.setAttribute("onclick", "click_date(this.id)")
    a.id=i
    timetable.appendChild(p)
    p.appendChild(a)
  }
  // await $.ajax({ // 서버에서 티켓 서치/ url /tickets?year=YY&month=MM
  //   url:`http://localhost:4000/tickets/day/all?year=${FullYear}&month=${Month}`,
  //   type:"get",
  //   success:(res)=>{
  //     console.log(res)
  //   }
  // })
  input.value=`${FullYear}.${Month}.${Day}`
}
const click_date=(id)=>{
  const input = document.getElementsByName("날짜")[1]
  input.value=``
  input.value+=`${id}시`
}
  
  
  makeCalendar(date);
  
  // 이전달 이동
  document.querySelector(`.prevDay`).onclick = () => {
  currentMonth=new Date(date.setMonth(date.getMonth() - 1))
  Month-=1
  makeCalendar(currentMonth);
  }
  
  // 다음달 이동
  document.querySelector(`.nextDay`).onclick = () => {
  currentMonth=new Date(date.setMonth(date.getMonth() + 1))
  Month+=1
  makeCalendar(currentMonth);
  }