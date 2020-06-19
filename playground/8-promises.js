const doWorkWithPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        // resolve([7,4,1])
        reject('THings went wrong')
    },2000)
})

//then runs only when promise resolves
doWorkWithPromise.then((result) =>{
    console.log("Success!! ",result)
}).catch((err) => {
    console.log('Error!',err)
})