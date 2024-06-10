import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { useEffect, useState } from "react";
import { getImages } from "../articles-api";
import css from "../App/App.module.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalValues, setModalValues] = useState(null);

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }
    async function fetchImages() {
      try {
        setError(false);
        setLoading(true);
        const data = await getImages(query, page);
        setImages((prevImages) => [...prevImages, ...data]);
      } catch (error) {
        setError(true);
        setImages([]);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [page, query]);

  const handleSearch = async (newImages) => {
    setQuery(newImages);
    setPage(2);
    setImages([]);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const handleModal = async (urls, description, likes, user) => {
    setModalValues({ urls, description, likes, user });
  };

  const closeModal = () => {
    setModalValues(null);
  };

  console.log(images);

  return (
    <div className={css.box}>
      <h1>Search Photo</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} onClick={handleModal} />
      )}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      {loading && <Loader />}
      {modalValues && (
        <ImageModal modalValues={modalValues} closeModal={closeModal} />
      )}
    </div>
  );
}