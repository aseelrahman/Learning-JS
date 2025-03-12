const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones){
    let totalPhonePrice = 0;

    for(model of phones){
        totalPhonePrice += model.price;
    }
    let averagePhonePrice = totalPhonePrice/phones.length;

    return averagePhonePrice;
}

const averagePrice = findAveragePhonePrice(phones);
console.log(averagePrice);
