import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import Output from './output';
import Box from '@mui/material/Box';

const Input = styled('input')({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
});

function UploadItem(props) {

    const UPLOAD_URL = `${process.env.REACT_APP_UPLOAD}:8000/upload`;
    const TRANSCRIBE_URL = `${process.env.REACT_APP_UPLOAD}:8000/transcribe`;

    const [audioFile, setAudioFile] = useState(null);
    const [transcript, setTranscript] = useState([]);


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
                // setTranscriptionJob(transcriptionJobName)
                // console.log(transcriptionJob);
                let myInterval = setInterval(() => axios.get(`${TRANSCRIBE_URL}?transcription-job-name=${transcriptionJobName}`).then(res => {
                    if (res.data.transcription) {
                        console.log(res.data.transcription);
                        setTranscript(res.data.transcription)
                        clearInterval(myInterval)
                    }

                }), 5000)
            })
            .catch((error) => {
                console.log(error);
            });
    }
    console.log(transcript)

    return (<>
        <Stack spacing={2} direction="row">
            <Input accept="audio/*" type="file" onChange={(e) => { setAudioFile(e.target.files[0]) }} />
            <Button onClick={fileUploadHandler} variant="outlined" style={{ width: 800 }}>UPLOAD AUDIO</Button>

        </Stack>
        <Box sx={{ ml: 40, width: 1000 }} gridColumn="span 10">
            <Output transcript={transcript} />
        </Box>
    </>
    );
}

export default UploadItem;