/*jslint esnext:true*/

import { elementsLogin } from './base';

/////////////////////////////////////////
// Reading user input from login.html
/////////////////////////////////////////

export const getInput = () => {
    return {
        email: elementsLogin.emailInput.value,
        password: elementsLogin.passwordInput.value
    };    
};