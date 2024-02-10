const LocalStorageHelper = {
    getItem: (key) => {
      try {
        const item = localStorage.getItem(key);
        return JSON.parse(item);
      } catch (error) {
        console.error("Error retrieving item from localStorage:", error);
        return null;
      }
    },
  
    setItem: (key, value) => {
      try {
        const item = JSON.stringify(value);
        localStorage.setItem(key, item);
      } catch (error) {
        console.error("Error setting item in localStorage:", error);
      }
    },
  
    removeItem: (key) => {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error("Error removing item from localStorage:", error);
      }
    },
  
    clear: () => {
      try {
        localStorage.clear();
      } catch (error) {
        console.error("Error clearing localStorage:", error);
      }
    },
  };
  
  export default LocalStorageHelper;
  