import { getCustomer } from "../../services/customer";
import { updateCards } from "../cards/handleCards";
import { handleModal } from "../modal/handleModal";

const form = document.querySelector("form");
const input = document.querySelector("input");

form.onsubmit = async (event) => {
  event.preventDefault();
  const customer = await getCustomer(input.value);

  if(!customer){
    input.value = "";
    return;
  }

  if(customer.loyaltyCard.cutsRemaining === 0) {
    handleModal(true);
  }
  updateCards(customer);
}