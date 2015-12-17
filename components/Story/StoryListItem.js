import React from 'react';
import ReactDOM from 'react-dom';
import Link from '../Link';
import Location from '../../core/Location';
import StoryListItemTransition from '../Transition/StoryListItemTransition';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import { setStorySummaryNode } from '../../core/Transition';


export default class StoryListItem extends React.Component {

  state = {
    linkState: {}
  }

  componentDidMount() {
    const summaryNode = ReactDOM.findDOMNode(this.refs.link).firstChild;
    setStorySummaryNode(this.props.story.slug, summaryNode);
  }

  render() {
    const { story } = this.props;

    return (
      <li className="StoryList-item">
        <Link href={`/story/${story.slug}`} className="StoryList-itemLink" ref="link">
          {this.props.children}
        </Link>
      </li>
    );
  }

}
