import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

export default function ImageGallery({ images, onClick }) {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li key={image.id} className={css.item}>
          <ImageCard images={image} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}