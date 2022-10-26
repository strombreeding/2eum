const cancel = () => {
  document.getElementById("ticket_plate").className = "hidden";
  document.getElementById("ticket_final").className = "hidden";
  const click__day = document.getElementsByName("click__day")[0];
  click__day.className = "hidden";
  const dayTicketing = document.getElementById("dayTicketing");
  while (dayTicketing.hasChildNodes()) {
    dayTicketing.removeChild(dayTicketing.firstChild);
  }
  document.getElementById("cancel").nextElementSibling.id = "accept";
};

const accept = (id) => {
  if (id === "accept") {
    document.getElementById("accept").id = "makeTime";
    const click__day = document.getElementsByName("click__day")[0];
    const dayTicketing = document.getElementById("dayTicketing");
    while (dayTicketing.hasChildNodes()) {
      dayTicketing.removeChild(dayTicketing.firstChild);
    }
    click__day.firstElementChild.firstElementChild.textContent = "시간대";
    dayTicketing.className = "timetable";
    makeTimeTable();
  } else if (id === "makeTime") {
    document.getElementById("makeTime").id = "accept";
    console.log("플로우 굳");
    const click__day = document.getElementsByName("click__day")[0];
    const dayTicketing = document.getElementById("dayTicketing");
    while (dayTicketing.hasChildNodes()) {
      dayTicketing.removeChild(dayTicketing.firstChild);
    }
    click__day.firstElementChild.firstElementChild.textContent = "예약 현황";
    dayTicketing.className = "";
    click__day.className = "hidden";
    document.getElementById("ticket_plate").className = "ticket_plate";
    document.getElementById("ticket_final").className = "ticket_final";
    const location =
      document.getElementsByClassName("ticket_final")[0].offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
  }
};
