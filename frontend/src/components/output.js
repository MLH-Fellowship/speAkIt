import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


function Output(props) {
    console.log(props.transcript);
    return (
        <div>
            <Alert severity="info">
                <AlertTitle>Here is how you did!</AlertTitle>

            </Alert>
        </div>
    );
}

export default Output;