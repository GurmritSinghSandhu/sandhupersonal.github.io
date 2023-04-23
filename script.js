const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  const colors = ['red', 'blue', 'green', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  logo.style.color = randomColor;
});
