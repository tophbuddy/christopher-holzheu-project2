import React from "react";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {AppBar, Toolbar, Typography, Container} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    margin: {
        "& > *": {
            margin: theme.spacing(1)
        }
    },
    spacer: {marginBottom: theme.spacing(10)}
}));

export default function NavBar() {
    const classes = useStyles();
    return (
        <AppBar position='static'>
            <Toolbar >
                <div className={classes.margin}>
                    <Button variant="contained" to={"/home"} component={Link}>
                        Home
                    </Button>
                    <Button variant="contained" to={"/game-easy"} component={Link}>
                        Easy
                    </Button>
                    <Button variant="contained" to={"/game-medium"} component={Link}>
                        Medium
                    </Button>
                    <Button variant="contained" to={"/game-hard"} component={Link}>
                        Hard
                    </Button>
                    <Button variant="contained" to={"/rules"} component={Link}>
                        Rules
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}