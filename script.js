// 'https://jsonplaceholder.typicode.com/posts' (api)
//  xhr / http request 
//  asynchronous javaScript(promises , async await)


// promise => (reject, resolve)
// whichever fn is asynchronous , is of type promise => (resolve) * .then(data)  , (reject) * .catch(err)

// js api
// asynchronous
// Promise (reject, resolve) => (resolve) * .then(data)  , (reject) * .catch(err)

let cardcontainer = document.querySelector("#cardcontainer");


fetch('https://jsonplaceholder.typicode.com/posts')
.then(data => data.json())  // is in the form of unreadable blob
.then(readableBlob => {

    readableBlob.forEach(data  =>{
        
        cardcontainer.innerHTML += `
           <div class="card p-3 w-25">
                ${data.id}
                <div class="card-title">
                    ${data.title}
                </div>
                <div class="card-body"> 
                    ${data.body}
                </div>
            </div> 
        `
    })
})




// console.log(" ::: result ::: ", result);
// hw. => what is synchronous and asynchronous js (behaviour) ? (Promise)
// Callback function => are those functions they are automatically get called upon the calling of anyOther function ,(also called as anonymous functions)
// Typescript ?
// functionTypes *



// one ,function Statement
// function datas(){

// }

// two , function Expression
// let data = function(data){
    
// }

// three ,anonymous fn
// function(){
// }


// arrow function ()
// let data = (data) => {}

// 1 (frontend) => form =>(data sent)
// 2 (backend) => data is caught on the route
// 3 (backend) => respose is sent back according to the request
// 4 (frontend) => get the data and show it
