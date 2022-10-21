const login__google = async()=>{
    const code = new URL(window.location.href).searchParams.get("code")
    console.log(code)
    console.log("google")
    await $.ajax({
            url: `https://wetube-jinytree.herokuapp.com/2eum/auth/google/callback?code=${code}`,
            type: "GET",
            success: function(res){
                console.log(res)
                console.log(res.msg)
                console.log(res.statusCode)
                console.log(res.data)
                alert(`${res.msg}\n${res.statusCode}\n${res.data}`)
                }
            });
}
window.addEventListener("load",login__google)
// const login__kakao = async()=>{
    
//     console.log("kakao")
// }