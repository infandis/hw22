const inputText = document.getElementById('inputText');
const div = document.createElement('div');
div.style.display = 'none';
div.textContent = 'Якщо ви бачите цей текст - все працює!';
inputText.addEventListener('focus', () => {
  div.style.display = 'block';
});
inputText.addEventListener('blur', () => {
  div.style.display = 'none';
});
inputText.parentNode.appendChild(div);
