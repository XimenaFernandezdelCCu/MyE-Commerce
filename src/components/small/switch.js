import React from 'react';
import '../../style/switch.css';

const Switch = ({title, onChange}) => {
  return (
    <>
        <input
        onChange={onChange}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        />
        <label
            className="react-switch-label"
            htmlFor={`react-switch-new`}
            >
            <span className="react-switch-label-text">{title}</span>
            <span className={`react-switch-button`} />
        </label>
    </>
  );
};

export default Switch;