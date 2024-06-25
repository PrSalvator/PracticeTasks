const url = "https://raw.githubusercontent.com/jakiichu/data/main/data.json";

const response = await fetch(url, {});

if(response.ok){
    const obj = await response.json();
    console.log(`
        Город: ${obj.address.city}
        Улица: ${obj.address.street}
        Дом: ${obj.address.house}

        ${obj.person.lastName} ${obj.person.firstName} купил ${obj.productsOrder.count} 
        штук товаров ${obj.productsOrder.product.name}
        `)
}
else{
    console.log(response.status);
}
