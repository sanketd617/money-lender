import React from "react";
import {connect} from "react-redux";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Heading from "../components/Heading";
import PredictorForm from "../components/PredictorForm";

const styles = theme => createStyles({
    root: {
        padding: 30
    },
});

const Predictor = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Heading> Predictor </Heading>

            <PredictorForm/>
        </div>
    );
};


export default withStyles(styles) (Predictor);
