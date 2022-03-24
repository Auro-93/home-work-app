/*GET LOCAL STORAGE UTILITY*/
export const getLocalStorage = (key) => {
  try {
    const storageItem = localStorage.getItem(key);
    if (storageItem === null) {
      return undefined;
    }
    return JSON.parse(storageItem);
  } catch (error) {
    return undefined;
  }
};

/*SET LOCAL STORAGE UTILITY*/
export const setLocalStorage = (key, value) => {
  try {
    const storageItem = JSON.stringify(value);
    localStorage.setItem(key, storageItem);
  } catch (error) {
    console.log(error);
  }
};
