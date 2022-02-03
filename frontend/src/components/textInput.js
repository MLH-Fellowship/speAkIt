import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import UploadItem from './uploadItem';

function TextInput(props) {
    let [speechText, setSpeechText] = useState("");

    function speechHandler(event) {
        setSpeechText(event.target.value)
    }

    console.log(speechText);

    return (
        <form>
            <TextField onChange={speechHandler} multiline rows={10} id="outlined-basic" label="Speech Text" variant="filled" style={{ marginTop: 5, marginBottom: 22, width: 1000 }} focused />
            <Stack spacing={2} direction="column">
                <Button variant="contained">SUBMIT TEXT</Button>
                <UploadItem />
            </Stack>
        </form>
    );
}

export default TextInput;