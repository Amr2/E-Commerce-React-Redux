// requesting methods for products
export const GetALlProducts = async () => {
  return await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .catch((res) => console.error(res));
};

export const GetProduct = async (id) => {
  return await fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .catch((res) => console.error(res));
};

export const GetALlCategories = async () => {
  return await fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .catch((res) => console.error(res));
};

export const GetProductinCategory = async (category) => {
  return await fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => res.json())
    .catch((res) => console.error(res));
};

export const GetALlCarts = async () => {
  return await fetch("https://fakestoreapi.com/carts")
    .then((res) => res.json())
    .catch((res) => console.error(res));
};

export const GetCart = async (id) => {
  return await fetch(`https://fakestoreapi.com/carts/${id}`)
    .then((res) => res.json())
    .catch((res) => console.error(res));
};

export const GetALlUsers = async () => {
  return await fetch("https://fakestoreapi.com/users")
    .then((res) => res.json())
    .catch((res) => console.error(res));
};

export const GetUser = async (id) => {
  return await fetch(`https://fakestoreapi.com/users/${id}`)
    .then((res) => res.json())
    .catch((res) => console.error(res));
};

export const GetALLStoreData = async () => {
  const Users = await GetALlUsers();
  const Carts = await GetALlCarts();
  const Products = await GetALlProducts();

  return { Users, Carts, Products };
};
