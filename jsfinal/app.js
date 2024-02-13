// slider
const carousel = document.querySelector(".carousel"),
  firstImg = carousel.querySelectorAll("img")[0],
  arrowIcons = document.querySelectorAll(".wrapper i");
let carts = document.querySelectorAll(".add-a");
let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;
//  = document.querySelector('.phone')
// const makeup = document.querySelector(".makeup")
// const cars = document.querySelector(".cars")
// const clothes = document.querySelector(".clothes")

// const images = document.querySelectorAll('.item .image img');

// phones.addEventListener('click' , ()=> {
//    for(let i = 0 ; i < images.length ; i++){
//     images[i].src = `images/mobiles/${i+1}.jpg`
//    }
// })

// makeup.addEventListener('click' , ()=> {
//     for(let i = 0 ; i < images.length ; i++){
//         images[i].src = `images/makeup/${i+1}.jpg`
//        }
// })
// cars.addEventListener('click' , ()=> {
//     for(let i = 0 ; i < images.length ; i++){
//         images[i].src = `images/cars/${i+1}.jpg`
//        }
// })
// clothes.addEventListener('click' , ()=> {
//     for(let i = 0 ; i < images.length ; i++){
//         images[i].src = `images/clothes/${i+1}.jpg`
//        }
// })

const navSlider = () => {
  const burgar = document.querySelector(".burgar");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  burgar.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSlider();

// const showHideIcons = () => {
//     // showing and hiding prev/next icon according to carousel scroll left value
//     let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
//     arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
//     arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
// }
const showHideIcons = () => {
  // showing and hiding prev/next icon according to carousel scroll left value
  arrowIcons[0].style.display = "block"; // Always show the previous icon
  arrowIcons[1].style.display = "block"; // Always show the next icon
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
    // if clicked icon is left, reduce width value from the carousel scroll left else add to it
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
  });
});

const autoSlide = () => {
  // if there is no image left to scroll then return from here
  if (
    carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 ||
    carousel.scrollLeft <= 0
  )
    return;

  positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
  let firstImgWidth = firstImg.clientWidth + 14;
  // getting difference value that needs to add or reduce from carousel left to take middle img center
  let valDifference = firstImgWidth - positionDiff;

  if (carousel.scrollLeft > prevScrollLeft) {
    // if user is scrolling to the right
    return (carousel.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }
  // if user is scrolling to the left
  carousel.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
  // updatating global variables value on mouse down event
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  // scrolling images/carousel to left according to mouse pointer
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");

  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);
//end slider

//Add cart
for (var i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    // console.log('add to cart');
    cartNumbers();
  });
}
function cartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  // console.log(productNumbers);
  // console.log(typeof productNumbers);
  productNumbers = parseInt(productNumbers);
  // console.log(typeof productNumbers);
  localStorage.setItem("cartNumbers", 1);
}

