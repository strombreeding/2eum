if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js') // serviceWorker 파일 경로
            .then((reg) => {
                console.log('Service worker registered.', reg);
            })
            .catch(e => console.log(e));
    });
}
// window.addEventListener("load",async()=>{
//     await $.ajax({
//         url: "https://wetube-jinytree.herokuapp.com/api/test",
//         type: "GET",
//         success: function(response){
//             alert(response.msg);
//         }
//     });
// })