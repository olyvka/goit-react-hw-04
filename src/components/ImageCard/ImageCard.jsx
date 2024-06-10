import css from "../ImageCard/ImageCard.module.css";

export default function ImageCard({
  images: { alt_description, urls, likes, user },
  onClick,
}) {
  const handleClick = () => {
    onClick(urls.regular, alt_description, likes, user.name);
  };

  // Визначаємо значення src та alt з урахуванням умови
  const srcValue = urls ? urls.small : '';
  const altValue = alt_description ? alt_description : '';

  return (
    <div className={css.box}>
      <img
        src={srcValue}
        alt={altValue}
        onClick={handleClick}
        className={css.img}
      />
    </div>
  );
}
