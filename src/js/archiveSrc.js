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
        
        // Fire Mixpanel Event
        mixpanel.track('Viewed archive', {'Thoughts': state.thoughts.data.length});

    } catch(error) {
        console.log(`Error reading from DynamoDB: ${error}`);
    }
};

/////////////////////////////////////////
// Delete thoughts
/////////////////////////////////////////

const removeThought = (event) => {
    let itemID, id;
    
    itemID = event.target.parentNode.parentNode.parentNode.id
    id = parseInt(itemID.split('-')[1]);    
    

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
        
        // Fire Mixpanel events
        mixpanel.track('Deleted thought');
    }
}

/////////////////////////////////////////
// Initialize with event listeners
/////////////////////////////////////////

const init = () => {
    // Get user on page load
    window.addEventListener('load', initUser);
    
    // When item is clicked in archive
    elementsArchive.thoughtsList.addEventListener('click', (event) => {
        // Remove thought if target was delete button
        if (event.target.className === 'thought__buttons--delete' || event.target.id === 'button--delete-thought') {
            removeThought(event);
        
        // Fire Mixpanel event if target was share button
        } else if (event.target.className === 'thought__buttons--share' || event.target.id === 'button--share-thought') {
            mixpanel.track('Shared thought');
            console.log(event.target);
        }
    });
    
    // Send user back to home on button click
    elementsArchive.btnBack.addEventListener('click', () => {
        elementsArchive.btnBack.setAttribute('href', pages.home);
    });
};


init();

//mixpanel.track_links('#button--share-thought', 'Shared thought');