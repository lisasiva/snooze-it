/*jslint esnext: true */

const API = 'https://26t67eypug.execute-api.us-east-1.amazonaws.com/prod';

export default class Thoughts {
    constructor() {
        this.data = [];
    }
    
    // Generate unique ID 
    createID() {
        
        // If thoughts array is not empty
        if(this.data.length > 0) {
            // Return last element's ID + 1 
            return (this.data[this.data.length - 1].id + 1); 
        } else {
            // Return 0 
            return 0;
        }
    }
    
    // Add thought to thoughts array
    addThought(id, emotion, topic, des) {
        
        // Create new thought object
        const thought = {
            id: id,
            emotion: emotion,
            topic: topic,
            description: des
        };
        
        // Push object into array
        this.data.push(thought);
    }
    
    // Delete thought from thoughts array
    deleteThought(id) {
        let ids, index;
        ids = this.data.map(el => el.id);
        index = ids.indexOf(id);

        if(index !== -1) {
            this.data.splice(index,1);
        }
    }
    
    // Send POST request to Lambda function
    async postThoughts() {
        let body = {thoughts: this.data};
        try {
            let result = await fetch(API, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {'Content-Type': 'application/json'}
            });

            console.log('Successfully updated DynamoDB');
            
            // If currently on add.html, redirect to index.html
            if(window.location.href.indexOf('add') !== -1) {
                window.location.href = 'https://lisasiva.com/snooze-it/dist/snoozed';    
            }
            
        } catch(error) {
            console.log(`Error writing to Dynamo`);
            console.log(`${error}`);
        }   
    }
    
    // Send GET request to Lambda function
    async getThoughts() {
        // Get thoughts from DynamoDB
        let result = await fetch(API);
        let items = await result.json();

        // If Item is found, populate data array
        if (Object.keys(items).length > 0) {
            return items.Item.thoughts;
        } else {
            console.log(`Nothing in DynamoDB`);
            return [];
        }
    }
}