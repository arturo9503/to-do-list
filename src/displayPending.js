function displayPending(content){
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) =>{
        const status = card.querySelector('.status');
        if (status.textContent != 'pending'){
            card.style.display = 'none';
        }
    });
}

export {
    displayPending
}