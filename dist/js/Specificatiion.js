//  Dropdown Icon
const icon = document.querySelector(".dropdown-icon");
icon.addEventListener("click", () => {
    const dropdownWrapper = document.querySelector(".dropdown-wrapper");
    document.querySelector(".dropdown-items").classList.toggle("hidden");
    if (icon.style.transform === '') {
        icon.style.transform = "rotate(180deg)";
        dropdownWrapper.style.borderRadius = "10px";
    }else{
        icon.style.transform = "";
        dropdownWrapper.style.borderRadius = "24px";
    }   
});




//  Specification Section:
const specWrapper = document.getElementById("spec-wrapper");
const spec = document.querySelectorAll(".spec");
specWrapper.addEventListener("click", (event) => {
  if (event.target.parentElement.parentElement.classList.contains("spec")) {
    if (event.target.parentElement.parentElement.style.maxHeight !== "500px") {
      spec.forEach((e) => {
        e.style.maxHeight = "75px";
      });
      event.target.parentElement.parentElement.style.maxHeight = "500px";
    } else {
      event.target.parentElement.parentElement.style.maxHeight = "75px";
    }
  } else if (event.target.parentElement.classList.contains("spec")) {
    if (event.target.parentElement.style.maxHeight !== "500px") {
      spec.forEach((e) => {
        e.style.maxHeight = "75px";
      });
      event.target.parentElement.style.maxHeight = "500px";
    } else {
      event.target.parentElement.style.maxHeight = "75px";
    }
  } else if (event.target.classList.contains("spec")) {
    if (event.target.style.maxHeight !== "500px") {
      spec.forEach((e) => {
        e.style.maxHeight = "75px";
      });
      event.target.style.maxHeight = "500px";
    } else {
      event.target.style.maxHeight = "75px";
    }
  }
});



//  Add To Cart Implementaion:
const orderBtn  = document.getElementById("order");
const addToCart = document.getElementById("cart"); 
const cartCount = document.getElementById("cart-count");
const minus     = document.getElementById("minus");
const plus      = document.getElementById("plus");
const quantity  = document.getElementById("quantity");

let count = 0;
quantity.innerText = count;
document.getElementById("total").innerText = "000";
document.getElementById("subtotal").innerText = "000";
orderBtn.addEventListener("click", () => {
  addToCart.style.right = "0%";
  count = count + 1;
  calculate(count);
});

document.getElementById("close").addEventListener("click", () => addToCart.style.right = "-100%");
cartCount.addEventListener("click", () => {
  addToCart.style.right = "0%";
});

document.getElementById("mobile-add-to-cart").addEventListener("click", () => {
  addToCart.style.right = "0%";
  count = count + 1;
  calculate(count);
})

plus.addEventListener("click", () => {
  count = count + 1;
  calculate(count);
});

minus.addEventListener("click", () => {
  if (count > 0) {
    count = count - 1;
    calculate(count);
  }
});

//  Function To Calculate Total:
function calculate (count) {
  quantity.innerText = count;
  const total = count * 249;
  document.querySelector("#cart-count span").innerHTML = count;
  document.getElementById("total").innerText = `$${total}`;
  document.getElementById("subtotal").innerText = `$${total}`;
}
