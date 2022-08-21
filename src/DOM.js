import {createToDo} from './createToDo.js';
import {changeStatus} from './changeStatus.js';
import {changePriority} from './changePriority.js';
import {removeCard} from './removeCard.js';

function toDoCard(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    
    const card = document.createElement('div');
    const myTitle = document.createElement('div');
    const myDesc = document.createElement('div');
    const myDue = document.createElement('div');
    const showPriority = document.createElement('div');
    const showStatus = document.createElement('div');
    const myPriority = document.createElement('button');
    const status = document.createElement('button');
    const remove = document.createElement('button');



    myTitle.textContent = title;
    myDesc.textContent = description;
    myDue.textContent = 'Due date: ' + dueDate;
    myPriority.textContent = priority;
    showPriority.textContent = 'high priority';
    showStatus.textContent = 'pending';
    status.textContent = 'pending';
    remove.textContent = 'remove';

    card.classList.add('card');
    myTitle.classList.add('title');
    status.classList.add('status');

    status.addEventListener('click', ()=> {
        changeStatus(status);
    });
    myPriority.addEventListener('click' , ()=> {
        changePriority(myPriority);
    });
    remove.addEventListener('click', ()=>{
        removeCard(card);
    });

    card.appendChild(myTitle);
    card.appendChild(myDesc);
    card.appendChild(myDue);
    card.appendChild(showPriority);
    card.appendChild(showStatus);
    card.appendChild(myPriority);
    card.appendChild(status);
    card.appendChild(remove);
    
    return card;

}

function Form() {
    const form = document.createElement('form');
    form.setAttribute('method', 'get');

    const title = document.createElement('input');
    title.setAttribute('placeholder', 'Project Title');
    title.setAttribute('type', 'text');
    title.setAttribute('id', 'title');


    const desc = document.createElement('input');
    desc.setAttribute('placeholder', 'Project Description');
    desc.setAttribute('type', 'text');
    desc.setAttribute('id' , 'description');

    const dueDate = document.createElement('input');
    dueDate.setAttribute('placeholder', 'Due Date');
    dueDate.setAttribute('type', 'text');
    dueDate.setAttribute('id' , 'due-date');

    const priority = document.createElement('input');
    priority.setAttribute( 'placeholder', 'project Priority');
    priority.setAttribute('type' , 'text');
    priority.setAttribute('id', 'priority');

    const s = document.createElement('input');
    s.setAttribute('type', 'submit');
    s.setAttribute('name', 'submit');
    s.setAttribute('placeholder', 'Submit');

    form.append(title);
    form.append(desc);
    form.append(priority);
    form.append(dueDate);
    form.append(s);

    s.addEventListener('click', ()=>{
        createToDo(form, title, desc, priority, dueDate, s);
    })

    return form;

}

export {
    toDoCard,
    Form
}