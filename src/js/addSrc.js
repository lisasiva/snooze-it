/*jslint esnext: true*/

import Thoughts from './models/Thoughts';
import User from './models/User';
import { elementsAdd, pages } from './views/base';
import * as thoughtsView from './views/thoughtsView';

/*
| * - input (object)
| * - thoughts (class instantiation)
| * - - > data (array)
| * - userPool (Cognito)
| * - 
| */

const state = {};

/////////////////////////////////////////
// Add new thought to state, DynamoDB
/////////////////////////////////////////

const controlThought = () => {
    // Change button copy
    elementsAdd.snoozeBtn.innerHTML = 'Snoozing...';
    
    // Get emotion, topic, description from UI
    state.input = thoughtsView.getInput();
    
    // Create a unique ID
    let ID = state.thoughts.createID();
    
    // Create new thought from state.input
    state.thoughts.addThought(ID, state.input.emotion, state.input.topic, state.input.description);
    
    
    // If user is logged in, save thoughts in DynamoDB
    if (state.cognitoUser !== null) {
        state.thoughts.postThoughts(state.cognitoUser.username);
        console.log('state.cognitoUser !== null condition');
    // Else if user is anonymous, save thoughts in storage     
    } else {
        state.thoughts.setStorage();
        if(window.location.href.indexOf('add') !== -1) {
            window.location.href = pages.snoozed;    
        }
        console.log('setStorage condition');
    }
    
    // Fire Mixpanel event
    mixpanel.track('Added thought', {'Topic': state.input.topic[0]});
    
    // Redirect to page
    //window.location.replace(pages.snoozed);
};

/////////////////////////////////////////
// Get thoughts after user is retrieved
/////////////////////////////////////////

const initThoughts = async () => {
    // Instantiate Thoughts class
    state.thoughts = new Thoughts();
    
    // Check localStorage
    let storage = state.thoughts.getStorage();

    // If user is logged in
    if (state.cognitoUser !== null) {
        
        // Check session is valid
        state.sessionValid = state.user.checkSession(state.cognitoUser);
        
        // If something is in local storage...
        if (storage && storage.length > 0) {
            // Set thoughts as storage
            state.thoughts.data = [...storage];
            // Post to DynamoDB
            state.thoughts.postThoughts(state.cognitoUser.username);
            // Remove from localStorage
            localStorage.removeItem('data');
            
        // Else if nothing is in local storage
        } else {
            state.thoughts.data = await state.thoughts.getThoughts(state.cognitoUser.username);    
        }
        
    // Else if user is not logged in, get thoughts from localStorage
    } else {
        if (storage) {
            state.thoughts.data = storage;
        } else {
            state.thoughts.data = [];
        }
        
    }
    
    console.log(state.thoughts.data);   
};

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

    // Get thoughts
    initThoughts();
};


/////////////////////////////////////////
// Initialize app with event listeners
/////////////////////////////////////////

const init = () => {
    
    // Create new thoughts array on page load
    window.addEventListener('load', initUser);
    
    // Toggle emotion buttons on click
    elementsAdd.emotion.forEach(el => {
       el.addEventListener('click', function() {
           this.classList.toggle('emotion--selected');
       }); 
    });

    // Toggle topic buttons on click
    elementsAdd.topic.forEach(el => {
       el.addEventListener('click', function() {
           this.classList.toggle('topic--selected');
       }); 
    });
    
    // Add thought when submit button is clicked
    elementsAdd.snoozeBtn.addEventListener('click', e => {
        e.preventDefault();
        controlThought();
    });
    
};

init();


