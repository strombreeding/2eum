const ticket__form = document.querySelector(".ticket__form")
const ticketing = async(e)=>{
  e.preventDefault()
  const access_token = localStorage.getItem("access_token")
  const ticket = document.getElementsByName("날짜")[0].value;
  const date = ticket.split(".")
  const time = document.getElementsByName("날짜")[1].value;
  if(confirm(`${ticket} ${time}\n확실합니꽈~?`)){
    date.push(time.replace("시",""))
    console.log(date)
    await $.ajax({
        type:"post",
        url:`http://localhost:4000/tickets`,
        data:{date,owner:access_token},
        dataType:"JSON",
        success : (res)=>{
            console.log(res)
        },
        error: (err)=>{
          alert("아이쿠..\n 예약중 문제가!!\n로그아웃 후 다시 로그인 해보세요!")
        }
        
    })
  }
}
ticket__form.addEventListener("submit",ticketing)


