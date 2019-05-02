/*jslint esnext: true*/
import { elementsSnoozed, pages } from './views/base';

/////////////////////////////////////////
// Initialize with event listeners
/////////////////////////////////////////

const init = () => {
    // Send user back to home on button click
    elementsSnoozed.btnBack.addEventListener('click', () => {
        elementsSnoozed.btnBack.setAttribute('href', pages.home);
    });
};

init();