/*jslint esnext:true*/

import { elementsLogin } from './base';

/////////////////////////////////////////
// Displays 'already logged in' message
/////////////////////////////////////////

export const renderRedirectMessage = () => {
    elementsLogin.confirmation.innerHTML = `You're already logged in! Hang on a sec...`;
};

/////////////////////////////////////////
// Reading user input from login.html
/////////////////////////////////////////

export const getInput = () => {
    return {
        email: elementsLogin.emailInput.value,
        password: elementsLogin.passwordInput.value
    };    
};