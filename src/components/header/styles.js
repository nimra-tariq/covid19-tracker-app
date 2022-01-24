import {  makeStyles, createStyles } from "@material-ui/core";
export const useStyles = makeStyles(theme => createStyles({

    logoImg: {
        maxWidth: "100%",
        height: "auto",
        display: "block", marginLeft: "auto",
        marginRight: "auto"
    }, appBar: {
        background: "white"
    },
    box: {
        marginBottom: "30px"
    }
}));
