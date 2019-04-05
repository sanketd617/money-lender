import React from "react";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Grid from "@material-ui/core/Grid";

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
        width: "45%"
    },
    emailField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "92%"
    },
    fullWidth: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "92%"
    },
});

const BusinessDetails = (props) => {

        const {classes} = props;
        return (
            <div className={classes.wrapper}>
                <form className={classes.container} noValidate autoComplete="off">
                    <Grid item sm={12}>
                        <TextField
                            id="company_name"
                            label="Company name"
                            className={classes.fullWidth}
                            margin="normal"
                            variant="outlined"
                            value={props.name}
                            onChange={(event) => props.changeModel("business", "name", event.target.value)}
                            error={props.errors.name !== ""}
                        />
                        <TextField
                            type="company_email"
                            id="company_email"
                            label="Company email"
                            className={classes.emailField}
                            margin="normal"
                            variant="outlined"
                            value={props.email}
                            onChange={(event) => props.changeModel("business", "email", event.target.value)}
                            error={props.errors.email !== ""}
                        />
                    </Grid>
                    <Grid item sm={12}>
                        <TextField
                            id="company_phone"
                            label="Company phone"
                            className={classes.fullWidth}
                            margin="normal"
                            variant="outlined"
                            value={props.phone}
                            onChange={(event) => props.changeModel("business", "phone", event.target.value)}
                            error={props.errors.phone !== ""}
                        />
                        <TextField
                            id="company_website"
                            label="Company website"
                            className={classes.fullWidth}
                            margin="normal"
                            variant="outlined"
                            value={props.website}
                            onChange={(event) => props.changeModel("business", "website", event.target.value)}
                            error={props.errors.website !== ""}
                        />
                    </Grid>
                    <Grid item sm={12}>
                        <TextField
                            id="company_address"
                            label="Company address"
                            className={classes.fullWidth}
                            margin="normal"
                            variant="outlined"
                            rows={2}
                            rowsMax={5}
                            multiline
                            value={props.address}
                            onChange={(event) => props.changeModel("business", "address", event.target.value)}
                            error={props.errors.address !== ""}
                        />
                    </Grid>
                </form>
            </div>
        );
};


export default withStyles(styles)(BusinessDetails);
