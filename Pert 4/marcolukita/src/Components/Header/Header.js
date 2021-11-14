import React, { Component } from "react";
function Output(props) {
  return <h2 className='text-primary'>Sistem Informasi {props.nama}</h2>;
}

export default class Header extends Component {
  render() {
    return (
      <div className='container text-center'>
        <Output nama='E-Biz' />
      </div>
    );
  }
}
