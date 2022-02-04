import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const Input = styled('input')({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
});

function UploadItem(props) {

    const UPLOAD_URL = `${process.env.REACT_APP_UPLOAD}:8000/upload`;
    const TRANSCRIBE_URL = `${process.env.REACT_APP_UPLOAD}:8000/transcribe`;
    let [audioFile, setAudioFile] = useState(null);
    let [sThreeUrl, setSThreeUrl] = useState(null);

    function fileUploadHandler(event) {
        event.preventDefault()
        let data = new FormData()
        data.append("audio_file", audioFile);
        axios.put(UPLOAD_URL, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            setSThreeUrl(res.data.s3_url)

        }).catch((error) => {
            console.log(error);
        });
    }
    let objectFromSThree = {
        s3_url: sThreeUrl,
        language_code: "en-US"
    }


    if (objectFromSThree.s3_url != null) {
        console.log(objectFromSThree);
        axios.post(TRANSCRIBE_URL, objectFromSThree).then(res => {
            console.log(res);

        }).catch((error) => {
            console.log(error);
        });

    }



    return (
        <Stack spacing={2} direction="row">
            <Input accept="audio/*" type="file" onChange={(e) => { setAudioFile(e.target.files[0]) }} />
            <Button onClick={fileUploadHandler} variant="outlined" style={{ width: 800 }}>UPLOAD AUDIO</Button>
        </Stack>
    );
}

export default UploadItem;