import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import { inject, observer } from 'mobx-react';
import { observe } from 'mobx';


//router mob-x
@inject('routerStore')
@observer
class PackageSummary extends React.Component {
  listener = null;
  componentDidMount() {
    this.listener = observe(this.props.routerStore, 'location', ({ oldValue, newValue }) => {
      if (!oldValue || oldValue.pathname !== newValue.pathname) {
        // your logic
      }
    }, true)
  }

  componentWillUnmount() {
    this.listener();
  }
}

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';

// Initialize Google
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};



const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;