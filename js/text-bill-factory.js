function TextBill() {

    let textCallTotal = 0;
    let textSmsTotal = 0;
    let textTotal = 0;

    function setTextBill(item) {
        if (item.toLowerCase() === "call") {
            textCallTotal += 2.75;
        } else if (item.toLowerCase() === "sms") {
            textSmsTotal += 0.75;
        }

        textTotal = textCallTotal + textSmsTotal;
    }

    function getTotals(totals) {
        if (totals === "call") {
            return textCallTotal;
        } else if (totals === "sms") {
            return textSmsTotal;
        } else if (totals === "total") {
            return textTotal;
        }
    }

    function hasReachedCriticalLevelText() {
        return textTotal >= 50;
    }

    function hasReachedWarningLevelText() {
        return textTotal >= 30;
    }

    function totalClassNameText() {
        if(hasReachedCriticalLevelText()) {
            return "danger";
        }

        if(hasReachedWarningLevelText()) {
            return "warning";
        }
    }

    return {
        setTextBill,
        getTotals,
        totalClassNameText
    }
}