import React, { useEffect, useState } from 'react'
import Table from '../Reusables/Table'
import AddProduct from './AddProduct'
import { useQuery, QueryClient } from 'react-query';
import axios from 'axios';

const queryClient = new QueryClient();

const columns = [
  {
    field: 'product_id',
    width: 150,
    type: 'number',
    headerClassName: 'super-app',
  },
  {
    field: 'product_name',
    width: 150,
    type: 'string',
    headerClassName: 'super-app',
  },
  {
    field: 'description',
    width: 150,
    type: 'string',
    headerClassName: 'super-app',
  },
  {
    field: 'category',
    width: 150,
    type: 'string',
    headerClassName: 'super-app',
  },
  {
    field: 'brand',
    width: 150,
    type: 'string',
    headerClassName: 'super-app',
  },
  {
    field: 'quantity',
    width: 150,
    type: 'number',
    headerClassName: 'super-app',
  },
  {
    field: 'buying_price',
    width: 150,
    type: 'number',
    headerClassName: 'super-app',
  },
  {
    field: 'selling_price',
    width: 150,
    type: 'number',
    headerClassName: 'super-app',
  },
  {
    field: 'payment_status',
    width: 150,
    type: 'string',
    headerClassName: 'super-app',
  },
  {
    field: 'image_url',
    width: 150,
    type: 'string',
    headerClassName: 'super-app',
  },
  {
    field: 'store_id',
    width: 150,
    type: 'number',
    headerClassName: 'super-app',
  },
  {
    field: 'supplier_id',
    width: 150,
    type: 'number',
    headerClassName: 'super-app',
  },
];
const Products = () => {

  const [isLoading, setLoading] = useState(false)

  const [products, setProducts] = useState()

  // // fetch products =
  // const {data, isLoading}= useQuery({
  //     queryKey:["products"],
  //     queryFn:async ()=>{
  //         const res= await axios.get("https://duka.onrender.com/products/")
  //         return res.data
  //     }
  // })

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await axios.get("https://duka.onrender.com/products/");
        setProducts(res.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData()
  }, [])


  let propsObject = {
    rows: products ? products : [],
    columns: columns,
    getRowId: (row) => row.product_id
  };
  return (

    // <div className='h-full mx-4 my-8 p-2 flex items-center justify-center overflow-hidden'>
    //     <div className='shadow-md rounded-lg'>
    //         <Table/>
    //     </div>

    // </div>

    <div className='h-screen flex flex-col mx-4'>
      <div className='my-4'>
        <h2 className='leading-4 font-extrabold text-black text-2xl'>Products available in store</h2>
      </div>
      <div className='mt-2'>
        <AddProduct />
      </div>
      <div className='rounded-lg flex items-center mt-2'>
        {isLoading && (<span className="loading loading-dots loading-lg"></span>)}
        <Table tableoptions={propsObject} />
      </div>

    </div>


  )
}

export default Products