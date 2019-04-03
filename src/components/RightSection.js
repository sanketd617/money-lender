import React from "react";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import {Route} from "react-router-dom";

const styles = theme => createStyles({
    root: {
        padding: 20
    }
});

const RightSection = (props) => {
    const {classes} = props;
    return (
        <div className={classes.root}>

        </div>
    );
};


export default withStyles(styles)(RightSection);
