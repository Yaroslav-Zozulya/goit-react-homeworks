import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ previewURL, tags, images, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [slideId, setSlideId] = useState(null);

  const openModal = e => {
    setIsOpen(true);
    setSlideId(e.target.dataset.id);
  };

  const closeModal = e => {
    if (e.code === 'Escape' || e.target.nodeName === 'DIV') {
      setIsOpen(false);
    }
  };

  return (
    <>
      <li className="gallery-item">
        <img src={previewURL} alt={tags} onClick={openModal} data-id={id} />
      </li>
      {isOpen && (
        <Modal galleryImages={images} closeModal={closeModal} id={slideId} />
      )}
    </>
  );
};
