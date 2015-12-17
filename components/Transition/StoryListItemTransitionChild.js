import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BackgroundImage from '../Story/BackgroundImage';
import ReactTransitionEvents from 'react/lib/ReactTransitionEvents';

class StoryListItemTransitionChild extends Component {

  state = {
    position: this.props.initialPosition
  }

  componentWillAppear(cb) {
    const appContainer = document.getElementById('app');
    appContainer.classList.add('app__hideContent');
    setTimeout(() => {
      cb();
      window.scroll(0, 0);
    }, 300);
  }

  componentDidAppear() {
    window.scroll(0, 0);
    const appContainer = document.getElementById('app');
    setTimeout(this.props.onTransitionEnd, 400);
    this.setState({ position: Object.assign({}, this.state.position, this.props.endPosition) });
  }

  componentWillDisappear(cb) {
    const appContainer = document.getElementById('app');
    setTimeout(() => {
      appContainer.classList.remove('app__hideContent');
      setTimeout(cb, 300);
    }, 50);
  }

  render() {
    return (
      <div className="StoryListItemTransition StorySummary" style={this.state.position}>
        <BackgroundImage image={this.props.story.image} />
      </div>
    );
  }

}

export default StoryListItemTransitionChild;
