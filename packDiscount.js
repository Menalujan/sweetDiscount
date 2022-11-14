import products from './data.json' assert {type: 'json'};

const pack = ['12', '21', '37']

const packPrice = 14

const newProducts = []

var packTotal = 0

function packDiscount(productOrderItems, productOrderPrices, productOrderQuantity, totalNoDiscount) {
    const isPack = productOrderItems.sort().toString()
        
    if (isPack === pack.toString()) {

        const a= productOrderQuantity[0]
        const b= productOrderQuantity[1]
        const c= productOrderQuantity[2]
       
        const packNumber = Math.min(a,b,c) //find the lower number to know how many packs discount to apply

        packTotal = packPrice * packNumber //price of the packs

       
    }
   
    console.log('Your Pack Discount is:' + packTotal + '€');

    const finalPrice = totalNoDiscount - packTotal

    console.log('Your New Total is: '+ finalPrice + '€');
    
}

export { packDiscount, pack, packPrice };