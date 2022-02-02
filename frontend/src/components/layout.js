import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextInput from './textInput';
import Instructions from './instructions';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


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