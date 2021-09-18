const inputField = document.getElementById('input-field')
const namesList = document.getElementById('name-list')
const addButton = document.getElementById('add-button')
const randomButton = document.getElementById('random-button')
const randomNamesList = document.getElementById('random-names')

let namesBank = []
let pairs = {}
let newArray = []



// Grab the value from the input element 
// Assign to variable 

addButton.addEventListener("click", function () {

    const namesValue = inputField.value; 
    namesBank.push(namesValue)
   

    let newNamesList = document.createElement("section");
    newNamesList.innerText = namesValue;
    newNamesList.classList.add("name");


    namesList.appendChild(newNamesList);

// Reset the input field
inputField.value = "";


})



// Randomize the namesBank

randomButton.addEventListener('click', function randomizer () {
        newArray = [];
        for (let i = 0; i < namesBank.length; i++) {
            let randomIndex = -1;
            let attempts = 0;
            while (randomIndex == -1 || randomIndex == i || newArray.indexOf(namesBank[randomIndex]) != -1) {
                randomIndex = Math.floor(Math.random() * namesBank.length);
            attempts++;
            if (attempts >= namesBank.length) {
                randomizer();
                return;
            }
            }

            newArray.push(namesBank[randomIndex])
        }

        displayRandomNames()
    
    });
    



// print in html
function displayRandomNames () {
    let randomArray = document.getElementById('random-names');
            newArray.forEach((name) => {
                let randomNameSection = document.createElement("section");
                randomNameSection.innerText = name; 
                randomArray.appendChild(randomNameSection);
            });
        }









      // Option 2 for randomizing
        //    // function randomizer (array) {
    //     let newPosition, 
    //             temporary; 
    //          for (var i = array.length - 1; i > 0; i--) {
    //                 newPosition = Math.floor(Math.random() * (i + 1));
    //                 temporary = array[i];
    //                 array[i] = array[newPosition];
    //                 array[newPosition] = temporary;
    //             }
    //         return array; 
            
    //         }
        















