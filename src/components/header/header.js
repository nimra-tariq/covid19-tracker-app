import * as React from 'react';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import AppBar from '@material-ui/core/AppBar';
import { useStyles } from './styles';

export default function Header() {
    const classes=useStyles();
    return (<>
        <Box sx={{ flexGrow: 1 }} className={classes.box}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <img className={classes.logoImg} src="logo.png" alt="logo" align="center" />
                </Toolbar>
            </AppBar>
        </Box>
    </>);
}