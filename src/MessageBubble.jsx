import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MessageBubble.css'

export default class MessageBubble extends Component {
  render() {
    return (
      <div className="message-bubble">
        <div className="clear"></div>
        <div className={"from-" + this.props.from}>
          <p className="message-text">{this.props.message}</p>
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}

MessageBubble.propTypes = {
  message: PropTypes.string,
  /**
   * Styles the message bubble differently. Must be one of 'me' or 'them'.
   */
  from: PropTypes.string
};