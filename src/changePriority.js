function changePriority(priority){
    if (priority.textContent == 'high'){
        priority.textContent = 'medium';
    }
    else if (priority.textContent == 'medium'){
        priority.textContent = 'low';
    }
    else{
        priority.textContent ='high';
    }
}

export {
    changePriority,
}