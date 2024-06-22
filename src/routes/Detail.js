import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Character from "../components/Characters";


export default function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const getMarvel = async()=>{
            const json = await(
                await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`)
            ).json();
            console.log(json);
            setDetails(json.data.results);
            setLoading(false);
        };
        getMarvel();
    }, [id]);

    return (
        <div className={styles.container}>
          {loading ? (
            <div className={styles.loader}>
            <span>Loading...</span>
            </div>
          ) : (
            <div>
            {details.map((marvel) => (
                <Character
                key={marvel.id}
                id={marvel.id}
                des={marvel.description}
                coverImg={`${marvel.thumbnail.path}.${marvel.thumbnail.extension}`}
                title={marvel.name}
                modified={marvel.modified}
                />
            ))}
            </div>
        )}
        </div>
      );
  };
  