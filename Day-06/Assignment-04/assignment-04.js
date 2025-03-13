
function calculateTax(income, expenses) {

    if(income >= expenses){
        let taxAmount = (income-expenses)* 0.20;
        return taxAmount;
    }
    else{
        return "Invalid Input"
    }
    
}


function sendNotification(email) {
    if(email.includes("@") && email.includes(".")){
        email = email.split("@")
        let greetings = email[0] + " " + "sent you an email form" + " " + email[1];
        return greetings;
    }
    else{
        return "Invalid Email"
    }
}


function checkDigitsInName(name) {
    if(typeof(name) === "string"){
        name = name.split("")
        console.log(name);
        
        let count = 0;
        for(charecter of name){
            if(!isNaN(parseInt(charecter))){
                count += 1;
            }
        }
        if(count > 0){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return 'Invalid Input'
    }
}

let name = checkDigitsInName(123213);
console.log(name);


