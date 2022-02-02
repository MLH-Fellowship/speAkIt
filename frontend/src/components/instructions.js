import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function Instructions(props) {
    return (
        <Card sx={{ display: "flex" }}>

            <CardMedia
                component="img"
                sx={{ width: 180, height: 180 }}
                image="https://shorturl.at/efFU1"
                alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography variant="h5" gutterBottom component="div">
                        Welcome to speAkIt!
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Step1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Step2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>

                </CardContent>
                <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
            </Box>
        </Card>
    );
}

export default Instructions;