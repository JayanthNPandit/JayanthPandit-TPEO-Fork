// p1, p2, p3
// arr.forEach(() => p1.then(() => p2).then(() => p3.then()))
// arr.forEach(asynch () => 
// const message = await p1; 
// const message = await p2;
// const message = await p3;  // Same as above but simpler       

const p = new Promise((resolve, reject) => {
    let a = 1
    setTimeout(() => {
        a = 2
    if (a + 1 == 2)
    {
        resolve("Success")
    }
    reject("Failure")
    }, 2000)
});

p.then(message) => {
    console.log("This is in the then " + message)
}

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Something good happens")
    }, 2000);
    reject("Something bad happens")
});

async function waitForPromise() {
    const message = await p;
    console.log("This is in the async function " + message);
    console.log("Hello");
}

try
{
    Promise.all([p, promise2]).then((values) => console.log(values)
}
catch (error)
{

}

waitForPromise()

Promise.all([p, promise2])
.then((values) => values.forEach(e => {console.log(e)}))
.catch((error) => console.log(error)    
.finally();

Promise.all([p, promise2]).then((values) => console.log(values));