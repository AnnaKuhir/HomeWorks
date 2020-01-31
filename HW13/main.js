//-----------------------------15.1---------------------------------------
const pizzaCardContainer = document.querySelector('.pizza-info')
const pizzaCardEle = document.getElementById('pizzaContainer')

pizzaCardContainer.addEventListener('click', function (e) {
  const elClassName = e.target.className;
  if (elClassName === 'pizza-info') {
    this.style.display = 'none'
  }
})

const renderPizzaCard = (pizza) => {
  const teamplate = ` 
  <div class="pizza-img"><img src = ${pizza.img} alt = 'Pizza'></div>
  <div class = "info-pizza">
  <h1>${pizza.name}</h1>
  <p>Состав:</p>
  <ul>
  ${pizza.composition.map(composition => {
    return `<li> ${composition} </li>`
  }).join('')
    }
  </ul>
  <p>Цена ${pizza.price}</p>
  <p>Калорийность ${pizza.caloricity}</p>
  </div>
  `

  pizzaCardEle.innerHTML = teamplate;
}



//-----------------------------15.2---------------------------------------
const addPizzaButton = document.getElementById('add-pizza')

const createNewPizza = () => {
  const compositions = pizzaList.map(item => item.composition).flat(1);
  const setCompose = Array.from(new Set(compositions)).sort();
  const template = `
  <form id='create-pizza-form'>
  <label  for="pizzaName">Введите название пиццы</label>
  <input type="text" id="pizzaName" name="pizza-name" placeholder="Название пиццы">
  <p> Выбери ингридиент </p>
  <div class = "compositions" id = "wrapper">
  ${setCompose.map(x => {
    return `<label class = "comp-list"><input type="checkbox">${x}</label>`
  }).join('')
    }
  </div>
  <p>Укажи цену</p>
  <input type="text" id="pizzaPrice" name="pizza-price" placeholder="Цена">

  <p>Укажи калории</p>
  <input type="text" id="pizzaCaloricity" name="pizza-calorisity" placeholder="Калории">
  <div class = "create-btn">
  <button id="new-pizza-btn" type="button" onclick="createPizza()">Создать</button>
  </div>
  </form>
  `
  pizzaCardEle.innerHTML = template
}

addPizzaButton.onclick = function () {
  const pizza = pizzaList[0];
  createNewPizza(pizza)
  pizzaCardContainer.style.display = 'flex';

}

const createBtn = document.getElementById('new-pizza-btn');
const formValue = document.getElementById('create-pizza-form')

const createPizza = () => {
  const pizzaName = document.getElementById('pizzaName');
  const pizzaPrice = document.getElementById('pizzaPrice');
  const pizzaCaloricity = document.getElementById('pizzaCaloricity');
  const checkboxWrapper = document.getElementById('wrapper')
  let newPizza = {};
  newPizza.composition = [];
  newPizza.selfCreated = true;
  if (pizzaName) {
    newPizza.name = pizzaName.value;
  }
  if (pizzaPrice) {
    newPizza.price = pizzaPrice.value;
  }
  if (pizzaCaloricity) {
    newPizza.caloricity = pizzaCaloricity.value;
  }


  let childEl = checkboxWrapper.getElementsByTagName('label');
  let children = Array.from(childEl);
  children.forEach(item => {
    let input = item.getElementsByTagName('input')[0];
    if (input && input.checked) {
      newPizza.composition.push(item.innerText)
    }

  })
  pizzaList.push(newPizza);
  sessionStorage.setItem('pizzas', JSON.stringify(pizzaList));
  renderMain(pizzaList);
  pizzaCardContainer.style.display = 'none';
}



const pizzaCard = (pizza) => {
  //------------------------------------------15.2-------------------
  if (!pizza.composition) {
    pizza.composition = [];
  }
  //-------------------------------------------------------------------
  const card = document.createElement('div')
  card.className = 'pizzaCard';
  card.id = `pizza${pizza.id}`;

  card.onclick = function () {
    renderPizzaCard(pizza)
    pizzaCardContainer.style.display = 'flex';
  }

  if (pizza.selfCreated) {
    const selfElem = document.createElement('div')
    selfElem.className = 'self-element'
    selfElem.innerText = 'Your pizza'
    card.appendChild(selfElem)
  }

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
  //---------------------------------4--------------------------------------------

  button.addEventListener('click', function (event) {
    let choosePizzaId = +button.parentNode.id.replace('pizza', '');
    console.log(event)

    newArr = [...pizzaList];
    for (let value of newArr) {
      if (value.id === choosePizzaId) {
        value.isFavorite = true;
      }
    }
    console.log(newArr)
  });

  // console.dir(card)
  return card
}


const renderMain = () => {
  let list = [];
  const pizzas = sessionStorage.getItem('pizzas');
  if(pizzas){
    list = JSON.parse(pizzas);
  }else{
    list = pizzaList;
  }
  const mainEl = document.querySelector('main')
  mainEl.innerHTML = ''
  for (let pizza of list) {
    const card = pizzaCard(pizza)
    mainEl.classList.add('pizzaMenu')
    mainEl.appendChild(card)
  }
}
renderMain()


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
  if (priceInputFrom.value && priceInputTo.value) {
    return [...array].filter(pizza => pizza.price >= priceInputFrom.value && pizza.price <= priceInputTo.value)
  }
  else {
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
  chooseValue.value = null;
  priceInputFrom.value = null;
  priceInputTo.value = null;
  caloryInputFrom.value = null;
  caloryInputTo.value = null;
  searchBtn.value = null;

  renderMain(pizzaList)
}

const resetAllBtn = document.getElementById('reset-all');
resetAllBtn.addEventListener('click', resetAllChoose);





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


