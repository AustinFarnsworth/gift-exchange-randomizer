const inputField = document.getElementById('input-field')
const namesList = document.getElementById('name-list')
const addButton = document.getElementById('add-button')

let namesBank = []


// Grab the value from the input element 
// Assign to variable 

addButton.addEventListener("click", function () {

    const namesValue = inputField.value; 
    namesBank.push(namesValue)
    // function addNameToList () {
    //    const namesValue = inputField.value; 
    // }

    let newNamesList = document.createElement("section");
    newNamesList.innerText = namesValue;
    newNamesList.classList.add("name");


    namesList.appendChild(newNamesList);

// Reset the input field
inputField.value = "";


})


// console.log(namesBank);

function randomizer (array) {
    let pairs ={}
    

    for (let i = 0; i < array.length; i+=2) {
        if (pairs[array[i]]) {
            if(pairs[array[i]]) {
                if(pairs[array[i]] === pairs[array[i+1]]) {

                }
            }
        } else if (array.length % 2 !== 0 && i === array.length -1) {
            pair[array[i-2]] = array[i-1],array[1]
        } else {
            pairs[array[i]] = array[i + 1]
        }
    } 
}





// const randomize = (arr)=> {
// let pairs = {}
// for(let i = 0; i < arr.length; i+=2){
//   if(pairs[arr[i]]){
//     if(pairs[arr[i]] === pairs[arr[i+1]] ){
//       console.log('hit if condition', pairs)
//     }
//   } else if (arr.length % 2 !== 0 && i === arr.length - 1){
//     pairs[arr[i-2]] = [arr[i-1],arr[i]]
//   }else {
//     pairs[arr[i]] = arr[i+1]
//   }
// }

// for(let key in pairs){
//   if(pairs[key].constructor === Array){
//     console.log(key, pairs[key][0], pairs[key][1])
//   }else {
//   console.log(key, pairs[key])
//   }
// }
// }

// randomize(names)