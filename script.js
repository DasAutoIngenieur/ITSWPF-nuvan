// Form validation and submission handling
function validateAndSubmit(event) {
    event.preventDefault();
    
    // Get form elements
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const solution = document.getElementById('solution').value;
    const message = document.getElementById('message').value;
    
    // Validate required fields
    if (!name || !email || !phone || !solution || !message) {
        alert('Please fill in all required fields');
        return false;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    // Validate phone number (basic validation)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.replace(/[^0-9]/g, ''))) {
        alert('Please enter a valid 10-digit phone number');
        return false;
    }
    
    // Get form data
    const formData = {
        name,
        email,
        phone,
        solution,
        message,
        newsletter: document.getElementById('newsletter').checked
    };
    
    // Display solution-specific message
    let solutionMessage = '';
    switch(solution) {
        case 'renewable':
            solutionMessage = 'Thank you for your interest in renewable energy solutions!';
            break;
        case 'waste':
            solutionMessage = 'Together we can make a difference in waste management!';
            break;
        case 'education':
            solutionMessage = 'Education is key to environmental awareness!';
            break;
        case 'community':
            solutionMessage = 'Community projects create lasting change!';
            break;
    }
    
    alert(solutionMessage);
    
    // Store form data in localStorage (for demonstration)
    localStorage.setItem('formSubmission', JSON.stringify(formData));
    
    // Redirect to success page
    window.location.href = 'success.html';
    return false;
}