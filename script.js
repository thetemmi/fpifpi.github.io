// Начальные значения
let score = 0;
let clickValue = 1;
let multiplierLevel = 0;
let multiplierCost = 50;
let autoClickerCount = 0;
let autoClickerCost = 100;

// Получаем DOM-элементы
const scoreDisplay = document.getElementById('score');
const logo = document.getElementById('logo');

const multiplierCostDisplay = document.getElementById('multiplierCost');
const multiplierLevelDisplay = document.getElementById('multiplierLevel');
const buyMultiplierBtn = document.getElementById('buyMultiplier');

const autoClickerCostDisplay = document.getElementById('autoclickerCost');
const autoClickerCountDisplay = document.getElementById('autoclickerCount');
const buyAutoClickerBtn = document.getElementById('buyAutoclicker');

// Функции для обновления отображения
function updateScoreDisplay() {
  scoreDisplay.textContent = score;
}

function updateStoreDisplays() {
  multiplierCostDisplay.textContent = multiplierCost;
  multiplierLevelDisplay.textContent = multiplierLevel;
  autoClickerCostDisplay.textContent = autoClickerCost;
  autoClickerCountDisplay.textContent = autoClickerCount;
}

// Обработка клика по анимированному логотипу (видео)
logo.addEventListener('click', () => {
  score += clickValue;
  updateScoreDisplay();
});

// Покупка Увеличителя клика
buyMultiplierBtn.addEventListener('click', () => {
  if (score >= multiplierCost) {
    score -= multiplierCost;
    multiplierLevel++;
    clickValue = 1 + multiplierLevel; // каждый уровень увеличивает значение клика
    multiplierCost = Math.floor(multiplierCost * 1.5);
    updateScoreDisplay();
    updateStoreDisplays();
  } else {
    alert("Недостаточно FPI для покупки Увеличителя клика!");
  }
});

// Покупка Автокликера
buyAutoClickerBtn.addEventListener('click', () => {
  if (score >= autoClickerCost) {
    score -= autoClickerCost;
    autoClickerCount++;
    autoClickerCost = Math.floor(autoClickerCost * 1.7);
    updateScoreDisplay();
    updateStoreDisplays();
  } else {
    alert("Недостаточно FPI для покупки Автокликера!");
  }
});

// Функционал автокликера: каждую секунду добавляет очки за каждый купленный автокликер
setInterval(() => {
  if (autoClickerCount > 0) {
    score += autoClickerCount;
    updateScoreDisplay();
  }
}, 1000);

// Инициализация отображения
updateScoreDisplay();
updateStoreDisplays();
