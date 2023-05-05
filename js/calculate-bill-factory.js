function CalculateBill() {
    let billTotal = 0;
    
    function setBillTotal(item) {
        let itemsArray = item.split(",")

        for (let i = 0; i < itemsArray.length; i++) {

            itemsArray[i] = itemsArray[i].trim();
         
            if (itemsArray[i].toLowerCase() === "call") {
                billTotal += 2.75;
            } else if (itemsArray[i].toLowerCase() === "sms") {
                billTotal += 0.75;
            }
        }
       
    }

    function getBillTotal() {
        return billTotal;
    }

    function hasReachedCriticalLevelCalc() {
        return billTotal >= 30;
    }

    function hasReachedWarningLevelCalc() {
        return billTotal >= 20;
    }

    function totalClassNameCalc() {
        if(hasReachedCriticalLevelCalc()) {
            return "danger";
        }

        if(hasReachedWarningLevelCalc()) {
            return "warning";
        }
    }

    return {
        setBillTotal,
        getBillTotal,
        totalClassNameCalc
    }
}