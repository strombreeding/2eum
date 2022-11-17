// 캘린더 html

const date = new Date();
// 달력 생성
let currentMonth = date;
let Month;
let Day;
// makeCalendar = 바디로드시 캘린더 html 생성 함수
const makeCalendar = async (date) => {
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

  let htmlDummy = "";

  // 전달 날짜 표시하기
  for (let i = 0; i < prevDay; i++) {
    htmlDummy += `<div class="noColor"></div>`;
  }

  // 현재 날짜 표시하기 및 날짜 클릭
  for (let i = 1; i <= lastDay; i++) {
    htmlDummy += `<div class="div" id='d${i}' name=d${i} onclick=click_day(this.id)>${i}</div>`;
  }

  // 다음달 날짜 표시하기
  for (let i = limitDay; i < nextDay; i++) {
    htmlDummy += `<div class="noColor"></div>`;
  }

  document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
  document.querySelector(`.dateTitle`).innerText = `${nowYear}년 ${nowMonth}월`;
  // 이번달 티켓팅 불러옴 (날짜,이름)
  const tickets = await $.ajax({
    // url:`http://localhost:4000/tickets?year=${nowYear}&month=${nowMonth}`,
    url: `https://${abc}/tickets?year=${nowYear}&month=${nowMonth}`,
    // url:`http://${abc}/tickets?year=${nowYear}&month=${nowMonth}`,
    type: "GET",
    seccess: (res) => {
      console.log(res);
      alert(res);
    },
  });
  console.log(tickets);
  // 아래 포문은 캘린더 날짜에 data-cnt 를 1 증가시켜줌.
  for (let i = 0; i < tickets.length; i++) {
    const ticketDay = tickets[i].day;
    let divData = document.getElementById(`${ticketDay}`);
    divData.dataset.cnt += 0;
  }
  const days = document.getElementsByClassName("div");
  // 아래 포문은 날짜별 예약인원수의 따라 폰트컬러 변경
  for (let i = 0; i < days.length; i++) {
    if (days[i].dataset.cnt.length >= 8) {
      days[i].style.color = "rgb(247, 37, 37)";
    } else if (days[i].dataset.cnt.length >= 6) {
      days[i].style.color = "rgb(241, 244, 44)";
    } else if (days[i].dataset.cnt.length >= 4) {
      days[i].style.color = "rgb(84, 209, 31)";
    } else if (days[i].dataset.cnt.length >= 1) {
      days[i].style.color = "rgb(37, 201, 247)";
    }
  }
};
// 로그인 상태에서 makeCalendar 함수 호출
if (localStorage.getItem("loggedIn") === "true") {
  makeCalendar(date);

  // 이전달 이동 버튼 이벤트
  document.querySelector(`.prevDay`).onclick = () => {
    currentMonth = new Date(date.setMonth(date.getMonth() - 1));
    Month -= 1;
    console.log(Month);
    makeCalendar(currentMonth);
  };

  // 다음달 이동 버튼 이벤트
  document.querySelector(`.nextDay`).onclick = () => {
    currentMonth = new Date(date.setMonth(date.getMonth() + 1));
    Month += 1;
    console.log(Month);
    makeCalendar(currentMonth);
  };
} else {
  document.getElementById("home").className = "hidden";
}

// 티켓 서비스 중 시간대 선택시 나타날 html 생성 함수
function makeTimeTable() {
  const FullYear = document
    .getElementsByClassName("dateTitle")[0]
    .textContent.substring(0, 4);
  const Month = currentMonth.getMonth() + 1;
  const input = document.getElementsByName("날짜")[0];
  const timetable = document.getElementsByClassName("timetable")[0];

  while (timetable.hasChildNodes()) {
    timetable.removeChild(timetable.firstChild);
  }
  for (let i = 10; i < 22; i++) {
    const a = document.createElement("a");
    const p = document.createElement("p");
    p.id = i;
    a.textContent = i + " 시";
    a.setAttribute("onclick", "click_date(this.id)");
    a.id = i;
    timetable.appendChild(p);
    p.appendChild(a);
  }

  input.value = `${FullYear}.${Month}.${Day}`;
}

// 캘린더- 날짜 클릭
// 현재 년,월,일 url에 담아서 get요청 => res{해당날짜 예약목록}
async function click_day(id) {
  document.getElementById("ticket_plate").className = "hidden";
  document.getElementById("ticket_final").className = "hidden";
  const FullYear = document
    .getElementsByClassName("dateTitle")[0]
    .textContent.substring(0, 4);
  const Month = currentMonth.getMonth() + 1;
  Day = id;
  try {
    const data = await $.ajax({
      // 서버에서 티켓 서치/ url /tickets?year=YY&month=MM
      // url:`http://localhost:4000/tickets/day?year=${FullYear}&month=${Month}&day=${Day}`,
      url: `https://${abc}/tickets/day?year=${FullYear}&month=${Month}&day=${Day}`,
      // url:`http://${abc}/tickets/day?year=${FullYear}&month=${Month}&day=${Day}`,
      type: "get",
      success: (res) => {
        // console.log(res);
        for (let i = 0; i < res.length; i++) {
          const p = document.createElement("p");
          const dayTicketing = document.getElementById("dayTicketing");
          p.innerHTML = `
            <span id='${res[i].date}' onclick='toggleTime(this.id)'>${res[i].date}시▶</span> 
          `;
          dayTicketing.appendChild(p);
        }
        const click__day = document.getElementsByName("click__day")[0];
        click__day.className = "";
        console.log(res);
        return;
      },
      error: (err) => {
        console.log(err);
        alert("아이코 알수없는 오류임");
        throw new Error(`${err}`);
      },
    });
  } catch (err) {
    alert(`error : ${err}`);
  }

  // 위 요소에 자녀 추가하고, class를 ""로
}
function toggleTime(id) {
  document.console.log(id);
}
// 시간대 형성

function click_date(id) {
  const input = document.getElementsByName("날짜")[1];
  input.value = ``;
  input.value += `${id}시`;
}
