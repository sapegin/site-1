import React from "react";
import { Markdown } from "components";

const intro = `
React Finland is the largest React conference in the Nordics arranged 24-26 of April, 2019 in Helsinki. The conference begins with a workshop day and the following conference days include topics ranging from state management to emerging topics such as ReactVR and ReasonML.
`;

const main = `
## International Speakers

The twenty speakers of the conference have varying backgrounds and our roster includes many of the leading names from the community. The single track format allows our visitors to get most out of the experience and we also provide lightning talks and panels to generate spontaneous insights. In particular, we want to connect the speakers with the local community as well as possible.

## Focused Audience

We expect the audience to contain plenty of international flavor. Our target is to reach between 250 and 300 attendees. Based on the early sales this goal is viable as we’ve almost sold our hundred early bird tickets in three weeks with four months of sales remaining.

## National and International Visibility

The conference will have visibility both in national and international level and will reach the ecosystem in React and React Native widely. It has been positioned as a non-profit, developers to developers kind of conference but we are willing to provide visibility to limited amount of companies in order to produce the highest quality conference we can.

## Your Spot to Shine

We are offering the perfect spot for companies to promote their knowledge and presence in the React ecosystem through sponsorships. In addition, there will be also side activities with speakers and organizers to connect and communicate with top level professionals.

## Packages

| | BRONZE | SILVER | GOLD
| - | - | - |
| Cost | 2.000 € | 5.000 € | 10.000 €
| Available | 8 | 4 | 3
| Conference tickets | 2 x &#9786; | 4 x &#9786; | 6 x &#9786;
| Visibility on social media and website | &#9786; | &#9786; &#9786; | &#9786; &#9786; &#9786;
| Logo size on website and app | &#9786; | &#9786; &#9786; | &#9786; &#9786; &#9786;
| Banner in conference | &#10003; | &#10003; | &#10003;
| Banner on stage | | | &#10003;
| Speaker area access | &#10003; | &#10003; | &#10003;
| Logo on slides between the talks | &#10003; | &#10003; | &#10003;
| Job announcements | | &#10003; | &#10003;
| Area in sponsor lounge for booths / promotion | | | &#10003;
| Sticker in goodie bag | &#10003; | &#10003; | &#10003;
| Item in the goodie bag | | | &#10003;
| Attendance for the speaker events (e.g. the speakers dinner) | | | &#9786;
| Special requests | | | &#10003;

## How to Sponsor?

If you are interested in any of our sponsorship packages, get in touch (info <at> react-finland.fi)!
`;

const ForSponsors = () => (
  <>
    <section className="intro intro_sponsors">
      <div className="intro--main">
        <Markdown source={intro} />
      </div>
      <aside className="intro--aside" />
    </section>
    <div className="grid--5col">
      <Markdown source={main} />
    </div>
  </>
);

export default ForSponsors;
