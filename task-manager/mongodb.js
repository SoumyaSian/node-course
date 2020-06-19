//CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID();
// console.log(id.id.length)
// console.log(id.toHexString().length)

// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)
    //To Delete  the fields in the collection
    db.collection('users').deleteMany({
        age: 22
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    //To Update the Documents
    //    const updatePromise = db.collection('users').updateOne({
    //         _id :new ObjectID("5ee893a76f3f9157209c8177")
    //     },{
    //         $set : {
    //             name : 'Sian'
    //         }
    //     })

    //     updatePromise.then((result) => {
    //         console.log(result)
    //     }).catch((error) =>{
    //         console.log(error)

    //     })


    // //Chaining the promise for above defined updatePromise
    // db.collection('users').updateOne({
    //     _id: new ObjectID("5eec6f5043aafc3f10ddbdb4")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)

    // })


    //To Read from DB
    // db.collection('users').findOne({ _id: new ObjectID('5ee893a76f3f9157209c8177')},(error,user) =>{
    //     if(error){
    //         return console.log("Unable to fetch")
    //     }

    //     console.log(user)
    // })


    // db.collection('users').find({age:26}).toArray((error,user) => {
    //     console.log(user)
    // })  //doesn't take callback


    // db.collection('users').find({age:26}).count((error,count) => {
    //     console.log(count)
    // }) 
    // db.collection('users').insertOne({
    //     // _id : id,
    //     name : 'Akash',
    //     age : 23
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // //To Created documents in DB
    // db.collection('users').insertMany
    //     ([{
    //         name: 'Soumya',
    //         age: 26
    //     },
    //     {
    //         name: 'Ramya',
    //         age: 25
    //     }], (error, result) => {
    //         if (error) {
    //             return console.log('Unable to insert user')
    //         }

    //         console.log(result.ops)

    //     })


    // db.collection('tasks').findOne({_id : new ObjectID('5ee8966b93c2fc26544e8100')}, (error,tasks) => {
    //     if (error){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(tasks)
    // })

    // db.collection('tasks').find({completed : false}).toArray((err,tasks) => {
    //     if(err){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(tasks)
    // })


    //Using Filter
    // db.collection('tasks').find({}).filter({
    //     completed : false
    // }).toArray((err,task) => {
    //     console.log(task)
    // });

    // db.collection('tasks').find({completed : false}).count((err,count) => {
    //     if(err){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(count)
    // })

    // db.collection('tasks').insertMany([
    //                                 { description: 'Clean the house', completed: true }, 
    //                                 { description: 'Renew inspection', completed: false }, 
    //                                 { description: 'Pot plants', completed: true 
    //                             }],(error,result)=>{
    //                                 if(error){
    //                                     return console.log('Unable to insert tasks')
    //                                 }
    //                                 console.log(result.ops)
    //                             })



    //     //Update many will help us to update more than one fields
    //     db.collection('tasks').updateMany({
    //         completed  :false
    //     },{
    //         $set : {
    //             completed : true
    //         }
    //     }).then((result) => {
    //         console.log(result)
    //     }).catch((err) =>{
    //         console.log(err)
    //     })


    //Delete One helps to delete one field in the collection

    db.collection('tasks')
        .deleteOne({ "description": "Clean the house" })
        .then((result) => { console.log(result) })
        .catch((err) => { console.log(err) })


    console.log('Connected Correctly!')
})