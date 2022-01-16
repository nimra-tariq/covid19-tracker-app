import { colors, makeStyles, createStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Height } from "@material-ui/icons";
export const useStyles = makeStyles(theme => createStyles({

    logoImg: {
        maxWidth: "100%",
        height: "auto",
        display: "block", marginLeft: "auto",
        marginRight: "auto"
    }, appBar: {
        background: "white"
    },
    box:{
        marginBottom:"30px"
    }
}));
