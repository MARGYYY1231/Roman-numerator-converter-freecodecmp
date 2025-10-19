const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const results = document.getElementById("output");

const romanNumerals = [
    {
    },
];

const convert = (input) => {

};

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
        convert(numberInput);
    }
};

convertBtn.addEventListener("click", checkInput);