// get a reference to the sms or call radio buttons

//get a reference to the add button
const radioBillAddBtnElem = document.querySelector(".radioBillAddBtn");

const callTotalElemRB = document.querySelector(".callTotalTwo");
const smsTotalElemRB = document.querySelector(".smsTotalTwo");
const totalCostElemRB = document.querySelector(".totalTwo");
const totalRB = document.querySelector(".totalCls")

//create a variable that will keep track of the total bill

const radioBill = RadioBill();

//add an event listener for when the add button is pressed

function radioBillTotal() {

    const checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    if (checkedRadioBtn) {
        var billItemTypeSelected = checkedRadioBtn.value;
    }

    radioBill.setRadioBill(billItemTypeSelected)

    callTotalElemRB.innerHTML = radioBill.getRadioTotals("call").toFixed(2);
    smsTotalElemRB.innerHTML = radioBill.getRadioTotals("sms").toFixed(2);

    totalCostElemRB.innerHTML = radioBill.getRadioTotals("total").toFixed(2);

    totalRB.classList.add(radioBill.totalClassNameRad());
}

radioBillAddBtnElem.addEventListener("click", radioBillTotal)

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
