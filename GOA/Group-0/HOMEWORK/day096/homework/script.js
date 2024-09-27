// 1
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 1 complete");
    }, 2000);
});

myPromise.then((message) => {
    console.log(message);
});

// 2
const task2Promise = new Promise((resolve, reject) => {
    reject("Task 2 failed");
});

task2Promise.catch(error => {
    console.error(error);
});

// 3
const task3 = new Promise((resolve) => {
    resolve(5);
});

// 4
function task4() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("First");
        }, 2000);
    });
}

// 5
function task5() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Task 3 failed");
        }, 2000);
    });
}

// 6
function task6() {
    return new Promise((resolve) => {
        const delay = Math.random() * 4000 + 1000; // 1 to 5 seconds
        setTimeout(() => {
            resolve("Task 1 complete");
        }, delay);
    });
}

// 7
function task7() {
    return new Promise((resolve) => {
        const delay = Math.random() * 2000 + 1000; // 1 to 3 seconds
        setTimeout(() => {
            resolve("First");
        }, delay);
    }).then((msg) => {
        console.log(msg);
        return new Promise((resolve) => {
            const secondDelay = Math.random() * 2000 + 1000; // 1 to 3 seconds
            setTimeout(() => resolve("Second"), secondDelay);
        });
    });
}

// 8
function task8() {
    return new Promise((_, reject) => {
        const delay = Math.random() * 3000 + 1000; // 1 to 4 seconds
        setTimeout(() => {
            reject("Task 3 failed");
        }, delay);
    });
}

// 9
function task9() {
    return new Promise((resolve) => {
        const randomNum = Math.random();
        const delay = Math.random() * 4000 + 1000; // 1 to 5 seconds
        setTimeout(() => {
            if (randomNum > 0.5) {
                resolve("Task 1 complete");
            } else {
                resolve("Task 1 was quick");
            }
        }, delay);
    });
}

// 10
function task10() {
    return new Promise((resolve, reject) => {
        const randomNum = Math.random();
        const delay = Math.random() * 3000 + 1000; // 1 to 4 seconds
        setTimeout(() => {
            if (randomNum < 0.3) {
                reject("Task 3 failed");
            } else {
                resolve("Task 3 complete");
            }
        }, delay);
    });
}

// Execute all tasks
// Task 1
myPromise.then(console.log);

// Task 2
task2Promise.catch(console.log);

// Task 3
task3
    .then((num) => num * 2)
    .then((doubled) => console.log(doubled));

// Task 4
task4().then((msg) => {
    console.log(msg);
    return new Promise((resolve) => setTimeout(() => resolve("Second"), 1000));
}).then(console.log);

// Task 5
task5().catch(console.log);

// Task 6
task6().then(console.log);

// Task 7
task7();

// Task 8
task8().catch(console.log);

// Task 9
task9().then(console.log);

// Task 10
task10().catch(console.log);

// 11
const promise11_1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 1000));
const promise11_2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), 2000));
const promise11_3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3"), 3000));

Promise.all([promise11_1, promise11_2, promise11_3]).then(console.log);

// 12
const promise12_1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1"), Math.random() * 4000 + 1000));
const promise12_2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), Math.random() * 4000 + 1000));
const promise12_3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3"), Math.random() * 4000 + 1000));

Promise.all([promise12_1, promise12_2, promise12_3]).then(console.log);

// 13
const promise13_1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 2000));
const promise13_2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), 2000));
const promise13_3 = new Promise((_, reject) => setTimeout(() => reject("Promise failed"), 2000));

Promise.all([promise13_1, promise13_2, promise13_3])
  .then(console.log)
  .catch(console.log);

// 14
const promise14_1 = new Promise((resolve, reject) => {
    Math.random() > 0.5 ? resolve("Promise 1") : reject("Promise 1 failed");
});
const promise14_2 = new Promise((resolve, reject) => {
    Math.random() > 0.5 ? resolve("Promise 2") : reject("Promise 2 failed");
});
const promise14_3 = new Promise((resolve, reject) => {
    Math.random() > 0.5 ? resolve("Promise 3") : reject("Promise 3 failed");
});

Promise.all([promise14_1, promise14_2, promise14_3])
  .then(console.log)
  .catch(console.log);

// 15
const promise15_1 = new Promise((resolve) => setTimeout(() => resolve(5), Math.random() * 4000 + 1000));
const promise15_2 = new Promise((resolve) => setTimeout(() => resolve(10), Math.random() * 4000 + 1000));
const promise15_3 = new Promise((resolve) => setTimeout(() => resolve(15), Math.random() * 4000 + 1000));

Promise.all([promise15_1, promise15_2, promise15_3])
  .then((results) => {
    const sum = results.reduce((acc, num) => acc + num, 0);
    console.log("Sum:", sum);
  });

// 16
const promise16_1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 1000));
const promise16_2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), 2000));
const promise16_3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3"), 3000));

Promise.race([promise16_1, promise16_2, promise16_3]).then(console.log);

// 17
const promise17_1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1"), Math.random() * 4000 + 1000));
const promise17_2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), Math.random() * 4000 + 1000));
const promise17_3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3"), Math.random() * 4000 + 1000));

Promise.race([promise17_1, promise17_2, promise17_3]).then(console.log);

// 18
const promise18_1 = Promise.resolve("Instant Promise");
const promise18_2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), 2000));
const promise18_3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3"), 3000));

Promise.race([promise18_1, promise18_2, promise18_3]).then(console.log);

// 19
const promise19_1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 2000));
const promise19_2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), 2000));
const promise19_3 = new Promise((_, reject) => setTimeout(() => reject("Promise failed"), 2000));

Promise.race([promise19_1, promise19_2, promise19_3])
  .then(console.log)
  .catch(console.log);

// 20
const promise20_1 = new Promise((resolve) => {
    Math.random() > 0.5 ? resolve("Promise 1") : setTimeout(() => resolve("Promise 1 delayed"), 2000);
});
const promise20_2 = new Promise((resolve) => {
    Math.random() > 0.5 ? resolve("Promise 2") : setTimeout(() => resolve("Promise 2 delayed"), 2000);
});
const promise20_3 = new Promise((resolve) => {
    Math.random() > 0.5 ? resolve("Promise 3") : setTimeout(() => resolve("Promise 3 delayed"), 2000);
});

P
