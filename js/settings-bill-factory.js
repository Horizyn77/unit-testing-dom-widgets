function SettingsBill() {
    let callCost = 0;
    let smsCost = 0;
    let warningLevel = 0;
    let criticalLevel = 0;
    let totalCallCost = 0;
    let totalSmsCost = 0;

    function setCallCost(call) {
        callCost = call;
    }

    function getCallCost() {
        return callCost;
    }


    function setSmsCost(sms) {
        smsCost = sms;
    }

    function getSmsCost() {
        return smsCost;
    }

    function setWarningLevel(level) {
        warningLevel = level;
    }

    function getWarningLevel() {
        return warningLevel;
    }

    function setCriticalLevel(level) {
        criticalLevel = level;
    }
    
    function getCriticalLevel() {
        return criticalLevel;
    }

    function makeCall() {
        if(!hasReachedCriticalLevel()) {
            totalCallCost += callCost;
        }
    }

    function sendSms() {
        if(!hasReachedCriticalLevel()) {
            totalSmsCost += smsCost;
        }
    }

    function getTotalCallCost() {
        return totalCallCost;
    }

    function getTotalSmsCost() {
        return totalSmsCost;
    }

    function getTotalCost() {
        return totalCallCost + totalSmsCost;
    }

    function hasReachedCriticalLevel() {
        return getTotalCost() >= getCriticalLevel();
    }

    function hasReachedWarningLevel() {
        return getTotalCost() >= getWarningLevel();
    }

    function totalClassName() {
        if (hasReachedCriticalLevel()) {
            return "danger";
        }

        if (hasReachedWarningLevel()) {
            return "warning";
        }
    }

    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        sendSms,
        getTotalCallCost,
        getTotalSmsCost,
        getTotalCost,
        totalClassName              
    }
}