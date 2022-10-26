// 로그인 | 비로그인 상태의 header html

const header = document.getElementById("header");
if (loggedIn) {
  header.innerHTML = `
    <div class="home__btn">
    <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb179355a-4cdc-4f94-a929-e329daae69fe%2F1234.png?table=block&id=3290ece0-681a-4c6c-ad02-13da56a3d8f9&spaceId=beaa8bbc-f504-4c20-b220-9fc699f70e12&width=2000&userId=14cc2ef3-04b9-41f7-9991-3bf06bfcb033&cache=v2">
    
    <button class="home" onclick="home__view()">이음예약
    </button>
        </img>
      
    </div>
    <div class="header__list">
      <span class="header__profile" onclick="mypage()">
        <img class="header__avatar" src=${localStorage.getItem(
          "avatarUrl"
        )} id="header__avatar"/>
      </span>
      <button class="login" onclick="logout()">로그아웃</button>
    </div>
    `;
  header.className = "header";
}
if (localStorage.getItem("loggedIn") !== "true") {
  const article = document.getElementsByTagName("article")[0];
  article.innerHTML = `
  <br/><br/>
  <h1>청년공간-이음</h1><small>이용을 위해서 로그인이 필요합니다.</small><br/><br/>
  <button class="login" onclick="login__view()">로그인하기!</button><br/><br/><br/><br/><br/><br/>
  `;
  // header.className = "header";
}

const mypage = () => {
  console.log(home);
  home.className = "hidden";
};
