const cutCount = document.getElementById("cutCount");
const scheduleList = document.querySelector(".scheduleList");

export const updateHistoryCard = (customer) => {
  const total = customer.loyaltyCard.totalCuts;
  cutCount.innerText = `${total} ${total !== 1 ? "cortes" : "corte"}`

  customer?.appointmentHistory?.forEach(appointment => {
    const schedule = document.createElement('div');
    schedule.classList.add("schedule");
    
    const infoContainer = document.createElement('div');

    const scheduleDate = document.createElement('span');
    scheduleDate.id = "scheduleDate";
    scheduleDate.innerText = appointment.date;
    
    const scheduleTime = document.createElement('span');
    scheduleTime.id = "scheduleTime";
    scheduleTime.innerText = appointment.time;
    
    infoContainer.appendChild(scheduleDate);
    infoContainer.appendChild(scheduleTime);

    schedule.appendChild(infoContainer);

    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    image.src = "./src/assets/icons/check.svg"
    imageContainer.appendChild(image);
    schedule.appendChild(imageContainer);

    scheduleList.appendChild(schedule);
  });
}

export const clearHistoryCard = () => {
  scheduleList.innerHTML = "";
}