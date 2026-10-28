const pizzaOrder = new Promise((resolve, reject) => {
    let pizzaReady = true;
    if (pizzaReady) {
        resolve("Pizza is ready!");
    } else {
        reject("Pizza is not ready yet.");
    }
});

pizzaOrder
    .then((result) => {
        console.log(result);
    })

pizzaOrder
    .catch((error) => {
        console.log(error);
    });

const bankBalance= new Promise((resolve, reject) => {
    setTimeout(() => {
        let balance = 50000;
        if (balance > 10000) {
            resolve("You have sufficient balance.");
        } else {
            reject("You do not have sufficient balance.");
        }
    }, 1000);
});

