import React from 'react'
import Table from '../../Reusables/Table'

const SupplyRequest = () => {
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