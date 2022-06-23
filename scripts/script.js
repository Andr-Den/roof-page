const menu = document.querySelector('.content__bulletins-without-button');
const openMenuButton = document.querySelector('.bulletins__button-open');
const closeMenuButton = document.querySelector('.bulletins__button-close');
const text = document.querySelector('.bulletins__description');
const image = document.querySelector('.bulletins__bottom-image');
 
openMenuButton.addEventListener('click', () => { 
  menu.classList.add('content__bulletins-without-button_open')
  openMenuButton.classList.remove('bulletins__button_open')
  closeMenuButton.classList.add('bulletins__button_open')
  text.classList.remove('bulletins__description_open')
  image.classList.add('bulletins__bottom-image_open')
}); 

closeMenuButton.addEventListener('click', () => { 
  menu.classList.remove('content__bulletins-without-button_open')
  closeMenuButton.classList.remove('bulletins__button_open')
  openMenuButton.classList.add('bulletins__button_open')
  text.classList.add('bulletins__description_open')
  image.classList.remove('bulletins__bottom-image_open')
}); 




