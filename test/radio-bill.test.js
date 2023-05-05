describe("Testing the Radio Bill function", function() {
    describe("Testing Calls Total", function() {
        it("should return 2.75 when passed with 'call' for a single call", function() {
            const calculateRadio = RadioBill();

            calculateRadio.setRadioBill("call")
            assert.equal(2.75, calculateRadio.getRadioTotals("call"));
        })
        it("should return 5.50 when passed with 'call' for two calls", function() {
            const calculateRadio = RadioBill();

            calculateRadio.setRadioBill("call")
            calculateRadio.setRadioBill("call")
            assert.equal(5.50, calculateRadio.getRadioTotals("call"));
        })
    })
    describe("Testing Sms's Total", function() {
        it("should return 0.75 when passed with 'sms' for a single sms", function() {
            const calculateRadio = RadioBill();

            calculateRadio.setRadioBill("sms")
            assert.equal(0.75, calculateRadio.getRadioTotals("sms"));
        })
        it("should return 3 when passed with 'sms' for four sms's", function() {
            const calculateRadio = RadioBill();

            calculateRadio.setRadioBill("sms")
            calculateRadio.setRadioBill("sms")
            calculateRadio.setRadioBill("sms")
            calculateRadio.setRadioBill("sms")
            assert.equal(3, calculateRadio.getRadioTotals("sms"));
        })
    })
    describe("Testing both Calls and Sms's Totals", function() {
        it("should return 6 when passed with 'call' and 'sms' for two calls and two sms's", function() {
            const calculateRadio = RadioBill();

            calculateRadio.setRadioBill("call")
            calculateRadio.setRadioBill("call")
            calculateRadio.setRadioBill("sms")
            calculateRadio.setRadioBill("sms")

            assert.equal(7, calculateRadio.getRadioTotals("total"))
        })
    })
    describe("Testing the warning and critical levels", function() {
        it("should return 'warning' when the total is above 30", function() {
            let calculateRadio = RadioBill();

            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");

            assert.equal("warning", calculateRadio.totalClassNameRad());
        })
        it("should return 'danger' when the total is above 50", function() {
            let calculateRadio = RadioBill();

            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");
            calculateRadio.setRadioBill("call");

            assert.equal("danger", calculateRadio.totalClassNameRad());
        })
    })
})