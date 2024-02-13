const navSlider =() =>{
    const burgar=document.querySelector('.burgar');
    const nav=document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li')
    burgar.addEventListener('click',()=>
    {
          nav.classList.toggle('nav-active');
    });
}


navSlider();

// validation
function validateForm(event) {
    event.preventDefault();

    // Get form values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Simple validation example (you may want to improve this)
    if (fullName === '' || email === '' || phone === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Validate full name (only characters)
    var nameRegex = /^[a-zA-Z ]+$/;
    if (!nameRegex.test(fullName)) {
        alert('Full name must contain only characters.');
        return;
    }

    // Validate email (must end with @gmail.com)
    var emailRegex = /@gmail\.com$/;
    if (!emailRegex.test(email)) {
        alert('Email must end with @gmail.com.');
        return;
    }

    // Validate phone (must contain 11 numbers)
    var phoneRegex = /^\d{11}$/;
    if (!phoneRegex.test(phone)) {
        alert('Phone must contain 11 numbers.');
        return;
    }

    // Validate password match
    if (password !== confirmPassword) {
        alert('Password and Confirm Password do not match.');
        return;
    }

    // Your logic to submit the form or perform further actions
    // For now, we'll just log the form data
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Password:', password);

    // Optionally, you can reset the form after successful submission
    document.getElementById('contactForm').reset();
}

// end validation

// Function to scroll to the top of the page
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Show/Hide "Back to Top" button based on scroll position
window.onscroll = function() {
    var btn = document.getElementById('back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
};