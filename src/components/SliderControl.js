import Typography from "@material-ui/core/Typography";
import React from "react";
import Slider from "@material-ui/lab/Slider";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";

const styles = theme => createStyles({
    root: {
        padding: "50px 0 0 0",
    },
    label : {
        padding: `0 ${theme.spacing.unit * 2}px`,
    },
    slider: {
        padding: `0 ${theme.spacing.unit * 2}px`,
        width: "calc(100% - 2rem)",
        selectionColor: "grey"
    }
});

const SliderControl = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Typography variant="h6" className={classes.label}>
                { props.children }
            </Typography>
            <Typography variant="subtitle1" className={classes.label}>
                { props.prefix } { props.value || props.min || 0 }
            </Typography>
            <br/>
            <Slider
                style={{thumb: {backgroundColor: "red"}}}
                value={props.value || props.min || 0}
                min={props.min || 0}
                max={props.max || 100}
                step={ props.step || 1}
                className={classes.slider}
                onChange={(event, value) => props.onChange(value || props.min || 0)}
            />
        </div>
    );
};

export default withStyles(styles)(SliderControl);
