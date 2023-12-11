import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';



export default function Table({ tableoptions }) {



    
    return (
        <Box sx={{ height: 400, width: 1  }}>
            <DataGrid
                rows={tableoptions.rows}
                columns={tableoptions.columns}
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
