import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Button from "@material-ui/core/Button";
import {withRouter} from "react-router-dom";

const styles = theme => createStyles({
    success: {
        color: "green",
        textAlign: "center"
    }
});

const Success = props => {
    const {classes} = props;
    return (
        <div className={classes.success}>
            <div>
                Successfully submitted the loan application.
            </div>
            <div>
                <br/>
                <br/>
                <Button variant="contained" color="primary" onClick={() => props.history.push("/")}>
                    Home
                </Button>
            </div>
        </div>
    );
};

export default withRouter(withStyles(styles)(Success));
