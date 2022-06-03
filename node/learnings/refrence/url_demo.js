const url = require('url')

const myUrl = new URL('https://mywebsite.com/hello.html?id=100&status=active')

// Serialzaed URL
console.log(myUrl.href);
console.log(myUrl.toString())

// Host (root domain)
console.log(myUrl.host);

// Hostname 
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

//Serialized  quarey
console.log(myUrl.searchParams);

//Add prams
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams)

// Loop through Params
myUrl.searchParams.forEach((value, names) => console.log(`${names}: ${value}`))