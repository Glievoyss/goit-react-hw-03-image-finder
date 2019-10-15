import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GetPhoto from '../services/services';
import SearchForm from './SearchForm/SearchForm';
import Gallery from './Gallery/Gallery';
import Modal from './Modal/Modal';

toast.configure({
  autoClose: 3500,
  draggable: false,
});

export default class App extends Component {
  state = {
    listImages: [],
    PageNumber: 1,
    value: 'map',
    isModalOpen: false,
    bigImg: '',
  };

  componentDidMount() {
    const { value } = this.state;
    this.putImagesInList(value);
  }

  errorInput = infoError => {
    if (infoError === 'no server') {
      toast.error('Нету соединения с сервером ! Попробуйте в следующий раз', {
        position: toast.POSITION.TOP_LEFT,
      });
    }
    if (infoError === 'no images') {
      toast.info(
        'Картинок с таким тегом не найдено! Попробуйте другое слово для поиска',
        {
          position: toast.POSITION.TOP_LEFT,
        },
      );
    }
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  changeImgForModal = e => {
    const valueImgLink = e.currentTarget.dataset.bigimg;
    this.openModal();
    this.setState({ bigImg: valueImgLink });
  };

  loadMore = () => {
    GetPhoto(this.state.value, this.state.PageNumber)
      .then(({ data }) => {
        if (data.hits.length > 0) {
          this.setState(prevState => ({
            listImages: [...prevState.listImages, ...data.hits],
            PageNumber: prevState.PageNumber + 1,
          }));
        } else {
          this.errorInput('no images');
        }
      })
      .catch(() => this.errorInput('no server'));
  };

  onSubmit = (e, SearchWord) => {
    e.preventDefault();
    this.putImagesInList(SearchWord);
  };

  putImagesInList = SearchWord => {
    GetPhoto(SearchWord, this.state.PageNumber)
      .then(({ data }) => {
        if (data.hits.length > 0) {
          this.setState({
            listImages: data.hits,
            PageNumber: 2,
            value: SearchWord,
          });
        } else {
          this.errorInput('no images');
        }
      })
      .catch(() => this.errorInput('no server'));
  };

  render() {
    const { listImages, isModalOpen, bigImg } = this.state;

    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
        <Gallery
          listImages={listImages}
          loadMore={this.loadMore}
          changeImgForModal={this.changeImgForModal}
        />
        {isModalOpen && <Modal closeModal={this.closeModal} bigImg={bigImg} />}
      </>
    );
  }
}
