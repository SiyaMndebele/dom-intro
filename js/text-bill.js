// get a reference to the textbox where the bill type is to be entered
const billTypeTextElement = document.querySelector(".billTypeText");
const addToBillButtonElement = document.querySelector(".addToBillBtn");
const callTotalOneElement = document.querySelector(".callTotalOne");
const smsTotalOneElement = document.querySelector(".smsTotalOne");
const totalOneElement = document.querySelector(".totalOne");
const totalCost_billElement = document.querySelector(".totalCost_bill");

var callsTotalOne = 0;
var smsTotalOne = 0;

//get a reference to the add button
function textBillTotal() {
    var billTypeText = billTypeTextElement.value.trim();

    if (billTypeText == "call") {
        callsTotalOne += 2.75;
    } else if (billTypeText == "sms") {
        smsTotalOne += 0.75;
    }
//create a variable that will keep track of the total bill

callTotalOneElement.innerHTML = callsTotalOne.toFixed(2);
smsTotalOneElement.innerHTML = smsTotalOne.toFixed(2);
var costTotalOne = callsTotalOne + smsTotalOne;
totalOneElement.innerHTML = costTotalOne.toFixed(2);


totalOneElement.classList.remove("warning", "danger");

//add an event listener for when the add button is pressed
if (costTotalOne >= 30 && costTotalOne < 50) {
    totalCost_billElement.classList.add("warning");
}
else if (costTotalOne >= 50) {
    totalCost_billElement.classList.add("danger");
}
}
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
addToBillButtonElement.addEventListener('click', textBillTotal);
