import React, { useContext, useEffect } from 'react'

import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import axios from 'axios';
import { sidebarcontext } from '../../context/SideBarContext';
import { QueryClient, useMutation } from 'react-query';

const AddProduct = () => {

    const queryClient = new QueryClient()
    const [openModal, setOpenModal] = useState(false);

    const [suppliers, setSuppliers] = useState()
    const [store, setStore]= useState()
    const [formData, setFormData] = useState({})
    const {userId} = useContext(sidebarcontext)

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get("https://duka.onrender.com/suppliers/")
            if (res.status === 200) {
                setSuppliers(res.data.suppliers)
            }
        }
        async function fetchUser() {
            try{
                const res = await axios.get(`https://duka.onrender.com/users/admins/${userId}`)
                if (res.status === 200) {
                    setStore(res.data.store_id)
                }
            }catch{

            }
            
        }
        fetchData()
        fetchUser()
    }, [])


    const supplierOptions = suppliers?.map(supplier => {
        return <option key={supplier.supplier_id} value={supplier.supplier_id}>{supplier.supply_name}</option>
    })

    function onCloseModal() {
        setOpenModal(false);
        setFormData({})
 
    }

    // take in form data
    function handleChange(e){
        let { name, value } = e.target;

        // Check if the field name is one that needs to be converted to an integer
        if (["quantity", "selling_price", "buying_price", "store_id", "supplier_id"].includes(name)) {
            value = parseInt(value, 10); // Convert the value to an integer
        }
    
        setFormData({ ...formData, [name]: value });
    }

    // create mutation
    async function PostProduct(){
        let response
        try{
            const res= await axios.post("https://duka.onrender.com/products/", {...formData})
            response = res.data
        }catch{

        }
        return response
    }
    

    function handleSubmit(e){
        e.preventDefault()

        // post data
        console.log(PostProduct())

    }

    return (
        <>
            <Button onClick={() => setOpenModal(true)} className='cursor-pointer'>AddProduct</Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <form method='POST' onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create new product</h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Product name" />
                                </div>
                                <input type="text" onChange={handleChange} name="product_name" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="description" value="Product description" />
                                </div>
                                <input type="text" onChange={handleChange} name="description" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="category" value="Product category" />
                                </div>
                                <input type="text" onChange={handleChange} name='category' placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="brand" value="Product brand" />
                                </div>
                                <input type="text" onChange={handleChange} name='brand' placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="supplier" value="Product supplier" />
                                </div>
                                <select className="select select-bordered w-full max-w-xs" name='supplier_id' onChange={handleChange}>
                                    <option selected>select supplier</option>
                                    {supplierOptions}
                                </select>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="quantity" value="Product quantity" />
                                </div>
                                <input type="number" onChange={handleChange} name="quantity" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="bp" value="buying price" />
                                </div>
                                <input type="number" onChange={handleChange} name="buying_price" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                            </div>
                          
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="sp" value="selling price" />
                                </div>
                                <input type="number" onChange={handleChange} name="selling_price"  className="input input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="payment_status" value="payment status" />
                                </div>
                                <select onChange={handleChange} className="select select-bordered w-full max-w-xs" name="payment_status" id='payment_status'>
                                    <option>select status</option>
                                    <option value={"paid"}>paid</option>
                                    <option value={"not paid"}>not paid</option>
                                </select>
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="store" value="store" />
                                </div>
                                <select onChange={handleChange} className="select select-bordered w-full max-w-xs" name='store_id' id='store'>
                                    <option value="">select store</option>
                                    <option value={store}>{store}</option>
                                </select>
                            </div>


                            <div onChange={handleChange} className="w-full">
                                <Button type='submit'>add product</Button>
                            </div>

                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}



export default AddProduct