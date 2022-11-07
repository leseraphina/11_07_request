// fetch('https://www.google.com')
//   // .than((response) =>{return response.text()})
//   .then((response) =>response.text())
//   .then((result) => {console.log(result)})

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => response.text() )
.then((result) =>{console.log(result)})
