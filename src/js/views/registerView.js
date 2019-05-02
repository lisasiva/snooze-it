/*jslint esnext: true*/

import { elementsRegister } from './base';

/////////////////////////////////////////
// Reading user input from register.html
/////////////////////////////////////////

export const getInput = () => {
    return {
        name: elementsRegister.inputName.value,
        email: elementsRegister.inputEmail.value,
        password: elementsRegister.inputPassword.value
    };    
};