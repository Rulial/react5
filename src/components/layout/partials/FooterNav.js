import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="https://swumr.xyz">SWUMR</Link>
        </li>
        <li>
          <Link to="http://blog.path-integral.com">BLOG</Link>
        </li>
        <li>
          <Link to="https://path-integral.com">FAQ's</Link>
        </li>
        <li>
          <Link to="https://path-integral.com">SALES</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;