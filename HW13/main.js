
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


const renderSortedCards = (event) =>{
  const newArr = [...pizzaList].sort((a,b) => {
    type = event.target.value;
    if (a.price < b.price){
      return type  === 'asc' ? -1 : 1
    }

    if (a.price > b.price){
      return type  === 'asc' ? 1 : -1
    }

    if (a.price === b.price){
      return 0
    }
  })
  renderMain(newArr);
}



