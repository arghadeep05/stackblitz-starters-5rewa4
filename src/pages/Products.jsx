import React from 'react';
import Box from '@mui/material/Box';
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
import '../Dash.css';
import ProductList from '../products/ProductList';
export default function Products() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={30} />
        <Box sx={{ display: 'flex' }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <ProductList />
            <h1>Products </h1>
          </Box>
        </Box>
      </div>
    </>
  );
}
