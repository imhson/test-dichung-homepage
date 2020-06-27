import React from 'react';
import { FormattedMessage } from 'react-intl';

import LocaleToggle from 'containers/LocaleToggle';
import A from './A';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import LogoPic from './logo.png';
import messages from './messages';
import Wapper from './Wapper';

import Logo from './Logo';

function Header() {
  return (
    <Wapper>
      <A href="https://www.reactboilerplate.com/">
        <Logo src={LogoPic} alt="react-boilerplate - Logo" />
      </A>
      <NavBar>
        <section>
          <HeaderLink to="/">
            <FormattedMessage {...messages.promotions} />
          </HeaderLink>
          <HeaderLink to="/become-a-partner">
            <FormattedMessage {...messages.beapartner} />
          </HeaderLink>
        </section>
        <section>
          <Wapper>
            <HeaderLink to="/">
              <FormattedMessage {...messages.account} />
            </HeaderLink>
            <LocaleToggle />
          </Wapper>
        </section>
      </NavBar>
    </Wapper>
  );
}

export default Header;
