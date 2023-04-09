import React from 'react';

function Footer({ ...props }) {
  return (
    <div w3-include-footer="footer.html">
      <footer data-role="footer">
        <h1>Footer.component</h1>
      </footer>
    </div>
  );
}

export default Footer;
