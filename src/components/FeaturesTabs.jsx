import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import {
  EasySharing,
  SimpleBookmarking,
  SpeedySearching,
} from './FeatureSlide';

export default function FeaturesTabs() {
  const [key, setKey] = useState('simple-bookmarking');

  return (
    <Tabs
      id="features-tabs"
      className="features-tabs row"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      variant="pills"
    >
      <Tab
        eventKey="simple-bookmarking"
        title="Simple Bookmarking"
        tabClassName="feature-tab"
      >
        <SimpleBookmarking />
      </Tab>
      <Tab
        eventKey="speedy-searching"
        title="Speedy Searching"
        tabClassName="feature-tab"
      >
        <SpeedySearching />
      </Tab>
      <Tab
        eventKey="easy-sharing"
        title="Easy Sharing"
        tabClassName="feature-tab"
      >
        <EasySharing />
      </Tab>
    </Tabs>
  );
}
