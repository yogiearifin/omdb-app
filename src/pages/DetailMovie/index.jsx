import { useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "../../context/context";
import { useParams } from "react-router";
import { detailContainer, detailInfo } from "./style";
import WatchlistButton from "../../components/watchlistButton";

const DetailMovie = () => {
  const { id } = useParams();
  const {
    lists,
    getWatchlist,
    getMovieDetail,
    addToWatchlist,
    removeFromWatchlist,
  } = useContext(DataContext);
  console.log(lists);
  useEffect(() => {
    getMovieDetail(id);
    getWatchlist();
  }, []);
  return (
    <>
      <div className={detailContainer}>
        <h1>{lists.detailMovie.Title}</h1>
        <img src={lists.detailMovie.Poster} alt={lists.detailMovie.Title} />
        <WatchlistButton
          lists={lists}
          item={lists.detailMovie}
          addToWatchlist={addToWatchlist}
          removeFromWatchlist={removeFromWatchlist}
        />
      </div>
      <div className={detailInfo}>
        <p>{lists.detailMovie.Plot}</p>
        <p>Genre: {lists.detailMovie.Genre}</p>
        <p>Actors: {lists.detailMovie.Actors}</p>
        <p>Released: {lists.detailMovie.Released}</p>
      </div>
    </>
  );
};
export default DetailMovie;
