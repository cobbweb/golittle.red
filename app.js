/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import 'babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Location from './core/Location';
import Layout from './components/Layout';
import StoryLayout from './components/Story/StoryLayout';

import './components/Transition/PageTransition.scss';

const routes = {}; // Auto-generated on build. See tools/lib/routes-loader.js

const route = async (path, callback) => {
  const handler = routes[path] || routes['/404'];
  const component = await handler();
  await callback(wrapInTransition(<Layout key={path}>{React.createElement(component)}</Layout>));
};

const storyRoute = async (path, callback) => {
  const handler = routes[path] || routes['/404'];
  const component = await handler();
  await callback(wrapInTransition(<StoryLayout key={path}>{React.createElement(component)}</StoryLayout>));
};

function wrapInTransition(component) {
  const transitionProps = {
    transitionName: 'Route',
    transitionEnterTimeout: 400,
    transitionLeaveTimeout: 400,
    component: 'div'
  };
  return (
    <ReactCSSTransitionGroup {...transitionProps}>
      {component}
    </ReactCSSTransitionGroup>
  );
}

function run() {
  const container = document.getElementById('app');
  Location.listen(location => {
    const routeFn = location.pathname.indexOf('/story/') !== -1 ? storyRoute : route;
    routeFn(location.pathname, async (component) => ReactDOM.render(component, container, () => {
      // Track the page view event via Google Analytics
      window.ga('send', 'pageview');
    }));
  });
}

if (canUseDOM) {
  // Run the application when both DOM is ready and page content is loaded
  if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
    run();
  } else {
    document.addEventListener('DOMContentLoaded', run, false);
  }
}

export default { route, storyRoute, routes };
