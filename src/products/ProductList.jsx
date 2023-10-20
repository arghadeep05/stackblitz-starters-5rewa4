import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import Typography from '@mui/material/Typography';
import TableRow from '@mui/material/TableRow';
import { useState, useEffect } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Divider from '@mui/material/Divider';
import { db } from '../firebase-config';
import Modal from '@mui/material/Modal';
import AddProduct from './AddProduct';
import { useAppStore } from '../appStore';
import EditProduct from './EditProduct';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import '../Dash.css';

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [];
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ProductList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const setRows = useAppStore((state) => state.setRows);
  const rows = useAppStore((state) => state.rows);
  const empCollectionRef = collection(db, 'products');
  const [formid, setFormid] = useState('');
  const [open, setOpen] = useState(false);
  const [editopen, setEditOpen] = useState(false);
  const [editclose, setEditClose] = useState(false);

  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };

  const deleteApi = async (id) => {
    const userDoc = doc(db, 'products', id);
    await deleteDoc(userDoc);
    Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
    getUsers();
  };

  const editUser = (id, name, price, category) => {
    const data = {
      id: id,
      name: name,
      price: price,
      category: category,
    };
    setFormid(data);
    handleEditOpen();
  };

  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
      setRows([]);
      getUsers();
    }
  };

  return (
    <>
      <div>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AddProduct closeEvent={handleClose} />
          </Box>
        </Modal>
        <Modal
          open={editopen}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <EditProduct closeEvent={handleEditClose} fid={formid} />
          </Box>
        </Modal>
      </div>
      {rows.length > 0 && (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: '20px' }}
          >
            Products List
          </Typography>
          <Divider />
          <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={rows}
              sx={{ width: 300 }}
              onChange={(e, v) => filterData(v)}
              getOptionLabel={(rows) => rows.name || ''}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Search Products" />
              )}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <div style={{ display: 'flex' }}>
              <Button
                variant="contained"
                style={{ marginRight: '50px' }}
                endIcon={<AddCircleIcon />}
                onClick={handleOpen}
              >
                Add
              </Button>
            </div>
          </Stack>
          <Box height={10} />
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{ minWidth: '100px' }}>
                    Name
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: '100px' }}>
                    Price
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: '100px' }}>
                    Category
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: '100px' }}>
                    Date
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: '100px' }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        <TableCell key={row.id} align="left">
                          {row.name}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          {row.price}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          {row.category}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          {row.date}
                        </TableCell>
                        <TableCell align="left">
                          <Stack sapcing={2} direction="row">
                            <EditIcon
                              style={{
                                fontSize: '20px',
                                color: 'darkred',
                                cursor: 'pointer',
                              }}
                              classsName="cursor-pointer"
                              onClick={() =>
                                editUser(
                                  row.id,
                                  row.name,
                                  row.price,
                                  row.category
                                )
                              }
                            />
                            <DeleteIcon
                              style={{
                                fontSize: '20px',
                                color: 'darkred',
                                cursor: 'pointer',
                              }}
                              onClick={() => {
                                deleteUser(row.id);
                              }}
                            />
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
      {rows.length == 0 && (
        <>
          <Paper sx={{ width: '98%', overflow: 'hidden', padding: '12px' }}>
            <Box height={20} />
            <Skeleton variant="rectangular" width={'100%'} height={30} />
            <Box height={40} />
            <Skeleton variant="rectangular" width={'100%'} height={60} />
            <Box height={20} />
            <Skeleton variant="rectangular" width={'100%'} height={60} />
            <Box height={20} />
            <Skeleton variant="rectangular" width={'100%'} height={60} />
            <Box height={20} />
            <Skeleton variant="rectangular" width={'100%'} height={60} />
            <Box height={20} />
            <Skeleton variant="rectangular" width={'100%'} height={60} />
          </Paper>
        </>
      )}
    </>
  );
}
