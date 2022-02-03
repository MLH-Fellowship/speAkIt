import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import AWS from 'aws-sdk'

const S3_BUCKET = 'speakitaudiobucket/files';
const REGION = 'us-east-1';

AWS.config.update({
    accessKeyId: '',
    secretAccessKey: ''
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
})

const Input = styled('input')({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
});

function UploadItem(props) {

    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }
    const uploadFile = (file) => {

        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: file.name
        };

        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
            })
            .send((err) => {
                if (err) console.log(err)
            })
    }

    return (
        <Stack spacing={2} direction="row">
            <Typography> Upload Progress is {progress}%</Typography>
            <Input accept="audio/*" type="file" onChange={handleFileInput} />
            <Button onClick={() => uploadFile(selectedFile)} variant="outlined" style={{ width: 800 }}>UPLOAD AUDIO</Button>
        </Stack>
    );
}

export default UploadItem;