//codewars

//1

async function sayJoke(apiUrl, jokeId){
  const response = await fetch(apiUrl);
  const json = await response.json();

  if (!json.hasProperty("jokes")){
    throw new Error(`No jokes at url: ${apiUrl}`);
  }

  const jokes = json.jokes.filter(joke => ! usedJokeIds.includes(joke.id));

  if(jokes.length === 0){
    throw new Error(`No more jokes avaliable at url: ${apiUrl}`);
  }
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const selectedjokes = availableJokes[randomIndex];

  usedJokeIds.push(selectedjokes.id);
}

//classwork from mentor

//Create a simple promise that resolves with a message "Hello, World!" after 2 seconds.
//Handling Rejection

const myPromise = new Promise((resolve, reject)=> {
    setTimeout =(() => {
        resolve("Hello, World");
    }, 2000);
});

myPromise.then((message) => {
    console.log(message);
});

//2

//Create a promise that rejects with an error message "Something went wrong!" after 3 seconds. Handle the rejection using .catch().
//Chaining Promises

const hePromise = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        reject("Something went wrong!");
    }, 3000);
});

myPromise
.catch(error =>{
    console.log("Error", error);
    return "Recoverd from error";
})
.then(result => {
    console.log("Result after recovery:", result)
})

//3


//croCode

//1

const randomPromise = newPromise((resolve, reject) => {
    setTimeout(() => {
        const answer = Math.random() > 0.5;

        if(answer){
            resolve("Hello World");
        }else{
            reject("Error occurred");
        }
    }, 2000);
});

randomPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

//2

const value = 5;

function double(result){
    return new Promise(function(resolve){
        resolve(result * 2);
    });
}

function addTen(result){
    return new Promise(function(resolve){
        resolve(result + 10);
    });
}

function multiplyByThree(result){
    return new Promise(function(resolve){
        resolve(result * 3);
    });
}

double(value)
  .then(addTen)
  .then(multiplyByThree)
  .then((result) => {
    console.log(result);
  });

//3

const delays = [800, 1200, 1000];

function fetch (url, delay){
    return new Promise(resolve => setTimeout(() => resolve(`Data from ${url}`), delay));
}

(async () =>{
    try{
        const urls = ["https://www.crocoder.dev/blog/promises-exercises/, https://www.crocoder.dev/blog/promises-exercises/, https://www.crocoder.dev/blog/promises-exercises/"];
        const promise = urls.map((url, index) => fetch(url, delays[index]));
        const response = await Promise.race(promise);
        console.log("first data:", response);
    } catch(error){
        console.error("error fetch", error);
    }
}) ();

//4
//can`t
// function createCancellationToken() {
//     let cancel;
//     const token = new Promise((_, reject) => {
//         cancel = () => reject(new Error('Cancelled'));
//     });
//     return { token, cancel };
// }

// const { token, cancel } = createCancellationToken();

// function data(cancellationtoken)
// const fetchPromise = fetchData(token);

// // Simulate user cancellation after 1.5 seconds
// setTimeout(() => {
//     cancel();
// }, 1500);

// fetchPromise
//     .then(data => console.log(data))
//     .catch(error => console.error(error.message));