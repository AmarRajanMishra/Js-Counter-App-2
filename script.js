let counter = document.getElementById('counter')
let count = 0;

function handleBtn(button){
    if(button == 'plus'){
        count += 1;
    }else if(button == 'minus'){
        count -= 1;
    }else if(button == 'reset'){
        count = 0;
    }
    counter.innerHTML = count;

}
// function sum(a, b){
//     console.log(a+b)

// }
// sum(20, 30);
// sum(40, 60);