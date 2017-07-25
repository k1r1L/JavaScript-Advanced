function timer() {
    let hoursSpan = $('#hours');
    let minutesSpan = $('#minutes');
    let secondsSpan = $('#seconds');
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let seconds = 0;
    let interval = null;
    startBtn.on('click', startTimer);
    stopBtn.on('click', stopTimer);

    function startTimer() {
        if (interval === null) {
            interval = setInterval(createTime, 1000);
        }
    }

    function stopTimer() {
        clearInterval(interval);
        interval = null;
    }

    function createTime() {
        seconds++;
        hoursSpan.text(('0' + Math.floor(seconds / 60 / 60)).slice(-2));
        minutesSpan.text(('0' + Math.floor((seconds  / 60) % 60)).slice(-2));
        secondsSpan.text(('0' + seconds % 60).slice(-2));
    }
}