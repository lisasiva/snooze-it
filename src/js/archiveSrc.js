/* jslint esnext: true */

import User from './models/User';
import Thoughts from './models/Thoughts';
import { elementsArchive, pages } from './views/base';
import * as thoughtsView from './views/thoughtsView';

/*
| * - User input (object)
| * - Thoughts (class instantiation)
| * - - > data (array)
| * - Markups (array)
| */

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

    // If cognitoUser is not null, check session
    if (state.cognitoUser !== null) {
        renderArchive();
    } else {
        window.location.href = pages.login;
    }
};

/////////////////////////////////////////
// Get and render thoughts
/////////////////////////////////////////

const renderArchive = async () => {
    
    // Instantiate Thoughts class
    state.thoughts = new Thoughts();
    state.markups = [];
    
    try {
        // Get thoughts from DynamoDB
        state.thoughts.data = await state.thoughts.getThoughts(state.cognitoUser.username);
        //console.log(state.thoughts.data);
        
        // If there are none, show empty state
        if(state.thoughts.data.length === 0) {
            thoughtsView.displayEmpty();
        }

        // Otherwise, generate HTML markups
        thoughtsView.createThoughts (state.thoughts.data, state.markups);
        
        // Render markups to DOM
        thoughtsView.renderThoughts(state.markups);

    } catch(error) {
        console.log(`Error reading from DynamoDB: ${error}`);
    }
};

/////////////////////////////////////////
// Delete thoughts
/////////////////////////////////////////

const removeThought = (event) => {
    let itemID, id;
    
    // If delete or share button was clicked, get id of clicked thought
    if (event.target.className === 'thought__button-text'
        || event.target.className === 'thought__buttons--delete'
        || event.target.className === 'thought__buttons--share'
    ) {
        itemID = event.target.parentNode.parentNode.parentNode.id
        id = parseInt(itemID.split('-')[1]);    
    }

    // Remove thought from data array
    if(itemID) {
        // Get element with itemID
        let el = document.getElementById(itemID);
        
        // Remove element from UI
        thoughtsView.deleteThought(el);
        
        // Remove element from state.thoughts.data
        state.thoughts.deleteThought(id);
        
        // Update DynamoDB
        state.thoughts.postThoughts(state.cognitoUser.username);
        
        // Display empty state if needed
        if(elementsArchive.thoughtsList.children.length === 0) {
            thoughtsView.displayEmpty();
        }
    }
}

/////////////////////////////////////////
// Initialize with event listeners
/////////////////////////////////////////

const init = () => {
    // Get user on page load
    window.addEventListener('load', initUser);
    
    // Update data array and DynamoDB when thought is deleted
    elementsArchive.thoughtsList.addEventListener('click', removeThought);
    
    // Send user back to home on button click
    elementsArchive.btnBack.addEventListener('click', () => {
        elementsArchive.btnBack.setAttribute('href', pages.home);
    });
};

init();
