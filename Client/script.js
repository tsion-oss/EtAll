const coffeeButton = document.getElementById('coffee');
const spiceButton = document.querySelector('#spice');
const teffButton = document.querySelector('#teff');
const product = document.querySelector('#product');
const cart = document.querySelector('#cart')
const orderSummary = document.querySelector('#orderSummary')
const cartAll = document.querySelector('#cartAll')
const heroImage = document.querySelector('#hero-image')
const heroDiv = document.querySelector('#heroDiv')
const homeButton = document.getElementById('home')

// Coffee Section




coffeeButton.addEventListener('click', async () => {
  product.innerHTML = ""
  heroImage.style.display = "none"
  cart.innerHTML = ""
  cart.style.display = "none"
  try {
    const response = await axios.get('http://localhost:3001/api/coffees');
    const coffees = response.data.coffees;
    console.log(coffees);
    if (coffees) {
      coffees.forEach(coffee => {
        const coffeeCard = document.createElement('div');
        coffeeCard.classList.add('card');
        coffeeCard.innerHTML = `
          <img style="height: 400px; width: 400px;" src="images/packet.png" />
          <h1>${coffee.name}</h1>
          <p>${coffee.description}</p>
          <p id="price">$ ${coffee.price}</p>
          <button class="cartButton" type="button">Add To Cart</button>
        `;

        const addToCartButton = coffeeCard.querySelector('.cartButton');
        addToCartButton.addEventListener('click', () => {
          addToCartCoffee(coffee);
        });

        product.appendChild(coffeeCard);
      });
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

function addToCartCoffee(coffee) {
  const cartItems = localStorage.getItem('cartItems');
  let items = [];

  if (cartItems) {
    items = JSON.parse(cartItems);
  }
 
  coffee.quantity = 1
  
  items.push(coffee);
  localStorage.setItem('cartItems', JSON.stringify(items));
  console.log(`Added ${coffee.name} to the cart`);
  console.log(items)
}

// Spice section
spiceButton.addEventListener('click', async () => {
  product.innerHTML = ""
  heroImage.style.display = "none"
  cart.innerHTML = ""
  cart.style.display = "none"
  try {
    const response = await axios.get('http://localhost:3001/api/spices');
    const spices = response.data.spices;
    console.log(spices);
    if (spices) {
      spices.forEach(spice => {
        const spiceCard = document.createElement('div');
        spiceCard.classList.add('card');
        spiceCard.innerHTML = `
          <img style="height: 400px; width: 400px;" src="images/packet.png" />
          <h1>${spice.name}</h1>
          <p>${spice.description}</p>
          <p id="price">$ ${spice.price}</p>
          <button class="cartButton" type="button">Add To Cart</button>
        `;

        const addToCartButton = spiceCard.querySelector('.cartButton');
        addToCartButton.addEventListener('click', () => {
          addToCartSpice(spice);
        });

        product.appendChild(spiceCard);
      });
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

function addToCartSpice(spice) {
  const cartItems = localStorage.getItem('cartItems');
  let items = [];

  if (cartItems) {
    items = JSON.parse(cartItems);
  }

  spice.quantity = 1

  items.push(spice);
  localStorage.setItem('cartItems', JSON.stringify(items));
  console.log(`Added ${spice.name} to the cart`);
}

// Teff Section
teffButton.addEventListener('click', async () => {
  product.innerHTML = ""
  heroImage.style.display = "none"
  cart.innerHTML = ""
  cart.style.display = "none"
  orderSummary.style.display = 'none'
  try {
    const response = await axios.get('http://localhost:3001/api/teffs');
    const teffs = response.data.teffs;
    console.log(teffs);
    if (teffs) {
      teffs.forEach(teff => {
        const teffCard = document.createElement('div');
        teffCard.classList.add('card');
        teffCard.innerHTML = `
          <img style="height: 400px; width: 400px;" src="images/packet.png" />
          <h1>${teff.name}</h1>
          <p>${teff.description}</p>
          <p id="price">$ ${teff.price}</p>
          <button class="cartButton" type="button">Add To Cart</button>
        `;

        const addToCartButton = teffCard.querySelector('.cartButton');
        addToCartButton.addEventListener('click', () => {
          addToCartTeff(teff);
        });

        product.appendChild(teffCard);
      });
    }
  } catch (error) {
    console.error('Error:', error);
  }
});


function addToCartTeff(teff) {
  let cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

  teff.quantity = 1

  cartItems.push(teff);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  console.log(`Added ${teff.name} to the cart`);
  console.log(cartItems)
}

   
// Load cart items on cart page
window.addEventListener('DOMContentLoaded', () => {

  const cart = document.querySelector('#cart')
  const cartItems = localStorage.getItem('cartItems');
  if (cartItems) {
    const items = JSON.parse(cartItems);
    items.forEach(item => {
      const itemCard = document.createElement('div');
      itemCard.classList.add('card');
      itemCard.innerHTML = `
        <img style="height: 200px; width: 200px;" src="${item.image}" />
        <h1 id="cartName">${item.name}</h1>
        <p id="cartprice">$ ${item.price}</p>
        <div>
          <button class="plus">+</button>
          <button class="minus">-</button>
          <button class="delete">Delete</button>
          <input type="text" class="quantityInput" value="1">
          </div>
        
      `;
    
      cart.appendChild(itemCard)
     updateOrderSummary(items)

     const plusButton = itemCard.querySelector('.plus');
     const minusButton = itemCard.querySelector('.minus');
     const deleteButton = itemCard.querySelector('.delete');
     const quantityInput = itemCard.querySelector('.quantityInput');
     
     plusButton.addEventListener('click', () => {
       const currentValue = parseFloat(quantityInput.value, 10);
       quantityInput.value = currentValue + 1;
       item.quantity = currentValue + 1;
       updateLocalStorage(items);
       updateOrderSummary(items)
     });
     
     minusButton.addEventListener('click', () => {
       const currentValue = parseFloat(quantityInput.value, 10);
       if (currentValue > 1) {
         quantityInput.value = currentValue - 1;
         item.quantity = currentValue - 1;
         updateLocalStorage(items);
         updateOrderSummary(items)
       }
     });
     
     deleteButton.addEventListener('click', () => {
       itemCard.remove();
       const itemIndex = items.indexOf(item);
       items.splice(itemIndex, 1);
       updateLocalStorage(items);
       updateOrderSummary(items)
     });
     });
     }
     });

     function updateLocalStorage(items) {
      localStorage.setItem('cartItems', JSON.stringify(items));
    }

    function updateOrderSummary(items) {
      const totalPriceElement = document.querySelector('#subPrice')
       let totalPrice = 0

      items.forEach(item => {
        totalPrice += item.price * item.quantity
      })

      totalPriceElement.textContent = totalPrice.toFixed(2)

    }

    function displayEmptyCartMessage() {
      const cart = document.querySelector('#cart');
    
      
      const cartItems = localStorage.getItem('cartItems');
      if (!cartItems || JSON.parse(cartItems).length === 0) {
        cart.innerHTML = ""
        orderSummary.style.display = "none"
        const emptyCartMessage = document.createElement('p');
        emptyCartMessage.textContent = 'Your cart is empty.';
        cart.appendChild(emptyCartMessage);
      }
    }

window.addEventListener('DOMContentLoaded', () => {
  
  displayEmptyCartMessage();
});
    
function clearHomePage() {
  const homeButton = document.getElementById('home')
  homeButton.addEventListener('click', () => {
    
  })
}

window.addEventListener('DOMContentLoaded', () => {
  clearHomePage()
  product.innerHTML = ""
  heroImage.style.display = "none"
  cart.innerHTML = ""
  cart.style.display = "none"
  orderSummary.style.display = 'none'
})
     




