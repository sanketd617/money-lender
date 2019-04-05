import React, {Fragment} from "react";
import {connect} from "react-redux";
import SliderControl from "../components/SliderControl";
import Grid from "@material-ui/core/Grid";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {withRouter} from "react-router-dom";
import {changeLoanType, changeModel, getInterest} from "../actions/PredictorActions";
import CircularGraph from "../components/CircularGraph";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";
import Icon from "@material-ui/core/es/Icon/Icon";
const styles = theme => createStyles({
    root: {

    },
    controls: {
        padding: 70,
        [theme.breakpoints.down('sm')]: {
            padding: "15px",
            position: "absolute",
            top: "145vw",
            left: 0,
            width: "100vw"
        }
    },
    toggleContainer: {
        height: 56,
        padding: `0 ${theme.spacing.unit * 2}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: `${theme.spacing.unit}px 0`,
        background: theme.palette.background.default,
        [theme.breakpoints.down('sm')]: {
            padding: 0,
            margin: 0,
            width: "100%",
        }
    },
    toggleButton: {
        padding: 10,
        height: 50,
        width: "33.33%"
    },
    buttonGroup: {
        width: "100%",
    },
    label : {
        padding: `0 ${theme.spacing.unit * 2}px`,
    },
    buttonContainer: {
        padding: `50px ${theme.spacing.unit}px`,
        textAlign: "right"
    }
});

class PredictorForm extends React.Component {
    componentDidMount() {
        this.props.onInit(this.props.values.loanAmount, this.props.values.termLength);
    }

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Grid container className={classes.root} spacing={0}>
                    <Grid item xs={12} md={6} className={classes.controls}>
                        <Typography variant="h6" className={classes.label}>
                            Loan Type
                        </Typography>
                        <div className={classes.toggleContainer}>
                            <ToggleButtonGroup value={this.props.values.loanType.title} exclusive className={classes.buttonGroup}>
                                {
                                    (() => this.props.data.loanTypes.map((loanType, index) => {
                                        let self = this;
                                        return (
                                            <ToggleButton onClick={() => self.props.changeType(loanType)} value={loanType.title} key={"loan_"+index} className={classes.toggleButton}>
                                                { (this.props.width === 'sm' || this.props.width === 'xs') ? <Icon>{loanType.icon}</Icon> : loanType.title}
                                            </ToggleButton>
                                        );
                                    }))()
                                }
                            </ToggleButtonGroup>
                        </div>

                        <SliderControl min={500} max={5000} step={1} prefix="$" value={this.props.values.loanAmount} onChange={(value) => this.props.changeModel("loanAmount", value)}>
                            Loan Amount
                        </SliderControl>
                        <SliderControl min={6} max={24} step={1} value={this.props.values.termLength} onChange={(value) => this.props.changeModel("termLength", value)}>
                            Term Length (months)
                        </SliderControl>

                        <div className={classes.buttonContainer}>
                            <Button variant="contained" color="primary" onClick={() => this.props.history.push("/apply")}>
                                Get Started
                            </Button>
                        </div>
                    </Grid>
                    <Grid item md>
                        <CircularGraph
                            loanType={this.props.values.loanType}
                            loanAmount={this.props.values.loanAmount}
                            termLength={this.props.values.termLength}
                            interestRate={this.props.values.interestRate}
                            monthlyPayment={this.props.values.monthlyPayment}
                        />
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.predictor.data,
        values: state.predictor.values
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeType: type => {
            dispatch(changeLoanType(type));
        },
        changeModel: (model, value) => {
            dispatch(changeModel({model, value, recalculate: false}))
        },
        onInit: (loanAmount, termLength) => {
            dispatch(getInterest({loanAmount, termLength}))
        }
    };
};

export default withWidth()(withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PredictorForm))));
