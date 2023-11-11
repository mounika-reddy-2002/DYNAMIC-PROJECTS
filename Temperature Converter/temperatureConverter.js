let result = document.getElementById("result")
let optionValue = document.getElementById("optionValue")
console.log("result")
let inputTemperature = document.getElementById("inputTemperature")
console.log(inputTemperature.value)
let convertBtn = document.getElementById("convertBtn")
convertBtn.onclick = function() {
    const inputValue = inputTemperature.value
    const convertTempTo = optionValue.value
    const convertString = parseInt(inputValue)
    console.log(optionValue.value)
    if (convertTempTo === "Celsius") {
        let res = (convertString * 9 / 5) + 32
        result.textContent = res
    } else {
        let res = (convertString - 32) * 5 / 9
        result.textContent = res
    }
}
