/*jslint esnext: true*/

import { cognito } from '../config';
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const API = 'https://cors-anywhere.herokuapp.com/https://26t67eypug.execute-api.us-east-1.amazonaws.com/prod';

export default class User {
    constructor() {
        this.attributes = [];
    }
    
    // Create CognitoUserPool - called on register and login
    createPool() {
        // Get pool data from config
        let poolData = {
            UserPoolId: cognito.userPoolId,
            ClientId: cognito.clientId
        };

        // Instantiate CognitoUserPool
        return new AmazonCognitoIdentity.CognitoUserPool(poolData);
    }
    
    // Add an attribute to array - called on register
    addAttribute(name, value) {
        // Get data for name attribute
        let dataName = {
            Name: name,
            Value: value
        };

        // Instantiate CognitoUserAttribute
        this.attributes.push(new AmazonCognitoIdentity.CognitoUserAttribute(dataName));
    }
    
    // Create AuthenticationDetails
    createDetails(email, password) {
        // Create object to be passed in
        let authenticationData = {
            Username: email,
            Password: password
        };
        
        // Instantiate AuthenticationDetails
        return new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
    }
    
    // Create user 
    createUser(email, pool) {
        let userData = {
            Username: email,
            Pool: pool
        };
        
        return new AmazonCognitoIdentity.CognitoUser(userData);
    }
    
    // Log user's email in DynamoDB - called on register
    async postUser(email) {
        // Formulate the body of the request
        let body = {
            userId: email,
            thoughts: []
        };
        
        try {
            let result = fetch(API, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            
            let response = await result;
            
            // Only if response status is okay, log success message
            if(response.status === 200) {
                console.log('Successfully posted user to DynamoDB');
                
            // Else, something went wrong with the API call
            } else {
                console.log(`Error calling API: ${response.status}`);
            }
            
        } catch(error) {
            console.log(`Error writing to Dynamo`);
            console.log(`${error}`);
        }   
    }
    
    checkSession(user) {
        let result = user.getSession(function(err, session) {
            if(err) {
                console.log(`Error getting session: ${err.message}`);
                return false;
            } else if (session) {
                console.log(`Session is valid: ${session.isValid()}`);
                return true;
            }    
        }); 
        
        if(result) {
            return true;
        }
    }
    
    
}