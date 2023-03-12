import {
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../common/components/Title';
import {
  ERROR_CATEGORY_REQUIRED,
  ERROR_DESCRIPTION_REQUIRED,
  ERROR_IMAGE_REQUIRED,
  ERROR_NAME_REQUIRED,
  ERROR_PRICE_REQUIRED,
  SAVE_BUTTON_TEXT,
} from '../../common/constants/addNewForm';
import useCategory from '../../hooks/useCategory';
import useMenu from '../../hooks/useMenu';

const AddOrEditMenu = () => {
  const { id } = useParams();
  const { categories, getCategories } = useCategory();
  const { addMenu, getMenuById, updateMenu, menu } = useMenu();
  const [form, setForm] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    image: '',
  });
  const { name, price, category, description, image } = form;
  const [errors, setErrors] = useState({});
  const {
    name: nameError,
    price: priceError,
    category: categoryError,
    description: descriptionError,
    image: imageError,
  } = errors;

  const handleSubmit = e => {
    e.preventDefault();
    const tmpErrors = {};

    if (name.trim() === '') {
      tmpErrors.name = ERROR_NAME_REQUIRED;
    }
    if (price === '') {
      tmpErrors.price = ERROR_PRICE_REQUIRED;
    }
    if (category.trim() === '') {
      tmpErrors.category = ERROR_CATEGORY_REQUIRED;
    }
    if (description.trim() === '') {
      tmpErrors.description = ERROR_DESCRIPTION_REQUIRED;
    }
    if (image.trim() === '') {
      tmpErrors.image = ERROR_IMAGE_REQUIRED;
    }
    setErrors(tmpErrors);

    if (Object.keys(tmpErrors).length === 0) {
      if (id) {
        updateMenu(id, form);
      } else {
        addMenu(form);
      }
      setForm({
        name: '',
        price: '',
        category: '',
        description: '',
        image: '',
      });
    }
  };

  useEffect(() => {
    getCategories();
    if (id) {
      getMenuById(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setForm({
      name: menu?.name,
      price: menu?.price,
      category: menu?.category?._id,
      description: menu?.description,
      image: menu?.image,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menu]);

  return (
    <Container>
      <Title>{id ? 'Edit Menu' : 'Add New Menu'}</Title>
      <Grid container spacing={2} component='form' onSubmit={handleSubmit}>
        <Grid item xs={12} sm={4}>
          <TextField
            id='name'
            required
            fullWidth
            label='Name'
            type={'text'}
            value={name || ''}
            onChange={e => setForm({ ...form, name: e.target.value })}
            error={!!nameError}
            helperText={nameError}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id='price'
            required
            fullWidth
            label='Price'
            type={'number'}
            value={price || ''}
            onChange={e => setForm({ ...form, price: e.target.value })}
            error={!!priceError}
            helperText={priceError}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id='category'
            required
            fullWidth
            label='Category'
            select
            value={category || ''}
            onChange={e => setForm({ ...form, category: e.target.value })}
            error={!!categoryError}
            helperText={categoryError}
          >
            {categories.map(item => (
              <MenuItem key={item._id} value={item._id}>
                {item.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='description'
            required
            fullWidth
            label='Description'
            type={'text'}
            value={description || ''}
            onChange={e => setForm({ ...form, description: e.target.value })}
            error={!!descriptionError}
            helperText={descriptionError}
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='image'
            required
            fullWidth
            label='Image'
            type={'url'}
            value={image || ''}
            onChange={e => setForm({ ...form, image: e.target.value })}
            error={!!imageError}
            helperText={imageError}
          />
        </Grid>
        {image && (
          <Grid item xs={12}>
            <Typography variant='h6'>Image preview</Typography>
            <img src={image} alt={name} style={{ width: '400px' }} />
          </Grid>
        )}
        <Grid item xs={12}>
          <Button
            variant='contained'
            color='success'
            type='submit'
            onClick={handleSubmit}
          >
            {id ? (
              <Typography variant='h6'>Update</Typography>
            ) : (
              <Typography variant='h6'>{SAVE_BUTTON_TEXT}</Typography>
            )}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddOrEditMenu;
