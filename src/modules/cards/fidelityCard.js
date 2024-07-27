const id = document.getElementById("userId");
const stickersContainer = document.querySelector(".stickersContainer");

export const updateFidelityCard = (customer) => {
  id.innerText = `ID: ${customer.id}`;
  const needed = customer.loyaltyCard.cutsNeeded;
  const totalCuts = customer.loyaltyCard.totalCuts;
  const remaining = customer.loyaltyCard.cutsRemaining;


  for (let index = 0; index < needed; index++) {

    const sticker = document.createElement("div");
    sticker.classList.add("sticker");
    const image = document.createElement("img");

    if(index === needed-1 && remaining !== 0){
      sticker.classList.add("gift");
      image.src="src/assets/icons/gift-fill.svg";
    }else {
      if(index <= totalCuts-1) {
        image.src="src/assets/PinCheck.png";
      }
    }

    sticker.appendChild(image);
    stickersContainer.appendChild(sticker);
  }
}

export const clearFidelityCard = () => {
  stickersContainer.innerHTML = "";
}