//Object property Shorthand

const name = 'Soumya'
const userAge = 26

const user = {
    name,
    age: userAge,
    location: 'Pune'
}

console.log(user)

//Object destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// // const {label, stock,rating} = product
// // const {label : productLabel ,stock, rating} = product //Rename the product property
// const {label,stock,rating = 4.3} = product //if property undefined in the object then we can give default value in the destructuring
// console.log(label)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock = 0 } = {} ) => {
    //assigning { label, stock } = {} will give the default params when nothing product object is undefined
    console.log(type, label, stock)
}

transaction('order', product)