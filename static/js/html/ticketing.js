const cancel= ()=>{
    const click__day = document.getElementsByName("click__day")[0]
    click__day.className="hidden"
}
const accept = ()=>{
    const click__day = document.getElementsByName("click__day")[0]
    const location = document.getElementsByClassName("ticket_plate")[0].offsetTop;
    click__day.className="hidden"
    window.scrollTo({top:location,behavior:"smooth"})
}