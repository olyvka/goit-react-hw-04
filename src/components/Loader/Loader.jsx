import { LineWave } from "react-loader-spinner";
import css from "../Loader/Loader.module.css";

export default function Loader() {
  return (
    <div className={css.box}>
      <LineWave
        visible={true}
        height="200"
        width="200"
        color="#a94d4d"
        ariaLabel="line-wave-loading"
      />
    </div>
  );
}