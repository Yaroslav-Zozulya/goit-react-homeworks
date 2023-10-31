import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Layout } from './Layout/Layout';
import { ImageGallery } from './ImageGallery/ImageGallery';
import api from 'services/api';
import { Button } from './Button/Button';
import { HashLoader } from 'react-spinners';
import { nanoid } from 'nanoid';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchId, setSearchId] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      if (query === '') {
        return;
      }
      try {
        setIsLoading(true);
        const response = await api.fetchImages(query, page);
        setIsLoading(false);

        if (!response) {
          return;
        }
        setImages(prevState => [
          ...prevState,
          ...createGalleryImagesData(response.hits),
        ]);

        if (page === 1) {
          calcTotalPages(response);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchImages();
    return () => {};
  }, [page, query, searchId]);

  const createGalleryImagesData = images => {
    return images.map(({ id, previewURL, largeImageURL, tags }) => {
      return {
        id,
        original: largeImageURL,
        thumbnail: previewURL,
        tags,
      };
    });
  };

  const searchbarHandleSubmit = async e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.input.value.trim();

    if (searchQuery) {
      setQuery(searchQuery);
      setPage(1);
      setImages([]);
      setSearchId(nanoid());
    }
  };

  const calcTotalPages = ({ totalHits }) => {
    const totalPages = Math.ceil(totalHits / 12);
    setTotalPages(totalPages);
  };

  const loadMoreHandleClick = () => {
    setPage(prevState => prevState + 1);
  };

  const isImages = images.length !== 0;
  const isMorePage = totalPages > page;

  return (
    <Layout>
      <Searchbar onSubmit={searchbarHandleSubmit} />
      {isLoading && <HashLoader color="#36d7b7" />}
      {isImages && <ImageGallery images={images} />}

      {isMorePage && <Button loadMoreHandleClick={loadMoreHandleClick} />}
    </Layout>
  );
};
