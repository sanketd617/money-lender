import React, {Fragment} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Icon from "@material-ui/core/Icon";
import Loader from "react-loader-spinner";
import Typography from "@material-ui/core/Typography";

const styles = theme => createStyles({
    root: {
        padding: 70,
        [theme.breakpoints.down('sm')]: {
            padding: "10% 0%",
            width: "90%",
            position: "absolute",
        }
    },
    progressLoanAmount: {
        color: theme.palette.primary.light,
        position: "absolute",
    },
    progressLoanInterest: {
        color: theme.palette.primary.main,
        marginLeft: "-4.5%"
    },
    loanType: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
    },
    icon: {
        fontSize: "70px",
        color: theme.palette.primary.main
    },
    loanAmount: {
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: "scale(1.3)",
        [theme.breakpoints.down('md')]: {
            transform: "scale(1.0)"
        }
    },
    content: {
        padding: 10,
    },
    monthlyPayment: {
        width: "100%",
        textAlign: "center"
    },
    interestRate: {
        width: "100%",
        textAlign: "center"
    },
    flex: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    bold: {
        fontWeight: "bold"
    },
});

const CircularGraph = props => {
    const {classes} = props;
    const progress = 100*(props.monthlyPayment*props.termLength - props.loanAmount)/(props.monthlyPayment*props.termLength);
    return (
        <div className={classes.root}>
            <div style={{position: "relative"}} className={classes.circle}>
                <CircularProgress
                    className={classes.progressLoanAmount}
                    variant="static"
                    value={100}
                    size={"100%"}
                    thickness={1}
                />
                <CircularProgress
                    className={classes.progressLoanInterest}
                    variant="static"
                    value={progress}
                    size={"104%"}
                    thickness={3}
                />
                <div className={classes.loanAmount}>
                    {
                        props.interestRate ?
                            <div>
                                <div className={classes.loanType}>
                                    <Icon className={classes.icon}>{props.loanType.icon}</Icon>
                                </div>
                                <div className={classes.content}>
                                    <Typography variant="h5">
                                        {"$ "+props.monthlyPayment*props.termLength }
                                    </Typography>
                                    <Typography variant="subtitle1" align={"center"}>
                                        Total
                                    </Typography>
                                </div>
                                <div className={classes.flex}>
                                    <div className={classes.interestRate}>
                                        <Typography variant="subtitle1" className={classes.bold}>
                                            {props.interestRate }
                                        </Typography>
                                        <Typography variant="subtitle1" align={"center"}>
                                            Rate
                                        </Typography>
                                    </div>
                                    <div className={classes.monthlyPayment}>
                                        <Typography variant="subtitle1" className={classes.bold}>
                                            {"$ "+props.monthlyPayment }
                                        </Typography>
                                        <Typography variant="subtitle1" align={"center"}>
                                            Monthly
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                            : <Loader
                                type="Bars"
                                color="primary"
                                height="50"
                                width="50"
                            />
                    }
                </div>
            </div>

        </div>
    );
};

export default withStyles(styles)(CircularGraph);
