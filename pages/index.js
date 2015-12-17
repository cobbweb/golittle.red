/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

import '../components/Pages/Pages.scss';
import StoryList from '../components/Story/StoryList';
import getStories from '../core/getStories';
import Intro from '../components/Intro';

export default class extends Component {

  render() {
    const stories = getStories();
    return (
      <main className="Page">
        <Intro />
        <StoryList stories={stories} />
      </main>
    );
  }

}
