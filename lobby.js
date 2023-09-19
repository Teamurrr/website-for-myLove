function check(){



var login = document.querySelector(".passtext").value
var pass = document.querySelector(".passnum").value
var btn = document.querySelector(".btn")

if(login == "Sofia" || "София" && pass == "0420"){
    let elem = document.getElementById("elem")
    elem.classList.remove("enable")
    elem.classList.add("able")

    let err = document.getElementById("error")
    err.classList.remove("ms")
    err.classList.add("unerror")

}else {
    document.querySelector(".ms").innerHTML="<p style='color: red;'>Иди нахуй ты не софия</p>"
}


}