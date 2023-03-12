import React, { useEffect, useState } from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import Title from '../../common/components/Title';
import {
  DESCRIPTION_LABEL,
  DESCRIPTION_PLACEHOLDER,
  ERROR_DESCRIPTION_REQUIRED,
  ERROR_NAME_REQUIRED,
  NAME_LABEL,
  NAME_PLACEHOLDER,
  SAVE_BUTTON_TEXT,
} from '../../common/constants/addNewForm';
import useCategory from '../../hooks/useCategory';
import { useParams } from 'react-router-dom';

const AddNewCategory = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
  });
  const { name, description } = form;
  const [errors, setErrors] = useState({});
  const { name: nameError, description: descriptionError } = errors;
  const { id } = useParams();
  const { getCategoryById, category, addCategory, updateCategory } =
    useCategory();

  const handleSubmit = e => {
    e.preventDefault();
    const tmpErrors = {};

    if (name.trim() === '') {
      tmpErrors.name = ERROR_NAME_REQUIRED;
    }
    if (description.trim() === '') {
      tmpErrors.description = ERROR_DESCRIPTION_REQUIRED;
    }
    setErrors(tmpErrors);

    if (Object.keys(tmpErrors).length === 0) {
      if (id) {
        updateCategory(id, form);
        return;
      } else {
        addCategory(form);
      }
      setForm({ name: '', description: '' });
    }
  };

  useEffect(() => {
    if (id) {
      getCategoryById(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setForm({ name: category?.name, description: category?.description });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  if (id && !category) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Title>
        {id ? `Edit category: ${category?.name}` : 'Add new category'}
      </Title>
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TextField
          required
          id='outlined-required'
          label={NAME_LABEL}
          placeholder={NAME_PLACEHOLDER}
          value={name || ''}
          onChange={e => setForm({ ...form, name: e.target.value })}
          type='text'
          error={nameError?.length > 0}
          helperText={nameError?.length > 0 && nameError}
        />
        <TextField
          required
          id='outlined-multiline-static'
          label={DESCRIPTION_LABEL}
          multiline
          rows={4}
          placeholder={DESCRIPTION_PLACEHOLDER}
          value={description || ''}
          onChange={e => setForm({ ...form, description: e.target.value })}
          type='text'
          error={descriptionError?.length > 0}
          helperText={descriptionError?.length > 0 && descriptionError}
        />
        <Button
          variant='contained'
          color='success'
          type='submit'
          onClick={handleSubmit}
        >
          {id ? 'Edit' : SAVE_BUTTON_TEXT}
        </Button>
      </Box>
    </Container>
  );
};

export default AddNewCategory;
