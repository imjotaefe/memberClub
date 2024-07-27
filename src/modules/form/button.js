const button = document.querySelector("button");

export const disableButton = () => {
  button.classList.remove("buttonActived");
  button.setAttribute("disabled",true);
}

export const activeButton = () => {
  button.classList.add("buttonActived");
  button.removeAttribute("disabled");
}