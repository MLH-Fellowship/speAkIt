import * as React from 'react';

import Box from '@mui/material/Box';

import UserInput from './input';
import Instructions from './instructions';
import Output from './output';



function Layout(props) {
    return (
        <div style={{ marginTop: `20px`, marginLeft: `122px` }}>
            <Box sx={{ width: 1 }}>
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                    <Box sx={{ ml: 40, width: 1000 }} gridColumn="span 10">
                        <Instructions />
                    </Box>
                    <Box sx={{ ml: 40, width: 1000 }} gridColumn="span 10">
                        <UserInput />
                    </Box>
                    {/* <Box sx={{ ml: 40, width: 1000 }} gridColumn="span 10">
                        <Output />
                    </Box> */}
                </Box>
            </Box>
        </div>
    );

}

export default Layout;