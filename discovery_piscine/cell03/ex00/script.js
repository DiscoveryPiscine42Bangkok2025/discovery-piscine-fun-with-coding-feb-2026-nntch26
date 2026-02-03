const mybtn = document.getElementById("btn")
        
const colors = ['blue', 'red', 'green']


function handleClick(){
    const index = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[index];
}

mybtn.addEventListener('click',handleClick)