//end cart
// Function to scroll to the top of the page
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Show/Hide "Back to Top" button based on scroll position
window.onscroll = function () {
  var btn = document.getElementById("back-to-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

let categories = document.getElementsByClassName("categories")[0];
// console.log(categories)

let data;
const productListContainer = document.getElementById("product-list");

// Fetch data from the server
fetch("http://localhost:3000/products")
  .then((response) => response.json())
  .then((fetchedData) => {
    createProduct(fetchedData);
    data = fetchedData;
    console.log(fetchedData);
  })
  .catch((error) => console.error("Error fetching data:", error));

let all = document.getElementById("all");
// let phone = document.getElementById("phone");
// let makeup = document.getElementById("makeup");
// let cars = document.getElementById("cars");
// let clothes = document.getElementById("clothes");

// all.addEventListener("click" , ()=> {
//     createProduct(data);
// })

// phone.addEventListener("click", () => {
//   let filteredProducts = data.filter((x) => x.category === "mobiles");
//   createProduct(filteredProducts);
// });

// makeup.addEventListener("click", () => {
//   let filteredProducts = data.filter((x) => x.category === "makeup");
//   createProduct(filteredProducts);
// });

// cars.addEventListener("click", () => {
//   let filteredProducts = data.filter((x) => x.category === "cars");
//   createProduct(filteredProducts);
// });

// clothes.addEventListener("click", () => {
//   let filteredProducts = data.filter((x) => x.category === "clothes");
//   createProduct(filteredProducts);
// });

// function createProduct(products) {
//     productListContainer.innerHTML = '';
//     // Iterate through the products and generate product-item elements
//     products.forEach(product => {
//         const productItem = document.createElement('div');
//         productItem.classList.add('product-item');

//         // Customize the content based on your product structure
//         productItem.innerHTML = `
//             <div class="item">
//                 <div class="image">
//                     <img src="${product.image}" alt="">
//                 </div>
//                 <h4>${product.name}</h4>
//                 <span>${product.price}</span>
//                 <button class="add-button">Add</button>
//             </div>
//         `;

//         // Append the product-item to the product list container
//         productListContainer.appendChild(productItem);
//     });
// }

let listProductHTML = document.querySelector(".listProduct");
let listCartHTML = document.querySelector(".listCart");
let iconCart = document.querySelector(".icon-cart");
let iconCartSpan = document.querySelector(".icon-cart span");
let body = document.querySelector("body");
let closeCart = document.querySelector(".close");
let products = [];
let cart = [];

const addDataToHTML = () => {
  // remove datas default from HTML

  // add new datas
  if (products.length > 0) {
    // if has data
    products.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.dataset.id = product.id;
      newProduct.classList.add("item");
      newProduct.innerHTML = `
             <div class="ppp"> <img src="${product.image}" alt=""> </div>
               <div> 
                    <h2>${product.name}</h2>
                    <div class="price">$${product.price}</div>
                    <button class="addCart">Add To Cart</button> 
                </div>`;
      listProductHTML.appendChild(newProduct);
    });
  }
};


listProductHTML.addEventListener("click", (event) => {
  let positionClick = event.target;


  if(event.target.tagName == "BUTTON"){
      let id_product = positionClick.parentElement.parentElement.dataset.id;
      addToCart(id_product);

  }

  // if (positionClick.classList.contains("addCart")) {
  //   let id_product = positionClick.parentElement.dataset.id;
  //   addToCart(id_product);
  // }
});

const addToCart = (product_id) => {
  let positionThisProductInCart = cart.findIndex(
    (value) => value.product_id == product_id
  );
  if (cart.length <= 0) {
    cart = [
      {
        product_id: product_id,
        quantity: 1,
      },
    ];
  } else if (positionThisProductInCart < 0) {
    cart.push({
      product_id: product_id,
      quantity: 1,
    });
  } else {
    cart[positionThisProductInCart].quantity =
      cart[positionThisProductInCart].quantity + 1;
  }
  addCartToMemory();
};

const addCartToMemory = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const initApp = () => {
  // get data product
  fetch("http://localhost:3000/products")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      products = data;
      addDataToHTML();

      // get data cart from memory
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      
      }
    });
};

initApp();

const AllProduct = () => {
  // remove datas default from HTML
  while (listProductHTML.firstChild) {
    listProductHTML.removeChild(listProductHTML.firstChild);
    // listProductHTML.innerHTML ="";
  }
  // add new datas
  if (products.length > 0) {
    // if has data
    products.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.dataset.id = product.id;
      newProduct.classList.add("item");
      newProduct.innerHTML = `
             <div class="ppp"> <img src="${product.image}" alt=""> </div>
               <div> 
                    <h2>${product.name}</h2>
                    <div class="price">$${product.price}</div>
                    <button class="addCart">Add To Cart</button> 
                </div>`;
      listProductHTML.appendChild(newProduct);
    });
  }
};

