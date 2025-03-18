document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');
    if(isNaN(cashOut)){
        alert('Failed to cash out!');
        return;
    };

    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        <h4 text-2xl>Cash out</h4>
        <p>${cashOut} TK withdraw. New balance: ${newBalance}</p>
        `
        document.getElementById('transaction-container').appendChild(div);
        
    }
    else{
        alert('No money for you....DGM.')
    }
})