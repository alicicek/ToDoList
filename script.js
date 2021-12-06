let items = [];

const addItem = (ev)=>{
    ev.preventDefault(); //to stop form submitting
    let item = {
        item: document.getElementById('toDoItem').value
    }

    items.push(item);
    document.forms[0].reset(); //clear the form for the next entries
    
    //saving to localStorage
    // localStorage.setItem('ToDoList', JSON.stringify(items) );
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addItem);

    let toDoList = document.querySelector('.toDoList');
    let toDoItems = "";

    for (item of items) {
        //console.log(people[i].name);
        toDoList += "<li>" + item.name + "</li>";
    }

    toDoList.innerHTML = toDoItems;
});