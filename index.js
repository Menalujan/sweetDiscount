import products from './data.json' assert {type: 'json'};
import { twoForOneDiscount, newTotal } from "./twoForOneDiscount.js";
import { saveDiscount, minimumOrder, moneyDiscount } from "./saveDiscount.js";
import { packDiscount } from "./packDiscount.js";

//to make an order please write the product number and quantity separated by a + inside " ", e.g: ['12+5', '37+3', '21+1']
const order = ['37+3', '12+3', '21+2']

const productOrderPrices = []

const productOrderItems = []

const productOrderQuantity = []

for (let i = 0; i < order.length; i++) {
    
    const productOrder = order[i].split('+')

    const product = products.find(element => element.Number === productOrder[0])

    if (product) {

        const productPrice = parseFloat(product.Price.split('€')[0]) * productOrder[1]

        productOrderPrices.push(productPrice)

        productOrderItems.push(productOrder[0])     

        productOrderQuantity.push(productOrder[1])         

    } else {

        console.log(productOrder[0] +' This product does not exists')

    }
    
} 



const totalNoDiscount = productOrderPrices.reduce((a, b) => a + b, 0)

console.log('Total price: ', totalNoDiscount+'€')

twoForOneDiscount(productOrderItems, productOrderPrices, productOrderQuantity, totalNoDiscount) 

saveDiscount(newTotal, minimumOrder, moneyDiscount) 

//Please comment twoForOneDiscount and saveDiscount to apply the packDiscount
//uncomment the next line to apply
/* packDiscount(productOrderItems, productOrderPrices, productOrderQuantity, totalNoDiscount) */


