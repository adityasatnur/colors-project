import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import "./ColorBox.css";
class ColorBox extends Component {
  state = { copied: false };
  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        console.log("1");
        this.setState({ copied: false });
        console.log("1500");
      }, 1500);
    });
  };
  render() {
    const { name, background } = this.props;
    const copied = this.state.copied;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className="ColorBox" style={{ background }}>
          <div
            className={`copy-overlay ${copied && "show"}`}
            style={{ background }}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>COPIED!!</h1>
            <p>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <Link to={this.props.moreUrl} onClick={(e) => e.stopPropagation()}>
            <span className="see-more">MORE</span>
          </Link>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
