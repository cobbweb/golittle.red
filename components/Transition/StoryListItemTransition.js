/**
 * This file is included by core/Transition.js
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTransitionGroup from 'react-addons-transition-group';
import once from 'lodash/function/once';
import StoryListItemTransitionChild from './StoryListItemTransitionChild';

import './StoryListItemTransition.scss';

const CONTAINER_ID = '__StoryListItemTransitionContainer__';


export default class StoryListItemTransition extends React.Component {

  getDefaultState() {
    return {
      containerSize: {}
    }
  }

  componentWillMount() {
    let containerSize = { top: 0, left: 0, height: 0, width: 0 };
    const clientRect = this.props.container.getBoundingClientRect();

    for (var key in containerSize) {
      containerSize[key] = clientRect[key];
    }

    containerSize.right = containerSize.left;

    this.setState({
      positioning: containerSize
    });
  }

  unmountAt(node) {
    const group = this.refs.group;
    const key = Object.keys(group.state.children)[0];
    const component = group.refs[key];

    if (!component.componentWillDisappear) {
      return this._unmountAt(node);
    }

    component.componentWillDisappear(() => {
      if (component.componentDidDisappear) {
        component.componentDidDisappear();
      }

      this._unmountAt(node);
    });
  }

  _unmountAt(node) {
    ReactDOM.unmountComponentAtNode(node)
  }

  render() {
    const endPosition = {
      top: 50,
      right: 0,
      bottom: 'auto',
      left: 0,
      height: '60vh',
      width: 'auto',
      borderRadius: 0
    };

    const props = {
      story: this.props.story,
      initialPosition: this.state.positioning,
      endPosition,
      onTransitionEnd: this.props.onTransitionEnd,
      key: 'transition'
    }

    return (
      <ReactTransitionGroup component="div" ref="group">
        <StoryListItemTransitionChild {...props} />
      </ReactTransitionGroup>
    );
  }

  static getRenderContainer() {
    let container;

    if (document.getElementById(CONTAINER_ID)) {
      container = document.getElementById(CONTAINER_ID);
    } else {
      container = document.createElement('div');
      container.id = CONTAINER_ID;
      document.body.appendChild(container);
    }

    return container;
  }

}
