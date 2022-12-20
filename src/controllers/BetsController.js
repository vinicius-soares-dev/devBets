exports.Bets = (req, res) =>  {
    const numberChoice = req.body.numberBet;
    const userValue = req.body.valueUser;
    const coinValue = 30;
    const randomNumber = Math.floor(Math.random() * 100);

    if(!numberChoice || numberChoice == null || numberChoice == undefined) {
        return;
    };

    if(numberChoice.length > 100) {
        return;
    };

    if(!userValue || userValue == null || userValue == undefined) {
        return;
    };

    if(userValue.length > coinValue) {
        return;
    };

    if(numberChoice == randomNumber) {
        coinValue + numberChoice;
        return;
    };

    if(numberChoice !== randomNumber) {
        coinValue - numberChoice;
        return;
    };


   
    res.render('result', {coin: coinValue});
}
