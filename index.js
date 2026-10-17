/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click" , function() {
    let inputValue = Number(inputEl.value)
    lengthEl.textContent = `${inputValue} meters = ${(inputValue*3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue/3.281).toFixed(3)} meters`
    volumeEl.textContent = `${inputValue} liters = ${(inputValue*0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue/0.264).toFixed(3)} liters`
    massEl.textContent = `${inputValue} kilos = ${(inputValue*2.204).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue/2.204).toFixed(3)} kilos`
})