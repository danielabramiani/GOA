//1

const myPromise = new Promise((resolve, reject)=> {
    setTimeout =(() => {
        resolve("Task 1 complete");
    }, 2000);
});

myPromise.then((message) => {
    console.log(message);
});

//2

const task2Promise = new Promise((resolve, reject) => {
    reject("Task 2 failed");
});

task2Promise.catch(error => {
    console.error(error);
});

//3

