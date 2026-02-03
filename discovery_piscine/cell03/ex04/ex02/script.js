$(document).ready(function () {

    setInterval(function () {
        alert("Please, use me...");
    }, 30000);


    $("#submit").click(function () {

        const left = Number($("#btn1").val());
        const right = Number($("#btn2").val());
        const operator = $("#operator").val();

        let result;
        if (left < 0 || right < 0) {
            alert("Error :(");
            console.log("Error :(");
            return;
        }

        if ((operator === "/" || operator === "%") && right === 0) {
            alert("It’s over 9000!");
            console.log("It’s over 9000!");
            return;
        }

        switch (operator) {
            case "+": result = left + right; break;
            case "-": result = left - right; break;
            case "*": result = left * right; break;
            case "/": result = left / right; break;
            case "%": result = left % right; break;
        }

        console.log("result:", result);
        alert("Result: " + result);

    });

});
