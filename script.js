let shoppingList = [];

const input = document.getElementById("productInput");
const container = document.getElementById("productContainer");
const countSpan = document.getElementById("count");
const emptyMessage = document.getElementById("emptyMessage");
const searchInput = document.getElementById("searchInput");

const addBtn = document.getElementById("addBtn");
const removeLastBtn = document.getElementById("removeLastBtn");
const removeFirstBtn = document.getElementById("removeFirstBtn");

// ფუნქცია რომელიც ხატავს სიას
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

// დამატება (push)
addBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") return;

  shoppingList.push(value);
  input.value = "";
  renderList(shoppingList);
});

// ბოლო წაშლა (pop)
removeLastBtn.addEventListener("click", () => {
  shoppingList.pop();
  renderList(shoppingList);
});

// პირველი წაშლა (shift)
removeFirstBtn.addEventListener("click", () => {
  shoppingList.shift();
  renderList(shoppingList);
});

// ძებნა (filter)
searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  const filtered = shoppingList.filter((product) =>
    product.toLowerCase().includes(searchValue),
  );

  renderList(filtered);
});

// საწყისი გამოძახება
renderList(shoppingList);
