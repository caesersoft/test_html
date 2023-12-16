//SIDEBAR TOGLLE
const btnSignIn =document.getElementById("sign-in"),
        btnSearch=document.getElementById("search"),
        formSearch= document.querySelector(".search"),
        formLogin=document.querySelector(".login"),
        pass = document.getElementById("pass"),
        icon = document.querySelector(".bx");

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar(){
    if (!sidebarOpen){
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}


function closeSidebar(){
    if (sidebarOpen){
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}

btnSignIn.addEventListener("click", e=> {
    formSearch.classList.add("hide");
    formLogin.classList.remove("hide");
})

btnSearch.addEventListener("click", e=> {
    formLogin.classList.add("hide");
    formSearch.classList.remove("hide");
})

icon.addEventListener("click", e=> {
    if(pass.type === "password"){
        pass.type = "text";
        icon.innerHTML='visibility_off'
    }else{
        pass.type = "password";
        icon.innerHTML='visibility'
    }
})