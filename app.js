// let str = "";
// let buttons = document.querySelectorAll(".button");
// Array.from(buttons).forEach((button)=> {
// button.addEventListener('click', (e)=>{
//     if(e.target.innerHTML == '=') {
//        str = eval(str);
//        document.querySelector("input").value = str;
//     }
//     else if(e.target.innerHTML == 'Clear') {
//        str = "";
//        document.querySelector("input").value = str;
//     }
//     else {
//         str = str + e.target.innerHTML;
//         document.querySelector("input").value = str;
//     }
// })
// });

// my methods
let str = "";
function one() {
    str = document.querySelector("input").value;
    document.querySelector("input").value = str + "1";
}
function two() {
    str = document.querySelector("input").value;
    document.querySelector("input").value = str + "2";
}
function three() {
    str = document.querySelector("input").value;
    document.querySelector("input").value = str + "3";
}
function four() {
    str = document.querySelector("input").value;
    document.querySelector("input").value = str + "4";
}
function five() {
    str = document.querySelector("input").value;
    document.querySelector("input").value = str + "5";
}
function six() {
    str = document.querySelector("input").value;
    document.querySelector("input").value = str + "6";
}
function seven() {
    str = document.querySelector("input").value;
    document.querySelector("input").value = str + "7";
}
function eight() {
    str = document.querySelector("input").value;
    document.querySelector("input").value = str + "8";
}
function nine() {
    str = document.querySelector("input").value;
    document.querySelector("input").value = str + "9";
}
function dot() {
    str = document.querySelector("input").value;
    document.querySelector("input").value = str + ".";
}
function zero() {
    str = document.querySelector("input").value;
    document.querySelector("input").value = str + "0";
}
function clear() {
    document.getElementById("clearElm").value = "";
}
function zero() {
    str = document.querySelector("input").value;
    document.querySelector("input").value = str + "0";
}
function divid() {
    str = document.querySelector("input").value;
    document.querySelector("input").value = str + "/";
}
function multiply() {
    str = document.querySelector("input").value;
    document.querySelector("input").value = str + "*";
}
function add() {
    str = document.querySelector("input").value;
    document.querySelector("input").value = str + "+";
}
function sub() {
    str = document.querySelector("input").value;
    document.querySelector("input").value = str + "-";
}
function facto() {
    str = document.querySelector("input").value;
    document.querySelector("input").value = str + "!";
}

// Equal button

function equal() {
    str = document.querySelector("input").value;
    if (str.includes("!")) {
        for (let a = 0; a < str.length; a++) {
            if (str.split("").slice(a) == "!") {
                function fac(num) {
                    if (num > 1) {
                        return num * fac(num - 1);
                    }
                    else {
                        return 1;
                    }
                }
                document.querySelector("input").value = fac(str.split("").slice(0, -1).join(""));
            }
        }
    }
    else {
        str = document.querySelector("input").value;
        document.querySelector("input").value = eval(str);
    }
}

