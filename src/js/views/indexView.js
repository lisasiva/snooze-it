/*jslint esnext: true*/
import { elementsHome, pages } from './base';

/////////////////////////////////////////
// Check user state on window load
/////////////////////////////////////////

// Changes buttons from Add Thought/Archive to Create Account/Log In
export const updateButtons = () => {
    
    // Update text and href for gradient button
    elementsHome.btnGradient.innerHTML = 'Create an Account';
    elementsHome.btnGradient.setAttribute('href', pages.register);
    
    // Update text and href for shadow button
    elementsHome.btnShadow.innerHTML = 'Log In';
    elementsHome.btnShadow.setAttribute('href', pages.login);
    
    // Hide sign out button
    elementsHome.btnSignOut.style.display = 'none';
};

export const setButtons = () => {
    elementsHome.btnGradient.setAttribute('href', pages.add);
    elementsHome.btnShadow.setAttribute('href', pages.archive);
}