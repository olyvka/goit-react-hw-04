import css from "../ImageCard/ImageCard.module.css";

export default function ImageCard({
  images: { alt_description, urls, likes, user },
  onClick,
}) {
  const handleClick = () => {
    onClick(urls.regular, alt_description, likes, user.name);
  };

  return (
    <div className={css.box}>
      <img
        src={urls.small}
        alt={alt_description}
        onClick={handleClick}
        className={css.img}
      />
    </div>
  );
}