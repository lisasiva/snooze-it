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
    
    // If cognitouser is not null...
    if(state.cognitoUser !== null) {
        
        // Check that session is valid
        state.sessionValid = state.user.checkSession(state.cognitoUser);
        
        // Get user's first name and display login confirmation
        state.cognitoUser.getUserAttributes((err, result) => {
           if (err) {
               console.log(err.message);
           } else {
               state.firstName = result[2].Value;
               indexView.displayName(state.firstName);
           }
        });
        
        // Point buttons to add and archive screens 
        indexView.setButtons();
        
        // Listen for "Add Thought" button click and send to Mixpanel
        mixpanel.track_links('#btn--add-thought', 'Clicked add button');
        
    } else {
        
        // Otherwise, change buttons to register/login
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
