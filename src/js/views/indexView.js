/*jslint esnext: true*/
import { elementsHome, pages } from './base';

// Changes button text to 'Create an Account' and 'Log In'
export const updateButtons = () => {
    
    // Update text and href for gradient button
    elementsHome.btnGradient.classList.remove('btn--gradient');
    elementsHome.btnGradient.classList.add('btn--gradient-register');
    elementsHome.btnGradient.innerHTML = 'Create an Account';
    elementsHome.btnGradient.setAttribute('href', pages.register);
    
    // Update text and href for shadow button
    elementsHome.btnShadow.innerHTML = 'Log In';
    elementsHome.btnShadow.setAttribute('href', pages.login);
    
    // Hide sign out button
    elementsHome.btnSignOut.style.display = 'none';
};

// Points buttons to add.html and archive.html
export const setButtons = () => {
    elementsHome.btnGradient.setAttribute('href', pages.add);
    elementsHome.btnShadow.setAttribute('href', pages.archive);
};

// Changes subheadline to 'You are logged in as TK'
/*export const displayName = (name) => {
    elementsHome.subHeadline.style.display = 'block';
    elementsHome.subHeadline.innerHTML = `(You're logged in as ${name})`;
};*/

// Changes headline to 'TK's thoughts'
export const displayName = (name) => {
    elementsHome.headlineGray.innerHTML = `${name}'s&nbsp;`;
    elementsHome.headlineGradient.innerHTML = `thoughts`;
}