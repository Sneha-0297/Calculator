let num1El = document.getElementById("num1");

let num2El = document.getElementById("num2");

let operatorEl = document.getElementById("operator");

let resultEl = document.getElementById("result");

function changeBtn(){

let Val1 = parseInt(num1El.value);

let Val2 = parseInt(num2El.value);

let operator = operatorEl.value;


switch (operator){

    case "+":
        resultEl.textContent = Val1 + Val2;
        break

    case "-":
            resultEl.textContent = Val1 - Val2;
            break

    case "*":
          resultEl.textContent = Val1 * Val2;
          break

     case "/":
         resultEl.textContent = Val1 / Val2;
         break
         
    default:
        resultEl.textContent = "Please Enter a Valid Input";


    

}


}