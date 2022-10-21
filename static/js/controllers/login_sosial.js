const login__google = async()=>{
    const code = new URL(window.location.href).searchParams.get("code")
    console.log(code)
    console.log("google")
    await $.ajax({
            url: `https://wetube-jinytree.herokuapp.com/2eum/auth/google/callback?code=${code}`,
            type: "GET",
            success: function(res){
                console.log(res)
                document.cookie =`AccessToken=${res.data.sessionId};`
                localStorage.setItem("loggedIn","true")
                location.href="http://127.0.0.1:5500/"
            }
        });
}

window.addEventListener("load",login__google)
// const login__kakao = async()=>{
    
//     console.log("kakao")
// }