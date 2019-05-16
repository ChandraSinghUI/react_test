import React, { Component } from "react";
import HotelsCard from "../Components/HotelsCard";
import { connect } from "react-redux";

import { toggleSelect, saveData } from "../store/Actions/index";
class HotelsContainer extends Component {
  constructor(props){
      super(props)
      this.child = React.createRef()
  }
  onClick =() =>{
    this.child.current.getAlert()
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row pt-4">
          {this.props.adult.map(adult => {
            return (
              <HotelsCard
                key={adult.id}
                adults={adult}
                data1={this.props.adult}
                handlerClick={this.props.isSelectDisabled}
                setClick={click => this.clickChild = click}
                sendData={this.props.saveData}
              />
            );
          })}

          <div className="col-md-12">
            <button className="btn btn-dark mt-4" onClick={() => this.clickChild()}> Submit </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    adult: state.data
  };
};
const mapDispatchToProps = dispatch => {
  //  var obj={data:obj,key:key}
  return {
    isSelectDisabled: obj => dispatch(toggleSelect(obj)),
    saveData: (obj) => dispatch(saveData(obj))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotelsContainer);
