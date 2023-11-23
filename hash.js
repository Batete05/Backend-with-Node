// const bcrypt=require("bcrypt");

// let password="mysecretkey1234";

// bcrypt.genSalt(15, (err, salt)=>{
//     bcrypt.hash(password, salt,(err, hash)=>{
//         console.log(hash)
//     })
// })

// const bcrypt=require("bcrypt")
// const password="batete";

//  bcrypt.genSalt(15,(err,salt)=>{
//  bcrypt.hash(password,salt,(err,hash)=>{
// console.log(hash)
//  })
// })
const bcrypt=require("bcrypt")
const password="batete"

bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt,(err,hash)=>{
        console.log(hash)
    })
})