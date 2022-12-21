const moneyUser = document.querySelector('.moneyUser');
const numberUser = document.querySelector('.numberBet');
const valueUser = document.querySelector('.valueUser');
const buttonInitial = document.querySelector('.initialBet');
let coinUser = 30;
const resUser = document.querySelector('.resUser');
const resBets = document.querySelector('.resBets');
let randomNumber = Math.floor(Math.random() * 100);



buttonInitial.addEventListener('click', (e) => {
    e.preventDefault();

    if(!numberUser.value || numberUser.value == null || numberUser.value == undefined) {
        moneyUser.textContent = `Você tem ${coinUser} moedas.`;
        resUser.textContent = `Insira um número válido`;
        return;
    };

    if(numberUser.value > 100) {
        moneyUser.textContent = `Você tem ${coinUser} moedas.`;
        resUser.textContent = `Escolha um número de 0 a 100.`;
        return;
    };

    if(!valueUser.value || valueUser.value == null || valueUser.value == undefined) {
        moneyUser.textContent = `Você tem ${coinUser} moedas.`;
        resUser.textContent = `Insira um valor válido`;
        return;
    };

    if(coinUser < valueUser.value) {
        moneyUser.textContent = `Você tem ${coinUser} moedas.`;
        resUser.textContent = `Você não tem moedas suficientes`;
        return;
    }

    if(numberUser.value == randomNumber) {
        coinUser = coinUser + valueUser.value;
        moneyUser.textContent = `Você tem ${coinUser} moedas.`;
        resUser.textContent = `Você acertou o número e ganhou + ${valueUser.value} moedas.`;
        resBets.textContent = `Número sorteado: ${randomNumber}`;
    };

    if(numberUser.value !== randomNumber) {
        coinUser = coinUser - valueUser.value;
        moneyUser.textContent = `Você tem ${coinUser} moedas.`;
        resUser.textContent = `Você errou o número e perdeu ${valueUser.value} moedas.`;
        resBets.textContent = `Número sorteado: ${randomNumber}`;   
    };

    randomNumber = Math.floor(Math.random() * 100);

   
});















