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

    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const submitButton = document.getElementById('submit-button');
    const qrCodeContainer = document.getElementById('qrcode');

    document.querySelector('.book-now-button').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        qrCodeContainer.innerHTML = ''; // Clear QR code
    });

    submitButton.addEventListener('click', function() {
        const email = document.getElementById('email-input').value;

        if (email) {
            const movie = document.getElementById('movie').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const seats = Array.from(document.querySelectorAll('.seat.selected')).map(seat => seat.dataset.seat).join(', ');

            const bookingInfo = `Booking Confirmed!
            Movie: ${movie}
            Date: ${date}
            Time: ${time}
            Seats: ${seats}
            Email: ${email}`;

            alert(bookingInfo);

            new QRCode(qrCodeContainer, {
                text: bookingInfo,
                width: 128,
                height: 128
            });

            qrCodeContainer.style.display = 'block';
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            qrCodeContainer.innerHTML = ''; // Clear QR code
        }
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
