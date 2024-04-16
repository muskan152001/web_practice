 // Storing data in Local Storage
 localStorage.setItem('username', 'Muskan');

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