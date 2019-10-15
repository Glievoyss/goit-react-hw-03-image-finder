import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  state = {
    value: '',
  };

  inputValue = e => {
    this.setState({ value: e.target.value });
  };

  reset = () => {
    this.setState({ value: '' });
  };

  render() {
    const { inputValue } = this;
    const { value } = this.state;
    const { onSubmit } = this.props;
    return (
      <form
        onSubmit={e => {
          onSubmit(e, value);
          this.reset();
        }}
        className={styles.searchForm}
      >
        <input
          onChange={inputValue}
          type="text"
          autoComplete="off"
          placeholder="Search images..."
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
