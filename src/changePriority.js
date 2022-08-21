function changePriority(priority, showPriority){
    if (showPriority.textContent == 'high priority'){
        showPriority.textContent = 'medium priority';
    }
    else if (showPriority.textContent == 'medium priority'){
        showPriority.textContent = 'low priority';
    }
    else{
        showPriority.textContent ='high priority';
    }
}

export {
    changePriority,
}