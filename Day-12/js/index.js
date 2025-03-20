document.getElementById('btn-donation-1').addEventListener('click', function(){
    
    const donationValue = getInputFieldById('donation-value-1')
    const balance = parseFloat(document.getElementById('account-balance').innerText);
    const donationBalance1 = parseFloat(document.getElementById('collected-donation-1').innerText);

    if(!isNaN(donationValue)){
        const newBalance = balance - donationValue;
        const donation1 = donationBalance1 + donationValue;
    
        document.getElementById('collected-donation-1').innerText = donation1;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Invalid input')
    }
});



