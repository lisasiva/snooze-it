/* jslint esnext: true */

let archiveController = (function() {
    let markups = [];
    let data = [];
    let DOM = {
        thoughtsList: '.thoughts__list'
    };
    
    let getStorage = function() {
        // Get data from storage
        const storageData = JSON.parse(localStorage.getItem('data'));

        // Save data from storage to array
        if (storageData) {
            data = storageData;
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
                    <div class="thought__buttons--share"><div class="thought__button-text">Share</div></div>
                </div>
            </div>`;
        });
        
        // Render markups to page
        markups.forEach(el => {
            document.querySelector(DOM.thoughtsList).insertAdjacentHTML('beforeend', el);
        });
    };
    
    let persistData= function() {
        localStorage.setItem('data', JSON.stringify(data));
    };
    
    let archDeleteThought = function(event) {
        let itemID = event.target.parentNode.parentNode.parentNode.id;
        let id = parseInt(itemID.split('-')[1]);
        console.log(id);
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

