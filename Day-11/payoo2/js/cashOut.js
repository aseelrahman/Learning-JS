document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = parseInt(document.getElementById('input-cash-out').value);
    const pinNumber = document.getElementById('input-cash-out-pin').value;
    const balance = parseInt(document.getElementById('account-balance').innerText);

    console.log(cashOut, pinNumber);

    // wrong way to verify pin number
    if(pinNumber === '1234' && balance >= cashOut){
        
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;
    }
    
})