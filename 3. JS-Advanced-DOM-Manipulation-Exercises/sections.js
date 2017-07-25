function create(sentences) {
    let container = document.getElementById('content');
    for(let sentence of sentences) {
        let divEl = document.createElement('div');
        let parEl = document.createElement('p');
        parEl.textContent = sentence;
        parEl.style.display = 'none';
        divEl.appendChild(parEl);
        divEl.addEventListener('click',
            () => parEl.style.display = 'inline-block');
        container.appendChild(divEl);
    }
}