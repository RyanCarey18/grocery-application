const addButtonHandler = async (event) => {
  event.preventDefault();

  // Collect product id
  const product_id = document.getElementById("add-btn").getAttribute("data-id");

  //if there is a comment then send a request to server to create new comment
  if (product_id) {
    const response = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({ product_id }),
      headers: { "Content-Type": "application/json" },
    });

    //if the request is okay refresh the post page
    if (response.ok) {
    } else {
      alert(response.statusText);
    }
  }
};

const cartButtonHandler = async (event) => {
  event.preventDefault();

    const response = await fetch("/api/cart", {
      method: "GET",
    });

    //if the request is okay refresh the post page
    if (response.ok) {
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelectorAll(".cart-btn")
  .forEach((btn) => btn.addEventListener("click", cartButtonHandler));

document
  .querySelectorAll(".add-btn")
  .forEach((btn) => btn.addEventListener("click", addButtonHandler));
