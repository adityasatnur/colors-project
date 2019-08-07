import React, { Component } from "react";
import { Route, Switch } from "react-router";
import logo from "./logo.svg";
import "./App.css";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";
import SingleColorPalette from "./SingleColorPalette";
import { generatePalette } from "./ColorHelpers";

class App extends Component {
  findPalette = (id) => {
    return seedColors.find((palette) => {
      return palette.id === id;
    });
  };
  // console.log(generatePalette(seedColors[4]));
  render() {
    debugger;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palette={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={() => <SingleColorPalette />}
        />
      </Switch>
      // <div className="App">
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}
export default App;
