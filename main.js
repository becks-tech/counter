let output = document.getElementById("output");
let counterPlus = document.querySelector(".increment");
let counterMinus = document.querySelector(".decrement");
let reset = document.querySelector(".reset")

let count = 0;
counterPlus = addEventListener('click', function(){
    count++;
    output.textContent = count;
    if (count > 0){
        output.style.color = "green";
    }
})  
counterMinus = addEventListener('click', function(){
    count--;
    output.textContent = count;
    if (count < 0){
        output.style.color = "red";
    }
})
reset = addEventListener('click', function(){
    output.textContent = 0;
    output.style.color = "black";
})

