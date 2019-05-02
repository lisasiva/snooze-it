/*jslint esnext: true*/
import { cognito } from './config';
import { elementsHome, pages } from './views/base';
import * as indexView from './views/indexView';
import User from './models/User';

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

// userPool
// cognitoUser
// sessionValid

const state = {};

/////////////////////////////////////////
// Check user state on window load
/////////////////////////////////////////

const checkUserState = () => {
    // Instantiate User class
    state.user = new User();
    
    // Get user pool
    state.userPool = state.user.createPool();
    
    // Get current user
    state.cognitoUser = state.userPool.getCurrentUser();
    
    // If cognitouser is not null, get session
    if(state.cognitoUser !== null) {
        state.sessionValid = state.user.checkSession(state.cognitoUser);
        indexView.setButtons();
    } else {
        // Otherwise, change buttons to login/register
        indexView.updateButtons();
    }

};

/////////////////////////////////////////
// Sign out user
/////////////////////////////////////////

const signOut = () => {
    // Display feedback to user
    elementsHome.btnSignOut.innerHTML = `Signing out`;
    
    // Sign out from Cognito
    if(state.cognitoUser !== null) {
        state.cognitoUser.signOut();
    }
};

/////////////////////////////////////////
// Set up event listeners
/////////////////////////////////////////

const init = () => {
    window.addEventListener('load', checkUserState);
    elementsHome.btnSignOut.addEventListener('click', signOut);
};

init();
