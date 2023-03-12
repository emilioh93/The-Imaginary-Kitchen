import { useState } from 'react';

const useMenu = () => {
  const [menus, setMenus] = useState([]);
  const [menu, setMenu] = useState([]);

  const getMenus = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + '/menus');
      const jsonData = await response.json();

      setMenus(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteMenu = async id => {
    try {
      await fetch(process.env.REACT_APP_API_URL + `/menus/${id}`, {
        method: 'DELETE',
      });

      setMenus(menu.filter(item => item.menu_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const addMenu = async newMenu => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + '/menus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMenu),
      });

      const jsonData = await response.json();
      setMenus([...menu, jsonData]);
    } catch (err) {
      console.error(err.message);
    }
  };

  const updateMenu = async (id, updatedMenu) => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + `/menus/${id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedMenu),
        }
      );

      const jsonData = await response.json();
      setMenus(
        menu.map(item =>
          item.menu_id === updatedMenu.menu_id ? jsonData : item
        )
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  const getMenuById = async id => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + `/menus/${id}`
      );
      const jsonData = await response.json();

      setMenu(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  return {
    menu,
    menus,
    getMenus,
    deleteMenu,
    addMenu,
    updateMenu,
    getMenuById,
  };
};

export default useMenu;
