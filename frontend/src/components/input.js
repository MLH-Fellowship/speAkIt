import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import UploadItem from './uploadItem';

function UserInput(props) {

    const POLLY_URL = `${process.env.REACT_APP_UPLOAD}/polly`;

    const [text, setText] = useState("");

    function textHandler(e) {
        setText(e.target.value)
        console.log(text);
    }

    function submitHandler() {
        let polly_request = {
            user_text: text,
            identifier: "polly/"
        }
        console.log(polly_request);
        axios.post(POLLY_URL, polly_request).then((res => {
            console.log(res.data.aws_polly_response.SynthesisTask.OutputUri);
            axios.get(res.data.aws_polly_response.SynthesisTask.OutputUri).then((res) => {
                console.log(res);
            })

        })
        )
    }

    return (
        <form>
            <TextField onChange={textHandler} inputProps={{ maxLength: 250 }} multiline rows={10} id="outlined-basic" label="Speech Text" variant="filled" style={{ marginTop: 5, marginBottom: 22, width: 1000 }} focused />
            <Stack spacing={2} direction="column">
                <Button onClick={submitHandler} variant="contained">SUBMIT TEXT</Button>
                <UploadItem />
            </Stack>
        </form>
    );
}

export default UserInput;