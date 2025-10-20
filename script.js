const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const results = document.getElementById("output");

const romanNumerals = [
    {
        number: 1,
        val: "I",
    },
    {
        number: 4,
        val: "IV",
    },
    {
        number: 5,
        val: "V",
    },
    {
        number: 9,
        val: "IX",
    },
    {
        number: 10,
        val: "X",
    },
    {
        number: 40,
        val: "XL",
    },
    {
        number: 50,
        val: "L",
    },
    {
        number: 90,
        val: "XC",
    },
    {
        number: 100,
        val: "C",
    },
    {
        number: 400,
        val: "CD",
    },
    {
        number: 500,
        val: "D",
    },
    {
        number: 900,
        val: "CM",
    },
    {
        number: 1000,
        val: "M",
    },
];

const revRomanNumerals = romanNumerals.reverse();

/**
 * Converts number to roman numeral.
 * @param {*} input 
 * @returns 
 */
const convert = (input) => {
    if(input === 0){return '';}
    const arr = revRomanNumerals.filter(num => num.number <= input);
    const obj = arr[0];
    return obj.val + convert(input - obj.number);
};

/**
 * Checks the number input inputted by the user.
 */
const checkInput = () => {
    const numberInt = parseInt(numberInput.value);
    results.classList.remove("hidden");
    results.textContent = '';

    if(isNaN(numberInt)){
        results.textContent = "Please enter a valid number";
    }else if(numberInt < 1){
        results.textContent = "Please enter a number greater than or equal to 1";
    }else if(numberInt > 3999){
        results.textContent = "Please enter a number less than or equal to 3999";
    }else{
        results.textContent = convert(numberInt);
    }
};

convertBtn.addEventListener("click", checkInput);