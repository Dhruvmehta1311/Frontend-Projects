const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearAll = document.getElementById("clear");
const filter = document.getElementById("filter");
const formBtn = itemForm.querySelector("button");
let isEditMode = false;

function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => addItemToDOM(item));
  checkUI();

  // clearAll.style.display = "";
  // filter.style.display = "";
}

function onAddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  if (newItem == "") {
    alert("Enter a Proper Value");
    return;
  }

  if (isEditMode) {
    const itemToEdit = itemList.querySelector(".edit-mode");

    removeItemFromStorage(itemToEdit.textContent);
    itemToEdit.classList.remove("edit-mode");
    itemToEdit.remove();
    isEditMode = false;
  }

  itemInput.value = "";
  addItemToDOM(newItem);
  addItemToStorage(newItem);
  checkUI();

  filter.style.display = "";
  clearAll.style.display = "";
}

function addItemToDOM(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  li.className =
    "flex justify-between text-lg border border-zinc-800 px-2 rounded-md cursor-pointer py-2 text-md font-semibold mb-4 sm:w-2/5 w-full";
  checkUI();

  const button = createButton("remove-item btn-link text-red-700");
  li.appendChild(button);
  itemList.appendChild(li);
}

function getItemsFromStorage() {
  let itemsFromStorage;

  if (localStorage.getItem("items") === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem("items"));
  }
  checkUI();

  return itemsFromStorage;
}

function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage();

  itemsFromStorage.push(item);

  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

function onClickItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    removeItem(e.target.parentElement.parentElement);
  } else {
    setItemToEdit(e.target);
  }

  // Optional
  // if (e.target.tagName === "LI") {
  //   console.log(e.target);
  //   e.target.classList.toggle("strikethrough");
  // }
}

function setItemToEdit(item) {
  isEditMode = true;

  itemList
    .querySelectorAll("li")
    .forEach((i) => i.classList.remove("edit-mode"));

  item.classList.add("edit-mode");

  formBtn.innerHTML = "<i class='fa-solid fa-pen'></i> Update Item";
  formBtn.style.backgroundColor = "#228B22";
  // formBtn.classList.add("myBtn");
  itemInput.value = item.textContent;
}

function removeItem(item) {
  if (confirm("Are you sure you wanna delete ?")) {
    item.remove();

    removeItemFromStorage(item.textContent);

    checkUI();
  }

  // if (e.target.parentElement.classList.contains("remove-item")) {
  //   if (confirm("Are you sure you wanna delete it ?")) {
  //     e.target.parentElement.parentElement.remove();
  //     checkUI();
  //   }
  // }
  // checkUI();
}

function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage();

  console.log(`Item is : ${item}`);

  itemsFromStorage = itemsFromStorage.filter((i) => i != item);
  console.log(itemsFromStorage);

  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function clickLi(e) {
  console.log(e);
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  checkUI();
  return icon;
}

function clearAllItems(e) {
  itemList.innerHTML = "";
  localStorage.removeItem("items");
  checkUI();
}

// function filterItems(e) {
//   const items = itemList.querySelectorAll("li");
//   const text = e.target.value.toLowerCase();

//   console.log(`Your Text is : ${text}`);
//   console.log(`Your Target is : ${e.target}`);
//   console.log(e.target);

//   items.forEach((item) => {
//     const itemName = item.textContent.toLowerCase();
//     console.log(itemName);

//     if (itemName.indexOf(text) != -1) {
//       item.style.display = "flex";
//     } else {
//       item.style.display = "none";
//     }
//   });

//   console.log(text);
// }

function filterItems(e) {
  const text = e.target.value.toLowerCase();
  console.log(text);

  const itemName = document.querySelectorAll("li");

  itemName.forEach((items) => {
    const filteredItems = items.firstChild.textContent.toLowerCase();

    if (filteredItems.indexOf(text) != -1) {
      items.style.display = "flex";
    } else {
      items.style.display = "none";
    }
  });
}

function checkUI() {
  itemInput.value = "";
  if (itemList.children.length === 0) {
    filter.style.display = "none";
    clearAll.style.display = "none";
    itemList.innerHTML = "";
  } else {
    filter.style.display = "block";
    clearAll.style.display = "block";
  }

  formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
  formBtn.style.backgroundColor = "#333";

  isEditMode = false;
}

itemForm.addEventListener("submit", onAddItemSubmit);
itemList.addEventListener("click", onClickItem);
clearAll.addEventListener("click", clearAllItems);
filter.addEventListener("input", filterItems);
document.addEventListener("DOMContentLoaded", displayItems);

checkUI();
