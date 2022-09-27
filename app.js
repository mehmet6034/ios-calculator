//! To find element with DOM
let screen1 = document.querySelector(`#screen1`);
let screen2 = document.querySelector(`#screen2`);
let playground = document.querySelector(`.playground`);


playground.addEventListener(`click`, (e) =>{
//? we use contains except includes to search whether list contain elements or not
    if(e.target.classList.contains(`num`)){
        screen2.innerHTML += e.target.value;
    } else if(e.target.classList.contains(`operator`)){
        if()
        screen1 = screen2.innerHTML
        screen2 = ``
        switch (e.target.value) {
            case `+`:
                
                break;
        
            default:
                break;
        }
        console.log(e.target.value);
    }
   
})