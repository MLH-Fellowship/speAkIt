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
                image="https://raw.githubusercontent.com/MLH-Fellowship/speAkIt/1-frontend-home-page/frontend/src/static/images/speakit.PNG"
                alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography variant="h4" gutterBottom component="div">
                        Welcome to speAkIt!
                    </Typography>
                    <Typography variant="h5" gutterBottom component="div">
                        This webapp has the following functionalities:
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        - You can type a text and after a moment you can hear the an audio of it.
                          So you can hear the correct pronunciation!
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        - You can upload an audio of yourself speaking in english and the app will show you how you pronounce each word!
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        <span role="img" aria-label="g">🟢 -> Good pronunciation</span>
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        <span role="img" aria-label="y">🟡 -> Kind of good pronunciation</span>
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        <span role="img" aria-label="r">🔴 -> Bad pronunciation</span>
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        <b>Important:</b> The audio must be an .mp3, if you record a video and change the
                        extension it won't work.
                    </Typography>

                </CardContent>
                <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
            </Box>
        </Card>
    );
}

export default Instructions;