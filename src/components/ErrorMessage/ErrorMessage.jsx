import css from "../ErrorMessage/ErrorMessage.module.css";

export default function ErrorMessage() {
  return <p className={css.error}>Oops..something went wrong</p>;
}