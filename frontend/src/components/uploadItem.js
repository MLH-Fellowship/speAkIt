import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Input } from '@mui/material';

function UploadItem(props) {

    let [audioFile, setAudioFile] = useState(null);

    function fileUploadHandler(event) {
        console.log(audioFile);

    }
    console.log(audioFile)

    return (
        <Stack spacing={2} direction="row">
            <Input type="file" onChange={(e) => { setAudioFile(e.target.files[0]) }} />
            <Button onClick={fileUploadHandler} variant="outlined" style={{ width: 1000 }}>UPLOAD AUDIO</Button>
        </Stack>
    );
}

export default UploadItem;