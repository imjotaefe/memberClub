
const BASE_URL = "http://localhost:3333"

export const getCustomer = async (id) => {
  const response = await fetch(`${BASE_URL}/clients/${id}`);
  console.log(response.status);
  if(response.status === 404){
    alert("Usuário não encontrado!");
    return null;
  }
  return await response.json();
}