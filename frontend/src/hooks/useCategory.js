import { useState } from 'react';

const useCategory = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({});

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

  const deleteCategory = async id => {
    try {
      await fetch(process.env.REACT_APP_API_URL + `/categories/${id}`, {
        method: 'DELETE',
      });
      setCategories(categories.filter(category => category.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const updateCategory = async (id, category) => {
    const { name, description } = category;
    try {
      const body = { name, description };
      await fetch(process.env.REACT_APP_API_URL + `/categories/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      setCategories(
        categories.map(category =>
          category.id === id ? { id, name, description } : category
        )
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  const getCategoryById = async id => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + `/categories/${id}`
      );
      const jsonData = await response.json();
      setCategory(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  return {
    categories,
    category,
    getCategories,
    addCategory,
    deleteCategory,
    updateCategory,
    getCategoryById,
  };
};

export default useCategory;
