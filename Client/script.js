
const coffeeButton = document.querySelector('#coffee')
const spiceButton = document.querySelector('#spice')
const teffButton = document.querySelector('#teff')
const product = document.querySelector('#product')
// const cartContainer = document.getElementById('cartContainer');


//coffee Section
coffeeButton.addEventListener('click', async () => {
    product.innerHTML = "";
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
            addToCart(coffee);
          });
  
          product.appendChild(coffeeCard);
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
  
  
  function addToCart(coffee) {
    const cartItems = localStorage.getItem('cartItems')
    let items = []

    if (cartItems) {
        items = JSON.parse(cartItems)
    }

    items.push(coffee)
    localStorage.setItem('cartItems', JSON.stringify(items))
    console.log(`Added ${coffee.name} to the cart`)
  }

  window.addEventListener('DOMContentLoaded', () => {
    
    const cartItems = localStorage.getItem('cartItems');
  
    if (cartItems) {
      const items = JSON.parse(cartItems);
      items.forEach(coffee => {
        const coffeeCard = document.createElement('div');
        coffeeCard.classList.add('card');
        coffeeCard.innerHTML = `
          <img style="height: 400px; width: 400px;" src="images/packet.png" />
          <h1>${coffee.name}</h1>
          <p>${coffee.description}</p>
          <p id="price">$ ${coffee.price}</p>
        `;
  
        cartContainer.appendChild(coffeeCard);
      });
    }
  });
  
  //Spice section

  spiceButton.addEventListener('click', async () => {
    product.innerHTML = "";
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
            addToCart(spice);
          });
  
          product.appendChild(spiceCard);
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });

  function addToCart(spice) {
    const cartItems = localStorage.getItem('cartItems')
    let items = []

    if(cartItems) {
        items = JSON.parse(cartItems)
    }

    items.push(spice)
    localStorage.setItem('cartItems', JSON.stringify(items))
    console.log(`Added ${spice.name} to the cart`)
  }

  window.addEventListener('DOMContentLoaded', () => {
    const cartItems = localStorage.getItem('cartItems')

    if (cartItems) {
        const items = JSON.parse(cartItems)
        items.forEach(spice => {
        const spiceCard = document.createElement('div')
        spiceCard.classList.add('card')
        spiceCard.innerHTML = `
        <img style="height: 400px; width: 400px;" src="images/packet.png" />
        <h1>${spice.name}</h1>
        <p>${spice.description}</p>
        <p id="price">$ ${spice.price}</p>
        `
        cartContainer.appendChild(spiceCard)
        })
    }
  })





//Teff Section



teffButton.addEventListener('click', async () => {
  product.innerHTML = "";
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
        `

        const addToCartButton = teffCard.querySelector('.cartButton');
        addToCartButton.addEventListener('click', () => {
          addToCart(teff);
        });

        product.appendChild(teffCard);
      });
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

function addToCart(teff) {
    const cartItems = localStorage.getItem('cartItems')
    let items = []

    if (cartItems){
        items = JSON.parse(cartItems)
    }

    items.push(teff)
    localStorage.setItem('cartItems', JSON.stringify(items))
    console.log(`Added ${teff.name} to the cart`)
}
const cartContainer = document.getElementById('cartContainer');
window.addEventListener('DOMContentLoaded', () => {
    const cartItems = localStorage.getItem('cartItems')

    if (cartItems) {
      const items = JSON.parse(cartItems)
      items.forEach(teff => {
        const teffCard = document.createElement('div')
        teffCard.classList.add('card')
        teffCard.innerHTML = `
        <img style="height: 400px; width: 400px;" src="images/packet.png" />
        <h1>${teff.name}</h1>
        <p>${teff.description}</p>
        <p id="price">$ ${teff.price}</p>
        `
        cartContainer.appendChild(teffCard)
      })
    }
})