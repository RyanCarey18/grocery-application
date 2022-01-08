//adds a button to every product to be selected.
const addButtonHandler = async (event) => {
  event.preventDefault();

  const product_id = event.target.dataset.id;
  //send item data to be added to cart.
  if (product_id) {
    const response = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({ product_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      alert(response.statusText);
    }
  }
};

document
  .querySelectorAll(".add-btn")
  .forEach((btn) => btn.addEventListener("click", addButtonHandler));