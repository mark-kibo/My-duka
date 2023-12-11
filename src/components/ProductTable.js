import React, { useState, useEffect } from 'react';
import { Modal, Input, Button } from 'antd';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const VISIBLE_FIELDS = ['product_id', 'product_name', 'description', 'category', 'brand', 'quantity', 'buying_price', 'selling_price', 'payment_status', 'image_url', 'store_id', 'supplier_id'];

function ProductTable() {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    fetch('https://duka.onrender.com/products/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Check if data has a 'products' property and it's an array
        const productsArray = Array.isArray(data.products) ? data.products : [];
        const productsWithIds = productsArray.map((product, index) => ({ ...product, id: product.product_id || index }));
        setProducts(productsWithIds);
        console.log('Products after fetch:', productsWithIds);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const columns = VISIBLE_FIELDS.map((field) => ({
    field,
    headerName: field.replace('_', ' ').toUpperCase(),
    flex: 1,
  }));

  

  return (
    <div className="product-table-container" style={{ padding: '20px' }}>
      
      <Box sx={{ height: 400, width: 1 }}>
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={(selection) => {
            setSelectedProductId(selection.selectionModel[0] || null);
          }}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Box>
    </div>
  );
}

export default ProductTable;
