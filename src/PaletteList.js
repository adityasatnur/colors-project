import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";

import { Link } from "react-router-dom";

const styles = {
  root: {
    background: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexWrap: "wrap"
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "5%",
    display: "grid"
  }
};
class PaletteList extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.nav}>
            <h1>React Colors</h1>
          </div>
          <div className={classes.palettes}>
            {this.props.palette.map((pal) => (
              <MiniPalette {...pal} />
              // <Link to={`/palette/${pal.id}`}>{pal.paletteName}</Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
