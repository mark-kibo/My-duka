import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';



export default function Table({ tableoptions }) {



    const rows = []

    const columns = [
        {
            field: 'Prefix',
            headerName: 'Prefix',
            width: 150,
            type: 'string',
        },
        {
            field: 'ShareName',
            headerName: 'ShareName',
            width: 150,
            type: 'string',
        },
        {
            field: 'ShortDesc',
            headerName: 'Description',
            width: 150,
            type: 'string',
        },
        {
            field: 'MonthlyCont',
            headerName: 'Monthly Cont',
            width: 150,
            type: 'number', // Assuming it's a numeric field
        },
        {
            field: 'MinBal',
            headerName: 'Min Bal',
            width: 150,
            type: 'number', // Assuming it's a numeric field
        },
    ];
    return (
        <Box sx={{ height: 400, width: 1  }}>
            <DataGrid
                rows={rows}
                columns={columns}
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                rowSelection
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                    },
                }}
            />
        </Box>
    );
}
