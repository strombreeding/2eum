/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./static/js/html/header.js":
/*!**********************************!*\
  !*** ./static/js/html/header.js ***!
  \**********************************/
/***/ (() => {

eval("// 로그인 | 비로그인 상태의 header html\n\nconst header = document.getElementById(\"header\");\nconst mypage = () => {\n  console.log(home);\n  home.className = \"hidden\";\n};\nconst home__view = () => {\n  const home = document.getElementById(\"home\");\n  const login = document.getElementById(\"login\");\n  home.className = \"\";\n  login.innerHTML = ``;\n  console.log(\"home__view\");\n};\nconst login__view = async () => {\n  console.log(\"zz\");\n  const article = document.getElementsByTagName(\"article\")[0];\n  while (article.hasChildNodes()) {\n    article.removeChild(article.firstChild);\n  }\n  console.log(\"login__view\");\n  const login = document.getElementById(\"login\");\n  login.innerHTML = `\n  <div class=\"login__div\">\n  <br>\n  <br>\n  <br>\n  <small>소셜 로그인</small>\n  <form class=\"sosial__form\">\n    <a class=\"sosial__btn\" id=\"googleBtn\">\n      google\n      <img class=\"kakao-img\" src=\"https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe8b12cf6-c620-430c-8b03-bff1c1a295be%2FUntitled.png?table=block&amp;id=bcd5b978-bace-4664-90ce-15bf97dbfa32&amp;spaceId=beaa8bbc-f504-4c20-b220-9fc699f70e12&amp;width=2000&amp;userId=14cc2ef3-04b9-41f7-9991-3bf06bfcb033&amp;cache=v22\"/></a>\n    <a class=\"sosial__btn\" id=\"kakaoBtn\">\n      kakao\n      <img class=\"kakao-img\" src=\"https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7a7edf55-3336-470c-858d-69e14253cb8b%2FUntitled.png?table=block&amp;id=24064121-a0fd-4c70-8d41-7a83b5cc890c&amp;spaceId=beaa8bbc-f504-4c20-b220-9fc699f70e12&amp;width=2000&amp;userId=14cc2ef3-04b9-41f7-9991-3bf06bfcb033&amp;cache=v2\"/>\n    </a>\n  </form>\n  </div>\n  `;\n  const googleBtn = document.getElementById(\"googleBtn\");\n  const kakaoBtn = document.getElementById(\"kakaoBtn\");\n  kakaoBtn.addEventListener(\"click\", kakao);\n  googleBtn.addEventListener(\"click\", google);\n};\nconst logout = async () => {\n  await $.ajax({\n    url: `https://wetube-jinytree.herokuapp.com/2eum/${localStorage.getItem(\"access_token\")}`,\n    type: \"delete\",\n    success: res => {\n      alert(res.msg);\n      localStorage.clear();\n      location.reload();\n      // 서버에서 토큰 밸류(session id)를 db.session 에서 조회후 삭제함.\n      // 서버에선 미들웨어\n    },\n\n    error: err => {\n      alert(err);\n      localStorage.clear();\n      location.reload();\n      alert(\"음..이상함 발견, 그래도 로그아웃완료\");\n    }\n  });\n  // document.cookie=\"access_token=none;expires=Thu, 01 Jan 1999 00:00:10 GMT;\"\n  // localStorage.removeItem(\"loggedIn\")\n  // localStorage.removeItem(\"avatarUrl\")\n  // localStorage.removeItem(\"sosial\")\n};\n\n// 소셜로그인 버튼\nconst google = async () => {\n  localStorage.setItem(\"sosial\", \"google\");\n  location.href = \"https://wetube-jinytree.herokuapp.com/2eum/google/start\";\n};\nconst kakao = async () => {\n  localStorage.setItem(\"sosial\", \"kakao\");\n  location.href = \"https://wetube-jinytree.herokuapp.com/2eum/kakao/start\";\n};\nif (true) {\n  if (loggedIn) {\n    header.innerHTML = `\n    <div class=\"home__btn\" id=\"homeView\">\n      <img src=\"https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb179355a-4cdc-4f94-a929-e329daae69fe%2F1234.png?table=block&id=3290ece0-681a-4c6c-ad02-13da56a3d8f9&spaceId=beaa8bbc-f504-4c20-b220-9fc699f70e12&width=2000&userId=14cc2ef3-04b9-41f7-9991-3bf06bfcb033&cache=v2\">\n      \n      <button class=\"home\" >이음예약\n      </button>\n      </img>\n      \n      </div>\n      <div class=\"header__list\">\n      <span class=\"header__profile\" id=\"mypageBtn\">\n      <img class=\"header__avatar\" src=${localStorage.getItem(\"avatarUrl\")} id=\"header__avatar\"/>\n        </span>\n        <button class=\"login\" id=\"logout\">로그아웃</button>\n        </div>\n        `;\n    // header.className = \"\";\n    const logoutBtn = document.getElementById(\"logout\");\n    const homeView = document.getElementById(\"homeView\");\n    homeView.addEventListener(\"click\", home__view);\n    logoutBtn.addEventListener(\"click\", logout);\n  }\n  if (localStorage.getItem(\"loggedIn\") !== \"true\") {\n    const article = document.getElementsByTagName(\"article\")[0];\n    article.innerHTML = `\n    <br/><br/>\n    <h1>청년공간-이음</h1><small>이용을 위해서 로그인이 필요합니다.</small><br/><br/>\n    <button class=\"login\" id=\"login__view\">로그인하기!</button><br/><br/><br/><br/><br/><br/>\n    `;\n    const logoutBtn = document.getElementById(\"logout\");\n    const loginview = document.getElementById(\"login__view\");\n    loginview.addEventListener(\"click\", login__view);\n\n    // header.className = \"header\";\n  }\n}\n\n//# sourceURL=webpack://2eum/./static/js/html/header.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/html/header.js"]();
/******/ 	
/******/ })()
;