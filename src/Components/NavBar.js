import React from 'react';

function NavBar(props) {
    return (
        <nav className="nav-styles">
        <h3>coinbase</h3>
        <ul className="list-box">
          <li className="list-styles" id="price-list">Price</li>
          <li className="list-styles">Products</li>
          <li className="list-styles">Company</li>
        </ul>
        <div>
        <button className="btn-signin">Sign in</button>
        <button className="btn-signin">Get Started</button>
        </div>
      </nav>
    );
}

export default NavBar;