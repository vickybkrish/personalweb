import React, { Component } from 'react';
import './BioSection.css';
import ExternalLinkItem from './ExternalLinkItem';
import TypedMessage from './TypedMessage';

import HeadshotPhoto from './images/vik.jpg';
import GithubIcon from './images/github.svg';
import LinkedInIcon from './images/linkedin-in.svg';
import EmailIcon from './images/email.png';
import ResumeIcon from './images/resume-icon.svg';
import Background from './images/bio_section_background.jpg';

const backgroundStyle = {
  backgroundImage: "url("+ Background +")",
  backgroundSize: "cover"
};

const externalLinkItems = [
  {
    itemName: "GitHub",
    externalUrl: "https://github.com/vickybkrish",
    imageUrl: GithubIcon
  },
  {
    itemName: "LinkedIn",
    externalUrl: "https://www.linkedin.com/in/vik-krish/",
    imageUrl: LinkedInIcon
  },
  {
    itemName: "Email",
    externalUrl: "mailTo:vickybkrish@gmail.com",
    imageUrl: EmailIcon
  },
  {
    itemName: "Resume",
    externalUrl: "https://github.com/vickybkrish/resume/blob/master/Vignesh%20Balakrishnan%20-%20Resume.pdf",
    imageUrl: ResumeIcon
  },
];

const typedMessageStrings = [
  'I\'m a Test Engineering Specialist.',
  'Achieve tangible results through CIs',
  'Drive quality in solutions',
  'An Agile advocate.',
  'Perform exploratory testing'
];

export default class BioSection extends Component {
  render() {
    return (
      <div className="bio-section" style={backgroundStyle}>
        <div className="bio-conent">
          <div className="bio-content-left">
            <img className="head-shot" src={HeadshotPhoto} alt="Bio headshot" />
          </div>
          <div className="bio-content-right">
            <div className="bio-paragraph">
              <span>Hi, I'm Vignesh Balakrishnan(aka) Vik.</span>
             {this.renderTypedMessage()} 
              <hr/>

            </div>
            {this.renderExternalLinkItems()}
          </div>
        </div>
        {this.renderLearnMore()}
      </div>
    );
  }

  renderTypedMessage() {
    return (
      <TypedMessage
        strings={typedMessageStrings}
      />
    );
  }

  renderExternalLinkItems() {
    return externalLinkItems.map((item) => {
      return (
        <ExternalLinkItem key={item.itemName} {...item} />
      )
    });
  }

  renderLearnMore() {
    return (
      <div className="learn-more">
        Know more about me
        <br/>
        <i className="arrow down" />
      </div>
    );
  }
}