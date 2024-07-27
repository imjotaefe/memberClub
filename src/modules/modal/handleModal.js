const modal = document.querySelector(".modal");
const buttonClose = document.getElementById("closeButton");

export const handleModal = (status) => {
  if(status){
    modal.classList.add("opened");
  } else{
    modal.classList.remove("opened");
  }
}

buttonClose.onclick = () => {
  handleModal(false);
}