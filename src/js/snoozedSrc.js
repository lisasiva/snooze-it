/*jslint esnext: true*/
import { elementsSnoozed, pages } from './views/base';
import User from './models/User';

const state = {};

/////////////////////////////////////////
// Get current user
/////////////////////////////////////////

const initUser = () => {
    // Instantiate User class
    state.user = new User();

    // Create new userPool
    state.userPool = state.user.createPool();

    // Get current user
    state.cognitoUser = state.userPool.getCurrentUser();
    
    // If user is anonymous, text and button should prompt them to register
    if (state.cognitoUser === null) {
        elementsSnoozed.confirmation.textContent = 'Your thought has been snoozed for later. Create an account to see it.';
        elementsSnoozed.btnBack.textContent = 'Create an Account';
        elementsSnoozed.btnBack.setAttribute('href', pages.register);
        elementsSnoozed.btnLogin.style.display = 'block';
        elementsSnoozed.btnLogin.setAttribute('href', pages.login);
        
    // Else point user back to home
    } else {
        elementsSnoozed.btnBack.setAttribute('href', pages.home);
    }

};


/////////////////////////////////////////
// Initialize with event listeners
/////////////////////////////////////////

const init = () => {
    // On page load, get user
    window.addEventListener('load', initUser);
};

init();