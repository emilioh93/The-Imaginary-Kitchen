import React, { useState } from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import Title from '../../common/components/Title';

const AddNewCategory = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Container>
      <Title>Add new category</Title>
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
          label='Name'
          placeholder='Category name'
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <TextField
          required
          id='outlined-multiline-static'
          label='Description'
          multiline
          rows={4}
          placeholder='Category description'
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
        <Button
          variant='contained'
          color='success'
          type='submit'
          onClick={handleSubmit}
        >
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default AddNewCategory;
