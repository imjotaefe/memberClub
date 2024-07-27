const restCut = document.getElementById("restCut");
const totalCut = document.getElementById("totalCut");
const graph = document.getElementById("graph");
const remainingSpan = document.getElementById("remainingSpan");

export const updateGraphCard = (customer) => {
  const total = customer.loyaltyCard.totalCuts;
  const rest = customer.loyaltyCard.cutsRemaining;
  const needed = customer.loyaltyCard.cutsNeeded;


  remainingSpan.innerText = `${restCut !== 1 ? "cortes restantes" : "corte restante"}`

  restCut.innerText= `${rest}`;
  totalCut.innerText= `${total} de ${needed}`;
  graph.style.width = `${total * 10}%`;
}