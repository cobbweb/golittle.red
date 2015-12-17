import React from 'react';
import summary from './summary';
import BackgroundImage from '../../components/Story/BackgroundImage';
import TitleSection, {
  TitleText,
  Title,
  Subtitle,
  PublishedOn
} from '../../components/TitleSection';

export default function CarloPoint2015() {
  return (
    <TitleSection>
      <TitleText>
        <Title>{summary.title}</Title>
        <Subtitle>{summary.description}</Subtitle>
      </TitleText>
      <PublishedOn date={summary.date} />
      <BackgroundImage image={summary.image} />
    </TitleSection>
  );
}
