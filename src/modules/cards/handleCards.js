import { updateGraphCard } from "./graphCard"
import { clearHistoryCard, updateHistoryCard } from "./historyCard";
import { clearFidelityCard, updateFidelityCard } from "./fidelityCard";
import { updateUserProfileCard } from "./userProfileCard";

export const updateCards = (customer) => {
  cleanCards();
  updateGraphCard(customer);
  updateHistoryCard(customer);
  updateFidelityCard(customer);
  updateUserProfileCard(customer);
}

const cleanCards = () => {
  clearHistoryCard();
  clearFidelityCard();
}