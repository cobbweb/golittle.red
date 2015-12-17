import React, { Component } from 'react';
import StorySummary from './StorySummary';
import StoryListItem from './StoryListItem';
import './StoryList.scss';

export default class StoryList extends Component {

  render() {
    return (
      <ol className="StoryList">
        {this.props.stories.map(story => {
          return (
            <StoryListItem key={story.slug} story={story}>
              <StorySummary story={story} />
            </StoryListItem>
          );
        })}
      </ol>
    );
  }

}
