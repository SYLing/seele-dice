const dice = require("../dice/dice")

dice.GetReceipt("0xd94100cdcaf606cb10640c071734ecb0de4a5c973d2b9954e6f5b2c39f80732f", function(data){
    console.log("callback")
    console.log(data)
    if (data instanceof Error){
        console.log("callback Error")
        return
    }
    
    console.log("callback Success")
})
