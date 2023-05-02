function radioBill() {
    
    let radioCallTotal = 0;
    let radioSmsTotal = 0;
    let radioTotal = 0;
    
    function setRadioBill(item) {
        if (item.toLowerCase() === "call") {
            radioCallTotal += 2.75;
        } else if (item.toLowerCase() === "sms") {
            radioSmsTotal += 0.75;
        }
        radioTotal = radioCallTotal + radioSmsTotal;
    }

    function getRadioTotals(totals) {
        if (totals === "call") {
            return radioCallTotal;
        } else if (totals === "sms") {
            return radioSmsTotal;
        } else if (totals === "total") {
            return radioTotal;
        }
    }
    return {
        setRadioBill,
        getRadioTotals
    }
}