import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./StateButton.css";

export const StateButton = ({ property1, className, onClick, size}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "frame-23",
  });

  const buttonStyle = {
    width: size ? `${(parseFloat(size)/100) * 65}px` : '65px',
    height: size ? `${(parseFloat(size)/100) * 30}px` : '30px',
  };

  const ellipseStyle = {
    width: size ? `${(parseFloat(size)/100) * 20}px` : '20px',
    height: size ? `${(parseFloat(size)/100) * 20}px` : '20px',
    left: state.property1 === "frame-24" ? `${(parseFloat(size)/100) * 27}px` : "-4px",
  };

  return (
    <button
      className={`component ${state.property1} ${className}`}
      onClick={() => {
        onClick();
        dispatch("click");
      }}
      style={buttonStyle}
    >
      <div className="ellipse" style={ellipseStyle}/>
    </button>
  );
};

function reducer(state, action) {
  if (state.property1 === "frame-23") {
    switch (action) {
      case "click":
        return {
          property1: "frame-24",
        };
    }
  }

  if (state.property1 === "frame-24") {
    switch (action) {
      case "click":
        return {
          property1: "frame-23",
        };
    }
  }

  return state;
}

StateButton.propTypes = {
  property1: PropTypes.oneOf(["frame-23", "frame-24"]),
};
