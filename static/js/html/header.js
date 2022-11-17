// 로그인 | 비로그인 상태의 header html

const header = document.getElementById("header");
const mypage = () => {
  console.log(home);
  home.className = "hidden";
};
const home__view = () => {
  const home = document.getElementById("home");
  const login = document.getElementById("login");
  home.className = "";
  login.innerHTML = ``;
  console.log("home__view");
};

const login__view = async () => {
  console.log("zz");
  const article = document.getElementsByTagName("article")[0];
  while (article.hasChildNodes()) {
    article.removeChild(article.firstChild);
  }
  console.log("login__view");
  const login = document.getElementById("login");
  login.innerHTML = `
  <div class="login__div">
  <br>
  <br>
  <br>
  <small>소셜 로그인</small>
  <form class="sosial__form">
    <a class="sosial__btn" id="googleBtn">
      google
      <img class="kakao-img" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe8b12cf6-c620-430c-8b03-bff1c1a295be%2FUntitled.png?table=block&amp;id=bcd5b978-bace-4664-90ce-15bf97dbfa32&amp;spaceId=beaa8bbc-f504-4c20-b220-9fc699f70e12&amp;width=2000&amp;userId=14cc2ef3-04b9-41f7-9991-3bf06bfcb033&amp;cache=v22"/></a>
    <a class="sosial__btn" id="kakaoBtn">
      kakao
      <img class="kakao-img" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7a7edf55-3336-470c-858d-69e14253cb8b%2FUntitled.png?table=block&amp;id=24064121-a0fd-4c70-8d41-7a83b5cc890c&amp;spaceId=beaa8bbc-f504-4c20-b220-9fc699f70e12&amp;width=2000&amp;userId=14cc2ef3-04b9-41f7-9991-3bf06bfcb033&amp;cache=v2"/>
    </a>
  </form>
  </div>
  `;
  const googleBtn = document.getElementById("googleBtn");
  const kakaoBtn = document.getElementById("kakaoBtn");
  kakaoBtn.addEventListener("click", kakao);
  googleBtn.addEventListener("click", google);
};
const logout = async () => {
  await $.ajax({
    url: `https://wetube-jinytree.herokuapp.com/2eum/${localStorage.getItem(
      "access_token"
    )}`,
    type: "delete",
    success: (res) => {
      alert(res.msg);
      localStorage.clear();
      location.reload();
      // 서버에서 토큰 밸류(session id)를 db.session 에서 조회후 삭제함.
      // 서버에선 미들웨어
    },
    error: (err) => {
      alert(err);
      localStorage.clear();
      location.reload();
      alert("음..이상함 발견, 그래도 로그아웃완료");
    },
  });
  // document.cookie="access_token=none;expires=Thu, 01 Jan 1999 00:00:10 GMT;"
  // localStorage.removeItem("loggedIn")
  // localStorage.removeItem("avatarUrl")
  // localStorage.removeItem("sosial")
};

// 소셜로그인 버튼
const google = async () => {
  localStorage.setItem("sosial", "google");
  location.href = "https://wetube-jinytree.herokuapp.com/2eum/google/start";
};
const kakao = async () => {
  localStorage.setItem("sosial", "kakao");
  location.href = "https://wetube-jinytree.herokuapp.com/2eum/kakao/start";
};

if (true) {
  if (loggedIn) {
    header.innerHTML = `
    <div class="home__btn" id="homeView">
      <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb179355a-4cdc-4f94-a929-e329daae69fe%2F1234.png?table=block&id=3290ece0-681a-4c6c-ad02-13da56a3d8f9&spaceId=beaa8bbc-f504-4c20-b220-9fc699f70e12&width=2000&userId=14cc2ef3-04b9-41f7-9991-3bf06bfcb033&cache=v2">
      
      <button class="home" >이음예약
      </button>
      </img>
      
      </div>
      <div class="header__list">
      <span class="header__profile" id="mypageBtn">
      <img class="header__avatar" src=${localStorage.getItem(
        "avatarUrl"
      )} id="header__avatar"/>
        </span>
        <button class="login" id="logout">로그아웃</button>
        </div>
        `;
    // header.className = "";
    const logoutBtn = document.getElementById("logout");
    const homeView = document.getElementById("homeView");
    homeView.addEventListener("click", home__view);
    logoutBtn.addEventListener("click", logout);
  }
  if (localStorage.getItem("loggedIn") !== "true") {
    const article = document.getElementsByTagName("article")[0];
    article.innerHTML = `
    <br/><br/>
    <h1>청년공간-이음</h1><small>이용을 위해서 로그인이 필요합니다.</small><br/><br/>
    <button class="login" id="login__view">로그인하기!</button><br/><br/><br/><br/><br/><br/>
    `;
    const logoutBtn = document.getElementById("logout");
    const loginview = document.getElementById("login__view");
    loginview.addEventListener("click", login__view);

    // header.className = "header";
  }
}
