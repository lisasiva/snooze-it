/* jslint esnext: true */

/////////////////////////////////
// DATA CONTROLLER
/////////////////////////////////

var dataController = (function() {
    
    var Item = function(id, topic, emotion, des) {
        this.id = id;
        this.topic = topic;
        this.emotion = emotion;
        this.description = des;
    };
    
    var data = [];
    
    return {
        addItem: function(topic, emotion, des) {
            var newItem, ID;
            
            if(data.length > 0) {
                ID = data[data.length - 1].id + 1; 
            } else {
                ID = 0;
            }
            
            newItem = new Item(ID, topic, emotion, des);
            
            data.push(newItem);
            
            this.persistData();
            
            return newItem;
        },
        
        deleteItem: function(id) {
            var ids, index;
            ids = data.map(el => el.id);
            index = ids.indexOf(id);
            
            if(index !== -1) {
                data.splice(index,1);
            }
            
            this.persistData();
        },

        persistData: function() {
            localStorage.setItem('thoughts', JSON.stringify(data));
        },
        
        readStorage() {
            const storage = JSON.parse(localStorage.getItem('thoughts'));

            // Restore likes from local storage
            if(storage) {
                data = storage;
            }
            
            return data;

        }

    };
    
})();

/////////////////////////////////
// UI CONTROLLER
/////////////////////////////////

var UIController = (function() {
    
    var DOMstrings = {
        inputBtn: '.add__btn',
        inputTopic: '.add__topic',
        inputEmotion: '.add__emotion',
        inputDescription: '.add__description',
        itemsList: '.items__list'
    };
    
    return {
        getInput: function() {
            return {
                topic: document.querySelector(DOMstrings.inputTopic).value,
                emotion: document.querySelector(DOMstrings.inputEmotion).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
            }; 
        },
        
        addListItem: function(obj) {
            
            var html = `<div class="item" id="thought-${obj.id}"><div class="item__topic">${obj.topic}</div><div class="item__description">${obj.description}</div><div class="item__emotion">${obj.emotion}</div><div class="item__delete"><button class="item__delete--btn"><i class="far fa-times-circle"></i></button></div></div>`;
            
            document.querySelector(DOMstrings.itemsList).insertAdjacentHTML('beforeend', html);
            
        },
        
        deleteListItem: function(selectorID) {
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },
        
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
    
})();


/////////////////////////////////
// GLOBAL CONTROLLER
/////////////////////////////////

var controller = (function(dataCtrl, UICtrl) {
    
    var ctrlAddItem = function() {
        // Get input from UI controller
        var input = UICtrl.getInput();
        console.log(input);
        
        // Create the item in data controller
        var newItem = dataCtrl.addItem(input.topic, input.emotion, input.description);
        
        // Pass item to UICtrl.addListItem()
        UICtrl.addListItem(newItem);
        
    };
    
    var ctrlDeleteItem = function(event) {
        // Get ID of item that was clicked
        var itemID, ID;
        itemID = event.target.parentNode.parentNode.parentNode.id; //thought-TK
        ID = parseInt(itemID.split('-')[1]); //TK, converted from string to number
        
        // Delete item from data array
        dataCtrl.deleteItem(ID);
        
        // Delete item from UI
        UICtrl.deleteListItem(itemID);
    };
    
    var restoreItems = function() {
        // Get thoughts from localStorage
        var data = dataCtrl.readStorage();
        
        // Render to UI
        data.forEach(el => {
           UICtrl.addListItem(el); 
        });
    };
    
    var setUpEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.querySelector(DOM.itemsList).addEventListener('click', ctrlDeleteItem);
        window.addEventListener('load', restoreItems);
    };
    
    
    return {
        init: function() {
            console.log('Application has started');
            setUpEventListeners();
        }
    };
    
})(dataController, UIController);

controller.init();