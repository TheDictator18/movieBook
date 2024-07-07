document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentIndex = 0;

    function showSlide(index) {
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showSlide(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    const seats = document.querySelectorAll('.seat');
    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            seat.classList.toggle('selected');
        });
    });

    document.getElementById('booking-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const movie = document.getElementById('movie').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const seats = Array.from(document.querySelectorAll('.seat.selected')).map(seat => seat.dataset.seat);

        alert(`Booking Confirmed!
        Movie: ${movie}
        Date: ${date}
        Time: ${time}
        Seats: ${seats.join(', ')}`);
    });
});
