/* jslint esnext: true */

import Thoughts from './models/Thoughts';
import { elementsArchive } from './views/base';
import * as thoughtsView from './views/thoughtsView';

/*
| * - User input (object)
| * - Thoughts (class instantiation)
| * - - > data (array)
| * - Markups (array)
| */

const state = {};

/////////////////////////////////////////
// Get and render thoughts
/////////////////////////////////////////

const renderArchive = async () => {
    // Instantiate Thoughts class
    state.thoughts = new Thoughts();
    state.markups = [];
    
    try {
        // Get thoughts from DynamoDB
        state.thoughts.data = await state.thoughts.getThoughts();
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
    // Get id of clicked thought
    let itemID = event.target.parentNode.parentNode.parentNode.id
    let id = parseInt(itemID.split('-')[1]);

    
    // Remove thought from data array
    if(itemID) {
        // Get element with itemID
        let el = document.getElementById(itemID);
        
        // Remove element from UI
        thoughtsView.deleteThought(el);
        
        // Remove element from state.thoughts.data
        state.thoughts.deleteThought(id);
        
        // Update DynamoDB
        state.thoughts.postThoughts();
        
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
    window.addEventListener('load', renderArchive);
    elementsArchive.thoughtsList.addEventListener('click', removeThought);
};

init();
