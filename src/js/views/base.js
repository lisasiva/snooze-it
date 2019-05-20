/*jslint esnext: true*/
const baseURL = 'https://app.heyhon.co/';
const endURL = '';

//const baseURL = 'http://localhost:8080/';
//const endURL = '.html';

export const pages = {
    snoozed: `${baseURL}snoozed${endURL}`,
    register: `${baseURL}register${endURL}`,
    login: `${baseURL}login${endURL}`,
    add: `${baseURL}add${endURL}`,
    home: `${baseURL}`,
    archive: `${baseURL}archive${endURL}`,
};

export const elementsAdd = {
    emotion: document.querySelectorAll('.emotion'),
    topic: document.querySelectorAll('.topic'),
    snoozeBtn: document.querySelector('.btn--snooze'),
};

export const elementsArchive = {
    thoughtsList: document.querySelector('.thoughts__list'),
    emptyBox: document.querySelector('.empty-box'),
    btnBack: document.querySelector('.empty-box__button--back'),
};

export const elementsRegister = {
    btnRegister: document.getElementById('btn-register'), 
    inputName: document.getElementById('name'),
    inputEmail: document.getElementById('email'),
    inputPassword: document.getElementById('password'),
    confirmation: document.querySelector('.form__confirmation'),
    
};

export const elementsLogin = {
    loginBtn: document.getElementById('btn-login'), 
    emailInput: document.getElementById('email'),
    passwordInput: document.getElementById('password'),
    confirmation: document.querySelector('.form__confirmation'),
};

export const elementsHome = {
    headlineGray: document.querySelector('.home-headline--gray'),
    headlineGradient: document.querySelector('.home-headline--gradient'),
    subHeadline: document.querySelector('.home-subheadline'),
    btnGradient: document.querySelector('.btn--gradient'),
    btnShadow: document.querySelector('.btn--shadow'),
    btnSignOut: document.querySelector('.btn--signout'),
};

export const elementsSnoozed = {
    btnBack: document.querySelector('.snoozed__option--back'),
};