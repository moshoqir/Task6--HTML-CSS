let input = document.querySelector(".screen");
let numbers = document.querySelectorAll(".gridDiv .num");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let multy = document.querySelector(".multy");
let division = document.querySelector(".division");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");

let currentNumber = "";
let previousNumber = "";
let operation = null;

numbers.forEach((num) => {
  num.addEventListener("click", function () {
    currentNumber += this.textContent;
    input.value = currentNumber;
  });
});

function handleOperation(op) {
  if (currentNumber === "") return; //اذا ما بي رقم حالي لا ترجع اشي
  if (previousNumber !== "") {
    //اذا بي قيمة اصلاً اعمللها حساب
    // If there's already a previous number, calculate first
    previousNumber = calculate();
  } else {
    // اذا ما في قيمة, خزن الحاليه ك قيمة اولى
    previousNumber = currentNumber; // Store current number as the first operand
  }

  operation = op; //opخزن العملية الحسابية بـ
  currentNumber = "";
} // ارجع صفّر قيمة الرقم الحالي بعد ما ندخل العملية الحسابية
//:اللي صار هون كالآتي
//اول اشي شيكنا على القيمة الاولى, في عنا قيمه سابقه وحاليه.اذا الحاليه فاضيه لا ترجع اشي. بعديها ارجع على القيمه السابقه
/* 
   اذا في قيمة سابقه مدخله اصلاً, احسبها, اذا لا ارجع خزن القيمه السابقه بالحاليه عشان ابلش اعمل عليها عملية حسابيه.

   بنخزن بعدها العملية الحسابيه. بعدها بنرد نعطي قيمه فاضيه للكورنت عشان نرجع ندخل القيمه الجديده بعد العملية الحسابيه
   
   
   */

// اضافة العمليات الحسابيه

plus.addEventListener("click", function () {
  handleOperation("+");
});

minus.addEventListener("click", function () {
  handleOperation("-");
});

multy.addEventListener("click", function () {
  handleOperation("*");
});

division.addEventListener("click", function () {
  handleOperation("/");
});

//حساب العملية الحسابية عند الضغط على =

equal.addEventListener("click", function () {
  if (operation && currentNumber !== "") {
    input.value = calculate();

    currentNumber = input.value;
    previousNumber = "";
    operation = null;
  }
});

//clear everything

clear.addEventListener("click", function () {
  currentNumber = "";
  previousNumber = "";
  operation = null;
  input.value = "";
});

function calculate() {
  let result = 0;
  let num1 = parseFloat(previousNumber);
  let num2 = parseFloat(currentNumber);

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error";

      break;

    default:
      return;
  }
  return result.toString();
}
