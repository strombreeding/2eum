const home__view = ()=>{
  const home = document.getElementById("home")
  const login = document.getElementById("login")
  home.className=""
  login.innerHTML=``      
  console.log("home__view")
}
const login__view = ()=>{
  console.log("login__view")
  const home = document.getElementById("home")
  const login = document.getElementById("login")
  login.innerHTML=`
  <div class="login__div">
  <small>소셜 로그인</small>
  <form class="sosial__form">
    <a class="sosial__btn" onclick="login__google()">
      google
      <img class="kakao-img" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe8b12cf6-c620-430c-8b03-bff1c1a295be%2FUntitled.png?table=block&amp;id=bcd5b978-bace-4664-90ce-15bf97dbfa32&amp;spaceId=beaa8bbc-f504-4c20-b220-9fc699f70e12&amp;width=2000&amp;userId=14cc2ef3-04b9-41f7-9991-3bf06bfcb033&amp;cache=v22"/></a>
    <a class="sosial__btn" onclick="login__kakao()">
      kakao
      <img class="kakao-img" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7a7edf55-3336-470c-858d-69e14253cb8b%2FUntitled.png?table=block&amp;id=24064121-a0fd-4c70-8d41-7a83b5cc890c&amp;spaceId=beaa8bbc-f504-4c20-b220-9fc699f70e12&amp;width=2000&amp;userId=14cc2ef3-04b9-41f7-9991-3bf06bfcb033&amp;cache=v2"/>
    </a>
  </form>
</div>
  `
  home.className="hidden"
}