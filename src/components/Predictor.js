import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Heading from "../components/Heading";
import {connect} from "react-redux";
import PredictorForm from "../containers/PredictorForm";

const styles = theme => createStyles({
    root: {
        padding: 30,
        overflowY: "scroll",
        [theme.breakpoints.down('sm')]: {
            padding: 5
        }
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    backButton: {
        marginRight: theme.spacing.unit,
    },
    completed: {
        display: 'inline-block',
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
    bottomNav: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "40px 0"
    },
    hidden: {
        display: "none"
    }
});

const steps = ['Personal Details', 'Business Details', 'Final Submit'];

class Predictor extends React.Component {
    render(){
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Heading>Predictor</Heading>


                <PredictorForm/>

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Predictor));

