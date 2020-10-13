
document.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop;
       $("nav").css("background-color", "rgba(255,255,255," + (st / 200).toString() + ")")
}, false)


AOS.init();


var textArray = [
    "a real-estate",
    "a renewable energy",
    "a housing",
    "an equity"
]

// var a = 0;
// var b = 0;

// var element;

// function write(text) {
//     element.innerHTML += text.charAt(b);
//     b++;
//     if(b < text.length) {
//         setTimeout(() => {
//             write(text)
//         }, 50)
//     } else {
//         setTimeout(() => {
//             erase(text)
//         }, 1000)
//     }
// }

// function erase(text) {
//     element.innerHTML = text.slice(0, b)
//     if(b > 0) {
//         b--;
//         setTimeout(() => { erase(text)}, 30)
//     } else {
//         a++;
//         typeWriter()
//     }
// }

// function typeWriter() {
//     let element = document.getElementById("typed")

//     let currentText = textArray[a];
//     if(a == (textArray.length -1)) {
//         a = 0
//     }
//     write(currentText)
// }


$(document).ready(() => {
    element = document.getElementById("typed");
    typeWriter()
})


