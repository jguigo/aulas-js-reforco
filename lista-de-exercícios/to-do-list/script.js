let texto = document.querySelector("#input");
let btnAdd = document.querySelector("#add");
let pai = document.querySelector("#ToDoContainer");

const lista = [
//    {
//       id: 1,
//       name: "name",
//    },
//    {
//       id: 2,
//       name: "todo",
//    },
];

btnAdd.addEventListener("click",function (e){
    e.preventDefault();
    const newItem = texto.value;
    if ((newItem.value = "" || newItem === null)) return;
    const list = createList(newItem);
    texto.value = null;
    lista.push(list);
    
    render();
});

function createList(name) {
    return {
        id: Date.now().toString(), name: name
    }
}

function render() {
    clearElement(pai);
    lista.forEach((a) => {
      const item = document.createElement("li");
      item.classList.add("item");
      item.innerText = a.name;
      pai.appendChild(item);
   });
}

function clearElement(element){
    while (element.firstChild){
        element.removeChild(element.firstChild)
    }
}
