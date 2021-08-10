import { createContext, useState } from "react";
import axios from "axios";
import {
  BASE_URL,
  API_KEY,
  FIRST,
  PREVIOUS,
  NEXT,
  LAST,
} from "../constants/constants";

export const DataContext = createContext();

const initialState = {
  listMovie: [],
  detailMovie: [],
  page: 1,
  maxPage: 1,
  watchList: JSON.parse(localStorage.getItem("watchlist")),
};

export const DataProvider = (props) => {
  const [lists, setList] = useState(initialState);
  const getWatchlist = () => {
    setList({
      ...lists,
      watchList: JSON.parse(localStorage.getItem("watchlist")),
    });
  };
  const getMovieList = (page = 1) => {
    axios
      .get(`${BASE_URL}?apikey=${API_KEY}&s=fast&page=${page}&type=movie`)
      .then((res) =>
        setList({
          ...lists,
          listMovie: res.data,
          page: parseInt(page),
          maxPage: Math.round(res.data.totalResults / 10),
        })
      )
      .catch((err) => console.log(err));
  };
  const getMovieDetail = (id) => {
    axios
      .get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`)
      .then((res) => setList({ ...lists, detailMovie: res.data }))
      .catch((err) => console.log(err));
  };
  const pagination = (type) => {
    switch (type) {
      default:
        setList({ ...lists });
        break;
      case FIRST:
        getMovieList(1);
        setList({ ...lists, page: 1 });
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case PREVIOUS:
        getMovieList(lists.page - 1);
        setList({ ...lists, page: parseInt(lists.page) - 1 });
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case NEXT:
        getMovieList(lists.page + 1);
        setList({ ...lists, page: parseInt(lists.page) + 1 });
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case LAST:
        getMovieList(lists.maxPage);
        setList({
          ...lists,
          page: lists.maxPage,
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
    }
  };
  const addToWatchlist = (item) => {
    let newWatchList;
    if (localStorage.getItem("watchlist") === null) {
      newWatchList = [];
    } else {
      newWatchList = JSON.parse(localStorage.getItem("watchlist"));
    }
    newWatchList.push(item);
    localStorage.setItem("watchlist", JSON.stringify(newWatchList));
    setList({
      ...lists,
      watchList: JSON.parse(localStorage.getItem("watchlist")),
    });
  };
  const removeFromWatchlist = (item) => {
    let newWatchList = JSON.parse(localStorage.getItem("watchlist")).filter(
      (filter) => filter.Title !== item.Title
    );
    localStorage.setItem("watchlist", JSON.stringify(newWatchList));
    setList({
      ...lists,
      watchList: JSON.parse(localStorage.getItem("watchlist")),
    });
  };
  return (
    <DataContext.Provider
      value={{
        lists,
        getMovieList,
        getMovieDetail,
        pagination,
        getWatchlist,
        addToWatchlist,
        removeFromWatchlist,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
