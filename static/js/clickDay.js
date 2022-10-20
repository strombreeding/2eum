function click_day(id){
    const FullYear = new Date().getFullYear()
    const Month = new Date().getMonth()
    const Day = id
    const input = document.getElementsByName("날짜")[0]
    input.value=`${FullYear}년 ${Month}월 ${Day}일`
  }