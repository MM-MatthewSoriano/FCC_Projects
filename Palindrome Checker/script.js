const input = document.getElementById("input-form");
const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
let textInputValue = '';

function handleClickEvent(event) {
  event.preventDefault();
  textInputValue = textInput.value;
  let sanitizeInput = textInputValue.toLowerCase().replace(/[^a-z0-9]/g, "");
  let stringLength = sanitizeInput.length;
  let counterRight = stringLength;
  if (textInputValue === '') 
  {
    alert("Please input a value");
  } 
  else if (textInputValue === 1) 
  {
    document.getElementById("result").innerHTML = `${textInputValue} is a palindrome`;
  } 
  else 
  {
    for (let counterLeft = 0; counterLeft < stringLength / 2; counterLeft++) 
    {
      console.log(sanitizeInput[counterLeft] + sanitizeInput[counterRight - 1])
      if (sanitizeInput[counterLeft] !== sanitizeInput[counterRight - 1]) {
        document.getElementById("result").innerHTML = `${textInputValue} is not a palindrome`;
        return;
      } 
      counterRight--;
    }
    document.getElementById("result").innerHTML = `${textInputValue} is a palindrome`;
  }
}

checkBtn.addEventListener("click", handleClickEvent);




