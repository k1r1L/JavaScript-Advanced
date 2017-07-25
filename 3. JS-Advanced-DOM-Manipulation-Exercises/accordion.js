function toggle() {
    let extra = document.getElementById("extra");
    let button = document.getElementsByClassName("button")[0];
    if (extra.style.display === 'none') {
        extra.style.display = 'block';
        button.textContent = 'Less';
    } else {
        extra.style.display = 'none';
        button.textContent = 'More';
    }
}