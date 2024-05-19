const delayedMessage = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This message is shown after 2 seconds");
    }, 2000);
});

delayedMessage
    .then((message) => {
        console.log(message); 
    })
    .catch((error) => {
        console.log(error);
    });


const fetchDataFromAPI = () => {
    return new Promise((resolve, reject) => {
            const data = { id: 1, name: 'John', age: 30 };
            resolve(data); 
    });
};

fetchDataFromAPI()
    .then((data) => {
        console.log("Podaci dobijeni iz API-ja:", data);
    })
    .catch((error) => {
        console.error("Greška prilikom dobijanja podataka iz API-ja:", error);
    });
///////////////////////////

const successfulPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Operation successful!");
    }, 2000);
});

async function fetchData() {
    try {
        const result = await successfulPromise;
        console.log("Success:", result); 
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchData();

