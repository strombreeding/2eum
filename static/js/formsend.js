const zzz = document.querySelector(".zzz")
const zz = async(e)=>{
  e.preventDefault()
  const form = document.getElementById("zz") 
  const a = form.value
  console.log(a)
  // await $.ajax({
  //     type:"Post",
  //     url:`https://wetube-jinytree.herokuapp.com/api/test`,
  //     data:{a},
  //     dataType:"JSON",
  //     success : (response)=>{
  //         alert(response.data.a)
  //     }
  // })
}
zzz.addEventListener("submit",zz)


