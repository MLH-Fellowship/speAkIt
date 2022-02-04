import * as React from 'react';

import Box from '@mui/material/Box';

import UserInput from './input';
import Instructions from './instructions';
import Output from './output';

function Layout(props) {
    const myComponentStyle = {
        padding: '1.5em 10em 1em 10em',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        }
    return (
        <div style={ myComponentStyle }>
            <Box sx={{ width: 1 }}>
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                    <Box sx={{ width: 1000 }} gridColumn="span 10">
                        <Instructions />
                    </Box>
                    <Box sx={{ width: 1000 }} gridColumn="span 10">
                        <UserInput />
                    </Box>
                    <Box sx={{ width: 1000 }} gridColumn="span 10">

                        <Output />
                    </Box>
                </Box>
            </Box>
        </div>
    );

}

export default Layout;
