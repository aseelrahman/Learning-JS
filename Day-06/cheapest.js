const mobiles = [
    {name: 'Samsung', price: 20000, camera: '12mp'},
    {name: 'Xiaomi', price: 25000, camera: '12mp'},
    {name: 'Oppo', price: 23000, camera: '12mp'},
    {name: 'Vivo', price: 80000, camera: '12mp'}
]

function getCheapestPhone (phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price<min.price){
            min = phone;
        }
    }
    return min;
}

const cheap = getCheapestPhone(mobiles);
console.log("Cheapest phone is: ", cheap);
