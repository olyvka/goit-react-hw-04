import Modal from "react-modal";
import css from "../ImageModal/ImageModal.module.css";

export default function ImageModal({
  modalValues: { urls, description, likes, user },
  closeModal,
  modalValues,
}) {
  return (
    <Modal
      isOpen={modalValues !== null}
      onRequestClose={closeModal}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      className={css.modal}
    >
      <img src={urls} alt={description} className={css.img} />
      <span className={css.span}>Likes: {likes}</span>
      <span className={css.span}>Author: {user}</span>
    </Modal>
  );
}