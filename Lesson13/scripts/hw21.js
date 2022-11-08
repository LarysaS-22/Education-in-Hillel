console.log ("Hello, World!");

//div - привид
//Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>. При пропажі 
//фокусу - <div> так само пропадає

const input = document.querySelector(".input");
const ghost = document.querySelector(".ghost");

ghost.hidden = true;

const handleGhost = (ev) => {
     
    if(ev.type === "mouseover") {
    ghost.hidden = false;
    
    } else {
        if(ev.type === "mouseout"){
    ghost.hidden = true;
    
        }
    }    
}

input.addEventListener("mouseover", handleGhost);
input.addEventListener("mouseout", handleGhost);