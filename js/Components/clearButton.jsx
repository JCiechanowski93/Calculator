import React, { Component } from 'react';


const ClearButton = (props) => (
    <div className="clear-btn" onClick={props.handleClear}>
        {props.children}
    </div>
)


export default ClearButton