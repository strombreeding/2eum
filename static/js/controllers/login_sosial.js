// 구글 로그인
const login__google = async()=>{
    const code = new URL(window.location.href).searchParams.get("code")
    console.log(code)
    console.log("google")
    await $.ajax({
            url: `https://wetube-jinytree.herokuapp.com/2eum/auth/google/callback?code=${code}`,
            type: "GET",
            success: function(res){
                console.log(res)
                document.cookie =`access_token=${res.data.sessionId};`
                localStorage.setItem("loggedIn","true")
                localStorage.setItem("avatarUrl",`${res.data.avatarUrl}`)
                location.href="/2eum"
            }
        });
}

// 카카오 로그인 
const key = async ()=>{
    const key = await $.ajax({
        url:"https://wetube-jinytree.herokuapp.com/2eum/kakao",
        type:"GET",
        success:(res)=>{
        }
    })
    url = key.data.a;
    restKey=key.data.b
  }
const login__kakao = async()=>{
    const code = new URL(window.location.href).searchParams.get("code")
    console.log(restKey,url)
    console.log("kakao")
    const baseUrl ="https://kauth.kakao.com/oauth/token"
    const config = {
        grant_type:"authorization_code",
        client_id:restKey ,
        redirect_uri:url ,
        code,
    }
    const params = new URLSearchParams(config).toString();
    console.log(params)
    const a = await $.ajax({
        url: baseUrl ,
        headers: { 'Content-Type': "application/x-www-form-urlencoded;charset=utf-8" },
        data:config,
        type: "POST",
        success: function(res){
            // document.cookie =`AccessToken=${res.data.sessionId};`
            // localStorage.setItem("loggedIn","true")
            // localStorage.setItem("avatarUrl",`${res.data.avatarUrl}`)
            // location.href="http://127.0.0.1:5500/"
        }
    });
    document.cookie=`access_token=${a.access_token}`
}
function get_cookie(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
}
const kakao_finish = async()=>{
    const access_token = get_cookie("access_token")
    console.log(access_token)
    console.log("피니시 시작!!")
    const result = await $.ajax({
        url:`https://wetube-jinytree.herokuapp.com/2eum/kakao/finish`,
        type:"POST",
        data:{
            access_token
        },
        success:(res)=>{
            const name = access_token;
            const value = res.data.sessionId;
            document.cookie=`${name}=${value};`
            localStorage.setItem("loggedIn","true")
            localStorage.setItem("avatarUrl",`${res.data.avatarUrl}`)
            location.href="/2eum"
        }
    })
}


const loginStart = async()=>{
    if(localStorage.getItem("sosial") === "google"){
        await login__google()
    }else if (localStorage.getItem("sosial") === "kakao"){
        await key()
        await login__kakao()
        await kakao_finish()
    }
}

window.addEventListener("load",loginStart)
// const login__kakao = async()=>{
    
//     console.log("kakao")
// }