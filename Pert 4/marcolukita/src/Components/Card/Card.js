import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className='card container mt-2 border border-secondary'>
        <div className='card-header mt-2'>{this.props.nama} </div>
        <div className='card-body mt-2'>{this.props.children}</div>
      </div>
    );
  }
}
