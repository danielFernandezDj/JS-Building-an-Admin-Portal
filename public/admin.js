/*
*/ 
// Your Code Here
async function changeBookName() {
    let response = await fetch('http://localhost:3001/updateBook ', {
        method: 'PATCH',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'id': 3,
            'title': "The Annals of Arathrae",
        }),
    })
    let result = await response.json()
    console.log(result)
}

changeBookName()

