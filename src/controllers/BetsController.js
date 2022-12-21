exports.Bets = (req, res) =>  {
    const numberChoice = req.body.numberBet;
    const userValue = req.body.valueUser;
    const coinValue = 30;
    const randomNumber = Math.floor(Math.random() * 100);

    if(!numberChoice || numberChoice == null || numberChoice == undefined) {
        return;
    };

    if(numberChoice > 100) {
        return;
    };
    
    if(!userValue || userValue == null || userValue == undefined) {
        return;
    };

    if(userValue > coinValue) {
        return;
    };

    if(numberChoice == randomNumber) {
        coinValue + userValue;
    } else {
        coinValue - userValue;
    };

    

    
    res.locals.coins = coinValue;

    res.render('result');
}
