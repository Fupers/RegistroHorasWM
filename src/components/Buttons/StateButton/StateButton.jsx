import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./StateButton.css";

export const Component = ({ property1, className, onClick}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "frame-23",
  });

  return (
    <button
      className={`component ${state.property1} ${className}`}
      onClick={() => {
        onClick();
        dispatch("click");
      }}
      //onClick={onClick}
    >
      <div className="ellipse" />
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

Component.propTypes = {
  property1: PropTypes.oneOf(["frame-23", "frame-24"]),
};
