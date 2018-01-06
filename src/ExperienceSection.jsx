import React, { Component } from 'react';
import SideBySideItem from './SideBySideItem';
import RecommendationItem from './RecommendationItem';

import './ExperienceSection.css';

import HootsuiteLogo from './images/accenture.png';
import VisierLogo from './images/visier-logo.png';

const recommendations = [
  
];

export default class ExperienceSection extends Component {
  render() {
    return (
      <div className="experience-section">
        <h1>Technical Experience</h1>
        <div>
          <SideBySideItem
            itemName="@ Accenture for Kaiser Permanente"
            subheader="Test Engineering Specialist (Aug 2010 - Present)"
            pointFormDescription={[
              "Responsible for design, review, and maintain new test packages for different phases of testing from Integration, Security, User Experience etc.",
              "Identify opportunities and drive transition from manual testing to automated testing",
              "As an agile advocate, transition projects to agile delivery of testing",
              "Interpret Business requirements/User Stories with the design and provide feedback by coordinating with various stakeholders"
            ]}
            itemUrl="https://accenture.com/"
            imageUrl={HootsuiteLogo}
            isLayoutReversed={false}
          />
            <hr className="hr-divider"/>
        </div>
      </div>
    );
  }

  // Warning - not safe for index-out-of-bounds
  renderSingleRecommendation(index) {
    let item = recommendations[index];
    return (
      <RecommendationItem key={item.name} {...item} />
    );
  }

  renderRecommendations() {
    return recommendations.map((item) => {
      return (
        <RecommendationItem key={item.name} {...item} />
      );
    });
  }
}
