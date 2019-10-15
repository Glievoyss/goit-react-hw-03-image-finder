import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';

const Gallery = ({ loadMore, listImages, changeImgForModal }) => {
  return (
    <>
      <ul className={styles.gallery}>
        {listImages.map(
          ({
            webformatURL,
            largeImageURL,
            likes,
            views,
            comments,
            downloads,
            id,
          }) => (
            <PhotoCard
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              likes={likes}
              views={views}
              comments={comments}
              downloads={downloads}
              changeImgForModal={changeImgForModal}
            />
          ),
        )}
      </ul>
      <button onClick={loadMore} type="button" className={styles.button}>
        Load more
      </button>
    </>
  );
};

Gallery.propTypes = {
  loadMore: PropTypes.func.isRequired,
  listImages: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeImgForModal: PropTypes.func.isRequired,
};

export default Gallery;
