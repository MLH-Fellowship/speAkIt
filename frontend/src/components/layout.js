import * as React from 'react';

import Box from '@mui/material/Box';

import TextInput from './textInput';
import Instructions from './instructions';



function Layout(props) {
    return (
        <div style={{ marginTop: `30px` }}>
            <Box sx={{ width: 1 }}>
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                    <Box sx={{ ml: 40, width: 1000 }} gridColumn="span 10">
                        <Instructions />
                    </Box>
                    <Box sx={{ ml: 40, width: 1000 }} gridColumn="span 10">
                        <TextInput />
                    </Box>
                </Box>
            </Box>
        </div>
    );

}

export default Layout;