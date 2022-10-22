const header = document.getElementById("header")
if(loggedIn){
    header.innerHTML=`
    <div class="home__btn">
      <button class="home" onclick="home__view()">홈</button>
    </div>
    <div class="header__list">
      <span class="header__profile" onclick="mypage()">
        <img class="header__avatar" src=${localStorage.getItem("avatarUrl")} id="header__avatar"/>
      </span>
      <button class="login" onclick="logout()">로그아웃</button>
    </div>
    `
}
if(localStorage.getItem("loggedIn")!=="true"){
  const article = document.getElementsByTagName("article")[0]
  article.innerHTML=`
  <br/><br/>
  <h1>청년공간-이음</h1><small>이용을 위해서 로그인이 필요합니다.</small><br/><br/>
  <button class="login" onclick="login__view()">로그인하기!</button><br/><br/><br/><br/><br/><br/>
  `
}

const mypage = ()=>{
  console.log(home)
  home.className="hidden"
  
  
}