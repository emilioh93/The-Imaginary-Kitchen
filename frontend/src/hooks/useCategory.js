import { useState } from 'react';

const useCategory = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + '/categories'
      );
      const jsonData = await response.json();

      setCategories(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const addCategory = async category => {
    const { name, description } = category;
    try {
      const body = { name, description };
      const response = await fetch(
        process.env.REACT_APP_API_URL + '/categories',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );
      const jsonData = await response.json();
      setCategories([...categories, jsonData]);
    } catch (err) {
      console.error(err.message);
    }
  };

  return {
    categories,
    getCategories,
    addCategory,
  };
};

export default useCategory;
