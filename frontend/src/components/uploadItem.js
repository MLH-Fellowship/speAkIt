import React, { useEffect, useState } from 'react';
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
    let [transcriptionJob, setTranscriptionJob] = useState("");

    useEffect(() => {
        console.log(transcriptionJob);
        setTimeout(() => axios.get(`${TRANSCRIBE_URL}?transcription-job-name=${transcriptionJob}`).then(res => { console.log(res) }), 30000)
    }, [TRANSCRIBE_URL, transcriptionJob])

    function fileUploadHandler(event) {
        let data = new FormData()
        event.preventDefault()

        data.append("audio_file", audioFile);
        axios.put(UPLOAD_URL, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res.data.s3_url);
            return res.data.s3_url
        }).then(s3_url => {
            let objectFromSThree = {
                s3_url: s3_url,
                language_code: "en-US"
            }
            console.log(objectFromSThree)
            return objectFromSThree
        }).then(objectFromSThree => { return axios.post(TRANSCRIBE_URL, objectFromSThree) })
            .then(res => { return res.data.transcription_job_name })
            .then((transcriptionJobName) => {
                console.log(transcriptionJobName)
                return transcriptionJobName
            }).then(transcriptionJobName => {
                setTranscriptionJob(transcriptionJobName)
                console.log(transcriptionJob);
                return axios.get(`${TRANSCRIBE_URL}?transcription-job-name=${transcriptionJobName}`)
            }).then(res => {
                console.log(res)
            })
            .catch((error) => {
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