function changeStatus(status){
    if (status.textContent == 'pending'){
        status.textContent = 'completed';
    }
    else{
        status.textContent = 'pending';
    }
}

export {
    changeStatus,
}