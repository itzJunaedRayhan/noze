//  hide Paregraph and Show Paragraph on About Section:
const paragraphTop = document.querySelector(".about-paragraph-top");
const paragraphBottom = document.querySelector(".about-paragraph-bottom");
const aboutTop    = document.querySelector(".about-top");
const aboutBottom = document.querySelector(".about-bottom");
const aboutImage  = document.querySelector(".about-image");
const aboutVideo  = document.querySelector(".about-video");

function showAndHideAbout () {
    aboutTop.classList.toggle("before:animate-show-hide-about-one");
    aboutBottom.classList.toggle("before:animate-show-hide-about-one");
    paragraphTop.classList.toggle("display");
    paragraphBottom.classList.toggle("display");
    aboutVideo.classList.toggle("hidden");
    aboutImage.classList.toggle("hidden");
}

setInterval(() => {
    showAndHideAbout();
}, 7000);

aboutTop.addEventListener("click", () => {
    showAndHideAbout();
});

aboutBottom.addEventListener("click", () => {
    showAndHideAbout();
})





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






//  faq section
const faqWrapper = document.getElementById("faq-wrapper");
const faq = document.querySelectorAll(".faq");
faqWrapper.addEventListener("click", (event) => {
    if (event.target.parentElement.parentElement.classList.contains("faq")) {
        if (event.target.parentElement.parentElement.style.maxHeight !== "500px" ) {
            faq.forEach(e => {
                e.style.maxHeight = "75px";
            })
            event.target.parentElement.parentElement.style.maxHeight = "500px"
        }else{
            event.target.parentElement.parentElement.style.maxHeight = "75px"
        }
    }else if (event.target.parentElement.classList.contains("faq")) {
        if (event.target.parentElement.style.maxHeight !== "500px" ) {
            faq.forEach(e => {
                e.style.maxHeight = "75px";
            })
            event.target.parentElement.style.maxHeight = "500px"
        }else{
            event.target.parentElement.style.maxHeight = "75px"
        }
    }else if (event.target.classList.contains("faq")) {
        if (event.target.style.maxHeight !== "500px" ) {
            faq.forEach(e => {
                e.style.maxHeight = "75px";
            })
            event.target.style.maxHeight = "500px"
        }else{
            event.target.style.maxHeight = "75px"
        }
    }
});







//  For Mobile View of Matter Section:
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});





//  Matter Section
const fullwrapper = document.getElementById("wrapper");
const ulWrapper = document.getElementById("sidebar");
const li = document.querySelectorAll("#sidebar li");
const itemWrapper   = document.getElementById("items");
const items = document.querySelectorAll(".item");

//  Function to find Index Number of li:
function index(el) {
    var children = el.parentElement.children,
        i = 0;
    for (; i < children.length; i++) {
        if (children[i] == el) {
            return i;
        }
    }
    return -1;
}

//  Function to display Matter Section:
function displayMatter (index) {
    items.forEach((e) => e.style.display = "none");
    items[index].style.display = "flex";
}

//  Find where is clicked in matter section ul:
ulWrapper.addEventListener("click", (event) => {
    const target = event.target.parentElement;
    if(target === ulWrapper) {
        li.forEach(e => e.classList.remove("active-li"));
        event.target.classList.add("active-li");

        let idx = index(event.target);
        displayMatter(idx);
    }
});






