describe("Testing the Calculate Bill Function", function() {
    it("should return 2.75 when passed 'call' for a single call", function() {
        let billCalculate = CalculateBill();
        
        billCalculate.setBillTotal("call")
        assert.equal(2.75, billCalculate.getBillTotal())
    })
    it("should return 0.75 when passed 'sms' for a single call", function() {
        let billCalculate = CalculateBill();
        
        billCalculate.setBillTotal("sms")
        assert.equal(0.75, billCalculate.getBillTotal())
    })
    it("should return 6.25 when passed with 'call, call, sms' for a single call and single sms", function() {
        let billCalculate = CalculateBill();
        
        billCalculate.setBillTotal("call, call, sms")
        assert.equal(6.25, billCalculate.getBillTotal())
    })
    it("should return 'danger' when the total is over 30", function() {
        let billCalculate = CalculateBill();

        billCalculate.setBillTotal("call, call, call, call, call, call, call, call, call, call, call");
        assert.equal("danger", billCalculate.totalClassNameCalc())
    })
    it("should return 'warning' when the total is over 20", function() {
        let billCalculate = CalculateBill();

        billCalculate.setBillTotal("call, call, call, call, call, call, call, call, call, call");
        assert.equal("warning", billCalculate.totalClassNameCalc())
    })
})