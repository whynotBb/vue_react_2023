import React from 'react';

function Header({ ...props }) {
  return (
    <div w3-include-header="header.html">
      <header data-role="header">
        <h1>Header component</h1>
      </header>
    </div>
  );
}

export default Header;
