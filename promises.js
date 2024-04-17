/*
const promiseOne = new Promise(function (resolve,rejected) {
    //if promise completed
    setTimeout(() => {
        console.log("Promise consumed")
        resolve();
    }, 1000);
})

promiseOne.then(()=>{
    console.log("Finally promise resolved");
})

new Promise(function(resolve,rejected){
    //async 
    setTimeout(() => {
        console.log("inside async part");
        resolve({name:"M Danial",email:"m.danial@example.com"})
    }, 1000);
}).then((user)=>{
    console.log("Thenable");
    console.log(user);
})
*/

/*
const promiseThree = new Promise((resolve,rejected)=>{
    //async part
    setTimeout(() => {
        const error = true
        if(!error)
        {
            resolve({name:"M Danial",email:"dani@example.com"})
        }
        else{
            rejected("Error: There exist an error")
        }
    }, 1000);
})
*/

/*
//thenables
promiseThree.then((user)=>{//this part will get the whole object in response and return only name of user
    return user.name
}).then((username)=>{//this part will take the returned user name and display it 
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})
*/

/*
async function promiseResolution() {
    try {
        const response = await promiseThree
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
promiseResolution()
*/


/*
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E:",error);
    }
}
getAllUsers()
*/

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).finally(()=>console.log("The promise either resolved or rejected"))