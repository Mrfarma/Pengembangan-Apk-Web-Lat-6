import React, { Component } from "react";

export class Ref extends Component {
  constructor(props) {
    super(props);

    this.myref = React.createRef();
  }
  componentDidMount() {
    this.myref.current.style.height = "100vh";
    this.myref.current.style.width = "100%";
  }
  setBackground(bgColor, txtColor) {
    this.myref.current.style.background = bgColor;
    this.myref.current.style.color = txtColor;
  }
  render() {
    return (
      <div ref={this.myref}>
        <p>
          Belajar Pengembangan Aplikasi Web dengan Reactjs dengan Router dan
          Refs
        </p>
        <button onClick={this.setBackground.bind(this, "white", "black")}>
          Putih
        </button>
        <button onClick={this.setBackground.bind(this, "red", "white")}>
          Merah
        </button>
        <button onClick={this.setBackground.bind(this, "green", "white")}>
          Hijau
        </button>
        <button onClick={this.setBackground.bind(this, "blue", "white")}>
          Biru
        </button>
      </div>
    );
  }
}

export default Ref;
