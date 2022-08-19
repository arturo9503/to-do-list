function displayAll(content){
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) =>{
        card.style.display = 'inline-block';
    });
}

export {
    displayAll
}