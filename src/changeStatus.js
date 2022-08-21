function changeStatus(status, showStatus){
    if (showStatus.textContent == 'pending'){
        showStatus.textContent = 'completed';
    }
    else{
        showStatus.textContent = 'pending';
    }
}

export {
    changeStatus,
}