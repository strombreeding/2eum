const date = new Date();
// 달력 생성
let currentMonth = date

const makeCalendar = async(date) => {
  // 현재의 년도와 월 받아오기
  const nowYear = new Date(date).getFullYear();
  const nowMonth = new Date(date).getMonth() + 1;
  // 년도와 월을 보내서 월간 예약현황 표기

  
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
      htmlDummy += `<div class="div" id='${i}' data-cnt="" onclick=click_day(this.id)>${i}</div>`;
    }


    // 다음달 날짜 표시하기
    for (let i = limitDay; i < nextDay; i++) {
      htmlDummy += `<div class="noColor"></div>`;
    }

    
    document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
    document.querySelector(`.dateTitle`).innerText = `${nowYear}년 ${nowMonth}월`;

    // 이번달 티켓팅 불러옴 (날짜,이름)
    const tickets = await $.ajax({
      url:`http://localhost:4000/tickets?year=${nowYear}&month=${nowMonth}`,
      type:"GET",
    })
    // 아래 포문은 캘린더 날짜에 data-cnt 를 1 증가시켜줌.
    for (let i = 0; i < tickets.length; i++) {
      const ticketDay = tickets[i].day
      let divData = document.getElementById(`${ticketDay}`)
      console.log(tickets[i].day, "을 작업중 =",divData)
      divData.dataset.cnt+=0
    }
  }
// 첫 페이지 로드시, 로그인 여부에 따라 캘린더 노출
if(localStorage.getItem("loggedIn")==="true"){
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
}else{
  document.getElementById("home").className="hidden"
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
  const click__day = document.getElementsByName("click__day")[0]
  // 위 요소에 자녀 추가하고, class를 ""로
  click__day.className=""
}
const click_date=(id)=>{
  const input = document.getElementsByName("날짜")[1]
  input.value=``
  input.value+=`${id}시`
}

