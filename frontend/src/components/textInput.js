import * as React from 'react';
import TextField from '@mui/material/TextField';

function TextInput(props) {
    return (
        <form>
            <TextField multiline rows={10} id="outlined-basic" label="Speech Text" variant="outlined" style={{ marginTop: 5, marginBottom: 5, width: 800, background: "#eceff1" }} focused />
        </form>
    );
}

export default TextInput;