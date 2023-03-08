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

export default function AdminTable({ rows, columns }) {
  console.log('🚀 ~ rows:', rows);
  return (
    <>
      <Box display='flex' justifyContent='flex-end' marginBottom='1rem'>
        <Button variant='contained' color='success'>
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
                  <TableCell key={index}>{item}</TableCell>
                ))}
                <TableCell>
                  <IconButton aria-label='edit' color='info'>
                    <EditSharpIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton aria-label='delete' color='error'>
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
