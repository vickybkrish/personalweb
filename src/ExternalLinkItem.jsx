import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ExternalLinkItem.css';

export default class ExternalLinkItem extends Component {
  render() {
    return (
      <div className="external-link-item" title={this.props.itemName}>
        <a
          className="external-link-item-title"
          href={this.props.externalUrl}>
          <img src={this.props.imageUrl} alt={this.props.itemName}/>
        </a>
      </div>
    );
  }
}

ExternalLinkItem.propTypes = {
  itemName: PropTypes.string,
  externalUrl: PropTypes.string,
  imageUrl: PropTypes.string
};