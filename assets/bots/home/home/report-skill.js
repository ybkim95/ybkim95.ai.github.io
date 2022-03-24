// Add squares
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }

const squares = document.querySelector('.squares');
for (var i = 1; i < getRandomInt(20,30); i++) {
  const level = Math.floor(5);  
  squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
}
for (var i = 1; i < getRandomInt(14,22); i++) {
    const level = Math.floor(4);  
    squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
  }
for (var i = 1; i < getRandomInt(10,15); i++) {
const level = Math.floor(3);  
squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
}
for (var i = 1; i < getRandomInt(8,12); i++) {
    const level = Math.floor(2);  
    squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
}
for (var i = 1; i < getRandomInt(3,7); i++) {
    const level = Math.floor(1);  
    squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
}