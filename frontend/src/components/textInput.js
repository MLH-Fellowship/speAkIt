import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function TextInput(props) {
    return (
        <form>
            <TextField multiline rows={10} id="outlined-basic" label="Speech Text" variant="filled" style={{ marginTop: 5, marginBottom: 20, width: 1000 }} focused />
            <Stack spacing={2} direction="column">
                <Button variant="outlined">Record</Button>
                <Button variant="outlined">Upload</Button>
            </Stack>
        </form>
    );
}

export default TextInput;