//1

const textPromise = new Promise((resolve, reject) => {
    const text = "hello world"; 

    if (text === "hello world") {
        resolve('hello world');
    } else {
        reject('Not hello');
    }
});

textPromise.then(result => {
    console.log(result); 
}).catch(error => {
    console.error(error); 
});


//2

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved after 2 seconds");
    }, 2000);
});

promise2.then(result => {
    console.log(result);
});

//3

const promise3 = new Promise((resolve, reject) => {
    resolve("First");
});
  
promise3.then((result) => {
    return result + " -> Second";
}).then((finalResult) => {
    console.log(finalResult);
});
  

//4

const promise4 = new Promise((resolve, reject) => {
    resolve("Initial");
});
  
promise4.then((result) => {
    console.log("Step 1:", result);
    return result + " processed";
}).then((processedResult) => {
    console.log("Step 2:", processedResult);
});

//5

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Oops! Something went wrong.");
    }, 1000);
});

promise5.catch((error) => {
    console.error("Error:", error);
});

//6

function printMessages() {
    const messages = ["One", "Two", "Three"];
    let delay = 1000; 
    
    messages.forEach((message, index) => {
        setTimeout(() => {
            console.log(message);
        }, delay);
        delay += 1000 * (index + 1);
    });
}
printMessages();

//7
const promise7a = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First message");
    }, 1000);
});
  
const promise7b = promise7a.then((message) => {
    console.log(message);
    return new Promise((resolve, reject) => 
    {setTimeout(() => {
        resolve("Second message");
    }, 2000);
});
});
  
promise7b.then((message) => {
    console.log(message);
});
  
//8
const promise8 = new Promise((resolve, reject) => {
    const success = true; 
    setTimeout(() => {
      if (success) {
        resolve("Success!");
      } else {
        reject("Failure occurred.");
      }
    }, 1500);
});
  
promise8.then((result) => {
    console.log("Promise succeeded:", result);
}).catch((error) => {
    console.error("Promise failed:", error);
});
  
//9
const promise9 = new Promise((resolve, reject) => {
    resolve("Resolved message");
});
  
promise9.then((message) => {
    console.log(message);
});
  
//10
const promise10 = new Promise((resolve, reject) => {
    resolve("Start");
});