function mobiles() {
  let listProductHTML = document.getElementsByClassName("listProduct")[0];

  // Remove all existing child elements
  while (listProductHTML.firstChild) {
    listProductHTML.removeChild(listProductHTML.firstChild);
    // listProductHTML.innerHTML ="";
  }

  // Add new data
  if (products != null) {
    products.forEach((product) => {
      if (product.category == "mobiles") {
        let newProduct = document.createElement("div");
        newProduct.classList.add("item");
        newProduct.dataset.id = product.id;
        newProduct.innerHTML = `
        <div class="ppp">
        <img class="p-image" src="${
          product.image
        }" alt="" onclick="window.location.href='../HTML/ProductDetail.html?id=${
          product.id
        }'">
        </div>
        <div>
        <h2>${product.name}</h2>
        <div class="price">$${product.price}</div>
        <div class="stars">
        ${"★".repeat(5)}
        </div>
        <button class="addCart">Add to Cart</button>
        </div>
          `;
        listProductHTML.appendChild(newProduct);
      }
    });
  }
}

function makeup() {
  let listProductHTML = document.getElementsByClassName("listProduct")[0];

  // Remove all existing child elements
  while (listProductHTML.firstChild) {
    listProductHTML.removeChild(listProductHTML.firstChild);
  }

  // Add new data
  if (products != null) {
    products.forEach((product) => {
      if (product.category == "makeup") {
        let newProduct = document.createElement("div");
        newProduct.classList.add("item");
        newProduct.dataset.id = product.id;
        newProduct.innerHTML = `
        <div class="ppp">
        <img class="p-image" src="${
          product.image
        }" alt="" onclick="window.location.href='../HTML/ProductDetail.html?id=${
          product.id
        }'">
        </div>
        <div>
        <h2>${product.name}</h2>
        <div class="price">$${product.price}</div>
        <div class="stars">
        ${"★".repeat(5)}
        </div>
        <button class="addCart">Add to Cart</button>
        </div>
          `;
        listProductHTML.appendChild(newProduct);
      }
    });
  }
}

function carsfilter() {
  let listProductHTML = document.getElementsByClassName("listProduct")[0];

  // Remove all existing child elements
  while (listProductHTML.firstChild) {
    listProductHTML.removeChild(listProductHTML.firstChild);
  }

  // Add new data
  if (products != null) {
    products.forEach((product) => {
      if (product.category == "cars") {
        let newProduct = document.createElement("div");
        newProduct.classList.add("item");
        newProduct.dataset.id = product.id;
        newProduct.innerHTML = `
        <div class="ppp">
        <img class="p-image" src="${
          product.image
        }" alt="" onclick="window.location.href='../HTML/ProductDetail.html?id=${
          product.id
        }'">
        </div>

        <div>
        <h2>${product.name}</h2>
        <div class="price">$${product.price}</div>
        <div class="stars">
        ${"★".repeat(5)}
        </div>
        <button class="addCart">Add to Cart</button>;
        </div>`
        listProductHTML.appendChild(newProduct);
      }
    });
  }
}

function Clothesfilter() {
  let listProductHTML = document.getElementsByClassName("listProduct")[0];

  // Remove all existing child elements
  while (listProductHTML.firstChild) {
    listProductHTML.removeChild(listProductHTML.firstChild);
  }

  // Add new data
  if (products != null) {
    products.forEach((product) => {
      if (product.category == "clothes") {
        let newProduct = document.createElement("div");
        newProduct.classList.add("item");
        newProduct.dataset.id = product.id;
        newProduct.innerHTML = `
        <div class="ppp">
        <img class="p-image" src="${
          product.image
        }" alt="" onclick="window.location.href='../HTML/ProductDetail.html?id=${
          product.id
        }'">
        </div>
        <div>
        <h2>${product.name}</h2>
        <div class="price">$${product.price}</div>
        <div class="stars">
        ${"★".repeat(5)}
        </div>
        <button class="addCart">Add to Cart</button>
        </div>
          `;
        listProductHTML.appendChild(newProduct);
      }
    });
  }
}
