describe("Testing the Settings Bill function", function() {
    describe("Testing setting calls and sms's", function() {
        it("should return 3.5 when passed 3.5 as call cost", function() {
            let billSettings = SettingsBill();
            billSettings.setCallCost(3.5);
            
            assert.equal(3.5, billSettings.getCallCost())
        })
        it("should return 0.5 when passed 0.5 as sms cost", function() {
            let billSettings = SettingsBill();
            billSettings.setSmsCost(0.5);
            
            assert.equal(0.5, billSettings.getSmsCost())
        })
        it("should return 2.5 for calls and 0.75 for sms when setting both calls and sms's", function() {
            let billSettings = SettingsBill();
            billSettings.setCallCost(3.5);
            billSettings.setSmsCost(0.75);
            
            assert.equal(3.5, billSettings.getCallCost())
            assert.equal(0.75, billSettings.getSmsCost())
        })
    })

    describe("Testing setting warning and critical levels", function() {
        it("should return 10 when warning level set to 10", function() {
            let billSettings = SettingsBill();

            billSettings.setWarningLevel(10);

            assert.equal(10, billSettings.getWarningLevel());
        })
        it("should return 15 when critical level set to 15", function() {
            let billSettings = SettingsBill();

            billSettings.setCriticalLevel(15);

            assert.equal(15, billSettings.getCriticalLevel());
        })
        it("should return 25 for warning level and 30 for critical level when both are set to 25 and 30", function() {
            let billSettings = SettingsBill();

            billSettings.setWarningLevel(25);
            billSettings.setCriticalLevel(35);

            assert.equal(25, billSettings.getWarningLevel());
            assert.equal(35, billSettings.getCriticalLevel());
        })

    })

    describe("Testing adding calls and sms's and testing the totals", function() {
        it("should return 6 as calls total when 3 calls costing R2 each are added", function() {
            let billSettings = SettingsBill();

            billSettings.setCriticalLevel(10)
            billSettings.setCallCost(2);
            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.makeCall();

            assert.equal(6, billSettings.getTotalCallCost());
        })
        it("should return 3 as sms total when 2 sms's costing R1.50 each are added", function() {
            let billSettings = SettingsBill();

            billSettings.setCriticalLevel(10)
            billSettings.setSmsCost(1.5);
            billSettings.sendSms();
            billSettings.sendSms();

            assert.equal(3, billSettings.getTotalSmsCost());
        })
        it("should return a total cost of 7.5 when 2 calls costing R3 each and 3 sms's costing R0.50 each are added", function() {
            let billSettings = SettingsBill();

            billSettings.setCriticalLevel(10)
            billSettings.setCallCost(3);
            billSettings.setSmsCost(0.5);
            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.sendSms();
            billSettings.sendSms();
            billSettings.sendSms();

            assert.equal(7.5, billSettings.getTotalCost());
        })
    })

    describe("Testing using warning and critical levels", function() {
        it("it should return a class name of 'warning' when the total cost is more than the warning level set", function() {
            let billSettings = SettingsBill();

            billSettings.setCallCost(3);
            billSettings.setSmsCost(1.5);
            billSettings.setWarningLevel(15)
            billSettings.setCriticalLevel(20)
            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.sendSms();
            billSettings.sendSms();
            billSettings.sendSms();

            assert.equal("warning", billSettings.totalClassName())
        })
        it("it should return a class name of 'danger' when the total cost is more than the critical level set", function() {
            let billSettings = SettingsBill();

            billSettings.setCallCost(3);
            billSettings.setSmsCost(1.5);
            billSettings.setWarningLevel(15)
            billSettings.setCriticalLevel(20)
            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.sendSms();
            billSettings.sendSms();
            billSettings.sendSms();

            assert.equal("danger", billSettings.totalClassName())
        })
        it("it should stop the total cost from increasing when the critical level is reached", function() {
            let billSettings = SettingsBill();

            billSettings.setCallCost(3);
            billSettings.setSmsCost(1.5);
            billSettings.setWarningLevel(15)
            billSettings.setCriticalLevel(20)
            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.makeCall();

            assert.equal("danger", billSettings.totalClassName());
            assert.equal(21, billSettings.getTotalCost())
        })
        it("it should allow the total to increase after reaching the critical level and increasing it", function() {
            let billSettings = SettingsBill();

            billSettings.setCallCost(3);
            billSettings.setSmsCost(1.5);
            billSettings.setWarningLevel(15)
            billSettings.setCriticalLevel(20)
            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.makeCall();

            assert.equal("danger", billSettings.totalClassName());
            assert.equal(21, billSettings.getTotalCost())

            billSettings.setCriticalLevel(32);

            assert.equal("warning", billSettings.totalClassName());

            billSettings.makeCall();
            billSettings.makeCall();
            billSettings.makeCall();

            assert.equal(30, billSettings.getTotalCost());

        })
    })
})