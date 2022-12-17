const btnInput = document.querySelector('.btnInput');
const passwordInput = document.querySelector('.password');
const emailInput = document.querySelector('.email');
const nameInput = document.querySelector('.name');
const responseStatus = document.querySelector('.statusForm');


btnInput.addEventListener('click', () => {
    if(!nameInput.value || nameInput.value == null || nameInput.value == undefined) {
        
        responseStatus.textContent = 'Insira um nome válido.';
        return;
    };

    if(!emailInput.value || emailInput.value == null || emailInput.value == undefined || emailInput.value.includes('@') == false || emailInput.value.includes('.com') == false) {
        responseStatus.textContent = 'Insira um e-mail válido.';
        return;
    };

    if(!passwordInput.value || passwordInput.value == null || passwordInput.value == undefined) {
        responseStatus.textContent = 'Insira uma senha válida.';
        return;
    };

    if(passwordInput.value.length < 6) {
        responseStatus.textContent = 'Sua senha deve conter 6 ou mais caracteres.';
        return;
    };
    
});