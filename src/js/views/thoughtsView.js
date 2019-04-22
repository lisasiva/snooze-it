/*jslint esnext: true*/

import { elementsArchive } from './base';

/////////////////////////////////////////
// Reading user input from add.html
/////////////////////////////////////////

export const getInput = () => {
    return {
        emotion: document.querySelector('.emotion--selected').className.split(' ')[1].split('--')[1],
        topic: document.querySelector('.topic--selected').className.split(' ')[1].split('--')[1],
        description: document.querySelector('.add-description').value
    };    
};

/////////////////////////////////////////
// Rendering a thought to archive.html
/////////////////////////////////////////

// Choose icon appropriate to topic
const getIcon = (el) => {
    if(el.topic === 'finances') {
        return "fas fa-money-bill-wave";
    } else if (el.topic === 'sex') {
        return "fas fa-heart";
    } else if (el.topic === 'family') {
        return "fas fa-user-friends";
    } else if (el.topic === 'housework') {
        return "fas fa-home";
    } else if (el.topic === 'career') {
        return "fas fa-briefcase";
    } else if (el.topic === 'future') {
        return "fas fa-clock";
    } else if (el.topic === 'kids') {
        return "fas fa-child";
    } else if (el.topic === 'health') {
        return "fas fa-heartbeat";
    } else if (el.topic === 'unsure') {
        return "fas fa-question";
    }
};

// Generate mailto URL based on thought
const getURL = (el) => {
    return `?subject=Can%20we%20chat%3F&body=Hey%2C%20I%27m%20feeling%20${el.emotion}%20about%20${el.topic}%2E%20Can%20we%20chat%20about%20it%20this%20weekend%3F`;
};

// Create HTML markup
const getMarkup = (el, icon, url) => {
    return `<div class="thought" id="thought-${el.id}">
            <div class="thought__content">
                <div class="thought__icon"><i class="${icon}"></i></div>
                <div class="thought__text">
                    <div class="thought__text--description">${el.description}</div>
                    <div class="thought__text--emotion">feeling ${el.emotion}</div>
                </div>
            </div>
            <div class="thought__buttons">
                <div class="thought__buttons--delete"><div class="thought__button-text">Delete</div></div>
                <div class="thought__buttons--share"><a class="thought__button-text" href="mailto:${url}">Share</a></div>
            </div>
        </div>`;
};

// Create markups and push into array
export const createThoughts = (arrThoughts, arrMarkups) => {
    arrThoughts.forEach(el => {
        let iconClass = getIcon(el);
        let mailToURL = getURL(el);
        let markup = getMarkup(el, iconClass, mailToURL);
        arrMarkups.push(markup);
    });
};

// Render array of markups to DOM
export const renderThoughts = (arrMarkups) => {
    arrMarkups.forEach(el => {
        elementsArchive.thoughtsList.insertAdjacentHTML('beforeend', el);
    });
};

// Display empty state
export const displayEmpty = () => {
    elementsArchive.emptyBox.style.display = 'flex';
};

/////////////////////////////////////////
// Deleting a thought from archive.html
/////////////////////////////////////////

export const deleteThought = (el) => {
    el.parentNode.removeChild(el);
};