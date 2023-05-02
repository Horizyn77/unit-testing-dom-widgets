function calculateBill() {
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

    return {
        setBillTotal,
        getBillTotal
    }
}