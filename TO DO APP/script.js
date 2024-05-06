(() => {
    let toDoListArray = [];

    const form = document.querySelector(".form");
    const input = form.querySelector(".form_input");
    const button = form.querySelector(".button"); 
    const ul = document.querySelector(".toDoList");

    button.addEventListener("click", (e) => { 
        e.preventDefault();
        let itemId = String(Date.now());
        let toDoItem = input.value;
        addItemToDOM(itemId, toDoItem);
        addItemToArray(itemId, toDoItem);
        input.value = "";
    });

    ul.addEventListener("click", (e) => {
        let id = e.target.getAttribute("data-id");
        if (!id) return;
        removeItemFromDom(id);
        removeItemFromArray(id);
    });

    function addItemToDOM(itemId, toDoItem) {
        const li = document.createElement("li");
        li.setAttribute("data-id", itemId);
        li.innerText = toDoItem;
        ul.appendChild(li);
    }

    function addItemToArray(itemId, toDoItem) {
        toDoListArray.push({ itemId, toDoItem });
        console.log(toDoListArray);
    }

    function removeItemFromDom(id) {
        var li = document.querySelector('[data-id="' + id + '"]');
        ul.removeChild(li);
    }

    function removeItemFromArray(id) {
        toDoListArray = toDoListArray.filter((item) => item.itemId !== id);
        console.log(toDoListArray);
    }
})();
