import {Link} from "react-router-dom";
import styles from "./Marvel.module.css";


export default function Marvel({ id, coverImg, title, year }) {
  return (
    <div className={styles.marvel}>
      <img src={coverImg} alt={title} className={styles.marvel__img} />
      <div>
        <h2 className={styles.marvel__title}>
          <Link to={`/character/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.marvel__year}>{year}</h3>
      </div>
    </div>
  );
}
