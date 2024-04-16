const getUser = () => fetch('https://jsonplaceholder.typicode.com/users').then((apiResult) => apiResult.json()).then((data) => console.log("User data: ", data))

getUser()