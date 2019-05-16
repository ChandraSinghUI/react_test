import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleSelect } from "../store/Actions/index";

class HotelsCard extends Component {
  constructor(props){
    super(props)
    this.getAlert = this.getAlert.bind(this);

  }
  clicked(data, e) {
    var obj = { data: data, active: e.target.checked };
    this.props.handlerClick(obj);
  }
  componentDidMount() {
    this.props.setClick(this.getAlert);
 }
 getAlert() {
  console.log(this.props.sendData(this.props.adult));
 }
 handleLangChange(a,b,e){
  console.log(this.props.adult);
  if(b == "adult"){
    this.props.adult[a][b]=parseInt(e.target.value)+1;
  }
  if(b == "children"){
    this.props.adult[a][b]=parseInt(e.target.value);
  }
 
 }



  render() {
    console.log(this.props.adults);

    return (
      <div className="col-md-3">
        <div className="card ">
          
             <div className="label-header ">
            {this.props.adults.checkbox ? (
              <label >
                {this.props.adults.active ? (
                  <input
                    type="checkbox"
                    className="check-custom"
                    id="roomCheck1"
                    checked
                    onClick={this.clicked.bind(this, this.props.adults)}
                  />
                ) : (
                  <input
                    type="checkbox"
                    className="check-custom"
                    id="roomCheck1"
                    onClick={this.clicked.bind(this, this.props.adults)}
                  />
                )}
                <span className="check-toggle"></span>
              </label>
            ) : (
              " "
            )}
            <label className="heading_text">{this.props.adults.name}</label>
              </div>
            
              <div className= "row">
            <div className="col-sm-6 ">
              <label className="text-adult">Adults (18+)</label>
              {this.props.adults.active ? (
                <select className="custom-select-sm" onChange={this.handleLangChange.bind(this,this.props.adults.id,'adult')}>
                {[...Array(2)].map((e, i) => {
                  return <option selected={this.props.adults.adult == i+1} value={i} key={i}>{i+1} </option>;
                })}
              </select>
              ) : (
                <span>
                
                  <select disabled className="custom-select-sm">
                    {[...Array(2)].map((e, i) => {
                      return (
                        <option
                          selected={this.props.adults.adult == i + 1}
                          key={i}
                        >
                          {i + 1}{" "}
                        </option>
                      );
                    })}
                  </select>
                </span>
              )}
            </div>

            <div className="col-sm-6">
              <label className="text">Children(0-17)</label>

              {this.props.adults.active ? (
                <select className="custom-select-sm" onChange={this.handleLangChange.bind(this,this.props.adults.id,'children')}>
                {[...Array(2)].map((e, i) => {
                  return <option selected={this.props.adults.children} key={i}>{i} </option>;
                })}
              </select>
              ) : (
                <span>
                  
                  <select  disabled>
                    {[...Array(2)].map((e, i) => {
                      return (
                        <option selected={this.props.adults.children} key={i}>
                          {i}
                        </option>
                      );
                    })}
                  </select>
                </span>
              )}
            </div>
           
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

export default connect(mapStateToProps)(HotelsCard);

//export default HotelsCard;
