const ticket__form = document.querySelector(".ticket__form")
const ticketing = async(e)=>{
  e.preventDefault()
  const access_token = localStorage.getItem("access_token")
  const ticket = document.getElementsByName("날짜")[0].value;
  const date = ticket.split(".")
  console.log(date)
  await $.ajax({
      type:"post",
      url:`http://localhost:4000/tickets`,
      data:{date,access_token},
      dataType:"JSON",
      success : (res)=>{
          console.log(res)
      }
  })
}
ticket__form.addEventListener("submit",ticketing)


