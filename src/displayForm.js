import { Form } from "./DOM";
const nav = document.querySelector('#nav');

function displayForm(){
    const forms = document.querySelectorAll('form');
    if (forms.length == 0){
        const form = new Form();
        nav.appendChild(form);
    }
}

export {
    displayForm,
}