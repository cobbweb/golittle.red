import React from 'react';
import ReactDOM from 'react-dom';
import Location from './Location';
import { getStoryByRoute } from './getStories';
import StoryListItemTransition from '../components/Transition/StoryListItemTransition';


const slugToSummaryNodeMap = {};

function isStoryRoute(location) {
  return location.pathname.indexOf('/story/') === 0;
}

export function setStorySummaryNode(slug, node) {
  slugToSummaryNodeMap[slug] = node;
}

export function onTransitionToStory(story, cb) {
  const summaryNode = slugToSummaryNodeMap[story.slug];
  const container = StoryListItemTransition.getRenderContainer();
  let transitionComponent;

  function onStoryTransitionEnd() {
    if (transitionComponent) {
      transitionComponent.unmountAt(container);
      cb();
    }
  }

  const transitionComponentElement = <StoryListItemTransition story={story} container={summaryNode} onTransitionEnd={onStoryTransitionEnd} />;
  transitionComponent = ReactDOM.render(transitionComponentElement, container);
}

export default function transitionHook(location, cb) {
  if (isStoryRoute(location) && location.action === "PUSH") {
    const story = getStoryByRoute(location.pathname);
    onTransitionToStory(story, cb);
  } else {
    cb();
  }
}
