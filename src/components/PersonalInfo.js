import React from "react";
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Grid from "@material-ui/core/Grid";
import {changeModel} from "../actions/ApplicationActions";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

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
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "45%",
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        }
    },
    emailField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "92%",
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        }
    },
    formControl: {
        padding: 30
    },
    error: {
        border: "1px solid red"
    }
});

const PersonalInfo = (props) => {

        const {classes} = props;
        return (
            <div className={classes.wrapper}>
                <form className={classes.container} noValidate autoComplete="off">
                    <Grid item sm={12}>
                        <TextField
                            id="first_name"
                            label="First name"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            value={props.firstName}
                            onChange={(event) => props.changeModel("personal", "firstName", event.target.value)}
                            aria-describedby="component-error-text"
                            error={props.errors.firstName !== ""}
                        />


                        <TextField
                            id="last_name"
                            label="Last name"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            value={props.lastName}
                            onChange={(event) => props.changeModel("personal", "lastName", event.target.value)}
                            error={props.errors.lastName !== ""}
                        />
                    </Grid>
                    <Grid item sm={12}>
                        <TextField
                            type="email"
                            id="email"
                            label="Email"
                            className={classes.emailField}
                            margin="normal"
                            variant="outlined"
                            value={props.email}
                            onChange={(event) => props.changeModel("personal", "email", event.target.value)}
                            error={props.errors.email !== ""}
                        />
                        <TextField
                            id="mobile"
                            label="Mobile"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            value={props.mobile}
                            onChange={(event) => props.changeModel("personal", "mobile", event.target.value)}
                            error={props.errors.mobile !== ""}
                        />
                    </Grid>
                    <Grid item sm={12}>
                        <TextField
                            type="text"
                            id="address"
                            label="Address"
                            className={classes.emailField}
                            margin="normal"
                            variant="outlined"
                            rows={2}
                            rowsMax={5}
                            multiline
                            value={props.address}
                            onChange={(event) => props.changeModel("personal", "address", event.target.value)}
                            error={props.errors.address !== ""}
                        />
                        <FormControl component="fieldset" className={classes.formControl}>
                            <RadioGroup
                                aria-label="Gender"
                                name="gender"
                                value={props.gender}
                                onChange={(event, value) => props.changeModel("personal", "gender", value)}
                            >
                                <FormControlLabel value="female" control={<Radio className={(props.errors.gender !== "" || props.gender === "") ? classes.error : ""} />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </form>
            </div>
        );
};

export default withStyles(styles)(PersonalInfo);
