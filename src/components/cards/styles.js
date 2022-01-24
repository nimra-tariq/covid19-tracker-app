import { makeStyles,createStyles } from "@material-ui/core";
export const useStyles=makeStyles(theme=>createStyles({
    box:{
        borderRadius:"10px",
        boxShadow: "0px 8px 10px #8080806b, 0px 8px 10px #5c5b5b6b",
    },
    infected:{
        backgroundColor:'rgb(255, 247, 205)',
        color: 'rgb(122, 79, 1)'
    },
    death:{
        backgroundColor:'rgb(255, 231, 217)',
        color: 'rgb(122, 12, 46)'
    },
    recovered:{
        backgroundColor:'rgb(208, 242, 255)',
        color: 'rgb(4, 41, 122)'
    }
}))