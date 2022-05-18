//get items from local storage
export const getItemFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

//push items to local storage
export const pushItemToLocalStorage = (key, item) => {
    const items = getItemFromLocalStorage(key) ?? [];
    items.push(item);
    localStorage.setItem(key, JSON.stringify(items));
}