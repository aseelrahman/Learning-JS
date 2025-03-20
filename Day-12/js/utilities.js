function getInputFieldById (id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}

function showSectionById(id){
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
    
    document.getElementById(id).classList.remove('hidden');
}