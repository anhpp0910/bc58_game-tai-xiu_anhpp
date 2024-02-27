import React, { Component } from "react";
import { connect } from "react-redux";
import { CHON_TAI_XIU, DO_XUC_XAC, TAI, XIU } from "./redux/constant";

class XucXac extends Component {
  render() {
    return (
      <div>
        <h1 className="py-5 fw-fw-bold">Sic Bo</h1>
        <div className="container d-flex justify-content-evenly">
          <button
            className="btn btn-danger btnTaiXiu"
            onClick={() => {
              this.props.handleChonTaiXiu(TAI);
            }}
          >
            BIG
          </button>
          <div>
            {this.props.mangXucXac.map((item, index) => {
              return (
                <img
                  key={index}
                  className="mx-1"
                  src={item.img}
                  style={{ width: "100px" }}
                />
              );
            })}
          </div>
          <button
            className="btn btn-danger btnTaiXiu"
            onClick={() => {
              this.props.handleChonTaiXiu(XIU);
            }}
          >
            SMALL
          </button>
        </div>
        <div className="playGame my-3">
          <button
            className="btn btn-danger btnPlay"
            onClick={this.props.handleDoXucXac}
            disabled={this.props.cannotPlay}
          >
            PLAY GAME
          </button>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    mangXucXac: state.mangXucXac,
    cannotPlay: state.cannotPlay,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleDoXucXac: () => {
      let action = {
        type: DO_XUC_XAC,
      };
      dispatch(action);
    },
    handleChonTaiXiu: (taiOrXiu) => {
      let action = {
        type: CHON_TAI_XIU,
        payload: taiOrXiu,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(XucXac);
