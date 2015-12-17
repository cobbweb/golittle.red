/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import glob from 'glob';
import { join } from 'path';
import { parallel } from 'async';

import stories from '../../stories';

export default function(source) {
  this.cacheable();
  const target = this.target;
  const callback = this.async();

  if (target === 'node') {
    source = source.replace('import \'babel/polyfill\';', ''); // eslint-disable-line no-param-reassign
  }

  parallel([

    function getPageLines(cb) {
      glob('**/*.{js,jsx}', { cwd: join(__dirname, '../../pages') }, (err, files) => {
        if (err) {
          return cb(err);
        }

        const pageLines = files.map(file => {
          let path = '/' + file;

          if (path === '/index.js' || path === '/index.jsx') {
            path = '/';
          } else if (path.endsWith('/index.js')) {
            path = path.substr(0, path.length - 9);
          } else if (path.endsWith('/index.jsx')) {
            path = path.substr(0, path.length - 10);
          } else if (path.endsWith('.js')) {
            path = path.substr(0, path.length - 3);
          } else if (path.endsWith('.jsx')) {
            path = path.substr(0, path.length - 4);
          }

          if (target === 'node' || path === '/404' || path === '/500') {
            return `\n  '${path}': () => require('./pages/${file}'),`;
          }

          return `\n  '${path}': () => new Promise(resolve => require(['./pages/${file}'], resolve)),`;
        });

        cb(null, pageLines);
      });
    },

    function getStoryLines(cb) {
      const storyLines = stories.map(storySlug => {
        const path = `/story/${storySlug}`;

        if (target === 'node' || path === '/404' || path === '/500') {
          return `\n  '${path}': () => require('./stories/${storySlug}'),`;
        }

        return `\n  '${path}': () => new Promise(resolve => require(['./stories/${storySlug}'], resolve)),`;
      });

      cb(null, storyLines);
    }

  ], (err, linesArray) => {
    const lines = [].concat.apply([], linesArray);
    if (lines.length) {
      return callback(null, source.replace(' routes = {', ' routes = {\n' + lines.join('')));
    }

    return callback(new Error('Cannot find any routes.'));
  });
}
