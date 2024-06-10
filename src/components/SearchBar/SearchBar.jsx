import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../SearchBar/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const imageSchema = Yup.object().shape({
    search: Yup.string().required("Please enter search term!"),
  });

  return (
    <>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values, actions) => {
          onSearch(values.search);
          actions.resetForm();
        }}
        validationSchema={imageSchema}
      >
        <Form className={css.form}>
          <Field type="text" name="search" className={css.field}></Field>
          <button type="submit" className={css.btn}>
            Search
          </button>
          <ErrorMessage
            name="search"
            component="span"
            className={css.error}
          ></ErrorMessage>
        </Form>
      </Formik>
    </>
  );
}