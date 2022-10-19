const zz = async(e)=>{
  e.preventDefault()
const form = document.getElementById("zz") 
const formData = new FormData(form)
await $.ajax({
    type:"Post",
    url:`https://wetube-jinytree.herokuapp.com/api/test`,
    data:formData,
    dataType:"JSON",
    processData:false,
    contentType:false,
    success : (response)=>{
        alert(response.msg)
    }
})
}
zzz.addEventListener("submit",zz)