import React, { Component } from "react";
import { connect } from "react-redux";

class KetQua extends Component {
  render() {
    let { result, luaChon, soLanThang, soLanDo } = this.props.data;
    return (
      <div>
        <h2 className="text-danger">{result}</h2>
        <h2 className="mt-4">YOUR CHOICE: {luaChon && luaChon} </h2>
        <h3>Winning number: {soLanThang}</h3>
        <h3>Playing number: {soLanDo}</h3>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps)(KetQua);
