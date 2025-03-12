const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function sName(names){
    let smallName = names[0];

    for(let name of names){
        if(name.length < smallName.length){
            smallName = name;
        }
    }
    return smallName;
}

const smallName = sName(heights2);
console.log(smallName);
