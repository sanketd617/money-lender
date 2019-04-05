import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Heading from "../components/Heading";
import Step from "@material-ui/core/Step";
import Stepper from "@material-ui/core/Stepper";
import StepButton from "@material-ui/core/StepButton";
import PersonalInfo from "../components/PersonalInfo";
import {changeModel, changeStep, checkErrorsAndForward, setConfirmed} from "../actions/ApplicationActions";
import {connect} from "react-redux";
import BusinessDetails from "../components/BusinessDetails";
import FinalSubmit from "../components/FinalSubmit";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import Success from "../components/Success";

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

class Application extends React.Component {
    render(){
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Heading>Application</Heading>
                <Stepper alternativeLabel nonLinear activeStep={this.props.activeStep}>
                    {steps.map((label, index) => {
                        return (
                            <Step key={label} completed={index < this.props.activeStep}>
                                <StepButton>
                                    {label}
                                </StepButton>
                            </Step>
                        );
                    })}
                </Stepper>
                {
                    this.props.activeStep === 0 ?
                        <PersonalInfo
                            firstName={this.props.personal.firstName}
                            lastName={this.props.personal.lastName}
                            email={this.props.personal.email}
                            mobile={this.props.personal.mobile}
                            address={this.props.personal.address}
                            changeModel={this.props.changeModel}
                            gender={this.props.gender}
                            errors={this.props.errors.personal}
                        />
                        : this.props.activeStep === 1 ?
                        <BusinessDetails
                            name={this.props.business.name}
                            website={this.props.business.website}
                            email={this.props.business.email}
                            phone={this.props.business.phone}
                            address={this.props.business.address}
                            changeModel={this.props.changeModel}
                            errors={this.props.errors.business}
                        />
                        : this.props.activeStep === 2 ?
                            <FinalSubmit
                                confirmed={this.props.confirmed}
                                setConfirmed={this.props.setConfirmed}
                                error={this.props.errors.confirmed}
                            />
                            : <Success/>
                }
                <div className={classes.bottomNav + " " + (this.props.activeStep >= 3 ? classes.hidden : "")}>
                    <Fab color="primary" aria-label="Add" className={classes.fab} onClick={() => this.props.prevStep()} disabled={this.props.activeStep === 0}>
                        <Icon>chevron_left</Icon>
                    </Fab>
                    &nbsp;&nbsp;&nbsp;
                    <Fab color="primary" aria-label="Add" className={classes.fab} onClick={() => this.props.activeStep < 2 ? this.props.nextStep() : this.props.submit()}>
                        <Icon>{this.props.activeStep < 2 ? "chevron_right" : "done_all"}</Icon>
                    </Fab>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        personal: {
            firstName: state.application.personal.firstName,
            lastName: state.application.personal.lastName,
            email: state.application.personal.email,
            mobile: state.application.personal.mobile,
            address: state.application.personal.address,
            gender: state.application.personal.gender,
        },
        business: {
            name: state.application.business.name,
            website: state.application.business.website,
            email: state.application.business.email,
            phone: state.application.business.phone,
            address: state.application.business.address,
        },
        activeStep: state.application.activeStep,
        confirmed: state.application.confirmed,
        errors: state.application.errors
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeModel: (type, model, value) => {
            dispatch(changeModel({
                type, model, value
            }));
        },
        nextStep: () => {
            dispatch(checkErrorsAndForward(1));
        },
        prevStep: () => {
            dispatch(changeStep(-1));
        },
        setConfirmed: (isConfirmed) => {
            dispatch(setConfirmed(isConfirmed))
        },
        submit: () => {
            dispatch(checkErrorsAndForward(1));
        }
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Application));

