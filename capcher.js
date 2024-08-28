function generateCaptcha(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaText = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        captchaText += characters[randomIndex];
    }

    document.getElementById('captcha').textContent = captchaText;


    return captchaText;
}

let captchaValue = generateCaptcha(6); 

function validateCaptcha() {
    const userAnswer = document.getElementById('captchaInput').value;
    if (userAnswer === captchaValue) {
        alert("CAPTCHA solved correctly!");
        return true; 
    } else {
        alert("Incorrect CAPTCHA, please try again.");

        captchaValue = generateCaptcha(6);
        return false; 
    }
}
