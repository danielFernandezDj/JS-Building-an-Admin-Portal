// ! Testing the Server.
// async function changeBookName() {
//     let response = await fetch('http://localhost:3001/updateBook ', {
//         method: 'PATCH',
//         headers: { 
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             'id': 1,
//         }),
//     })
//     let result = await response.json()
//     console.log(result)
// }
// changeBookName()

/* //! Part 3. Deliverables
// Using the API documentation as a guide for making fetch requests 
// and what you've learned about the DOM throughout this course, write 
// code in public/admin.js to fulfill the following deliverables:
 
// Retrieve a list of books from the server.
// Display a list of book titles to the admin.
// Place a text input next to each book title.
// Give each text input a value: the quantity of the associated book.
// Place a submit button next to each text input.
// When the submit button is clicked, retrieve the quantity from the 
// associated text input and save the updated quantity to the server.
// The page already includes the CSS framework Bootstrap if you would 
// like to use its classes to style your DOM elements. Just remember 
// this is an admin page that only your friend will see, so try to 
// prioritize functionality, including the bonus deliverables, over 
// styling. When you're finished, the page should work something 
// like this:
*/

//? Test: display a paragraph.
// let rootDiv = document.getElementById('root')

// function newParagraph() {
//     // create our paragraph. 
//     let createNew = document.createElement('p')
//         createNew.style.color = 'blue';
//         createNew.style.border = '1px solid red';
//         createNew.style.margin = '20px';
//         createNew.style.textIndent = '20px';
    
//     // give a name to our paragraph.
//     createNew.textContent = 'hello'
    
//     // append the Child to the div = 'root'.
//     rootDiv.appendChild(createNew);

//     // Log the created paragraph to the console
//     console.log(`${createNew} is working`)
// }

// newParagraph()

// ! Fetch to the API.
async function main() {
    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(bookInputs)

    console.log(books)
}

// ! Input solution.
function bookInputs(book) {
    let rootDiv = document.getElementById('root')
        rootDiv.style.color = 'blue';
        rootDiv.style.border = '1px solid red';
        rootDiv.style.margin = '20px';
        rootDiv.style.textIndent = '20px';

    // create new 'li'.
    let li = document.createElement('li')
    li.textContent = book.title

    // create new 'inputs'. 
    let quantityInput = document.createElement('input')
    quantityInput.value = book.quantity

    // create a save 'button'.
    let saveButton = document.createElement('button')
    saveButton.textContent = 'Save'

    saveButton.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
        })
    })
    
    // append section.
    li.append(quantityInput, saveButton)
    rootDiv.append(li);

    console.log(`${rootDiv} is working`)
}

main()