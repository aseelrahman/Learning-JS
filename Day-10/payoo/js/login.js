document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault(); // prevent form default behavior

    // Get Phone and PIN number.
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    console.log(phoneNumber, pinNumber);

    // This is temporary. You should not do like this!
    if (phoneNumber === '5' && pinNumber === '1234') {
        console.log('You are logged in');
        window.location.href = 'home.html';
    }
    else {
        alert('Wrong phone number or pin!')
    }
})

