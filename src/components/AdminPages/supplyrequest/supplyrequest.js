import React from 'react'
import Table from '../../Reusables/Table'
import { useQuery, QueryClient } from 'react-query';
import axios  from "axios"

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



const SupplyRequest = () => {
    // fetch products =
    const {data, isLoading}= useQuery({
        queryKey:["products"],
        queryFn:async ()=>{
            const res= await axios.get("https://duka.onrender.com/products/")
            return res.data
        }
    })

    let propsObject = {
        rows: data ? data : [],
        columns: columns,
    };
    return (
        <div className='h-screen flex flex-col mx-4'>
            
            <div className='rounded-lg flex items-center mt-2'>

                <Table tableoptions={propsObject}/>
            </div>

        </div>

    )
}

export default SupplyRequest