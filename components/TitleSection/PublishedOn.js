import React from 'react';
import { english as ordinal } from 'ordinal';

const monthMap = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec'
]

function prettyDate(date) {
  let dateObj = new Date(date);

  if (isNaN(dateObj.getTime())) {
    return date; // couldn't parse date, return 'as is';
  } else {
    let day = ordinal(dateObj.getDate());
    const month = monthMap[dateObj.getMonth()];
    const year  = dateObj.getFullYear();

    return `${day} ${month} ${year}`;
  }
}

export default function PublishedOn({ date }) {
  return <time className="PublishedOn">{prettyDate(date)}</time>;
}
