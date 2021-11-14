import React, { Component } from "react";

export default class Input extends Component {
  render() {
    return (
      <div className='container mt-2 mb-2 border border-secondary'>
        <input
          className='w-50 d-block mb-2 mt-2'
          type='text'
          name='nama'
          placeholder='Masukkan nama anda'
          onChange={(ev) =>
            this.props.getValues(ev.target.name, ev.target.value)
          }
        />
        <input
          className='w-75 d-block mb-2'
          type='text'
          name='status'
          placeholder='Masukkan status anda'
          onChange={(ev) =>
            this.props.getValues(ev.target.name, ev.target.value)
          }
        />
      </div>
    );
  }
}
