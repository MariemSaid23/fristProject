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