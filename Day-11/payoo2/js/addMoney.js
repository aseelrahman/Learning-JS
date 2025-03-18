console.log('add money loaded');
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    console.log('add money button clicked');
    // getInputFieldValueById();
    
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    console.log('add money value', addMoney);
    console.log('PIN: ', pinNumber);
    
})
