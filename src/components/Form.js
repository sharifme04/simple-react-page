import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show:false
    };
  }

  render() {
    return (
      <div className="col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4 col-xs-offset-1 col-xs-10">
        <form className="form-properties">
        {this.state.show?
          <div className="">
            <div className="form-group">
              <input type="text" placeholder="Name" className="form-control" id="text"/>
            </div>
            <div className="form-group">
              <input type="password" placeholder="Passwort" className="form-control" id="pwd"/>
            </div>
          <div className="checkbox">
            <label><input type="checkbox"/> Eingeloggt bleiben</label>
          </div>
          </div>:null
        }
          <div className="submit-button-group">
          <div className="text-center">
          <button type="button" onClick={()=>this.setState({show:false})}  className="button-custom btn-custom">{this.state.show?"abbrechen":"zufalls button"}</button>
          </div>
          <div className="text-center button-properties">
          <button type="button" onClick={()=>this.setState({show:true})} className="button-custom">{this.state.show?"einloggen":"anmelden"}</button>
          </div>
          </div>
        </form>
      </div>
    );
  }

}

export default Form;
