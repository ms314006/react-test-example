import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <ul>
    <li>
      <Link data-testid="homeLink" to="/">首頁</Link>
    </li>
    <li>
      <Link data-testid="newsLink" to="/News">最新消息</Link>
    </li>
  </ul>
);

export default Nav;
