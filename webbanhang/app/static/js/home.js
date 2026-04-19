let raw = document.getElementById("product-data").textContent;
console.log("RAW BEFORE PARSE:", raw);

let products = JSON.parse(raw);
console.log("AFTER PARSE:", products);

let loaded = 12;
let initialCount = 12;

const btn = document.getElementById("load-more");
const container = document.getElementById("product-container");

btn.addEventListener("click", function () {
  // Nếu đang ở trạng thái "Show less"
  if (btn.dataset.state === "expanded") {
    // Ẩn bớt sản phẩm, chỉ giữ lại 12 cái đầu
    container.innerHTML = "";

    products.slice(0, initialCount).forEach((p) => {
      container.innerHTML += productHTML(p);
    });

    loaded = initialCount;

    // Đổi nút về Load more
    btn.textContent = "Load more";
    btn.dataset.state = "collapsed";
    return;
  }

  // Trạng thái Load more
  let next = products.slice(loaded, loaded + 12);

  next.forEach((p) => {
    container.innerHTML += productHTML(p);
  });

  loaded += 12;

  // Nếu đã load hết → đổi nút thành Show less
  if (loaded >= products.length) {
    btn.textContent = "Show less";
    btn.dataset.state = "expanded";
  }
});

// Hàm tạo HTML sản phẩm
function productHTML(p) {
  return `
    <div class="col-lg-3 product-img pb-3 product-item">
      <div class="product-card">
        <a href="/view_detail/?id=${p.id}"><img class="rounded img-fluid product-image" src="${p.ImageURL}" alt="${p.name}"></a>
        <div class="box-element product">
          <h6><strong>${p.name}</strong></h6><hr>
          <button data-product="${p.id}" data-action="add"
            class="btn btn-outline-secondary add-btn update-cart">Add to Cart</button>
          <a class="btn btn-outline-success" href="{% url 'view_detail' %}?id={{product.id}}">View</a>
          <h5 class="text-success"><strong>${p.price} VND</strong></h5>
        </div>
      </div>
    </div>
  `;
}
