// Add money to the account
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault(); // prevent page reload after form submit

    // step-2: get money to be added to the account
    const addMoneyInput = parseInt(document.getElementById('input-add-money').value);
    console.log(addMoneyInput);
    
    // step-3: get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);
    
    // step-4: verify PIN number
    // wrong way to validate pin number
    if(pinNumberInput === '1234'){
        console.log('adding money to the account');
        
        // get the current balance
        const balance = parseInt(document.getElementById('account-balance').innerText);
        console.log(balance);

        // add addMoneyInput with balance
        const newBalance = balance + addMoneyInput;
        console.log(newBalance);
        
        // update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        console.log('Failed to ad money! Please try again.');
    }
})