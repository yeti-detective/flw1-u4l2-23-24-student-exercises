let para = document.querySelector("p")
let button = document.querySelector("button")
let catFacts;

// fetch the cat facts when the document loads
// instead of every time the user clicks the button
document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch('/db.json');
    const dbData = await response.json();

    catFacts = dbData.facts
})

button.addEventListener('click', async function() {


// 1. Create a fetch request accessing the db.json file
  // const response = await fetch('/db.json');

    
// 2. Use the .then method and convert the response to JSON
  // const dbData = await response.json();


// 3. Use a second .then method to access the data property of the JSON.
  // not necessary
// In the body of the second .then method:
    // 4. Using dot notation, store the facts of the data in a variable called 'catFacts'.
    // const {facts: catFacts} = dbData;
    // 5. Uncomment the randomFact variable.
  
    let randomFact = catFacts[Math.floor(Math.random() * catFacts.length)].detail;

    // 6. Select the para variable and update the innerHTML property to the randomFact variable.
    para.innerText = randomFact;
      

});