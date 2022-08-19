import { toDoCard } from "./DOM";
const content = document.querySelector('#content');

function createToDo(form, title, desc, priority, dueDate, s){
    toDoCard = new toDoCard(title.value, desc.value, priority.value, dueDate.value);
    form.remove();
    content.appendChild(toDoCard);
}

export {
    createToDo,
}