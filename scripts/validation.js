const inputElement = document.querySelector('.popup__input');
const inputCheck = document.querySelector('.popup__checkbox');

if (inputElement.validity.valid === true && inputCheck.checked === true) { 
  buttonElement.classList.remove('popup__submit-button_no-active'); 
  buttonElement.disabled = ""; 
} else { 
  buttonElement.classList.add('popup__submit-button_no-active'); 
  buttonElement.disabled = "disabled"; 
}

  inputElement.addEventListener('input', function () { 
      if (inputElement.validity.valid === true && inputCheck.checked === true) {
        buttonElement.classList.remove('popup__submit-button_no-active'); 
        buttonElement.disabled = ""; 
      } else {
        buttonElement.classList.add('popup__submit-button_no-active'); 
        buttonElement.disabled = "disabled"; 
      }
  }); 

  inputCheck.addEventListener('input', function () { 
    if (inputElement.validity.valid === true && inputCheck.checked === true) {
      buttonElement.classList.remove('popup__submit-button_no-active'); 
      buttonElement.disabled = ""; 
    } else {
      buttonElement.classList.add('popup__submit-button_no-active'); 
      buttonElement.disabled = "disabled"; 
    }
}); 

