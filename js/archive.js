/* jslint esnext: true */

const API = 'https://26t67eypug.execute-api.us-east-1.amazonaws.com/prod';

let archiveController = (function() {
    let markups = [];
    let data = [];
    let DOM = {
        thoughtsList: '.thoughts__list',
        emptyBox: '.empty-box'
    };
    
    let getStorage = async function() {
        // Get thoughts from DynamoDB
        const result = await fetch(API);
        const items = await result.json();
        
        // If no Item is present, show empty state
        if (Object.keys(items).length === 0) {
            document.querySelector(DOM.emptyBox).style.display = 'flex';
        
        // If Item is present, but thoughts is empty, show empty state
        } else if(items.Item.thoughts && items.Item.thoughts.length === 0) {
            document.querySelector(DOM.emptyBox).style.display = 'flex';
        
        // Otherwise, populate data array with thoughts
        } else {
            data = items.Item.thoughts;
        }
    
        // Convert data to HTML markups, save to markups array
        markups = data.map(el => {
            let iconClass;
            if(el.topic === 'finances') {
                iconClass = "fas fa-money-bill-wave";
            } else if (el.topic === 'sex') {
                iconClass = "fas fa-heart";
            } else if (el.topic === 'family') {
                iconClass = "fas fa-user-friends";
            } else if (el.topic === 'housework') {
                iconClass = "fas fa-home";
            } else if (el.topic === 'career') {
                iconClass = "fas fa-briefcase";
            } else if (el.topic === 'future') {
                iconClass = "fas fa-clock";
            } else if (el.topic === 'kids') {
                iconClass = "fas fa-child";
            } else if (el.topic === 'health') {
                iconClass = "fas fa-heartbeat";
            } else if (el.topic === 'unsure') {
                iconClass = "fas fa-question";
            }
            
            let mailToURL = `?subject=Can%20we%20chat%3F&body=Hey%2C%20I%27m%20feeling%20${el.emotion}%20about%20${el.topic}%2E%20Can%20we%20chat%20about%20it%20this%20weekend%3F`;
            
            return `<div class="thought" id="thought-${el.id}">
                <div class="thought__content">
                    <div class="thought__icon"><i class="${iconClass}"></i></div>
                    <div class="thought__text">
                        <div class="thought__text--description">${el.description}</div>
                        <div class="thought__text--emotion">feeling ${el.emotion}</div>
                    </div>
                </div>
                <div class="thought__buttons">
                    <div class="thought__buttons--delete"><div class="thought__button-text">Delete</div></div>
                    <div class="thought__buttons--share"><a class="thought__button-text" href="mailto:${mailToURL}">Share</a></div>
                </div>
            </div>`;
        });
        
        // Render markups to page
        markups.forEach(el => {
            document.querySelector(DOM.thoughtsList).insertAdjacentHTML('beforeend', el);
        });
        
    }
    
    let persistData = async function() {
        let body = {thoughts: data};
        try {
            const result = await fetch(API, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {'Content-Type': 'application/json'}
            });

            console.log('Successfully submitted to Dynamo');
        } catch(error) {
            console.log(`Error writing to Dynamo: ${error}`);        
        }
    };
    
    let archDeleteThought = function(event) {
        let itemID = event.target.parentNode.parentNode.parentNode.id;
        let id = parseInt(itemID.split('-')[1]);
        console.log(itemID);
        if (itemID) {
            // Get element with id itemID
            let el = document.getElementById(itemID);
            
            // Delete item from UI
            el.parentNode.removeChild(el);
            
            // Delete item from data array
            let ids, index;
            ids = data.map(el => el.id);
            index = ids.indexOf(id);
            
            if(index !== -1) {
                data.splice(index,1);
            }
            
            // Update data in localStorage
            persistData();
            console.log(data);
            
            // Show empty state if no more children
            let numItems = document.querySelector(DOM.thoughtsList).children.length;
            if (numItems === 0) {
                document.querySelector(DOM.emptyBox).style.display = 'flex';
            }
        }
    };
    
    let setUpEventListeners = function() {
        window.addEventListener('load', getStorage); 
        document.querySelector(DOM.thoughtsList).addEventListener('click', archDeleteThought);
    };
    
    return {
        init: function() {
            setUpEventListeners();
        }
    };
})();

archiveController.init();

