/**
 * Common shared functions here
 */

function getInputFieldValueById(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}

function getTextFieldValueById(id){
    const textValue = parseFloat(document.getElementById(id).innerText);
    return textValue;
}

function showSectionById(id){
    // hide all the sections
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('transaction-history').classList.add('hidden')
    
    // Show the section with provided ID
    document.getElementById(id).classList.remove('hidden')
}
