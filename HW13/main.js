
const pizzaCard = (pizza) => {
  const card = document.createElement('div')
  card.className = 'pizzaCard';
  card.id = `pizza${pizza.id}`;

  const img = document.createElement('img')
  img.src = `${pizza.img}`
  img.alt = 'Pizza icon'
  img.classList.add('pizza-card_img')
  card.appendChild(img)

  const head = document.createElement('h1')
  head.classList.add('pizza-card-name')
  head.innerText = `${pizza.name}`
  card.appendChild(head)

  const parag = document.createElement('p');
  parag.classList.add('pizzaInfo');
  parag.innerText = `Ингридиенты: ${pizza.composition.join(', ')}`
  card.appendChild(parag)

  const span = document.createElement('span')
  span.classList.add('pizzaCalorisity')
  span.innerText = `${pizza.caloricity} ккал`
  card.appendChild(span)

  const price = document.createElement('p')
  price.classList.add('pizzaPrice')
  price.innerText = `${pizza.price}.-`
  card.appendChild(price)

  const button = document.createElement('button')
  button.className = 'addPizza'
  button.innerText = 'Add'
  card.appendChild(button)
  console.dir(card)
  return card
}


const renderMain = (list) => {
  const mainEl = document.querySelector('main')
  mainEl.innerHTML = ''
  for (let pizza of list) {
    const card = pizzaCard(pizza)
    mainEl.classList.add('pizzaMenu')
    mainEl.appendChild(card)
  }
}
renderMain(pizzaList)


const search = document.getElementById('search');
search.onclick = function () {
  const searchValue = document.getElementById('search-value');
  renderMain(pizzaList.filter(pizza => pizza.name.toLowerCase().includes(searchValue.value.toLowerCase())))
}


//-------------------------------1---------------------------------

const getPizzaByNameAndComposition = (e) => {
  const conponentSortArray = pizzaList.filter(pizza => 
     pizza.composition.some(item => item.toLowerCase().includes(e.target.value.toLowerCase())))
  const nameSortArray = pizzaList.filter(pizza => 
    pizza.name.toLowerCase().includes(e.target.value.toLowerCase()));
  let resultArray = nameSortArray.concat(conponentSortArray);

  renderMain(resultArray);
}
const searchValue = document.getElementById('search-value');
searchValue.addEventListener('input', getPizzaByNameAndComposition);



//-------------------------------------2------------------------------


const sortByPrice = (array) => {
  const chooseValue = document.getElementById('pizza-sort');
  const newArr = [...array].sort((a, b) => {
    type = chooseValue.value;
    if (a.price < b.price) {
      return type === 'asc' ? -1 : 1
    }

    if (a.price > b.price) {
      return type === 'asc' ? 1 : -1
    }

    if (a.price === b.price) {
      return 0
    }
  })
  return newArr;
}

const searchBtn = document.getElementById('submit-btn')
const priceInputFrom = document.getElementById('price-from')
const priceInputTo = document.getElementById('price-to')
const caloryInputFrom = document.getElementById('calory-from')
const caloryInputTo = document.getElementById('calory-to')

const filterByPrice = (array) => {
  if(priceInputFrom.value && priceInputTo.value){
    return  [...array].filter(pizza => pizza.price >= priceInputFrom.value && pizza.price <= priceInputTo.value)
  }
  else{
    return array;
  }
}

const filterByCalory = (array) => {
  if (caloryInputFrom.value && caloryInputTo.value) {
    return [...array].filter(pizza => pizza.caloricity >= caloryInputFrom.value && pizza.caloricity <= caloryInputTo.value)
  }
  else {
    return array;
  }
}

searchBtn.addEventListener('click', function () {
  renderMain(sortByPrice(filterByCalory(filterByPrice(pizzaList))));
})

//-------------------------------3---------------------------------------------

const resetAllChoose = () => {
  // chooseValue.value = null;
  // priceInputFrom.value = null;
  // priceInputTo.value = null;
  // caloryInputFrom.value = null;
  // caloryInputTo.value = null;
  // searchBtn.value = null;
  renderMain(pizzaList)
}

const resetAllBtn = document.getElementById('reset-all');
resetAllBtn.addEventListener('click', resetAllChoose);



//---------------------------------4--------------------------------------------

button.addEventListener('click', function (event) {

})



//--------------------------------------------------------------------------

// const renderSortedCardsByCal = () => {
//   const chooseValue = document.getElementById('pizza-sort');
//   const newArr = [...pizzaList].sort((a, b) => {
//     type = chooseValue.value;
//     if (a.caloricity < b.caloricity) {
//       return type === 'asc' ? -1 : 1
//     }

//     if (a.caloricity > b.caloricity) {
//       return type === 'asc' ? 1 : -1
//     }

//     if (a.caloricity === b.caloricity) {
//       return 0
//     }
//   })
//   renderMain(newArr);
// }

// const chuse = document.getElementById('change');
// chuse.addEventListener('click', renderSortedCardsByPrice);
// chuse.addEventListener('click', renderSortedCardsByCal);



