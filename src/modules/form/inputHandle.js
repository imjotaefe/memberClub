import { activeButton, disableButton } from "./button";

const input = document.querySelector("input");
const regex = /^\d{3}-\d{3}-\d{3}-\d{3}$/;

input.addEventListener('input', () => {
  input.value = input.value.replace(/[A-Za-z!@#$%^&*(),.?":´{}|<>\\/\[\]; '=_+`~]/,"");
  if (regex.test(input.value)) {
    activeButton();
  }else {
    disableButton();
  }
})