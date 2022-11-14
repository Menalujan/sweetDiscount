const productTwoForOne = '12'

var newTotal = 0

function twoForOneDiscount (productOrderItems, productOrderPrices, productOrderQuantity, totalNoDiscount) {

    const productIndex = productOrderItems.indexOf(productTwoForOne)
    
    if (productIndex != -1) { 

        const productPrice = productOrderPrices[productIndex]

        const productQuantity =  productOrderQuantity[productIndex]

        if(productQuantity % 2 == 0) { //if the remainder of the product quantity is = 0, the quantity number is even
   
            const twoForOnePrice = productPrice / 2 //then we can obtain the total price of the items and divide it in 2 to obtain the 2 for 1 price
    
            console.log("You get a two for one discount of " + twoForOnePrice + "€");
    
            newTotal = totalNoDiscount - twoForOnePrice
    
            console.log("Your New total is: " + newTotal + "€");
    
        } else { //If the reaminder is !=0 the product quantity is odd
    
            const numberEvenProducts = productQuantity-1 //we subtract 1 to obtain an even number to make the discount

            const itemPrice = productPrice / productQuantity
    
            const numbeEvenProductsPrice = productPrice - itemPrice
    
            const twoForOnePrice = numbeEvenProductsPrice / 2 //apply the discount only to the even number of items
    
            console.log("You get a two for one discount of " + twoForOnePrice + "€");

            newTotal = totalNoDiscount - twoForOnePrice
    
            console.log("Your New total is: " + newTotal + "€");
    
        }
        
    }


}

export { twoForOneDiscount, productTwoForOne, newTotal };

