// Greeting based on time of day
const userTime = new Date();
console.log(userTime.getHours());
var greeting = document.getElementById('greeting');
function greetingUpdate(userTime){
if (userTime.getHours() >= 20) {
console.log('Good Night,');
greeting.innerHTML = 'Good Night,';
} else if (userTime.getHours() < 12 && userTime.getHours() >= 6) {
console.log('Good Morning,');
greeting.innerHTML = 'Good Morning,';;
} else if (userTime.getHours() >= 15 && userTime.getHours < 20){
console.log('Good Evening');
greeting.innerHTML = 'Good Evening';
} else {
    console.log('Good Afternoon')
    greeting.innerHTML = 'Good Afternoon,'
}
}

greetingUpdate(userTime);

// Add task 
const addBtn = document.getElementById('addItemBtn');
addBtn.addEventListener('click', addListItem);
var listContainer = document.querySelector('.todoList');

function addListItem() {
     console.log('Button was clicked!');
     
     // on click add current text value of input, class, button and text div
     // create elements for newest list items
     var listItem = document.createElement('li');
     var listItemTxt = document.createElement('div');
     var listItemBtn = document.createElement('button');

     // input forum text
     var listInput = document.getElementById('addItemTxt').value;
     var listInputTextBox = document.getElementById('addItemTxt');

    // Setup of variables
     listItemTxt.innerHTML = `${listInput}`;
     listItemTxt.className = "currentItemTxt";
     listItem.className = "currentItem";
     listItemBtn.className = "finishItemBtn";
     listItemBtn.innerHTML = 'x';


     // check if user inputted a valid value then append them 
     if (listInput == "") {
         return console.log('The input was left empty...!')
     } else {
        listContainer.appendChild(listItem);
        listContainer.lastElementChild.appendChild(listItemBtn);
        listContainer.lastElementChild.appendChild(listItemTxt);
        listItemBtn.addEventListener('click', deleteListItem);
     }
}

function deleteListItem(){
this.parentNode.remove(this)
}