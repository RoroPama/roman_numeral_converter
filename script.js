document.addEventListener("DOMContentLoaded", () => {
  const numberInput = document.getElementById("number");
  const convertBtn = document.getElementById("convert-btn");
  const output = document.getElementById("output");

  function convertToRoman(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];

    let result = "";

    for (let i = 0; i < values.length; i++) {
      while (num >= values[i]) {
        result += symbols[i];
        num -= values[i];
      }
    }

    return result;
  }

  function handleConversion() {
    const inputValue = numberInput.value;

    if (inputValue === "" || isNaN(inputValue)) {
      output.textContent = "Please enter a valid number";
      output.className = "error";
      return;
    }

    const num = parseInt(inputValue);

    if (num < 1) {
      output.textContent = "Please enter a number greater than or equal to 1";
      output.className = "error";
      return;
    }

    if (num >= 4000) {
      output.textContent = "Please enter a number less than or equal to 3999";
      output.className = "error";
      return;
    }

    const romanNumeral = convertToRoman(num);
    output.textContent = romanNumeral;
    output.className = "";
  }

  convertBtn.addEventListener("click", handleConversion);

  numberInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleConversion();
    }
  });
});
