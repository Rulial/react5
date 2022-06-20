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
          <Link to="http://pathintegral.substack.com">BLOG</Link>
        </li>
        <li>
          <Link to="https://research.typeform.com/to/GZ0rj0Lo">CONNECT</Link>
        </li>
        <li>
          <Link to="https://docs.path-integral.com">DOCS</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;