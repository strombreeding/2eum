const splash = document.getElementById("splash");
window.addEventListener("load", () => {
  console.log(sessionStorage.getItem("first_started") === null);
  if (sessionStorage.getItem("first_started") === null) {
    splash.innerHTML = `
        <div><img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5be2fce4-9f46-4029-adf9-ff287712c1b9%2FKakaoTalk_20221022_215509815.png?table=block&amp;id=fabdb8c2-df31-416b-b512-aafefa710184&amp;spaceId=beaa8bbc-f504-4c20-b220-9fc699f70e12&amp;width=2000&amp;userId=14cc2ef3-04b9-41f7-9991-3bf06bfcb033&amp;cache=v2"/><br/><br/>
        <p>청년공간 - 이음</p>
        `;
    setTimeout(() => {
      splash.remove();
      document.getElementsByTagName("article")[0].className = "";
    }, 3700);
    sessionStorage.setItem("first_started", "false");
  } else {
    console.log("esle");
    document.getElementsByTagName("article")[0].className = "";
  }
});
