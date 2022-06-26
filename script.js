// 'https://jsonplaceholder.typicode.com/posts' (api)
//  xhr / http request 
//  asynchronous javaScript(promises , async await)

// promise => (reject, resolve)
// whichever fn is asynchronous , is of type promise => (resolve) * .then(data)  , (reject) * .catch(err)

// js api
// asynchronous
// Promise (reject, resolve) => (resolve) * .then(data)  , (reject) * .catch(err)

let readable;
let cardcontainer = document.querySelector("#cardcontainer");
let searchString = document.querySelector("#searchInp");
let btn = document.querySelector("#btn");
let title = document.querySelector("#title-text");
let body = document.querySelector("#body-text");
let add = document.querySelector("#add");

fetch('https://jsonplaceholder.typicode.com/posts')
.then(data => data.json())  // is in the form of unreadable blob
.then(readableBlob => {
    readable = readableBlob   
    uiMaker(readable)
})

// (Read) read
function uiMaker(arr){ 
    arr.forEach((data, index) =>{
        cardcontainer.innerHTML += `
           <div class="card p-3 w-25">
            <div class="circle bg-warning" data-index=${index} id="cross"> X </div>
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
}

// (Update/Delete) delete
cardcontainer.addEventListener("click", function(dets){
    if(dets.target.textContent.includes('X') && dets.target.dataset.index){
        readable.splice(dets.target.dataset.index, 1);
        cardcontainer.innerHTML = '';    
        uiMaker(readable)
    }   
})

// Search
searchString.addEventListener('change', (detail) =>{
    let filteredArray = readable.filter(data => data.title.includes(detail.target.value));
    cardcontainer.innerHTML = '';
    readable = [...filteredArray]
    uiMaker(readable)
})

// (Create) Add
btn.addEventListener('click', (detail) =>{
    let obj =   {
        id : add.value,
        title : title.value,
        body : body.value
    }

    readable.map(data =>{
        if(data.id >= add.value){
            data.id = data.id + 1
        }
    })

    readable.splice(add.value - 1, 0, obj);
    cardcontainer.innerHTML = '';
    uiMaker(readable)
})


// 7be310716552aebb333902bfd1dc2afa

// https:api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// let key = 'https:api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
// let cityName = 'Satna' ;
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7be310716552aebb333902bfd1dc2afa`)
// .then(dtaa => dtaa.json())
// .then(res => console.log( " :: res ::" , res))

//function fn(a,b){} //a,b => parameters
//fn(4,5) // 4,5 => arguments

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
