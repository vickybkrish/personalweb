import React, { Component } from 'react';
import SideBySideItem from './SideBySideItem';
import './ProjectsSection.css';

import SudokuPhoto from './images/opip.jpg'
import CollabAComicPhoto from './images/ivv.png';
import StudyBuddyPhoto from './images/cl.jpeg';
import KikiPhoto from './images/rpm.png';
import callidusPhoto from './images/calliduscloudlogo.png';
import wf from './images/wf.png'

const projects = [
  {
    itemName: "Out Patient Pharmacy Inventory System",
    tags: ["Angular JS", "Android"],
    description: "Hybrid applications enabling pharmacy users to perform inventory management",
    imageUrl: SudokuPhoto,
    itemUrl: "",
    isLayoutReversed: false
  },
  {
    itemName: "Remote Patient Monitoring",
    tags: ["iOS", "EPIC - EMR", "HTML5"],
    description: "Applications targetted to monitor user's Blood Sugar, Blood Pressure.",
    itemUrl: "",
    imageUrl: KikiPhoto,
    isLayoutReversed: true
  },
  {
    itemName: "Integrated Vedio Visits",
    tags: ["JavaScript", "NodeJS", "MongoDB", "Express.js","Jade"],
    description: "Tele-health platform enabling video conference between physicians and members.",
    imageUrl: CollabAComicPhoto,
    itemUrl: "",
    isLayoutReversed: false
  },
  {
    itemName: "Clinical Library",
    tags: ["Python", "Django", "JavaScript", "Hackathon", "Google Maps API"],
    description: "Medical Wiki used by Clinicians which is being built on Adobe AEM .",
    imageUrl: StudyBuddyPhoto,
    itemUrl: "",
    isLayoutReversed: true
  },
  {
    itemName: "Wayfinder",
    tags: ["Python", "Django", "JavaScript", "Hackathon", "Google Maps API"],
    description: "Mobile app which helps patient navigate from one depart to another within a hospital",
    imageUrl: wf,
    itemUrl: "",
    isLayoutReversed: false
  },
  {
    itemName: "Callidus On-Demand Upgrade",
    tags: ["Callidus Cloud", "Informatica", "DB2", "Shell", "Crystal Reports"],
    description: "Compensation management system",
    imageUrl: callidusPhoto,
    itemUrl: "",
    isLayoutReversed: true
  }
];

export default class ProjectsSection extends Component {
  render() {
    return (
      <div className="projects-section">
        <h1>Selected Projects</h1>
        {this.renderProjectItems()}
      </div>
    );
  }

  renderProjectItems() {
    return projects.map((project) => {
      return (
        <div>
          <SideBySideItem key={project.itemName} {...project} />
          <hr className="hr-divider"/>
        </div>
      )
    })
  }
}

