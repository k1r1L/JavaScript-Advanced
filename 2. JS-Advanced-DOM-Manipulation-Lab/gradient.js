function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMouseMove);
    gradient.addEventListener('mouseout', onMouseOut);
    let result = document.getElementById('result');
    function onMouseMove(event) {
         let x = event.offsetX;
         let percent = Math.floor
         ((x / (event.target.clientWidth - 1)) * 100);
         result.textContent = `${percent}%`;
    }

    function onMouseOut() {
        result.textContent = '';
    }
}