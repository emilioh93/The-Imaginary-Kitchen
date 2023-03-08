import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import AdminTable from '../../common/components/AdminTable';
import Title from '../../common/components/Title';
import useCategory from '../../hooks/useCategory';

const AdminCategories = () => {
  const { categories, getCategories } = useCategory();
  const columns = [
    { id: 1, label: 'Name' },
    { id: 2, label: 'Description' },
  ];
  const createRows = () => {
    const tmpRows = [];
    categories.forEach(category => {
      tmpRows.push({
        id: category._id,
        atributtes: [category.name, category.description],
      });
    });
    return tmpRows;
  };
  const rows = createRows();

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Title>Admin Categories</Title>
      <AdminTable
        columns={columns}
        rows={rows}
        linkToAddNew='/admin-categories/new'
      />
    </Container>
  );
};

export default AdminCategories;
