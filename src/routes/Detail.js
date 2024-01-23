import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";


function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const getMovie = async()=>{
            const json = await(
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            console.log(json);
            setDetails(json.data.movie);
            setLoading(false);
        };
        getMovie();
    }, [id]);
    return (
        <div className={styles.container}>
          {loading ? (
            <div className={styles.loader}>
            <span>Loading...</span>
            </div>
          ) : (
            <div>
                <h2>{details.title}</h2>
                <img src={details.medium_cover_image} alt="cover"></img>
                <p>{details.description_full}</p>
            </div>
        )}
        </div>
      );
  }
  export default Detail;
  