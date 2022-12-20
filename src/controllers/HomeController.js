exports.Home = (req, res) => {
    const nameInput = req.body.nameInput;
    const emailInput = req.body.emailInput;
    const passwordInput = req.body.passwordInput;

    if(!nameInput || nameInput == null || nameInput == undefined) {
        return;
    };

    if(!emailInput || emailInput == null || emailInput == undefined || emailInput.includes('@') == false || emailInput.includes('.com') == false) {
        return;
    };

    if(!passwordInput || passwordInput == null || passwordInput == undefined) {
        return;
    };

    if(passwordInput.length < 6 || passwordInput.length > 11) {
        return;
    };

    res.locals.nameUser = nameInput;


    res.render('home');
}