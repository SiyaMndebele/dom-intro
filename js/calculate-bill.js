//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn")
const calculateBtnElement = document.querySelector(".calculateBtn")
//get a reference to the billTotal element
const billTotal = document.querySelector(".billTotal")
const billTotalElement = document.querySelector(".billTotal")
//get a reference to the billString
const billString = document.querySelector(".billString")
const billStringElement = document.querySelector(".billString")
//create the function that will be called when the calculate button is pressed
calculateBtn.addEventListener('click', calculateBtnClicked);


function calculateBtnClicked(){
//  * this function should read the string value entered - split it on a comma.
    var billString = billStringElement.value;
    var billItems = billString.split(",");
    var billTotal = 0;
//  * loop over all the entries in the the resulting list
for (var i=0;i<billItems.length;i++){
    var billItem = billItems[i].trim();
    if (billItem === "call"){
        billTotal += 2.75;
    }
    else if (billItem === "sms"){
        billTotal += 0.75;
    }
//  * check if it is a call or an sms and add the right amount to the overall total

//  * once done looping over all the entries - display the total onto the screen in the billTotal element
var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
}
if (billTotal>30){
    billTotalElement.classList.add("danger")
}
else if (billTotal>20){
    billTotalElement.classList.add("warning")
}
}
//link the function to a click event on the calculate button
