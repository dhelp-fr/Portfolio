const cursor = document.querySelector('.cursor');
const buttonsAndLinks = document.querySelectorAll('button, a, img');

document.addEventListener('mousemove', e => {
  cursor.style.top = e.pageY - 20 + "px";
  cursor.style.left = e.pageX - 20 + "px";
});

buttonsAndLinks.forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.classList.add('hovering');
  });

  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('hovering');
  });
});

document.addEventListener('click', () => {
  cursor.classList.add('expand');
  setTimeout(() => {
    cursor.classList.remove('expand');
  }, 500);
});



