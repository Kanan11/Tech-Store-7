var listOfProducts;

/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (products) {
            listOfProducts = products;
            addProductsToWebpage();
        });
}


function initSite() {
    loadProducts();
    updateCartCount();
    // This would also be a good place to initialize other parts of the UI
}

/** Uses the loaded products data to create a visible product list on the website */

// Add your code here, remember to brake your code in to smaller function blocks
// to reduce complexity and increase readability. Each function should have
// an explainetory comment like the one for this function, see row 22.

// TODO: Remove the console.log and these comments when you've read them.


function addProductsToWebpage() {
    console.log(listOfProducts);

    let container = document.createElement("div")
    container.style.display = "flex"
    container.style.justifyContent = "center"
    container.style.flexDirection = "column"

    for (let i = 0; i < listOfProducts.length; i++) {
        const product = listOfProducts[i];


        let displayPhone = document.createElement("div")
        displayPhone.classList.add("products", "gallery")

        let itemTitle = document.createElement("h1")
        itemTitle.classList.add("itemTitle")
        itemTitle.textContent = product.title
        displayPhone.appendChild(itemTitle)


        let itemBeskrivning = document.createElement("h4")
        itemBeskrivning.classList.add("itemBeskrivning")
        itemBeskrivning.textContent = product.description
        displayPhone.appendChild(itemBeskrivning)

        let itemPhoto = document.createElement("img")
        itemPhoto.src = "/assets/" + product.image
        itemPhoto.classList.add("itemPhoto")
        displayPhone.appendChild(itemPhoto)


        let itemPrice = document.createElement("h3")
        itemPrice.classList.add("itemPrice")
        itemPrice.textContent = `${product.price} kr`

        displayPhone.appendChild(itemPrice)


        let itemButton = document.createElement("button")
        itemButton.classList.add("itemButton")

        itemButton.addEventListener("click", e => {
            var cart

            if (localStorage.cart == undefined) {
                cart = []
            } else {
                cart = JSON.parse(localStorage.cart)
            }

            cart.push(product)
            localStorage.cart = JSON.stringify(cart)
            updateCartCount()

        })
        displayPhone.appendChild(itemButton)

        let itemIcon = document.createElement("i")
        itemIcon.classList.add("fas", "fa-cart-arrow-down")
        itemButton.appendChild(itemIcon)


        let itemSpan = document.createElement("span")
        itemSpan.textContent = "Lägg till i kundvagn"

        itemButton.appendChild(itemSpan)


        container.appendChild(displayPhone)
    }
    
    document.body.appendChild(container)
}


function updateCartCount() {
    var count = 0

    if (localStorage.cart !== undefined) {

        count = JSON.parse(localStorage.cart).length
    }

    document.getElementById("cartNumber").textContent = count
}
