//promise creation
const promise1 = new Promise(function(resolve, reject){
    //Do async task such as crypto, networking calls
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    }, 1000)
})

promise1.then(function()
{
    console.log("here promise consumed");
})

//method 2 to create promised, without using un necessary variables
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async task 2 resolves");
})

//parameter inside resolve()
const Promise3 = new Promise(function(resolve, reject){
    resolve({username: "samiksha", loggedIn : 0})
})
Promise3.then(function(data){console.log(data)})

//reject

const Promise4 = new Promise(function(resolve, reject){
    const error = false; //check doing true here
    if(!error)
    {
        resolve({username: "sam", prn : "124b1f077"});
    }
    else{
        reject("error: something went wrong;")
    }
})

Promise4
.then((user)=>{
    return user.username
})
.then((username) => console.log(username))
.catch((error) => console.log(error))
.finally(() => {console.log("The promise is either resolved or rejected promsie 4")})


// using async await try catch to resolve errors gracefully
const Promise5 = new Promise(function(resolve, reject){
    const error = false;  //check doing false here
    if(!error)
    {
        resolve({username: "sam", prn : "124b1f077"});
    }
    else{
        reject("error from promise 5: something went wrong;")
    }
})

async function consumePromise5(){
    try{
        const response = await Promise5;
    console.log(response);
    }
    catch(error){
        console.log(error); //gracefully handled
        
    }
}
consumePromise5();


//fetching an api

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error)
//     {
//         console.log("E: for getAllUsers", error)
//     }
// }

// getAllUsers()

//same above thing using thenables i.e chaining then

fetch("https://jsonplaceholder.typicode.com/users")
.then( (response_from_fetch) => {
    return response_from_fetch.json(); //make sure to use .json() brackets 
} )
.then( (response_from_then) => {
    console.log(response_from_then);
} )
.catch( (error)=>console.log("E: Error from fetching api") )