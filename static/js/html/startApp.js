const splash = document.getElementById("splash");
window.addEventListener("load", () => {
  setTimeout(() => {
    splash.remove();
    console.log("지워봐");
    document.getElementsByTagName("article")[0].className = "";
    console.log("왜못지워");
  }, 3700);
});
