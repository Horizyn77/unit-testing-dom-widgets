describe("Testing the Text Bill Function", function () {
    describe("Testing Calls Total", function () {
        it("should return 2.75 when passed 'call' for a single call", function () {
            let textCalculate = textBill();

            textCalculate.setTextBill("call")
            assert.equal(2.75, textCalculate.getTotals("call"))
        })
        it("should return 8.25 when passed 'call' and adds 3 calls", function () {
            let textCalculate = textBill();

            textCalculate.setTextBill("call")
            textCalculate.setTextBill("call")
            textCalculate.setTextBill("call")
            assert.equal(8.25, textCalculate.getTotals("call"))
        })
    })
    describe("Testing Sms's Total", function () {
        it("should return 0.75 when passed 'sms' for a single sms", function () {
            let textCalculate = textBill();

            textCalculate.setTextBill("sms")
            assert.equal(0.75, textCalculate.getTotals("sms"))
        })
        it("should return 3.75 when passed 'sms' and adds 5 sms's", function () {
            let textCalculate = textBill();

            textCalculate.setTextBill("sms")
            textCalculate.setTextBill("sms")
            textCalculate.setTextBill("sms")
            textCalculate.setTextBill("sms")
            textCalculate.setTextBill("sms")
            assert.equal(3.75, textCalculate.getTotals("sms"))
        })
    })
    describe("Testing both Calls and Sms's Total", function () {
        it("should return 6.25 when passed with 'call' for two calls and 'sms' for a single sms", function () {
            let textCalculate = textBill();

            textCalculate.setTextBill("call")
            textCalculate.setTextBill("call")
            textCalculate.setTextBill("sms")
            assert.equal(6.25, textCalculate.getTotals("total"))
        })
    })
})