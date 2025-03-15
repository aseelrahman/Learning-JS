function handleOnClick(){
const handlerStatus = document.getElementById("handler-status");
handlerStatus.innerText = "Handled by function attached on onclick attribute";
};

// Option 2

document.getElementById('event-listener').addEventListener('click', function(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Text updated by add Event listener button.'
})

// option 2; recap

document.getElementById('btn-update').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    
    const p = document.getElementById('input-text-display');
    p.innerText = inputText;
    inputField.value = '';
})

// Comment Area 

document.getElementById('btn-post').addEventListener('click', function(){
    const textInput = document.getElementById('text-input');
    const textInputField = textInput.value;

    const p = document.createElement('p');
    p.innerText = textInputField;

    const commentSection = document.getElementById('comment-container');
    commentSection.appendChild(p)

    textInput.value = "";
})

// More events
// document.getElementById('text-field').addEventListener('focus', function(){
//     console.log('Event triggered inside the input field');
    
// })
// document.getElementById('text-field').addEventListener('blur', function(){
//     console.log('Event triggered inside the input field blur.');
    
// })
// document.getElementById('text-field').addEventListener('keydown', function(event){
//     console.log(event.target.value);
    
// })
document.getElementById('text-field').addEventListener('keyup', function(event){
    console.log(event.target.value);
    
})

document.getElementById('btn-more').addEventListener('mousemove', function(){
    console.log('Event triggred');
    
})

//  Delete confirmation

document.getElementById('text-field-delete').addEventListener('keyup', function(event){
    if(event.target.value === "delete"){
        document.getElementById('btn-delete').removeAttribute('disabled')
    }
    else{
        document.getElementById('btn-delete').setAttribute('disabled', true)
    }
})

document.getElementById('btn-delete').addEventListener('click', function(){
    const secret = document.getElementById('secret-info');
    secret.style.display = 'none'
})
