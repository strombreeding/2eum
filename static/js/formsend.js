const ticket__form = document.querySelector(".ticket__form");
const ticketing = async (e) => {
  e.preventDefault();
  const access_token = localStorage.getItem("access_token");
  const ticket = document.getElementsByName("날짜")[0].value;
  const date = ticket.split(".");
  const time = document.getElementsByName("날짜")[1].value;
  const con = confirm(`${ticket} ${time}\n확실합니꽈~?`);
  if (ticket && time && con) {
    date.push(time.replace("시", ""));
    console.log(date);
    await $.ajax({
      type: "post",
      url: `https://${abc}/tickets`,
      // url:`http://${abc}/tickets`,
      data: { date, owner: access_token },
      dataType: "JSON",
      success: (res) => {
        alert("예약 성공!!");
        location.reload();
      },
      error: (err) => {
        console.log(err);
        alert("아이쿠..\n 예약중 문제가!!\n로그아웃 후 다시 로그인 해보세요!");
      },
    });
  } else if (!con) {
    document.getElementById("ticket_plate").className = "hidden";
    document.getElementById("ticket_final").className = "hidden";
  } else {
    alert("아이쿠..\n 예약중 문제가!!\n날짜와 시간을 다시 정해보세요");
  }
};
ticket__form.addEventListener("submit", ticketing);
