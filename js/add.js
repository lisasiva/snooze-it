/* jslint esnext:true */

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
            
            this.persistData();
            
            return newThought;
        },
        
        persistData: function() {
            localStorage.setItem('data', JSON.stringify(data));
        },
        
        getData: function() {
            // Get data from storage
            const storageData = JSON.parse(localStorage.getItem('data'));

            // Save data from storage to array
            if (storageData) {
                data = storageData;
            } else {
                console.log('No data in storage');
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
    
    let markups = [];
    
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
        console.log(input);
        
        // Create new Thought instantiation
        let newThought = dataCtrl.addThought(input.emotion, input.topic, input.description);
        console.log(newThought);
        
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
