import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import UploadItem from './uploadItem';
import ReactAudioPlayer from 'react-audio-player';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function UserInput(props) {

    const POLLY_URL = `${process.env.REACT_APP_APIURL}/polly`;

    const [text, setText] = useState("");
    const [audio, setAudio] = useState(null);
    const [working, setWorking] = useState(false);

    function textHandler(e) {
        setText(e.target.value)

    }

    function submitHandler() {
        setWorking(true)

        let polly_request = {
            user_text: text,
            identifier: "polly/" + Date.now()
        }

        axios.post(POLLY_URL, polly_request).then((res => {


            setAudio(res.data.aws_polly_response.SynthesisTask.OutputUri)
            axios.get(res.data.aws_polly_response.SynthesisTask.OutputUri).then((res) => {


            })

        })
        )
    }
    const renderAudio = () => {
        if (audio) {
            return (<ReactAudioPlayer
                src={audio}
                autoPlay
                controls
                style={{ width: '1000px' }}
            />)
        } else if (working) {
            return (<Box sx={{ width: '100%' }}>
                <Typography sx={{ ml: '380px' }}>Converting Your Text To Speech!</Typography>
                <LinearProgress />
            </Box>)
        } else { return "" }
    }

    return (
        <form>
            <TextField onChange={textHandler} inputProps={{ maxLength: 250 }} multiline rows={10} id="outlined-basic" label="Speech Text" variant="filled" style={{ marginTop: 5, marginBottom: 22, width: 1000 }} focused />
            <Stack spacing={2} direction="column">
                <Button onClick={submitHandler} variant="contained">SUBMIT TEXT</Button>
                {renderAudio()}

                <UploadItem />

            </Stack>
        </form>
    );
}

export default UserInput;