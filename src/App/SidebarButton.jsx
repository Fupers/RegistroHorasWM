import React from 'react';

function SidebarButton(props) {
  return (
    <button className="sidebar-button" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default SidebarButton;
