const home__view = ()=>{
  const home = document.getElementById("home")
  const login = document.getElementById("login")
  home.className=""
  login.innerHTML=``      
  console.log("home__view")
}
const login__view = ()=>{
  console.log("login__view")
  const home = document.getElementById("home")
  const login = document.getElementById("login")
  login.innerHTML=`        <form>
              <input value="id"/>
              <input value="password"/>
            </form>`
  home.className="hidden"
}