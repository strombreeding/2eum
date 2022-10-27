"use strict";

let deferredInstallPrompt = null;
const btnSave = document.getElementById("btnSave");
btnSave.addEventListener("click", installPWA);

// CODELAB: Add event listener for beforeinstallprompt event
window.addEventListener("beforeinstallprompt", saveBeforeInstallPromptEvent);

/**
 * Event handler for beforeinstallprompt event.
 *   Saves the event & shows install button.
 *
 * @param {Event} evt
 */
function saveBeforeInstallPromptEvent(evt) {
  // CODELAB: Add code to save event & show the install button.
  deferredInstallPrompt = evt;
  btnSave.removeAttribute("hidden");
}

/**
 * Event handler for btnSave - Does the PWA installation.
 *
 * @param {Event} evt
 */
function installPWA(evt) {
  // CODELAB: Add code show install prompt & hide the install button.
  deferredInstallPrompt.prompt();
  // Hide the install button, it can't be called twice.
  evt.srcElement.setAttribute("hidden", true);
  // CODELAB: Log user response to prompt.
  deferredInstallPrompt.userChoice.then((choice) => {
    if (choice.outcome === "accepted") {
      console.log("User accepted the A2HS prompt", choice);
    } else {
      console.log("User dismissed the A2HS prompt", choice);
    }
    deferredInstallPrompt = null;
  });
}

// CODELAB: Add event listener for appinstalled event
window.addEventListener("appinstalled", logAppInstalled);
/**
 * Event handler for appinstalled event.
 *   Log the installation to analytics or save the event somehow.
 *
 * @param {Event} evt
 */
function logAppInstalled(evt) {
  // CODELAB: Add code to log the event
  console.log("Weather App was installed.", evt);
}

// const btnSave = document.getElementById("btnSave");
// var deferredPrompt;

// window.addEventListener("beforeinstallprompt", function (e) {
//   console.log("beforeinstallprompt Event fired");
//   e.preventDefault();
//   // Stash the event so it can be triggered later.
//   deferredPrompt = e;

//   btnSave.className = "";
//   return false;
// });
// // 특정 버튼 클릭 시 설치 시작
// btnSave.addEventListener("click", function () {
//   console.log("install");
//   if (deferredPrompt !== undefined) {
//     // The user has had a postive interaction with our app and Chrome
//     // has tried to prompt previously, so let's show the prompt.
//     deferredPrompt.prompt();

//     // Follow what the user has done with the prompt.
//     deferredPrompt.userChoice.then(function (choiceResult) {
//       console.log(choiceResult.outcome);

//       if (choiceResult.outcome == "dismissed") {
//         console.log("User cancelled home screen install");
//       } else {
//         console.log("User added to home screen");
//       }

//       // We no longer need the prompt.  Clear it up.
//       deferredPrompt = null;
//     });
//   }
// });
