if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js') // serviceWorker 파일 경로
            .then((reg) => {
                console.log('Service worker registered.', reg);
            })
            .catch(e => console.log(e));
    });
}
const load = ()=>{
    $ajax({
        type:"get",
        url : "http://jinytree.shop/",
        success : (res)=>{
            console.log(res)
        }
    })

}
