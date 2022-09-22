if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js') // serviceWorker 파일 경로
            .then((reg) => {
                console.log('Service worker registered.', reg);
            })
            .catch(e => console.log(e));
    });
}
window.addEventListener("load",()=>{
    $.ajax({
        url: "http://jinytree.shop/",
        type: "GET",
        success: function(response){
            console.log(response);
        }
    });
})