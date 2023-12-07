import React from 'react'
import Table from '../Reusables/Table'
import AddProduct from './AddProduct'

const Products = () => {
    return (

    // <div className='h-full mx-4 my-8 p-2 flex items-center justify-center overflow-hidden'>
    //     <div className='shadow-md rounded-lg'>
    //         <Table/>
    //     </div>
       
    // </div>

    <div className='h-screen flex flex-col mx-4'>
        <div className='mt-2'>
            <AddProduct/>
        </div>
        <div className='rounded-lg flex items-center mt-2'>

            <Table/>
        </div>

    </div>


  )
}

export default Products