import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';



function Instructions(props) {
    return (
        <Card sx={{ display: "flex" }}>

            <CardMedia
                component="img"
                sx={{ width: 180, height: 245 }}
                image="https://raw.githubusercontent.com/MLH-Fellowship/speAkIt/1-frontend-home-page/frontend/src/static/images/speakit.PNG"
                alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography variant="h5" gutterBottom component="div">
                        Welcome to speAkIt!
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Step 1. Add your text below, and check the correct pronunciation by clicking on submit text.
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Step 2. Record yourself reading a few sentences and upload to our app. We will depict you how good your pronouciation is.
                    </Typography>

                </CardContent>

            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>                    <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="success">Green - Good pronunciation!</Alert>

                <Alert severity="warning">Yellow — Kind of good pronunciation!</Alert>
                <Alert severity="error">Red — Bad pronunciation! </Alert>

            </Stack>
            </Box>
        </Card>
    );
}

export default Instructions;