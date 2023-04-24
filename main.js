let output = document.getElementById("output");
let counterPlus = document.querySelector(".increment");
let counterMinus = document.querySelector(".decrement");
let reset = document.querySelector(".reset")

let count = 0;
counterPlus = addEventListener('click', function(){
    count++;
    output.textContent = count;
})
