

// get a reference to the textbox where the bill type is to be entered

const billTypeTextElem = document.querySelector(".billTypeText");

//get a reference to the add button

const addToBillBtnElem = document.querySelector(".addToBillBtn");

const callTotalElem = document.querySelector(".callTotalOne");

const smsTotalElem = document.querySelector(".smsTotalOne");

const totalCostElem = document.querySelector(".totalOne");
const totalCElem = document.querySelector(".totalC")
//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

const textBill = TextBill();

function textBillTotal() {

    var billTypeEntered = billTypeTextElem.value.trim();

    textBill.setTextBill(billTypeEntered);

    callTotalElem.innerHTML = textBill.getTotals("call").toFixed(2);
    smsTotalElem.innerHTML = textBill.getTotals("sms").toFixed(2);

    totalCostElem.innerHTML = textBill.getTotals("total").toFixed(2);

    totalCElem.classList.add(textBill.totalClassNameText());
}

addToBillBtnElem.addEventListener("click", textBillTotal);

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
