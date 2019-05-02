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
    
    // Update DynamoDB
    state.thoughts.postThoughts(state.cognitoUser.username);
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

    // If cognitoUser is not null, check session
    if (state.cognitoUser !== null) {
        initThoughts();
    } else {
        window.location.href = pages.login;
    }
};

/////////////////////////////////////////
// Get thoughts after user is retrieved
/////////////////////////////////////////

const initThoughts = async () => {
    // Instantiate Thoughts class
    state.thoughts = new Thoughts();

    // Add existing thoughts from DynamoDB
    state.thoughts.data = await state.thoughts.getThoughts(state.cognitoUser.username);
    console.log(state.thoughts.data);   
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


