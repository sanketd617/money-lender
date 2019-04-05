import React from "react";
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

const styles = theme => createStyles({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '60%',
        [theme.breakpoints.down('md')]: {
            width: '80%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    text: {
        display: "inline"
    }
});

const FinalSubmit = (props) => {
        const {classes} = props;
        return (
            <div className={classes.wrapper}>
                <form className={classes.container} noValidate autoComplete="off">
                    <Grid item sm={12}>
                        <Checkbox
                            checked={props.confirmed}
                            onChange={() => props.setConfirmed(!props.confirmed)}
                            color="primary"
                        />

                        <Typography variant="subtitle1" className={classes.text}>
                            I accept lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                        <br/>
                        {
                            props.error !== "" ? <div style={{color: "red"}}>Please agree to the terms & conditions.</div> : ""
                        }
                    </Grid>
                </form>
            </div>
        );
};

export default withStyles(styles)(FinalSubmit);
