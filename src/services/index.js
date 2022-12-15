const baseURL = "https://labfinal-production.up.railway.app/products";
export const get = async () => {
  try {
    const response = await fetch(`${baseURL}`);
    return await response.json();
  } catch (error) {
    console.log("error", error);
  }
};
