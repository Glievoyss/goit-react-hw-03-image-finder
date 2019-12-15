/*eslint-disable*/
import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  state = {};

  modalRef = createRef();

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.props.closeModal();
  };

  handleBgClick = e => {
    console.log('kuku');
    const { current } = this.modalRef;
    if (current && e.target !== current) return;
    this.props.closeModal();
  };

  render() {
    const { bigImg } = this.props;

    return (
      <>
        <div
          onClick={this.handleBgClick}
          ref={this.modalRef}
          className={styles.overlay}
        >
          <div className="modal">
            <img src={bigImg} alt={bigImg} />
          </div>
        </div>
      </>
    );
  }
}

Modal.propTypes = {
  bigImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
