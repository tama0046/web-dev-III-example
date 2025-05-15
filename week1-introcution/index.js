document.addEventListener('DOMContentLoaded', () => {
    const calendarDatesGrid = document.querySelector('.calendar-dates-grid');
    const currentMonthYearEl = document.querySelector('.current-month-year');
    const prevMonthButton = document.querySelector('.prev-month');
    const nextMonthButton = document.querySelector('.next-month');

    // Initial state from the image
    let currentYear = 2025;
    let currentMonth = 4; // 0-indexed (January is 0, May is 4)

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Mock data for special dates (in a real app, this would come from a backend or be more complex)
    // Key: "YYYY-M" (month is 0-indexed)
    const specialDatesData = {
        "2025-4": { // May 2025
            available: [12, 13, 15],
            hasDot: [9]
        },
        "2025-3": { // April 2025 (example for navigation)
            available: [5, 19],
            hasDot: [22, 23]
        },
         "2025-5": { // June 2025 (example for navigation)
            available: [1, 7, 20],
            hasDot: [15]
        }
    };

    function renderCalendar(year, month) {
        calendarDatesGrid.innerHTML = ''; // Clear previous dates
        currentMonthYearEl.textContent = `${monthNames[month]} ${year}`;

        const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 (Sun) - 6 (Sat)
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Add empty cells for alignment before the 1st day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyCell = document.createElement('span');
            calendarDatesGrid.appendChild(emptyCell);
        }

        // Get special dates for the current month
        const monthKey = `${year}-${month}`;
        const currentMonthSpecialData = specialDatesData[monthKey] || { available: [], hasDot: [] };

        // Add date cells
        for (let day = 1; day <= daysInMonth; day++) {
            const dateCell = document.createElement('span');
            dateCell.textContent = day;
            dateCell.classList.add('date-item'); // Add class for potential general styling/hover

            if (currentMonthSpecialData.available.includes(day)) {
                dateCell.classList.add('available');
            }
            if (currentMonthSpecialData.hasDot.includes(day)) {
                dateCell.classList.add('has-dot');
            }

            // Example: Add a click listener for interactive dates
            if (currentMonthSpecialData.available.includes(day)) {
                dateCell.addEventListener('click', () => {
                    // Remove 'selected' class from any previously selected date
                    const currentlySelected = calendarDatesGrid.querySelector('.selected');
                    if (currentlySelected) {
                        currentlySelected.classList.remove('selected');
                    }
                    // Add 'selected' class to the clicked date
                    dateCell.classList.add('selected');
                    console.log(`Selected: ${day} ${monthNames[month]} ${year}`);
                    // You could add more logic here, like showing available times for this date
                });
            }

            calendarDatesGrid.appendChild(dateCell);
        }
    }

    function changeMonth(offset) {
        currentMonth += offset;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        } else if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentYear, currentMonth);
    }

    prevMonthButton.addEventListener('click', () => changeMonth(-1));
    nextMonthButton.addEventListener('click', () => changeMonth(1));

    // Initial render
    renderCalendar(currentYear, currentMonth);

    // (Optional) Placeholder for timezone dropdown interactivity
    const timezoneDisplay = document.querySelector('.timezone-display');
    timezoneDisplay.addEventListener('click', () => {
        // In a real app, you'd show a dropdown menu here
        alert('Timezone selector clicked! (Implement dropdown logic)');
    });
});