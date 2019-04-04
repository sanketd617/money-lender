import React from "react";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";

const styles = theme => createStyles({
    heading: {
        fontFamily: "Baloo",
        color: theme.palette.primary.main
    },
    underline: {
        height: 5,
        width: 30,
        borderRadius: 5,
        marginTop: -15,
        backgroundColor: theme.palette.primary.main
    }
});

const Heading = props => {
    const { classes } = props;
    return (
        <div>
            <Typography variant="h3" gutterBottom className={classes.heading}>
                {props.children}
            </Typography>
            <div className={classes.underline}/>
        </div>
    );
};

export default withStyles(styles)(Heading);
