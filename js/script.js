let title = document.getElementById("title")
let inputFieldDelete = document.getElementById("inputFieldDelete")
let btnDelete = document.getElementById("btnDelete")

inputFieldDelete.addEventListener("keyup", ()=>{
    if(inputFieldDelete.value == "DELETE"){
        btnDelete.removeAttribute("disabled")
    }
    else{
        btnDelete.setAttribute("disabled", true)
    }
})
btnDelete.addEventListener("click", ()=>{
    title.style.display = "none";
    inputFieldDelete.value = "";
})