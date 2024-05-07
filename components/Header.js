import React from "react";

const Header = () => {
  return (
    <div id="header">
      <h1>Welcome to Bot Battlr!</h1>
      <span>BOTS</span>
      <div>
        <button className="ui button positive">
          <i className="ui lock icon large"></i>
          Login</button>
        
      </div>
    </div>
  );
};

export default Header;