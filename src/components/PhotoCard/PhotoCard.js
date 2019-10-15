import React from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoCard.module.css';

const PhotoCard = ({
  webformatURL,
  largeImageURL,
  likes,
  views,
  comments,
  downloads,
  changeImgForModal,
}) => {
  return (
    <li>
      <div className={styles.photoCard}>
        <img src={webformatURL} alt="webformatURL" />
        <div className={styles.stats}>
          <p className={styles.statsItem}>
            <i className="material-icons">thumb_up</i>
            {likes}
          </p>
          <p className={styles.statsItem}>
            <i className="material-icons">visibility</i>
            {views}
          </p>
          <p className={styles.statsItem}>
            <i className="material-icons">comment</i>
            {comments}
          </p>
          <p className={styles.statsItem}>
            <i className="material-icons">cloud_download</i>
            {downloads}
          </p>
        </div>
        <button
          type="button"
          className={styles.fullscreenButton}
          data-bigimg={largeImageURL}
          onClick={changeImgForModal}
        >
          <i className="material-icons">zoom_out_map</i>
        </button>
      </div>
    </li>
  );
};

PhotoCard.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  changeImgForModal: PropTypes.func.isRequired,
};

export default PhotoCard;
