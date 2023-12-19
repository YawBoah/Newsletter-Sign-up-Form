document.addEventListener('DOMContentLoaded', function () {
    const subscriberEmail = localStorage.getItem('subscriberEmail');
    const confirmationSection = document.getElementById('confirmationSection');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const subscriberEmailSpan = document.getElementById('subscriberEmail');

    if (subscriberEmail) {
        subscriberEmailSpan.textContent = subscriberEmail;
        confirmationSection.style.display = 'block';
    }
});

function dismissMessage() {
    localStorage.removeItem('subscriberEmail');
    window.location.href = 'index.html';
}
