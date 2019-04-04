import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Heading from "./Heading";

const styles = theme => createStyles({
    root: {
        padding: 30
    }
});

const Application = props => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <Heading>Application</Heading>
        </div>
    );
};

export default withStyles(styles)(Application);
