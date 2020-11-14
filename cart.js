var totalAmount = 0

/** Get products from the json file and store it in a gobal variable */
/* function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        addProductsToCart();
    });
} */


function initSite() {
ShowProductsInCart()
updateCartCount()

document.getElementById("alertSum").addEventListener("click", function() {
    alert("Den totala summan är: " + totalAmount + "kr")
} )

}

function addProductsToWebpage() {
    // Check your console to see that the products are stored in the listOfProducts varible.
/*     console.log(listOfProducts);
 */}


function ShowProductsInCart () {



    let container = document.getElementById("cartProducts")
    container.style.display = "flex"
    container.style.justifyContent = "center"
    container.style.flexDirection = "row"


    var listOfProducts = getCartProducts()
    
        for (let i = 0; i < listOfProducts.length; i++) {
            const product  = listOfProducts[i];
            const productIndex = i;
            
            totalAmount = totalAmount + product.price
    
            let displayPhone = document.createElement("div")
            displayPhone.classList.add("products", "cart")

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
            itemButton.dataset.productIndex = productIndex

            itemButton.addEventListener("click", e => {
                var cart = getCartProducts()

                cart = cart.filter(function (_, cartIndex) {
                    return cartIndex != productIndex
                })
                localStorage.cart = JSON.stringify(cart) 
                window.location.reload()

            })
            displayPhone.appendChild(itemButton)

            let itemIcon = document.createElement("i")
            itemIcon.classList.add("fas", "fa-trash-alt")
            itemButton.appendChild(itemIcon)
            

            let itemSpan = document.createElement("span")
            itemSpan.textContent = "Ta Bort"

            itemButton.appendChild(itemSpan)

            
            container.appendChild(displayPhone)
        }
    
        let totalAmountElement = document.getElementById("totalAmount")
        totalAmountElement.textContent = `Totalt pris: ${totalAmount} kr`


}



function getCartProducts () {

    if (localStorage.cart !== undefined) {
        return JSON.parse(localStorage.cart)
    }  
    return []
}

function updateCartCount () {
    var count = getCartProducts().length
    document.getElementById("cartNumber").textContent = count 

}



