import React from 'react';
import { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import InputAdornment from '@mui/material/InputAdornment';
import { db } from '../firebase-config';
import Swal from 'sweetalert2';
import {
  collection,
  updateDoc,
  getDocs,
  doc,
  get,
  addDoc,
} from 'firebase/firestore';
import MenuItem from '@mui/material/MenuItem';
import { useAppStore } from '../appStore';

export default function EditProduct({ fid, closeEvent }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const setRows = useAppStore((state) => state.setRows);

  const currencies = [
    {
      value: 'Mobile',
      label: 'Mobile',
    },
    {
      value: 'Laptop',
      label: 'Laptop',
    },
    {
      value: 'Headphones',
      label: 'Headphones',
    },
    {
      value: 'Electronics',
      label: 'Electronics',
    },
  ];

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const empCollectionRef = collection(db, 'products');

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const createUser = async () => {
    const userDoc = doc(db, 'products', fid.id);
    const newFields = {
      name: name,
      price: Number(price),
      category: category,
      date: String(new Date()),
    };
    await updateDoc(userDoc, newFields);
    getUsers();
    closeEvent();
    Swal.fire('Submitted!', 'Your file has been updated.', 'success');
  };

  useEffect(() => {
    console.log('FID: ' + fid.id);
    setName(fid.name);
    setPrice(fid.price);
    setCategory(fid.category);
  }, []);

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Edit Products
      </Typography>
      <IconButton
        style={{ position: 'absolute', top: '0', right: '0' }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            size="small"
            onChange={handleNameChange}
            sx={{ minWidth: '100px' }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic-6-1"
            label="Price"
            variant="outlined"
            value={price}
            size="small"
            type="number"
            onChange={handlePriceChange}
            sx={{ minWidth: '100px' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRupeeIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic-6-2"
            select
            label="Category"
            variant="outlined"
            value={category}
            size="small"
            onChange={handleCategoryChange}
            sx={{ minWidth: '100%' }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button variant="contained" onClick={createUser}>
              Submit
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
