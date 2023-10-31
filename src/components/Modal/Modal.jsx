import { useEffect } from 'react';
import { Backdrop } from './Modal.styled';
import Gallery from 'react-image-gallery';
export const Modal = ({ closeModal, galleryImages, id }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [closeModal]);

  return (
    <Backdrop onClick={closeModal}>
      <Gallery
        items={galleryImages}
        showThumbnails={false}
        startIndex={Number(id)}
      />
    </Backdrop>
  );
};
