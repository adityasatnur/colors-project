import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    background: "#fff",
    borderRadius: "5px",
    padding: "0.5rem",
    border: "1px solid black",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer"
    }
  },
  colors: {
    background: "#dae1e4",
    height: "100px",
    overflow: "hidden",
    borderRadius: "3px"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 0,
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    marginBottom: "-3.5px"
  }
};
const MiniPalette = (props) => {
  const { classes, paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map((color) => (
    <div
      className={classes.miniColor}
      style={{ background: color.color }}
      key={color.name}
    />
  ));
  return (
    <div className={classes.root}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <div className={classes.title}>
        {paletteName} <span>{emoji}</span>
      </div>
    </div>
  );
};
export default withStyles(styles)(MiniPalette);
