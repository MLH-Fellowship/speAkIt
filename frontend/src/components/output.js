import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';


function Output(props) {

    const data = props.transcript;
    const listItems = data.map((d) => <li style={{ color: d.color }} key={Math.random(200)}>{d.word}</li>);
    const listConfidence = data.map((d) => <li key={Math.random(100)}>{d.confidence}</li>);


    return (
        <div>
            <Alert severity="info">
                <AlertTitle>Here is how you did!</AlertTitle>
                <Stack spacing={30} direction="row">
                    <Typography sx={{ ml: 30 }}>Words: {listItems}</Typography>
                    <Typography>Confidence: {listConfidence}</Typography>
                </Stack>
            </Alert>
        </div>
    );
}

export default Output;