
setInterval(function() {
    alert("Please, use me...");
}, 30000);

function calcfunc(){

    const btn_left = Number(document.getElementById("btn1").value);
    const btn_right = Number(document.getElementById("btn2").value);
    const operator = document.getElementById("operator").value;

    let result;

    if (btn_left < 0 || btn_right < 0){
        console.log("Error :(");
        alert("Error :(");
        return
    }

    if ((operator === "/" || operator === "%") && btn_right === 0) {
        alert("It’s over 9000!");
        console.log("It’s over 9000!");
        return;
    }


    switch(operator) {
        case "+": result = btn_left + btn_right; break;
        case "-": result = btn_left - btn_right; break;
        case "*": result = btn_left * btn_right; break;
        case "/": result = btn_left / btn_right; break;
        case "%": result = btn_left % btn_right; break;
        default: return null;
    }

    console.log("result:", result);
    alert("Result: " + result);

    

}