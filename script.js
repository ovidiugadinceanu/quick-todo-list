let btn = document.getElementById("addButton");
// function newTask() {
//   let myValue = document.getElementById("new");
//   let list = document.getElementById("list");
//   let task = document.createElement("div");
//   task.innerHTML = `<span>${myValue.value}</span>
//       <button class="toggleStatus">done</button>`;
//   list.appendChild(task);
//   document.getElementById("new").value = "";
// }
// btn.addEventListener("click", newTask);
btn.addEventListener("click", (event) => {
  let myValue = document.getElementById("new");
  let list = document.getElementById("list");
  if (myValue.value) {
    list.innerHTML += `
    <div>
      <span>${myValue.value}</span>
      <button class="toggleStatus">done</button>
    </div>`;
  } else {
    alert("Empty input");
  }
  for (i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener("click", toggleItemStatus);
  }
  document.getElementById("new").value = "";
});

let allBtns = document.getElementsByClassName("toggleStatus");
function toggleItemStatus(event) {
  if (event.target.parentElement.className === "done") {
    event.target.parentElement.className = "";
    event.target.textContent = "done";
  } else {
    event.target.parentElement.className = "done";
    event.target.textContent = "not done";
  }
}

for (i = 0; i < allBtns.length; i++) {
  allBtns[i].addEventListener("click", toggleItemStatus);
}

let complete = document.getElementById("mark");
function completeAll() {
  for (i = 0; i < list.children.length; i++) {
    if (list.children[i].className === "") {
      list.children[i].className = "done";
      list.children[i].children[1].textContent = "not done";
    }
  }
}
complete.addEventListener("click", completeAll);

let filterInput = document.getElementById("filterBox");
function filterItems(event) {
  let list = document.getElementById("list").children;
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].children[0].textContent);
    console.log(event.target.value);
    if (
      list[i].children[0].textContent
        .toUpperCase()
        .includes(event.target.value.toUpperCase())
      // list.children[i].children[0].textContent.toUpperCase() ===
      // filterInput.value.toUpperCase()
    ) {
      list[i].style = "";
    } else {
      list[i].style = "display:none";
    }
  }
}
filterInput.addEventListener("input", filterItems);
