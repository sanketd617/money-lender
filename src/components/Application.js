import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Heading from "./Heading";
import Step from "@material-ui/core/Step";
import Stepper from "@material-ui/core/Stepper";
import Typography from "@material-ui/core/Typography";
import StepButton from "@material-ui/core/StepButton";

const styles = theme => createStyles({
    root: {
        padding: 30,
        overflowY: "scroll"
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
});

const steps = ['Personal Details', 'Business Details', 'Final Submit'];

const Application = props => {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <Heading>Application</Heading>
            <Stepper alternativeLabel nonLinear>
                {steps.map((label, index) => {
                    const props = {};
                    const buttonProps = {};

                    return (
                        <Step key={label} {...props}>
                            <StepButton>
                                {label}
                            </StepButton>
                        </Step>
                    );
                })}
            </Stepper>
        </div>
    );
};

export default withStyles(styles)(Application);
