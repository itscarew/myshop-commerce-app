const setItem = (name, data) => {
  const value = typeof data === "object" ? JSON.stringify(data) : data;
  if (typeof window !== "undefined") {
    localStorage.setItem(name, value);
  }
};

const getItem = (name) => {
  if (typeof window !== "undefined") {
    let data = localStorage.getItem(name);
    try {
      return JSON.parse(data);
    } catch {
      return data;
    }
  }
};

const removeItem = (name) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(name);
  }
};

const removeItems = (...items) => {
  if (typeof window !== "undefined") {
    items.forEach((item) => {
      localStorage.removeItem(item);
    });
  }
};

const clearStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
};

const LocalStorage = {
  setItem,
  getItem,
  removeItem,
  removeItems,
  clearStorage,
};

export default LocalStorage;
