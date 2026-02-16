let shoppingList = [];

const input = document.getElementById("productInput");
const container = document.getElementById("productContainer");
const countSpan = document.getElementById("count");
const emptyMessage = document.getElementById("emptyMessage");
const searchInput = document.getElementById("searchInput");

const addBtn = document.getElementById("addBtn");
const removeLastBtn = document.getElementById("removeLastBtn");
const removeFirstBtn = document.getElementById("removeFirstBtn");


function renderList(list) {
  container.innerHTML = "";

  if (list.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }

  list.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = product;
    container.appendChild(card);
  });

  countSpan.textContent = shoppingList.length;
}


addBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") return;

  shoppingList.push(value);
  input.value = "";
  renderList(shoppingList);
});


removeLastBtn.addEventListener("click", () => {
  shoppingList.pop();
  renderList(shoppingList);
});

removeFirstBtn.addEventListener("click", () => {
  shoppingList.shift();
  renderList(shoppingList);
});


searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  const filtered = shoppingList.filter((product) =>
    product.toLowerCase().includes(searchValue),
  );

  renderList(filtered);
});


renderList(shoppingList);

