const header = document.getElementById("header")
if(loggedIn){
    header.innerHTML=`
    <div class="home__btn">
      <button class="home" onclick="home__view()">홈</button>
    </div>
    <div class="header__list">
      <span class="header__profile" onclick="mypage()">
        <img class="header__avatar" src=${localStorage.getItem("avatarUrl")} crossorigin="Anonymous" id="header__avatar"/>
      </span>
      <button class="login" onclick="logout()">로그아웃</button>
    </div>
    `
}else{
    header.innerHTML=`
    <div class="home__btn">
      <button class="home" onclick="home__view()">홈</button>
    </div>
    <div class="header__list">
      <button class="login" onclick="login__view()">로그인</button>
    </div>
    `
}

const mypage = ()=>{
  console.log(home)
  home.className="hidden"
  
  
}