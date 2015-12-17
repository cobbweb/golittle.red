import stories from '../stories';

export default function getStories() {
  return stories.map(slug => {
    const summary = require('../stories/' + slug + '/summary.js');
    return { ...summary, slug }
  });
};

export function getStoryByRoute(route) {
  return getStories().find(story => route.indexOf(story.slug) !== -1)
}
