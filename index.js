function subscribe(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    localStorage.setItem('subscriberEmail', email);

    // Redirect to the thank-you page
    window.location.href = 'thankyou.html';
}

