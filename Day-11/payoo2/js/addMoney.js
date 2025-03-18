document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    console.log('add money button clicked');
    // getInputFieldValueById();
    
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');

    // Wrong way to verify

    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;

        // add to transaction history

        const p = document.createElement('p')
        p.innerText = `Added Money: ${addMoney} TK. New Balance ${newBalance}`;
        console.log(p);
        
        document.getElementById('transaction-container').appendChild(p);

        
        document.getElementById('account-balance').innerText = newBalance;
        
    }
    else{
        alert('Failed to add the money.')
    }
    
})
