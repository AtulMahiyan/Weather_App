(function() {
    emailjs.init("IhTDjUuyrPIdlIXqV");
})();

function sendEmailAlert(toEmail, city, message) {
    emailjs.send('service_ggsd4kv', 'template_fawnsya', {
        email: toEmail,
        city: city,
        message: message
    })
    .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
    }, (error) => {
        console.error('Failed to send email:', error);
    });
}
