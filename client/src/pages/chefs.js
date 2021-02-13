import React from 'react';
import './style.css';

const display = {
    display: 'block'
  };
  const hide = {
    display: 'none'
  };
  
  class Chefs extends React.Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        toggle: false
      }
    }
  
    toggle(event) {
      this.setState((prevState) => ({
        toggle: !prevState.toggle
      }));
    }
    render() {
      var modal = [];
      modal.push(
        <div className="modal" style={this.state.toggle ? display : hide}>
        <div className="modal-content">
          <h4>limpummsmdaskmdkasnfljas fdafasasf</h4>
        </div>
        <div className="modal-footer">
          <button className="btn-flat" onClick={this.toggle}>X</button>
        </div>
      </div>
      );
      return (
        <div className="genBackground">
            <button className="btnModal" onClick={this.toggle}>{this.state.toggle ? 'Close modal' : 'openeneen'}</button>
            <button className="btnModal" onClick={this.toggle}>{this.state.toggle ? 'Close modal' : 'button2'}</button>
            {modal}
        </div>
      );
    }
  }

export default Chefs;