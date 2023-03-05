import { useState } from 'react';

const useCategory = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_CATEGORY_URL + '/categories'
      );
      const jsonData = await response.json();

      setCategories(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  return {
    categories,
    getCategories,
  };
};

export default useCategory;
