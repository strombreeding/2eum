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

/***/ "./static/js/html/startApp.js":
/*!************************************!*\
  !*** ./static/js/html/startApp.js ***!
  \************************************/
/***/ (() => {

eval("const splash = document.getElementById(\"splash\");\nwindow.addEventListener(\"load\", () => {\n  console.log(\"first login : \", sessionStorage.getItem(\"first_started\") === null);\n  if (sessionStorage.getItem(\"first_started\") === null) {\n    splash.innerHTML = `\n        <div><img src=\"https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5be2fce4-9f46-4029-adf9-ff287712c1b9%2FKakaoTalk_20221022_215509815.png?table=block&amp;id=fabdb8c2-df31-416b-b512-aafefa710184&amp;spaceId=beaa8bbc-f504-4c20-b220-9fc699f70e12&amp;width=2000&amp;userId=14cc2ef3-04b9-41f7-9991-3bf06bfcb033&amp;cache=v2\"/><br/><br/>\n        <p>청년공간 - 이음</p>\n        `;\n    if (localStorage.getItem(\"loggedIn\") === \"true\") {\n      setTimeout(() => {\n        splash.remove();\n        document.getElementsByTagName(\"header\")[0].className = \"\";\n        document.getElementById(\"home\").className = \"\";\n      }, 3700);\n    } else {\n      setTimeout(() => {\n        splash.remove();\n        document.getElementsByTagName(\"article\")[0].className = \"\";\n      }, 3700);\n    }\n    sessionStorage.setItem(\"first_started\", \"false\");\n  } else {\n    if (localStorage.getItem(\"loggedIn\") !== \"true\") {\n      document.getElementsByTagName(\"article\")[0].className = \"\";\n      return;\n    }\n    document.getElementsByTagName(\"header\")[0].className = \"\";\n    document.getElementById(\"home\").className = \"\";\n  }\n});\n\n//# sourceURL=webpack://2eum/./static/js/html/startApp.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/html/startApp.js"]();
/******/ 	
/******/ })()
;