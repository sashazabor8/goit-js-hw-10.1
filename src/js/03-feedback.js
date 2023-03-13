const throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[name = "email"]'),
    message: document.querySelector('[name = "message"]'),
};
let feedbackForm = {}

try { 
    refs.email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
    refs.message.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
    
    feedbackForm = JSON.parse(localStorage.getItem('feedback-form-state'));
} catch  {
    refs.email.value = '';
    refs.message.value = '';
    
}

refs.form.addEventListener('input', throttle(addFedbackFormInLocalStorage,500))
refs.form.addEventListener('submit', onSubmitForm)



function addFedbackFormInLocalStorage (e) {
    feedbackForm[e.target.name] = e.target.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm))
}

function onSubmitForm (e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state');
    refs.email.value = '';
    refs.message.value = '';
}
