import Link from 'next/link';
import Nav from './Nav';
import Router from 'next/router';
import NProgress from 'nprogress';
import { StyledHeader, Logo } from './styles/HeaderStyles';

// nprogress is the loader bar at the top of the pane
// for styling see `../../static/nprogress.css`

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => (
  <StyledHeader>
    {/* nprogress bar */}
    <div className="bar">
      <Logo>
        <Link href="">
          <a>Sick Fits</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </StyledHeader>
);

export default Header;
