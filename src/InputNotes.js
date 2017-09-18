import React, { Component } from "react";

class InputsNotes extends Component {
  render() {
    return (
      <div>
        <form id="form-add-note" className="row">
            <input type="text" placeholder="Anotações..." className="col-2 white" />
            <input type="submit" value="+" className="blue-grey white-text col-1" />
          </form>
      </div>
    );
  }
}

export default InputsNotes;
