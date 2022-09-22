var deferredPrompt;

window.addEventListener('beforeinstallprompt', function(e) {
  console.log('beforeinstallprompt Event fired');
  e.preventDefault();

  // Stash the event so it can be triggered later.
  deferredPrompt = e;

  return false;
});
const btnSave = document.getElementById("btnSave")
// 특정 버튼 클릭 시 설치 시작 
btnSave.addEventListener('click', function() {
  if(deferredPrompt !== undefined) {
    // The user has had a postive interaction with our app and Chrome
    // has tried to prompt previously, so let's show the prompt.
    deferredPrompt.prompt();

    // Follow what the user has done with the prompt.
    deferredPrompt.userChoice.then(function(choiceResult) {

      console.log(choiceResult.outcome);

      if(choiceResult.outcome == 'dismissed') {
        console.log('User cancelled home screen install');
      }
      else {
        console.log('User added to home screen');
      }

      // We no longer need the prompt.  Clear it up.
      deferredPrompt = null;
    });
  }
});
const zzz = document.querySelector("#zz")
const zz = (e)=>{
  e.preventDefault()
console.log("바뀌는거감지")
const form = document.getElementById("zz") 
const formData = new FormData(form)
$.ajax({
    type:"POST",
    url:`http://jinytree.shop/`,
    data:formData,
    dataType:"JSON",
    processData:false,
    contentType:false,
    success : (response)=>{
        console.log(response)
    }
})
}
zzz.addEventListener("submit",zz)