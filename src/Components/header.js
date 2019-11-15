import React from "react";
import classes from "./header.module.css"

const header = () =>{
    return(
        <div className={classes.nav}>
        <img className={classes.logo} src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amzon-logo" />
      </div>
    )
}

export default header;