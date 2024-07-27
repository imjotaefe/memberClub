const userName = document.getElementById("userName");
const userSince = document.getElementById("userSince");
const userImage = document.getElementById("userImage");

export const updateUserProfileCard = (customer) => {
  console.log(customer);
  userName.innerText = customer.name;
  userSince.innerText = customer.clientSince;
  userImage.src = customer.userImage;
}