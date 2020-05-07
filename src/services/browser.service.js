export function getLocalStorage(name) {
  return new Promise((resolve, reject) => {
    try {
      const response = localStorage.getItem(name);
      if (response !== '') { resolve(JSON.parse(response)); } else { resolve(response); }
    } catch (error) {
      reject(error);
    }
  });
}

export function setLocalStorage(name, value) {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem(name, JSON.stringify(value));
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}
