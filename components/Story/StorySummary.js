import React from 'react';
import BackgroundImage from './BackgroundImage';

import './StorySummary.scss';

export default class StorySummary extends React.Component {

  render() {
    const { story } = this.props;
    return (
      <article className="StorySummary">
        <h2 className="StorySummary-title">{story.title}</h2>
        <p className="StorySummary-description">
          {story.description}
        </p>
        <time className="StorySummary-date">{story.date}</time>

        <BackgroundImage image={story.image} />
      </article>
    );
  }

}
