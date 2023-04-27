let count = 0;
//const btns = document.querySelectorAll('.btn');
const output = document.querySelector('#output');

const decrease = document.querySelector('.decrease')
const increase = document.querySelector('.increase')
const reset = document.querySelector('.reset')

//btns.forEach(function(btn){
//    btn.addEventListener('click',function(e){
//        const styles = e.currentTarget.classList;
//        if (styles.contains('decrease')){
//            count--;
//        }
//        else if (styles.contains('increase')){
//            count++;
//        }
//        else{
//            count = 0;
//        }
//        output.textContent = count;
//        if(count < 0){
//            document.body.style.color = 'red';
//        } else if (count > 0){
//            document.body.style.color = 'green';
//        } else {
//            document.body.style.color = 'black';
//        }
//    })
//    
//})

decrease.addEventListener('click', function(){
    count--;
    output.textContent = count;
    if(count < 0){
        document.body.style.color = 'red';
    }
})

increase.addEventListener('click', function(){
    count++;
    output.textContent = count;
    if (count > 0){
        document.body.style.color = 'green';

    }
})

reset.addEventListener('click', function(){
    count = 0;
    output.textContent = count;
    document.body.style.color = 'white';

    
})
