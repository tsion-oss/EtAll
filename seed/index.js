const db = require('../db')
const { Coffee } = require('../model')
const { Spice }  = require('../model')
const { Teff } = require('../model')
 
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const coffee = [
        {type: `Coffee`, name: 'Yirgacheffe Coffee', image: `images/packet.png`, description: 'Sourced from the Yirgacheffe region of Ethiopia, Yirgacheffe Magic is gorgeously sweet with lush fruit-tones, including orangey citrus, blueberry, dark chocolate, apple cider, and cherry blossom. With a silky and lively mouth-feel, rich acidity, and deeply flavor-saturated finish, you will love the Yirgacheffe Magic in any roast.', price:40 },
        {type: `Coffee`, name: 'Harrar Coffee', image: `images/packet.png`, description: 'Sourced from the Harrar region of Ethiopia, this organic single origin coffee features a rich flavor that is dazzlingly aromatic and fruity. With awesome blueberry notes, dark chocolate and a magical creamy body, you will love the Harrar Regal.', price: 40 },
        {type: `Coffee`, name: ' Sidamo Coffee', image: `images/packet.png`, description: ' Sourced from the Sidamo region in Ethiopia, this organic single-origin coffee features a taste of delicious fruity flavours combined with a sweet, magical body. Each sip contains some chocolate hints, along with notes of lemon, jasmine and lavender. You will certainly discover even more flavors and tastes. ', price: 40 },
        {type: `Coffee`, name: 'Wollega Coffee', image: `images/packet.png`, description: 'Sourced from the Wollega region of Ethiopia, this organic single-origin coffee is mind-blowingly clean. With a deliciously fruity and sweet flavour and a magical body, you will love each sip of the Wollega Ultimate.', price: 40 }
    ]
    await Coffee.deleteMany()
    await Coffee.insertMany(coffee)
    console.log('Created some coffees!')

    const spice = [
        {type: `spice`, name: 'Limut Shiro | Shiro Stew Blend', image: `images/packet.png`, price: 25.99 ,ingredient:'ground Ethiopian chickpeas, yellow peas, fava beans, garlic, ginger, holy basil, thyme, rosemary, fenugreek, and ajowan.' },
        {type: `spice`, name: 'Berbere | Ethiopian Red Chili Blend', image: `images/packet.png`, price: 22.99 , ingredient:'Ethiopian red pepper, ajowan, nigella seeds, coriander, fenugreek, clove, cassia seeds, garlic, ginger, and onion.' },
        {type: `spice`, name: 'Mitten Shiro | Shiro Stew Blend with Berbere', image: `images/packet.png`, price: 23.99 ,ingredient:'ground Ethiopian chickpeas, yellow peas, fava beans, garlic, ginger, holy basil, thyme, rosemary, fenugreek, berbere chilli, ajowan, nigella seeds, coriander, clove, cassia seeds, and onion powder.' },
        {type: `spice`, name: 'Korerima | Ground Ethiopian cardamom', image: `images/packet.png`, price: 25.99 , ingredient:'Ethiopian cardamom' },
        {type: `spice`, name: 'Mitmita | African Bird Eye Chili Blend', image: `images/packet.png`, price: 27.99 , ingredient:'African birds-eye chili pepper, Ethiopian cardamom, salt.' },
        {type: `spice`, name: 'Qibbeh Manteria | Ethiopian Butter Spice Blend ', image: `images/packet.png`, price: 22.99 , ingredient:' koseret, korerima, holy basil, thyme, dried garlic, Ethiopian black cumin (nigella seeds), Ethiopian caraway seeds (ajowan), and fenugreek.' },
        {type: `spice`, name: 'Mekelesha | Seven Spice Rounding off Blend', image: `images/packet.png`, price: 21.99 , ingredient:'Ethiopian nutmeg (gewz), Ethiopian cardamom (korerima), cinnamon, black pepper, cumin, Indian long pepper (timiz), and cloves.' },
        {type: `spice`, name: 'Tibes Qimmem | Roasting Blend', image: `images/packet.png`, price: 19.99 , ingredient:' rosemary, korerima, black pepper, and garlic.' },
        {type: `spice`, name: 'Nech Qimmem | Ethiopian Caraway Seed Blend', image: `images/packet.png`, price: 18.99,  ingredient:'ajowan, korerima, and dried garlic. ' },
        {type: `spice`, name: 'Tikur Qimmem | Ethiopian Black Cumin Blend', image: `images/packet.png`, price:17.99, ingredient:'nigella seeds, dried garlic, holy basil, and korerima.' },
        
        
    ]
    await Spice.deleteMany()
    await Spice.insertMany(spice)
    console.log('Created some Spices!')


    const teff = [
        {type: `teff`, name: 'Et Teff flour', image: `images/packet.png`, price:20.99, description: 'Teff is a naturally gluten-free grain packed with lots of nutrients and minerals. It is a staple food in Ethiopia and across the Horn of Africa. In Ethiopia, it is mainly used to make injera, a fermented sourdough pancake-like bread.', productInfo:'Our Et teff flour is made from 100% Ethiopian teff grain. It is stone-milled to maintain its natural flavour. Teff flour can be used to make injera or as a healthy and gluten-free substitute in baking and cooking.' },
        {type: `teff`, name: 'Et Brown Teff Flour', image: `images/packet.png`, price: 20.99, description: 'Teff is a naturally gluten-free grain packed with lots of nutrients and minerals. It is a staple food in Ethiopia and across the horn of Africa. In Ethiopia, it is mainly used to make injera, a fermented sourdough pancake-like bread.', productInfo:'Our brown teff flour is made from 100% Ethiopian teff grain. It is stone-milled to maintain its natural flavours. Teff flour can be used to make injera or as a healthy and gluten-free substitute in baking and cooking. ' },
        
    ]
    await Teff.deleteMany()
    await Teff.insertMany(teff)
    console.log('Created some Teffs!')
}
const run = async () => {
    await main()
    db.close()
}

run()