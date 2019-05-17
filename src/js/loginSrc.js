/*jslint esnext: true*/

import { cognito } from './config';
import { elementsLogin, pages } from './views/base';
import * as loginView from './views/loginView';
import User from './models/User';

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const state = {};

/////////////////////////////////////////
// Check user state on page load
/////////////////////////////////////////

const checkUserState = () => {
    // Instantiate User class
    state.user = new User();
    
    // Get user pool
    state.userPool = state.user.createPool();
    
    // Get current user
    state.cognitoUser = state.userPool.getCurrentUser();
    
    // If user is already logged in...
    if (state.cognitoUser !== null) {
        
        // Let them know
        loginView.renderRedirectMessage();
        
        // And redirect them to home page after 1.5s
        setTimeout(() => {
            window.location.href = pages.home;
        }, 1500);
    }
};

/////////////////////////////////////////
// login callback
/////////////////////////////////////////

const login = () => {
    // Get input from DOM
    state.input = loginView.getInput();
    
    // Instantiate User
    state.user = new User();
    
    // Create authentication details from input
    state.authenticationDetails = state.user.createDetails(state.input.email, state.input.password);
    
    // Create user pool
    state.userPool = state.user.createPool();
    
    // Create cognitoUser
    state.cognitoUser = state.user.createUser(state.input.email, state.userPool);
    
    // Authenticate user
    state.cognitoUser.authenticateUser(state.authenticationDetails, {
        onFailure: function(err) {
            alert(err.message);
            return;
        },
        
        onSuccess: function(result) {
            state.accessToken = result.getAccessToken().getJwtToken();
            console.log(state.accessToken);
            window.location.href = pages.home;    
        }    
    });
};

/////////////////////////////////////////
// Initialize event listeners
/////////////////////////////////////////

const init = () => {
    window.addEventListener('load', checkUserState);
    elementsLogin.loginBtn.addEventListener('click', (event) => {
        // Prevent reload on button click
        event.preventDefault();
        login();
    });
};

init();