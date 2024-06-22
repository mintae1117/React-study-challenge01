import { useEffect, useState } from "react";
import Marvel from "../components/Marvel";
import styles from "./Home.module.css";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [marvels, setMarvel] = useState([]);

  const getMarvel = async () => {
    const json = await (
      await fetch(
        'https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023'
      )
    ).json();
    console.log(json);
    setMarvel(json.data.results);
    setLoading(false);
  }

  useEffect(() => {
    getMarvel();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
        <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.marvels}>
          {marvels.map((marvel) => (
            <Marvel
              key={marvel.id}
              id={marvel.id}
              des={marvel.description}
              coverImg={`${marvel.thumbnail.path}.${marvel.thumbnail.extension}`}
              title={marvel.name}
            />
          ))}
        </div>
      )}
    </div>
  );
};
