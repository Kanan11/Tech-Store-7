var listOfProducts;

/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        addProductsToWebpage();
    });
}


function initSite() {
    loadProducts();
    // This would also be a good place to initialize other parts of the UI
}

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    // Check your console to see that the products are stored in the listOfProducts varible.
    console.log(listOfProducts);

    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.
    
    // TODO: Remove the console.log and these comments when you've read them.
}

const productItems = [
    {
        "title": "iPhone X",
        "description": "Last years phone from Apple with a beautiful all display front.",
        "image": "iPhoneX.png",
        "price": 11495
    },{
        "title": "One Plus 5",
        "description": "Sleek and powerful smartphone from One Plus.",
        "image": "OnePlus5.png",
        "price": 4995
    },{
        "title": "Galaxy S8",
        "description": "Really cool edge to edge smartphone from Samsung.",
        "image": "SamsungS8.png",
        "price": 7990
    },{
        "title": "LG V30",
        "description": "Super nice and beautiful smartphone from LG.",
        "image": "LGV30.png",
        "price": 7495
    }
];

function phonesStartview(displayPhone) {
    return ` <div class="products">
    <h1 class="itemTitle"> ${displayPhone.title} </h1>
    <h4 class="itemBeskrivning"> ${displayPhone.description} </h4>
    <img class="itemPhoto" src="${displayPhone.image}"> 
    <h3 class="itemPrice"> ${displayPhone.price} </h3>
    <button onclick="clickFunction()" class="itemButton"><i class="fas fa-cart-arrow-down"></i> Lägg till i kundvagnen </button>
    </div> `
}

document.getElementById("products").innerHTML = `
 ${productItems.map(phonesStartview).join("")}
`


function clickFunction() {
    document.getElementById("cartNumber").innerHTML = (1)
}

function clickFunction() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) +1;
      } else {
        localStorage.clickcount = 1;
      } document.getElementById("cartNumber").innerHTML = localStorage.clickcount;
    } 
  }
