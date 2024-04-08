/*
3. Deliverables
Using the API documentation as a guide for making fetch requests 
and what you've learned about the DOM throughout this course, write 
code in public/admin.js to fulfill the following deliverables:

Retrieve a list of books from the server.
Display a list of book titles to the admin.
Place a text input next to each book title.
Give each text input a value: the quantity of the associated book.
Place a submit button next to each text input.
When the submit button is clicked, retrieve the quantity from the 
associated text input and save the updated quantity to the server.
The page already includes the CSS framework Bootstrap if you would 
like to use its classes to style your DOM elements. Just remember 
this is an admin page that only your friend will see, so try to 
prioritize functionality, including the bonus deliverables, over 
styling. When you're finished, the page should work something 
like this:
*/ 
//! Your Code Here.
// async function changeBookName() {
//     let response = await fetch('http://localhost:3001/updateBook ', {
//         method: 'PATCH',
//         headers: { 
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             'id': 3,
//             'title': "The Annals of Arathrae",
//         }),
//     })
//     let result = await response.json()
//     console.log(result)
// }

// changeBookName()

//! The solution 3.
let rootDiv = document.getElementById('root')

function newParagraoh() {
    rootDiv.
}