const delButtonHandler = async (event) => {
  if (document.getElementById("del-btn").hasAttribute("data-id")) {
    const id = event.target.dataset.id;

    const response = await fetch(`/api/cart/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/cart");
    } else {
      alert("Failed to delete posts");
    }
  }
};

document.querySelectorAll(".del-btn").forEach((btn) => btn.addEventListener("click", delButtonHandler));