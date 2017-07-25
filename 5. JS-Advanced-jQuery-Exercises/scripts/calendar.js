function calendar(input) {
        // Months are zero-based, setting it this way will initialize it to the
        // next month; however, we set the date to 0, which will roll the date back
        // to the last day of the previous month (the one we actually want)
        let date = new Date(input[2], input[1], 0);
        let daysInMonth = date.getDate();
        // Next we set the date to the first of the month, so we can see which day
        // of the week it starts on (0-6, starting on Sunday)
        date.setDate(1);
        let startingDay = date.getDay();
        // Since 0 is Sunday, we have to catch it and set it to the correct value
        if (startingDay == 0) {
            startingDay = 7;
        }

        let content = $('#content');

        // Initialize table caption and headings
        let monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        let table = $('<table><tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr></table>');
        table.append($('<caption>' + monthNames[input[1] - 1] + ' ' + input[2] + '</caption>'))

        let currentDay = 1-startingDay;
        let finished = false;
        while(!finished) {
            let currentRow = $('<tr></tr>');
            for (let j = 0; j < 7; j++) {
                let currentCol;
                currentDay++;
                if (currentDay > 0 && currentDay <= daysInMonth) {
                    currentCol = $('<td>' + currentDay + '</td>');
                    if (currentDay === input[0]) {
                        currentCol.addClass('today');
                    }
                }
                else {
                    currentCol = $('<td></td>');
                }

                currentCol.appendTo(currentRow);
                if (currentDay === daysInMonth) {
                    finished = true;
                }
            }

            currentRow.appendTo(table);
        }

        content.append(table);
}