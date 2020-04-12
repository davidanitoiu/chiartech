import React from 'react';
import useStyles from "./logo.styles";

interface Props {
    size?: number;
    borderWidth?: number;
}

export const Logo = (props:Props) => {
    const classes = useStyles(props);

    return <div className={classes.logo} />
};