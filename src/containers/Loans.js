import React from "react";
import {connect} from "react-redux";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/es/Typography/Typography";

const styles = theme => createStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px 0"
    }
});

class Loans extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography variant="h4">
                    Unimplemented page
                </Typography>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Loans));
