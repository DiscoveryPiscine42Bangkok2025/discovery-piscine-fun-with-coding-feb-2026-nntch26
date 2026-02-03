
const myballoon = document.getElementById("balloon")
        
const colors = [ 'red', 'green','blue',]
let index = 0

let maxsize = 420
let size = 200;

function handleClick(){

    size += 10
    console.log("size", size)

    if (size > maxsize){
        size = 200
    }

    myballoon.style.width = size + 'px';
    myballoon.style.height = size + 'px';

    index = (index + 1) % colors.length
    myballoon.style.background = colors[index];

}


function handleLeave(){

    size -= 5
    console.log("size", size)

    if (size < 200){
        size = 200
    }

    myballoon.style.width = size + 'px';
    myballoon.style.height = size + 'px';

    index = (index - 1 + colors.length) % colors.length
    myballoon.style.background = colors[index];
}
