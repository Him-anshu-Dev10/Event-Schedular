document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('eventForm');
    const eventList = document.getElementById('eventList');

    eventForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const eventName = document.getElementById('eventName').value;
        const eventDate = document.getElementById('eventDate').value;
        const eventTime = document.getElementById('eventTime').value;
        const eventLocation = document.getElementById('eventLocation').value;
        const eventDescription = document.getElementById('eventDescription').value;

        const eventCard = document.createElement('div');
        eventCard.classList.add('event');

        eventCard.innerHTML = `
            <h3>${eventName}</h3>
            <p><strong>Date:</strong> ${eventDate}</p>
            <p><strong>Time:</strong> ${eventTime}</p>
            <p><strong>Location:</strong> ${eventLocation}</p>
            <p>${eventDescription}</p>
            <button class="deleteEvent"><i class="fas fa-trash-alt"></i> Delete</button>
        `;

        eventList.appendChild(eventCard);

        // Clear the form
        eventForm.reset();

        // Add delete event functionality
        const deleteButton = eventCard.querySelector('.deleteEvent');
        deleteButton.addEventListener('click', () => {
            eventList.removeChild(eventCard);
        });
    });
});
