describe("Testing the Calculate Bill Function", function() {
    it("should return 2.75 when passed 'call' for a single call", function() {
        let billCalculate = calculateBill();
        
        billCalculate.setBillTotal("call")
        assert.equal(2.75, billCalculate.getBillTotal())
    })
    it("should return 0.75 when passed 'sms' for a single call", function() {
        let billCalculate = calculateBill();
        
        billCalculate.setBillTotal("sms")
        assert.equal(0.75, billCalculate.getBillTotal())
    })
    it("should return 6.25 when passed with 'call, call, sms' for a single call and single sms", function() {
        let billCalculate = calculateBill();
        
        billCalculate.setBillTotal("call, call, sms")
        assert.equal(6.25, billCalculate.getBillTotal())
    })
})