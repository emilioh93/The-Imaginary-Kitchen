import React, { useEffect } from 'react';
import useMenu from '../../../hooks/useMenu';

export const CategoryMenu = ({ category }) => {
  const { menu, getMenu } = useMenu();

  const filteredMenu = menu?.filter(item => item.category._id === category._id);

  useEffect(() => {
    getMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {filteredMenu?.map(item => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <p>{item.image}</p>
        </div>
      ))}
    </div>
  );
};
