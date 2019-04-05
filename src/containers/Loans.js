import React from "react";
import {connect} from "react-redux";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";

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
                This page is not implemented
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
