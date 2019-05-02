/*jslint esnext: true*/

import { cognito } from './config';
import { elementsLogin } from './views/base';
import * as loginView from './views/loginView';
import User from './models/User';

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const state = {};

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
            window.location.href = 'http://localhost:8080/';    
        }    
    });
};

/////////////////////////////////////////
// Initialize event listeners
/////////////////////////////////////////

const init = () => {
    elementsLogin.loginBtn.addEventListener('click', (event) => {
        // Prevent reload on button click
        event.preventDefault();
        login();
    });
};

init();