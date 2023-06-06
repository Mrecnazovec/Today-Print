let need
let active
window.addEventListener('click', (e)=>{

    if(e.target.classList[0] === 'info-main' || e.target.classList[0] === 'info-main-top' || e.target.classList[0] === 'info-main-top-text' || e.target.classList[0] === 'btn-kr'){
        if(e.target.classList[0] === 'info-main-top' ) {
            need = e.target.parentElement
        } else if (e.target.classList[0] === 'info-main-top-text') {
            need = e.target.parentElement.parentElement 
        } else if (e.target.classList[0] === 'btn-kr') {
            need = e.target.parentElement.parentElement.parentElement
        } else {
            need = e.target
        }
       
        active = need.querySelector(".info-main-bot")
        krest = need.querySelector(".btn-krest")
        if(active.classList == "info-main-bot"){
            active.classList.add("active")
            active.classList.remove("disable")
            krest.classList.add("active")
            krest.classList.remove("disable")

        } else if(active.classList == "info-main-bot disable") {
            active.classList.add("active")
            active.classList.remove("disable")
            krest.classList.add("active")
            krest.classList.remove("disable")
        } else {
            active.classList.remove("active")
            active.classList.add("disable")
            krest.classList.remove("active")
            krest.classList.add("disable")
        }
        


    };

})