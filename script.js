function toggleMenu(){
document.getElementById("menu").classList.toggle("active");
}

/* typing animation */

const text="Hello, I'm Marri srihari";
let index=0;

function type(){

if(index<text.length){

document.getElementById("typing").innerHTML+=text.charAt(index);

index++;

setTimeout(type,80);

}

}

type();

/* particles */

particlesJS("particles-js", {

particles:{

number:{value:80},

size:{value:3},

move:{speed:2},

line_linked:{enable:true}

}

});