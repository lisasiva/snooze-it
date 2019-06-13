/*jslint esnext: true*/

import { elementsArchive } from './base';

/////////////////////////////////////////
// Reading user input from add.html
/////////////////////////////////////////

export const getInput = () => {
    let selectedTopics = document.querySelectorAll('.topic--selected');
    let topic = []; 
    
    if (selectedTopics.length > 0) {
        selectedTopics.forEach((el) => {
            topic.push(el.className.split(' ')[1].split('--')[1]);
        });
    } else {
        topic.push('something');
    }
    
    return {
        emotion: document.querySelector('.emotion--selected').className.split(' ')[1].split('--')[1],
        topic: topic,
        //topic: document.querySelector('.topic--selected').className.split(' ')[1].split('--')[1],
        description: document.querySelector('.add-description').value
    };    
};

/////////////////////////////////////////
// Rendering a thought to archive.html
/////////////////////////////////////////

// Choose icon appropriate to topic
const getIcon = (el) => {
    if(el.topic[0] === 'money') {
        return "fas fa-money-bill-wave";
    } else if (el.topic === 'sex') {
        return "fas fa-heart";
    } else if (el.topic[0] === 'family') {
        return "fas fa-user-friends";
    } else if (el.topic[0] === 'housework') {
        return "fas fa-home";
    } else if (el.topic[0] === 'work') {
        return "fas fa-briefcase";
    } else if (el.topic[0] === 'future') {
        return "fas fa-clock";
    } else if (el.topic[0] === 'us') {
        return "fas fa-heart";
    } else if (el.topic[0] === 'health') {
        return "fas fa-heartbeat";
    } else if (el.topic[0] === 'something') {
        return "fas fa-question";
    }
};

// Generate mailto URL based on thought
const getURL = (el) => {
    return `?subject=Can%20we%20chat%3F&body=Hey%2C%20I%27m%20feeling%20${el.emotion}%20about%20${el.topic[0]}%2E%20Can%20we%20chat%20about%20it%20this%20weekend%3F`;
};

// Get tags
const getTags = (el) => {
    let tags = '';
    
    el.topic.forEach((el, idx, arr) => {
        if (idx === arr.length - 1) {
            tags += ` ${el}`;
        } else {
            tags += ` ${el}&nbsp;&nbsp;&#183;&nbsp;`;
        }
    });
    
    return tags;
};

// Create HTML markup
const getMarkup = (el, icon, tags, url) => {
    return `<div class="thought" id="thought-${el.id}">
            <div class="thought__content">
                <div class="thought__icon"><i class="${icon}"></i></div>
                <div class="thought__text">
                    <div class="thought__text--tags">${tags}</div>
                    <div class="thought__text--description">${el.description}</div>
                    <div class="thought__text--emotion">feeling ${el.emotion}</div>
                </div>
            </div>
            <div class="thought__buttons">
                <div class="thought__buttons--delete"><div class="thought__button-text" id="button--delete-thought">Let It Go</div></div>
                <div class="thought__buttons--share"><a class="thought__button-text" id="button--share-thought" href="mailto:${url}">Bring It Up</a></div>
            </div>
        </div>`;
};

// Create markups and push into array
export const createThoughts = (arrThoughts, arrMarkups) => {
    arrThoughts.forEach(el => {
        let iconClass = getIcon(el);
        let topicTags = getTags(el);
        let mailToURL = getURL(el);
        let markup = getMarkup(el, iconClass, topicTags, mailToURL);
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