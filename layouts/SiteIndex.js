import React from "react";
import Interactive from "antwar-interactive";
import { content } from "@react-finland/content-2018";
import {
  AnchorHeader,
  Contacts,
  ContactMini,
  Markdown,
  VenueGallery,
} from "../components";
import description from "./description";

const SiteIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full" id="schedule">
      <AnchorHeader level={2}>
        Learn More about React, Explore Finland
      </AnchorHeader>
      <Markdown source={require("../content/intro.md")} />

      <AnchorHeader level={2}>Speakers</AnchorHeader>
      <Contacts
        className="speakers-mini"
        items={content.speakers}
        render={ContactMini}
      />

      <AnchorHeader level={2}>Venue</AnchorHeader>
      <Markdown source={require("../content/venue.md")} />
      <Interactive
        id="components/VenueGallery.js"
        component={VenueGallery}
        containerProps={{ className: "venue-lightbox" }}
      />

      <AnchorHeader level={2}>Tickets</AnchorHeader>
      <tito-widget event="react-finland/2018" />
    </div>
  </div>
);
SiteIndex.description = description;

export default SiteIndex;