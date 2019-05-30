/*jslint esnext: true*/
import { cognito } from './config';
import { elementsRegister, pages } from './views/base';
import * as registerView from './views/registerView';
import User from './models/User';

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

// User input
// User pool
// Attributes list 
const state = {};

/////////////////////////////////////////
// signUp callback 
/////////////////////////////////////////

const signUp = () => {
    // Get input from DOM
    state.input = registerView.getInput();
    
    // Instantiate User
    state.user = new User();
    
    // Create pool
    state.userPool = state.user.createPool();
    
    // Add attribute
    state.user.addAttribute('name', state.input.name);
    
    // Add user to pool
    state.userPool.signUp(state.input.email, state.input.password, state.user.attributes, null, function(err, result) {
        if (err) {
            alert(err.message);
        } else if (result) {
            // Save result to state
            state.cognitoUser = result.user;
            
            // Display confirmation message to user
            elementsRegister.confirmation.innerHTML = `Thanks, ${state.input.name}! Redirecting you to login...`;
            
            // MIXPANEL
            mixpanel.track('Created account', {'Date': new Date().toISOString(), 'Email': state.input.email});
            mixpanel.alias(state.input.email);
            
            // Redirect user to login page
            /*setTimeout(() => {
                window.location.href = pages.login;
            }, 1500);*/
        }    
    }); 


};


/////////////////////////////////////////
// Initialize event listeners
/////////////////////////////////////////

const init = () => {
    elementsRegister.btnRegister.addEventListener('click', (event) => {
        // Do not reload page
        event.preventDefault();
        
        // Call sign up function
        signUp();
        
        // MIXPANEL
        //mixpanel.track('Test - inside init()');
    });
};

init();