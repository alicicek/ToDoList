// fetch('data.json')
//   .then(response => {
//     return response.json();
//   })
//   .then(function (data){
//     appendData(data);
//   })
//   .catch(function (err) {
//     console.log('error: ' + err);
//   });


let items = [];

const addItem = (ev)=>{
    ev.preventDefault();
    let item = {
        item: document.getElementById('item').value
    }

    for(let i = 0; i < items.length; i++){

      var container = document.getElementById("displayData");

      var listDiv = document.createElement("listItem");
      var itemDiv = document.createElement("item");

      listDiv.classList.add("listBox");
      itemDiv.classList.add("itemField");
      
      listDiv.innerHTML = items[i].item;
    
      listDiv.appendChild(itemDiv);
      container.appendChild(listDiv);

    }

    items.push(item);
    document.forms[0].reset();

    // console.warn('added', {items});
    // let pre = document.querySelector('#msg pre');
    // pre.textContent = '\n' + JSON.stringify(items, '\t', 2)

}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addItem);
});