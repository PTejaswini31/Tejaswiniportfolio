//Typing Animations:
const typingAnimationElement = document.getElementById("typing-animation");

const typingTexts = [
    'Software Developer',
    'Python Developer',
    'Full-Stack Developer',
    'Front-end Developer',
    'Back-end Developer'
];

let textIndex = 0;
let charIndex = 0; 

function playTypingAnimation() {
    // Add one character at a time
    typingAnimationElement.textContent = typingTexts[textIndex].slice(0, charIndex++);

    if (charIndex <= typingTexts[textIndex].length){
        setTimeout(playTypingAnimation, 200)
    }
    else {
        // Pause before clearing and moving to the next text
        setTimeout(() => {
            charIndex = 0 
            textIndex = (textIndex + 1) % typingTexts.length;// Move to the next text
            playTypingAnimation()
        }, 1000); // Delay before switching texts
    }
}
// Start the animation
playTypingAnimation();


// Initialize EmailJS with your public key
emailjs.init('n-RR6kxXWbHhqpCTc'); 

// Function to handle form submission
function sendEmail(event) {
    event.preventDefault(); 

    // Get form data
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);
    const data = {
        user_name: formData.get('user_name'),
        user_email: formData.get('user_email'),
        user_phone: formData.get('user_phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    // Send the data using EmailJS
    emailjs.send('service_7wmo8zg', 'template_t2s8gjj', data)
        .then(response => {
            // console.log('Success:', response);
            alert('Your message has been sent successfully!');
            form.reset();
        })
        .catch(error => {
            // console.error('Error:', error);
            alert('There was an error sending your message. Please try again later.');
        });
}

// Attach the submit event listener to the form
const form = document.getElementById('contact-form');
form.addEventListener('submit', sendEmail);
