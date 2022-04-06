import React from "react";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

export default function NavBar() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography>React NavBar</Typography>
                <Button to={"/home"} component={Link}>
                    Home
                </Button>
                <Button to={"/game"} component={Link}>
                    Game
                </Button>
                <Button to={"/rules"} component={Link}>
                    Rules
                </Button>
            </Toolbar>
        </AppBar>
    )
}