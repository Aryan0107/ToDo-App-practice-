let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let task = inp.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let item = document.createElement("li");

    let taskText = document.createElement("span");
    taskText.innerText = task;

    let dltbtn = document.createElement("button");
    dltbtn.innerText = "Delete";
    dltbtn.classList.add("delete");

    item.appendChild(taskText);
    item.appendChild(dltbtn);
    ul.appendChild(item);

    inp.value = "";
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }

    if (event.target.nodeName === "SPAN") {
        event.target.classList.toggle("completed");
    }
});
