const moneyDiscount = 5

const minimumOrder = 20

function saveDiscount(totalNoDiscount, minimumOrder, moneyDiscount) {
    if (totalNoDiscount >= minimumOrder) { 
        const totalDiscount = totalNoDiscount - moneyDiscount
        console.log('You have a '+ moneyDiscount+'€ discount. New Total:'+ totalDiscount+'€')
    } else {
        console.log('You need to spend '+(minimumOrder-totalNoDiscount) + '€ more to have a '+ moneyDiscount+'€ discount' )
    }
}  

export { saveDiscount, minimumOrder, moneyDiscount };