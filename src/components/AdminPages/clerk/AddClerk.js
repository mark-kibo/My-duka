import React from 'react'

import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

const AddClerk = () => {
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }

    return (
        <>
            <Button onClick={() => setOpenModal(true)} className='cursor-pointer'>Add clerk</Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <form method='POST'>
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create new product</h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Product name" />
                                </div>
                                <TextInput
                                    id="name"
                                    type='text'

                                    // onChange={(event) => setEmail(event.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="quantity" value="Product quantity" />
                                </div>
                                <TextInput
                                    id="quantity"
                                    type='number'

                                    // onChange={(event) => setEmail(event.target.value)}
                                    required
                                />
                            </div>


                            <div className="w-full">
                                <Button>add clerk</Button>
                            </div>

                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}



export default AddClerk