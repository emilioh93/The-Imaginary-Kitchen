import { useState } from 'react';

const useMenu = () => {
  const [menu, setMenu] = useState([]);

  const getMenu = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + '/menus');
      const jsonData = await response.json();

      setMenu(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  return {
    menu,
    getMenu,
  };
};

export default useMenu;
