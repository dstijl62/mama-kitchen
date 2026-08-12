console.log("hello");

let updateBtns = document.getElementsByClassName("update-cart");

for (i = 0; i < updateBtns.length; i++) {
  updateBtns[i].addEventListener("click", function () {
    let productId = this.dataset.product;
    let action = this.dataset.action;

    console.log("productId: ", productId, "action: ", action);
    console.log("user: ", user);
    if (user === "AnonymousUser") {
      console.log("User not logged in");
    } else {
      updateUserOrder(productId, action);
    }
  });
}

const updateUserOrder = (productId, action) => {
  console.log("User logged in, add succeed");
  let url = "/update_item/";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrftoken,
    },
    body: JSON.stringify({ productId: productId, action: action }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data:", data);
      location.reload();
    });
};

let deleteBtns = document.getElementsByClassName("delete-item");

for (let i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener("click", function (e) {
    e.preventDefault();
    let productId = this.dataset.product;

    fetch("/delete_item/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify({ productId: productId }),
    })
      .then((response) => response.json())
      .then((data) => {
        location.reload(); // reload lại giỏ hàng
      });
  });
}
