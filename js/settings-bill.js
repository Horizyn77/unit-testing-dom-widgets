// get a reference to the sms or call radio buttons

// get refences to all the settings fields

const callCostSettingElem = document.querySelector(".callCostSetting");
const smsCostSettingElem = document.querySelector(".smsCostSetting");
const warningLevelSettingElem = document.querySelector(".warningLevelSetting");
const criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");
//get a reference to the add button
const addBtnElem = document.querySelector(".addBtn");

const callTotalSettingsElem = document.querySelector(".callTotalSettings");
const smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
const totalSettingsElem = document.querySelector(".totalSettings");
const totalClassSettingsElem = document.querySelector(".totalClass");


//get a reference to the 'Update settings' button
const updateSettingsElem = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

const settingsBill = SettingsBill();

//add an event listener for when the 'Update settings' button is pressed

function setSettings() {
    let callCostSettingVal = parseFloat(callCostSettingElem.value);
    let smsCostSettingVal = parseFloat(smsCostSettingElem.value);
    let warningLevelSettingVal = parseFloat(warningLevelSettingElem.value);
    let criticalLevelSettingVal = parseFloat(criticalLevelSettingElem.value);

    settingsBill.setCallCost(callCostSettingVal);
    settingsBill.setSmsCost(smsCostSettingVal);
    settingsBill.setWarningLevel(warningLevelSettingVal);
    settingsBill.setCriticalLevel(criticalLevelSettingVal);

    if (settingsBill.getTotalCost() <= settingsBill.getCriticalLevel()) {
        totalClassSettingsElem.classList.remove("danger");
    }

    if (settingsBill.getTotalCost() <= settingsBill.getWarningLevel()) {
        totalClassSettingsElem.classList.remove("warning");
    }    
}
//add an event listener for when the add button is pressed

updateSettingsElem.addEventListener("click", setSettings)

function calculateBillTotal() {

    const checkedBtnSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    if (checkedBtnSettings) {
        var billSettingsSelected = checkedBtnSettings.value;
    }

    if (billSettingsSelected === "call") {
        settingsBill.makeCall();
    } else if (billSettingsSelected === "sms") {
        settingsBill.sendSms();
    }


    callTotalSettingsElem.innerHTML = settingsBill.getTotalCallCost().toFixed(2);
    smsTotalSettingsElem.innerHTML = settingsBill.getTotalSmsCost().toFixed(2);

    totalSettingsElem.innerHTML = settingsBill.getTotalCost().toFixed(2);

    totalClassSettingsElem.classList.add(settingsBill.totalClassName())
}

addBtnElem.addEventListener("click", calculateBillTotal)

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
