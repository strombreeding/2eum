const login__google = async()=>{
    console.log("google")
    console.log(baseUrl)
    await $.ajax({
        url: "https://wetube-jinytree.herokuapp.com/2eum/google/start",
        type: "GET",
        success: function(response){
            alert(response);
        }
    });
}
const login__kakao = async()=>{
    
    console.log("kakao")
}