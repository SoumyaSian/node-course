// setTimeout(()=>{
//     console.log("2 seconds later");
// },2000)

// const names = ["Soumya","Sian","Akash","Vish"]
// const shortNames = names.filter((name)=>{
//     return name.length  <= 4
// });

// const geocode = (address, callback) => {
//     setTimeout(()=>{
//         const data = {
//             longitude : 0,
//             latitude : 0
//         }
//         callback(data) ;
//     },2000)
// }

// geocode('Pune',(data)=>{
//     console.log(data)
// })


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!


// const add = (x, y, callback) => {
//     setTimeout(() => {

//         const sum = x + y;
//         callback(sum);

//     }, 2000)

// }

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })



const doWorkWithCallback = (callback) =>{
    setTimeout(() => {
        // callback('This is an error!!',undefined)
        callback(undefined,[1,4,7])
    },2000)
}


doWorkWithCallback((error,result) => {
    if(error){
        return console.log(error)
    }
    console.log(result)
})