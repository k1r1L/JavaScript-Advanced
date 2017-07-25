function attachEventsListeners() {
    document.getElementById('daysBtn')
        .addEventListener('click', convertDays);
    document.getElementById('hoursBtn')
        .addEventListener('click', convertHours);
    document.getElementById('minutesBtn')
        .addEventListener('click', convertMinutes);
    document.getElementById('secondsBtn')
        .addEventListener('click', convertSeconds);

    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    function convertDays() {
        let days = Number(
            daysInput.value);
        hoursInput.value = days * 24;
        minutesInput.value = days * 24 * 60;
        secondsInput.value = days * 24 * 60 * 60;
    }

    function convertHours() {
        let hours = Number(hoursInput.value);
        daysInput.value = hours / 24;
        minutesInput.value = hours * 60;
        secondsInput.value = hours * 60 * 60;
    }

    function convertMinutes() {
        let minutes = Number(minutesInput.value);
        daysInput.value = minutes / 1440;
        hoursInput.value = minutes / 60;
        secondsInput.value = minutes * 60;
    }

    function convertSeconds() {
        let seconds = Number(secondsInput.value);
        daysInput.value = seconds / 86400;
        hoursInput.value = seconds / 60 / 60;
        minutesInput.value = seconds / 60;
    }
}