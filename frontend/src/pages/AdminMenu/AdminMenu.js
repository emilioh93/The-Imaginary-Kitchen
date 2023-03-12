import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import Title from '../../common/components/Title';
import AdminTable from '../../common/components/AdminTable';
import useMenu from '../../hooks/useMenu';

const AdminMenu = () => {
  const { menu, getMenu } = useMenu();
  const columns = [
    { id: 1, label: 'Name' },
    { id: 2, label: 'Description' },
    { id: 3, label: 'Price' },
    { id: 4, label: 'Category' },
    { id: 5, label: 'Image' },
  ];
  const createRows = () => {
    const tmpRows = [];
    menu.forEach(item => {
      tmpRows.push({
        id: item._id,
        atributtes: [
          item.name,
          item.description,
          item.price,
          item.category.name,
          item.image,
        ],
      });
    });
    return tmpRows;
  };
  const rows = createRows();

  useEffect(() => {
    getMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Title>Admin Menu</Title>
      <AdminTable
        columns={columns}
        rows={rows}
        linkToAddNew='/admin-menu/new'
        linkToEdit='/admin-menu/edit'
        // handleDelete={id => deleteCategory(id)}
      />
    </Container>
  );
};

export default AdminMenu;
