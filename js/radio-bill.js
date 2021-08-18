// get a reference to the sms or call radio buttons
const radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
const callTotalTwoElement = document.querySelector(".callTotalTwo");
const smsTotalTwoElement = document.querySelector(".smsTotalTwo");
const totalTwoElement = document.querySelector(".totalTwo");
const totalCost_RadioElement = document.querySelector(".totalCost_Radio");

var callsTotalTwo = 0; 
var smsTotalTwo = 0;

//get a reference to the add button
function radioBillTotal() {
    var checkedRadioBtn = document.querySelector(".billItemTypeRadio:checked");

    if (checkedRadioBtn.value === "call") {
        callsTotalTwo += 2.75;
    } else if (checkedRadioBtn.value === "sms") {
        smsTotalTwo += 0.75;
    }
//create a variable that will keep track of the total bill

    callTotalTwoElement.innerHTML = callsTotalTwo.toFixed(2);
    smsTotalTwoElement.innerHTML = smsTotalTwo.toFixed(2);
    var costTotalTwo = callsTotalTwo + smsTotalTwo;
    totalTwoElement.innerHTML = costTotalTwo.toFixed(2);


    totalTwoElement.classList.remove("warning", "danger");

    if (costTotalTwo >= 30 && costTotalTwo < 50) {
        totalCost_RadioElement.classList.add("warning");
    }
    else if (costTotalTwo >= 50) {
        totalCost_RadioElement.classList.add("danger");
    }
}

radioBillAddBtnElement.addEventListener('click', radioBillTotal);

