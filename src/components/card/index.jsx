import { UI_AVATAR } from "../../constants/constants";
import { cardContainer } from "./style";
import WatchlistButton from "../watchlistButton";
import { useContext } from "react";
import { DataContext } from "../../context/context";

const Card = ({ ...props }) => {
  const { lists, addToWatchlist, removeFromWatchlist } =
    useContext(DataContext);
  const { item } = props;
  return (
    <div className={cardContainer}>
      <a href={`/movie/${item.imdbID}`}>
        <div>
          {item.Poster !== "N/A" ? (
            <img src={item.Poster} alt={item.Title} />
          ) : (
            <img src={UI_AVATAR + item.Title} alt={item.Title} />
          )}
          <h1>{item.Title}</h1>
          <p>{item.Type}</p>
          <p>{item.Year}</p>
        </div>
      </a>
      {window.location.pathname === "/mymovielist" ? (
        <WatchlistButton
          lists={lists}
          item={item}
          addToWatchlist={addToWatchlist}
          removeFromWatchlist={removeFromWatchlist}
        />
      ) : null}
    </div>
  );
};

export default Card;
