const foodDataObjects = (food) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;
  fetch(url)
    .then(res => res.json())
    .then(data => foodCard(data.meals));
}
const foodCard = (arraies) => {
  const cards = document.getElementById('food-cards');
  cards.innerHTML = ``;
  for (const array of arraies) {
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="card">
  <img src="${array.strMealThumb}" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">${array.strMeal
      }</h5>
    <p class="card-text">${array.strInstructions.slice(0, 200)} ......</p>
    <a href="${array.strYoutube}" class="btn btn-primary">Play Recipe</a>
  </div>
</div>
        `
    div.classList.add('c')
    cards.appendChild(div);
  }
}

document.getElementById('food-btn').addEventListener('click', function () {
  const inputField = document.getElementById('food-input');
  const inputValue = inputField.value;
  inputField.value = '';
  foodDataObjects(inputValue);
})
foodDataObjects('');

