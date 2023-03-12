import * as React from 'react';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';

const CustomTableCell = ({ item }) => {
  if (typeof item === 'string' && item.includes('http')) {
    return (
      <TableCell>
        <img src={item} alt='menu item' width='100px' />
      </TableCell>
    );
  }
  return <TableCell>{item}</TableCell>;
};

export default function AdminTable({
  rows,
  columns,
  linkToAddNew,
  linkToEdit,
  handleDelete,
}) {
  return (
    <>
      <Box display='flex' justifyContent='flex-end' marginBottom='1rem'>
        <Button
          variant='contained'
          color='success'
          component={Link}
          to={linkToAddNew}
        >
          Add new
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {row.atributtes.map((item, index) => (
                  <CustomTableCell key={index} item={item} />
                ))}
                <TableCell>
                  <IconButton
                    aria-label='edit'
                    color='info'
                    component={Link}
                    to={`${linkToEdit}/${row.id}`}
                  >
                    <EditSharpIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton
                    aria-label='delete'
                    color='error'
                    onClick={() => handleDelete(row.id)}
                  >
                    <DeleteSharpIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
