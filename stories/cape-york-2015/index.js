import React from 'react';

/* Story Component */
import Story from '../../components/Story/Story';
import BackgroundImage from '../../components/Story/BackgroundImage';
import StoryBody from '../../components/StoryBody';
import TextSection from '../../components/TextSection';

import TitleSection, {
  TitleText,
  Title,
  Subtitle,
  PublishedOn,
  Details,
  Author
} from '../../components/TitleSection';

import TextOverImageSection, {
  TextOverImageSectionTitle
} from '../../components/TextOverImageSection';


/* Content imports */
import summary from './summary';
import onTheBeachImage from 'resize-image?sizes[]=360w,sizes[]=900w&placeholder=20&blur=40!./assets/Ron_and_Orbie_on_beach.jpg'


export default function CapeYork2015() {
  return (
    <Story name="CapeYork2015">
      <TitleSection>
        <TitleText>
          <Title>{summary.title}</Title>
          <Subtitle>{summary.description}</Subtitle>
        </TitleText>

        <Details>
          <Author>Andrew Cobby</Author> | <PublishedOn date={summary.date} />
        </Details>

        <BackgroundImage image={summary.image} key={summary.image.srcset} />
      </TitleSection>

      <StoryBody>
        <TextSection>
          <h3>Rest of the story</h3>

          <p>
            Lets get some no-hoper bloody as cunning as a ankle biter. Grab us a
            budgie smugglers mate as busy as a barbie. As cross as a dole
            bludger my gutful of fairy floss. Stands out like a metho my it'll
            be rock up. He's got a massive sanger to come a chokkie. Stands out
            like a aerial pingpong piece of piss flat out like a whinge. Lets
            get some flake also as stands out like crack a fat. Built like a op
            shop when lets throw a strides. She'll be right old fella how grab
            us a jug.
          </p>

          <p>
            Flat out like a waratah with as stands out like reckon. It'll be
            mokkies where as dry as a banana bender. Flat out like a kero to as
            cunning as a flanno. As busy as a spit the dummy also shazza got us
            some outback. As cross as a franger where as cross as a dickhead.
          </p>

          <p>
            As cunning as a aussie rules footy how you little ripper good oil.
            She'll be right rock up bloody as cunning as a mate. Get a dog up ya
            brumby no worries come a chuck a sickie. You little ripper truckie
            flamin lets get some pot. Lets throw a jumbuck flamin shazza got us
            some pokies.
          </p>
        </TextSection>

        <TextOverImageSection>
          <TextOverImageSectionTitle color="white" xAlign="right" yAlign="center">
            <h2>On The Beach!</h2>
          </TextOverImageSectionTitle>

          <BackgroundImage
            image={onTheBeachImage}
            key={onTheBeachImage.srcset}
            isFixedPosition={true}
          />
        </TextOverImageSection>

        <TextSection>
          <h3>Rest of the story</h3>

          <p>
            Lets get some no-hoper bloody as cunning as a ankle biter. Grab us a
            budgie smugglers mate as busy as a barbie. As cross as a dole
            bludger my gutful of fairy floss. Stands out like a metho my it'll
            be rock up. He's got a massive sanger to come a chokkie. Stands out
            like a aerial pingpong piece of piss flat out like a whinge. Lets
            get some flake also as stands out like crack a fat. Built like a op
            shop when lets throw a strides. She'll be right old fella how grab
            us a jug.
          </p>

          <p>
            Flat out like a waratah with as stands out like reckon. It'll be
            mokkies where as dry as a banana bender. Flat out like a kero to as
            cunning as a flanno. As busy as a spit the dummy also shazza got us
            some outback. As cross as a franger where as cross as a dickhead.
          </p>

          <p>
            As cunning as a aussie rules footy how you little ripper good oil.
            She'll be right rock up bloody as cunning as a mate. Get a dog up ya
            brumby no worries come a chuck a sickie. You little ripper truckie
            flamin lets get some pot. Lets throw a jumbuck flamin shazza got us
            some pokies.
          </p>
        </TextSection>
      </StoryBody>
    </Story>
  );
}
