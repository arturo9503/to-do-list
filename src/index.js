import {toDoCard, Form} from './DOM.js';
import {displayForm} from './displayForm.js';
import {displayPending} from './displayPending.js';
import {displayAll} from './displayAll.js';

const content = document.querySelector('#content');
const toDo = document.querySelector('#create');
const showAll = document.querySelector('#show-all');
const showPending = document.querySelector('#show-pending');

const card1 = new toDoCard('Finish This Project', 'Finish a simple to-do-list application', '05/14/2023', 'high priority');
const card2 = new toDoCard('Finish Other Project', 'Add design and functionalities.', '05/20/2023', 'medium priority');
content.appendChild(card1);
content.appendChild(card2);

toDo.addEventListener('click', ()=>{
    displayForm(content);
});

showPending.addEventListener('click', ()=>{
    displayPending(content);
});

showAll.addEventListener('click', ()=>{
    displayAll(content);
});




