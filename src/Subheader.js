import React from 'react';
import "./Subheader.css";

function Subheader() {
  return (
    <div className="subheader">
      <div className="subheader__nav">
          <div className="subheader__option">
            <span className="subheader__optionLine">All </span>
          </div>
          <div className="subheader__option">
            <span className="subheader__optionLine">Best Sellers </span>
          </div>
          <div className="subheader__option">
            <span className="subheader__optionLine">Mobiles </span>
          </div>
          <div className="subheader__option">
            <span className="subheader__optionLine">Customer Service</span>
          </div>
          <div className="subheader__option">
            <span className="subheader__optionLine">Today's Deal</span>
          </div>
          <div className="subheader__option">
            <span className="subheader__optionLine">Fashion </span>
          </div>
          <div className="subheader__option">
            <span className="subheader__optionLine">Electronics </span>
          </div>
          <div className="subheader__option">
            <span className="subheader__optionLine">Home & Kitchen</span>
          </div>
          <div className="subheader__option">
            <span className="subheader__optionLine">Amazon Pay </span>
          </div>
          <div className="subheader__option">
            <span className="subheader__optionLine">Computers </span>
          </div>
          <div className="header__option">
          <img className="subimage" src="/subheader.jpg" />
          </div>
        

        
      </div>
    </div>
  )
}

export default Subheader;