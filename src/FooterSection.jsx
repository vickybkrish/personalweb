import React, { Component } from 'react';
import './FooterSection.css';

export default class FooterSection extends Component {
  render() {
    return (
      <div className="footer-section">
        <div className="author">
          <div>handmade with React.js</div>
          <div>© Vik</div>
          <div>last updated December 2017</div>
        </div>
      </div>
    );
  }
}
