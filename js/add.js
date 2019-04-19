/* jslint esnext:true */

//////////////////////////////////
// API URL
//////////////////////////////////

const API = 'https://26t67eypug.execute-api.us-east-1.amazonaws.com/prod/';

//////////////////////////////////
// DATA CONTROLLER
//////////////////////////////////

let dataController = (function() {
    
    const Thought = function(id, emotion, topic, des) {
        this.id = id;
        this.emotion= emotion;
        this.topic = topic;
        this.description = des;
    };
    
    let data = [];
    
    return {
        addThought: function(emotion, topic, des) {
            var newThought, ID;
            
            if(data.length > 0) {
                ID = data[data.length - 1].id + 1; 
            } else {
                ID = 0;
            }
            
            newThought = new Thought(ID, emotion, topic, des);
            
            data.push(newThought);
            
            this.postData();
            
            return newThought;
        },
        
        postData: async function() {
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
        },
        
        getData: async function() {
            // Get thoughts from DynamoDB
            const result = await fetch(API);
            const items = await result.json();

            // If Item is found, populate data array
            if (Object.keys(items).length > 0) {
                data = items.Item.thoughts;
                console.log(data);
            } else {
                console.log(`Nothing in DynamoDB`);
            }
        }
        
    };
    
})();

//////////////////////////////////
// UI CONTROLLER
//////////////////////////////////

let UIController = (function() {
    const DOMstrings = {
        emotion: '.emotion',
        topic: '.topic',
        snoozeBtn: '.btn--snooze'
    };
    
    return{
        getDOMStrings: function() {
            return DOMstrings;
        },
        
        getInput: function() {
            return {
                emotion: document.querySelector('.emotion--selected').className.split(' ')[1].split('--')[1],
                topic: document.querySelector('.topic--selected').className.split(' ')[1].split('--')[1],
                description: document.querySelector('.add-description').value
            };
        },  

    };
    
})();


//////////////////////////////////
// GLOBAL CONTROLLER
//////////////////////////////////

let controller = (function(dataCtrl, UICtrl) {
    
    let ctrlAddThought = function() {
        // Get input from UI
        let input = UICtrl.getInput();
        
        // Create new Thought instantiation
        let newThought = dataCtrl.addThought(input.emotion, input.topic, input.description);
        
    };
   
    let setUpEventListeners = function() {
        // Get DOMstrings from UI controller
        const DOM = UICtrl.getDOMStrings();
        
        // Toggle emotion buttons on click
        document.querySelectorAll(DOM.emotion).forEach(el => {
           el.addEventListener('click', function() {
               this.classList.toggle('emotion--selected');
           }); 
        });
        
        // Toggle topic buttons on click
        document.querySelectorAll(DOM.topic).forEach(el => {
            el.addEventListener('click', function() {
                this.classList.toggle('topic--selected');
            });
        });
        
        // Add thought when snooze button is clicked
        document.querySelector(DOM.snoozeBtn).addEventListener('click', ctrlAddThought);
        
        // Get data from storage on load
        window.addEventListener('load', dataCtrl.getData); 
        
    };
    
    return {
        init: function() {
            console.log('Application has started');
            setUpEventListeners();
        },
        
    };
    
})(dataController, UIController);


//////////////////////////////////
// INIT
//////////////////////////////////

controller.init();
