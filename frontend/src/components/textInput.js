import * as React from 'react';
import TextField from '@mui/material/TextField';

function TextInput(props) {
    return (
        <form>
            <TextField multiline rows={10} id="outlined-basic" label="Speech Text" variant="filled" style={{ marginTop: 5, marginBottom: 5, width: 1000 }} focused />
        </form>
    );
}

export default TextInput;