/*jslint esnext: true*/

import Thoughts from './models/Thoughts';
import { elementsAdd } from './views/base';
import * as thoughtsView from './views/thoughtsView';

/*
| * - User input (object)
| * - Thoughts (class instantiation)
| * - - > data (array)
| */

const state = {};

/////////////////////////////////////////
// Add new thought to state, DynamoDB
/////////////////////////////////////////

const controlThought = () => {
    // Get emotion, topic, description from UI
    state.input = thoughtsView.getInput();
    
    // Create a unique ID
    let ID = state.thoughts.createID();
    
    // Create new thought from state.input
    state.thoughts.addThought(ID, state.input.emotion, state.input.topic, state.input.description);
    
    // Update DynamoDB
    state.thoughts.postThoughts();
};

/////////////////////////////////////////
// Initialize app with event listeners
/////////////////////////////////////////

const init = () => {
    
    // Create new thoughts array on page load
    window.addEventListener('load', async function() {
        
        // Create new Thoughts instantiation
        state.thoughts = new Thoughts();
        
        // Add existing thoughts from DynamoDB
        state.thoughts.data = await state.thoughts.getThoughts();
        console.log(state.thoughts.data);
    });
    
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
    elementsAdd.snoozeBtn.addEventListener('click', controlThought);
    
};

init();


