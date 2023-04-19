export const saveLocalStorage = (key, itens) => {
  localStorage.setItem(key, JSON.stringify(itens));
};

export const getLocalStorage = (key) => {
  const myArray = JSON.parse(localStorage.getItem(key));
  return myArray;
};
