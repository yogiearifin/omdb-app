import Card from "../../components/card";
import { myMovieContainer } from "./style";
import { useContext } from "react";
import { DataContext } from "../../context/context";
import { useEffect } from "react";

const MyMovieList = () => {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  console.log(watchlist);
  const { lists, getWatchlist, addToWatchlist, removeFromWatchlist } =
    useContext(DataContext);
  console.log(lists);
  useEffect(() => {
    getWatchlist();
  }, []);
  return (
    <div className={myMovieContainer}>
      <h2>My Movie List</h2>
      <div>
        {watchlist?.length ? (
          watchlist &&
          watchlist.map((item, index) => {
            return <Card item={item} key={index} />;
          })
        ) : (
          <p>You have no watchlist :(</p>
        )}
      </div>
    </div>
  );
};
export default MyMovieList;
