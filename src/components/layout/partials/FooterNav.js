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
          <Link to="https://swumr.xyz">SUMMER</Link>
        </li>
        <li>
          <Link to="https://docs.path-integral.com">DOCS</Link>
        </li>
        <li>
          <Link to="https://app.path-integral.com">ECOSYSTEM</Link>
        </li>
        <li>
          <Link to="https://pathintegral.substack.com">BLOG</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;