// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(n_string) {
    n_string = n_string.split("");

    zero_count = 0;
    for(n of n_string){
        if(parseInt(n) === 0){
            zero_count += 1;
        }
    }
    return zero_count;
}

let b_string = count_zero("100001");
console.log(b_string);
