function greet(name = 'World', ...languages) {
    console.log(`Hello, ${name}!`);
}

 const name = "you have " +"friends"
 console.log( "8 ${name}") ;




 const add=(a,b)=>a+b;
add(3,4)
console.log(add(5,6))


const obj = {
    myname: "muskan",
    Gender: "female",
    code: "+92",
    age: "22"

}

const obj1 = obj;
obj1.age = "23";
console.log(obj1);
console.log(obj);
console.log(obj1);


// obj = [obj1];
// console.log(obj1.name);

// const {myname,age} = obj1;
//  console.log(obj1);


const numbers = [1, 2, 3];
for (const num of numbers) {
console.log(num);
}




console.log('Starting setTimeout example...');
setTimeout(() => {
console.log('This message will be displayed after 10 seconds.');
}, 10000); // 2000 milliseconds = 2 seconds
console.log('setTimeout example scheduled.');


function getData() {
    return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    // Simulating successful completion
    resolve(data);
        // resolve(reject({"messgae is being rejectesd"}));

    // Simulating failure
    // reject(new Error('Failed to fetch data'));
    }, 2000); // Simulating a delay of 2 seconds
    });
    }
    // Consuming the Promise
    getData().then(data => {
    console.log('Data received:', data);
    })
    .catch(error => {
    console.error('Error:', error.message);
    });


    const  str = getData();
    console.log(str);



    function generateRandomNumber() {
        return new Promise((resolve, reject) => {
          const randomNumber = Math.random(); 
          if (randomNumber > 0.5) {
            resolve(randomNumber); 
          } else {
            reject("Random number less than or equal to 0.5"); 
          }
        });
      }
      
      generateRandomNumber()   .then(randomNumber => {
          console.log("Generated number:", randomNumber);
        })
        .catch(error => {
          console.error("Error:", error);
        });
      
 
        const getdata = new Promise((resolve, reject) => {
            console.log("in promise body");
            resolve("I am resolved output");
        });
        
        getdata.then(data => {
            console.log(data);
        }).catch(error => {
            console.error(error);
        });
        

        let count = 0;
 const intervalId = setInterval(() => {
 count++;
 console.log(`Interval count: ${count}`);
 if (count === 5) {
 clearInterval(intervalId); // Stop the interval after 5 iterations
 console.log('Interval stopped after 5 iterations.');
 }
 }, 1000); // 1000 milliseconds = 1 second
 console.log('setInterval example started.');





  // Storing data in Local Storage
  localStorage.setItem('username', 'john_doe');
  localStorage.setItem('isLoggedIn', true);
  // Retrieving data from Local Storage
  const username = localStorage.getItem('username');
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  console.log('Username:', username);
  console.log('Is Logged In:', isLoggedIn);
  // Updating data in Local Storage
  localStorage.setItem('isLoggedIn', false);
  // Removing data from Local Storage
  localStorage.removeItem('username');
  // Clearing all data from Local Storage
  localStorage.clear();

 fetch('https://jsonplaceholder.typicode.com/users')
 .then(response => {
 // Check if the response is successful (status code in the range 200-299)
 if (!response.ok) {
 throw new Error('Network response was not ok');
 }
 // Parse the JSON response
 return response.json();
 })
 .then(data => {
 // Log the fetched user data
 console.log('Fetched user data:', data);
 })
 .catch(error => {
 // Handle any errors that occurred during the fetch operation
 console.error('Error fetching user data:', error);
 });



















