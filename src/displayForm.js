import { Form } from "./DOM";
const content = document.querySelector('#content');

function displayForm(){
    const forms = document.querySelectorAll('form');
    if (forms.length == 0){
        const form = new Form();
        content.prepend(form);
    }
}

export {
    displayForm,
}