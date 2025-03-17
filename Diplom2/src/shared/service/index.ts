const StorageService = {
  setItem: (key: string, value: any) => {
    try {
      console.log(key, value);
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);

      if (key === "refresh") {
        window.dispatchEvent(new Event("authChange"));
      }
    } catch (error) {
      console.error("Ошибка при сохранении в localStorage", error);
    }
  },

  getItem: (key: string) => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error("Ошибка при получении из localStorage", error);
      return null;
    }
  },

  removeItem: (key: string) => {
    try {
      localStorage.removeItem(key);

      if (key === "refresh") {
        window.dispatchEvent(new Event("authChange"));
      }
    } catch (error) {
      console.error("Ошибка при удалении из localStorage", error);
    }
  },

  clear: () => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Ошибка при очистке localStorage", error);
    }
  },
};

export default StorageService;
