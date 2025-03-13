
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


function calculateFinalScore(obj) {
    const testScore = obj.testScore;
    const schoolGrade = obj.schoolGrade;
    const parentProfession = obj.isFFamily;

    let totalScore = 0;

    if(testScore <= 50 && schoolGrade <= 30 && parentProfession === true){
        totalScore = totalScore + testScore + schoolGrade + 20;
        if(totalScore >= 80){
            return true;
        }
        else{
            return false;
        }
        
    }
    else if(testScore <= 50 && schoolGrade <= 30 && parentProfession === false){
        totalScore = totalScore + testScore + schoolGrade;
        if(totalScore >= 80){
            return true;
        }
        else{
            return false;
        }
    }
   
    else{
        return "Invalid Input"
    }
}



function  waitingTime(waitingTimes  , serialNumber) {

    if(Array.isArray(waitingTimes) && !isNaN(serialNumber) ){
        let totalTime = 0;
    
        for(time of waitingTimes){
            totalTime += time;
        }
        let averageTime = Math.round(totalTime/waitingTimes.length);
        let waitTime = averageTime * (serialNumber - waitingTimes.length -1);
        return waitTime;
    }
    else{
        return 'Invalid Input'
    }
   
}

let asd = waitingTime([13, 2, 6, 7, 10], 6);
console.log(asd);

