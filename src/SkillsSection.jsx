import React, { Component } from 'react';

import TagBubble from './TagBubble';

// These two images are from https://www.galvanize.com/boulder/web-development.
import IconBackend from './images/sqa.png';
import IconFrontend from './images/qatest.jpg';

import IconToolbox from './images/tools.png';
import teams from './images/team.png';

import './SkillsSection.css';

const skillSet = [
  {
    skillArea: "SQA",
    skills: ["SQA Testing & Methodologies", "Test Plans, Cases & Processes", "Functional Requirements, Scripting & Documentation", "UI & Compatibility Testing", "Accessibility Testing", "Regression Testing", "Negative Testing", "Data Interface & Migration Testing", "Defect tracking/management"],
    icon: IconFrontend
  },
  {
    skillArea: "Technologies",
    skills: ["iOS", "Android", "Node.js", "HTML5", "Angular.js",  "CSS", "Bootstrap", "Shell Scripting", "RestAPIs", "Oracle SQL", "ETL"],
    icon: IconBackend
  },
  {
    skillArea: "Tools",
    skills: ["Test Management (JIRA, Rally, QC)", "Perfecto", "Selenium", "Oracle MySQL", "Postman ", "Adobe AEM", "Git"],
    icon: IconToolbox
  },
  {
    skillArea: "Personal Strengths & Hobbies",
    skills: ["Analytical", "Adaptability", "Connectedness", "Input", "Individualization", "Hiking", "Cooking", "Baking", "Netflix", "Long stroll on the beach"],
    icon: teams
  }
];

export default class SkillsSection extends Component {
  render() {
    return (
      <div className="skills-section">
        <h1>Skills</h1>
        <h3></h3>
        <div className="skills">{this.renderSkillArea()}</div>
      </div>
    );
  }

  renderSkillArea() {
    return skillSet.map((item) => {
      let skillBubbles = item.skills.map((skill) => {
        return <TagBubble key={skill} itemName={skill} />;
      });
      return (
      <div className="skill-area" key={item.skillArea}>
        <img
          key={item.skillArea}
          className="skill-icon"
          src={item.icon}
          alt={item.skillArea}/>
        <h2>{item.skillArea}</h2>
        <div>{skillBubbles}</div>
      </div>
      );
    });
  }
}
