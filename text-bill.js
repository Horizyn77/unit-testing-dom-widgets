function textBill() {

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

    return {
        setTextBill,
        getTotals
    }
}